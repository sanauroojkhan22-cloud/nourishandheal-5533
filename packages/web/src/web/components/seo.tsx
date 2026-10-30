import { useEffect } from "react";
import { useLocation } from "wouter";
import { getDigital } from "../../api/data/digital";
import { getConcept } from "../../api/data/catalogue";
import { articles } from "../../api/data/editorial";
export function Seo() {
  const [location] = useLocation();
  useEffect(() => {
    const slug = location.split("/").pop() || "";
    const product = getDigital(slug);
    const concept = getConcept(slug);
    const article = articles.find((a) => a.slug === slug);
    const label =
      product?.title ||
      concept?.name ||
      article?.title ||
      (
        {
          about: "Our Story",
          founder: "Meet Dr. Sana Urooj Khan",
          shop: "Digital Wellness Collection",
          quality: "Quality, Safety & Transparency",
          journal: "The Nourish & Heal Journal",
          resources: "Free Wellness Resources",
          contact: "Contact",
          wellness: "Shop by Goal",
          "coming-soon": "Future Botanical Collection",
        } as Record<string, string>
      )[slug];
    document.title = label
      ? `${label} | Nourish & Heal by Dr. Sana`
      : "Nourish & Heal by Dr. Sana — Science-Informed Wellness";
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute(
      "href",
      "https://nourishandhealbysana.com" + location,
    );
    const description =
      product?.tagline ||
      concept?.positioning ||
      article?.excerpt ||
      "Science-informed wellness education, practical digital tools and future botanical concepts. By Dr. Sana Urooj Khan, Pharm-D, MS Clinical Pharmacology.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [location]);
  return null;
}
