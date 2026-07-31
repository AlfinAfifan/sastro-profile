import { products, generateImageUrl } from "./products";

/* Metadata tampilan per brand — key harus sama dengan brand_name di data produk.
   Brand "Others" (aksesori/bonus) sengaja tidak ditampilkan sebagai brand. */
const brandMeta = [
  {
    key: "AISH",
    slug: "aish",
    name: "AISH",
    category: "Skincare",
    tagline: "Rangkaian skincare Korea untuk kulit cerah dan sehat",
    from: "#4267b2",
    to: "#283e6b",
  },
  {
    key: "QUEENSI",
    slug: "queensi",
    name: "QUEENSI",
    category: "Bodycare & Skincare",
    tagline: "Perawatan tubuh dan wajah untuk kulit cerah merata",
    from: "#547bcb",
    to: "#4267b2",
  },
  {
    key: "Fix Nutri",
    slug: "fix-nutri",
    name: "Fix Nutri",
    category: "Collagen Drink",
    tagline: "Minuman kolagen untuk kecantikan dari dalam",
    from: "#7f9cd8",
    to: "#4267b2",
  },
  {
    key: "Bellymaag",
    slug: "bellymaag",
    name: "Bellymaag",
    category: "Madu Herbal",
    tagline: "Madu herbal alami untuk kesehatan lambung",
    from: "#35528e",
    to: "#1b2947",
  },
  {
    key: "HEO BEU",
    slug: "heo-beu",
    name: "HEO BEU",
    category: "Herbal Care",
    tagline: "Perawatan herbal untuk kulit dan stamina tubuh",
    from: "#283e6b",
    to: "#0e1524",
  },
  {
    key: "AQTORIS",
    slug: "aqtoris",
    name: "AQTORIS",
    category: "Suplemen",
    tagline: "Suplemen herbal untuk memelihara stamina pria",
    from: "#1b2947",
    to: "#0e1524",
  },
  {
    key: "SASTRA",
    slug: "sastra",
    name: "SASTRA",
    category: "Fashion Pria",
    tagline: "Tas dan aksesori pria dengan desain maskulin",
    from: "#35528e",
    to: "#0e1524",
  },
];

export const brands = brandMeta.map((m) => {
  const items = products.filter((p) => p.brand_name === m.key);
  return {
    ...m,
    products: items,
    image: items.length ? generateImageUrl(items[0].product_image) : "",
  };
});

export function getBrand(slug) {
  return brands.find((b) => b.slug === slug);
}
