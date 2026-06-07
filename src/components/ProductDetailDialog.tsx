import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CatalogProduct } from "@/data/catalogData";
import { useLanguage } from "@/i18n/LanguageContext";

interface Props {
  product: CatalogProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetailDialog = ({ product, open, onOpenChange }: Props) => {
  const { t, tx } = useLanguage();
  if (!product) return null;
  const d = product.details;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Obrázok */}
          <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-secondary/60 to-muted flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={tx(product.name)}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Detaily */}
          <div className="p-6 md:p-8 space-y-5">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  {t("pd.detail")}
                </span>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight pr-8">
                {tx(product.name)}
              </DialogTitle>
              {d?.dimensions && (
                <DialogDescription className="text-sm text-muted-foreground">
                  {t("pd.dims")}: <span className="font-medium text-foreground">{d.dimensions}</span>
                </DialogDescription>
              )}
            </DialogHeader>

            {d?.description && (
              <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                {d.description}
              </div>
            )}

            {d?.specs && d.specs.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-2 text-foreground">{t("pd.specs")}</h4>
                <dl className="text-sm divide-y divide-border/60 border border-border/60 rounded-lg overflow-hidden">
                  {d.specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-2 gap-2 px-3 py-2 odd:bg-secondary/30">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-medium text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {(d?.frameColors?.length || d?.boardColors?.length) ? (
              <div className="space-y-2">
                {d?.frameColors && d.frameColors.length > 0 && (
                  <p className="text-sm">
                    <span className="font-semibold">{t("pd.frame")}:</span>{" "}
                    <span className="text-muted-foreground">{d.frameColors.join(", ")}</span>
                  </p>
                )}
                {d?.boardColors && d.boardColors.length > 0 && (
                  <p className="text-sm">
                    <span className="font-semibold">{t("pd.board")}:</span>{" "}
                    <span className="text-muted-foreground">{d.boardColors.join(", ")}</span>
                  </p>
                )}
              </div>
            ) : null}

            {d?.notes && d.notes.length > 0 && (
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                {d.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}

            {!d && (
              <div className="rounded-lg border border-dashed border-border/60 bg-secondary/30 p-4 text-sm text-muted-foreground">
                {t("pd.empty")}{" "}
                <a href="/kontakt" className="text-primary font-medium hover:underline">
                  {t("pd.empty.link")}
                </a>
                {t("pd.empty.tail")}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;