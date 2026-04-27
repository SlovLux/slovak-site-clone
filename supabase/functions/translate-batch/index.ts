const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { items } = await req.json();
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return new Response(JSON.stringify({ error: "no key" }), { status: 500, headers: corsHeaders });

    const sys =
      "You translate furniture product names into clean, natural Slovak. " +
      "Input is a JSON array of strings; some are mixed Slovak+Ukrainian or Slovak+English, " +
      "some are fully English or Ukrainian. Translate EVERY non-Slovak word into Slovak, " +
      "fix grammar, keep proper-noun product names in quotes translated naturally to Slovak. " +
      "Keep references like 'č.4-6', sizes like '90x65 cm' as-is. Replace '№' with 'č.'. " +
      "Output ONLY a JSON array of the same length, no commentary, no code fences.";

    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: sys },
          { role: "user", content: JSON.stringify(items) },
        ],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return new Response(JSON.stringify({ error: t }), { status: r.status, headers: corsHeaders });
    }
    const data = await r.json();
    let txt: string = data.choices?.[0]?.message?.content?.trim() ?? "[]";
    if (txt.startsWith("```")) {
      txt = txt.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
    }
    const out = JSON.parse(txt);
    return new Response(JSON.stringify({ out }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: corsHeaders });
  }
});