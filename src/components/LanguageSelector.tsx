import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-cormorant tracking-wide">
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 rounded transition-all duration-300",
          language === "en"
            ? "text-ocre-solaire font-medium"
            : "text-brun-racine/70 hover:text-bleu-cosmique"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-brun-racine/40">/</span>
      <button
        onClick={() => setLanguage("fr")}
        className={cn(
          "px-2 py-1 rounded transition-all duration-300",
          language === "fr"
            ? "text-ocre-solaire font-medium"
            : "text-brun-racine/70 hover:text-bleu-cosmique"
        )}
        aria-label="Passer en français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
