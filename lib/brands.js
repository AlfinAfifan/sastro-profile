export const brands = [
  {
    slug: "sarasvati",
    name: "Sarasvati",
    category: "Skincare",
    tagline: "Perawatan wajah dengan bahan alam nusantara",
    image: "/brands/sarasvati.jpg",
    from: "#4267b2",
    to: "#283e6b",
    founded: 2010,
    description:
      "Sarasvati adalah brand skincare unggulan kami yang memadukan kearifan bahan alam nusantara — seperti temulawak, beras, dan melati — dengan teknologi dermatologi modern. Setiap formula diuji secara klinis dan dirancang khusus untuk karakter kulit tropis Indonesia.",
    highlights: [
      "Serum pencerah dengan ekstrak temulawak",
      "Rangkaian brightening & anti-aging",
      "Teruji klinis dan hypoallergenic",
      "Bebas paraben, aman untuk kulit sensitif",
    ],
    stats: [
      { value: "120+", label: "Varian produk" },
      { value: "2010", label: "Tahun diluncurkan" },
      { value: "#1", label: "Serum lokal terlaris" },
    ],
  },
  {
    slug: "lumea",
    name: "Lumea",
    category: "Makeup",
    tagline: "Kosmetik dekoratif untuk perempuan urban",
    image: "/brands/lumea.jpg",
    from: "#547bcb",
    to: "#4267b2",
    founded: 2013,
    description:
      "Lumea hadir untuk perempuan urban yang aktif dan ekspresif. Dari complexion hingga lip products, seluruh shade Lumea dikembangkan mengikuti spektrum warna kulit perempuan Indonesia — ringan dipakai seharian, dengan hasil akhir profesional.",
    highlights: [
      "40+ shade complexion untuk kulit Indonesia",
      "Lip series transfer-proof hingga 12 jam",
      "Dipercaya para makeup artist profesional",
      "Formula ringan dengan skincare benefit",
    ],
    stats: [
      { value: "300+", label: "Varian produk" },
      { value: "2013", label: "Tahun diluncurkan" },
      { value: "40+", label: "Pilihan shade" },
    ],
  },
  {
    slug: "kirana-glow",
    name: "Kirana Glow",
    category: "Bodycare",
    tagline: "Perawatan tubuh keluarga Indonesia",
    image: "/brands/kirana-glow.jpg",
    from: "#7f9cd8",
    to: "#4267b2",
    founded: 2015,
    description:
      "Kirana Glow adalah rangkaian perawatan tubuh untuk seluruh keluarga — body wash, body lotion, hingga masker perawatan. Dengan harga terjangkau dan kualitas premium, Kirana Glow menjadi sahabat rutinitas perawatan harian jutaan rumah tangga Indonesia.",
    highlights: [
      "Rangkaian lengkap body wash hingga lotion",
      "Formula lembut untuk seluruh keluarga",
      "Tersedia di 60.000+ titik penjualan",
      "Kemasan isi ulang ramah lingkungan",
    ],
    stats: [
      { value: "150+", label: "Varian produk" },
      { value: "2015", label: "Tahun diluncurkan" },
      { value: "5jt+", label: "Rumah tangga pengguna" },
    ],
  },
  {
    slug: "bellova",
    name: "Bellova",
    category: "Nail & Hand Care",
    tagline: "Ekspresi gaya lewat perawatan kuku dan tangan",
    image: "/brands/bellova.jpg",
    from: "#35528e",
    to: "#1b2947",
    founded: 2018,
    description:
      "Bellova mengangkat perawatan kuku dan tangan menjadi bagian dari gaya hidup. Koleksi nail polish breathable, cuticle care, dan hand cream Bellova dirancang dengan warna-warna yang berani namun tetap aman — bebas dari 10 bahan kimia berbahaya (10-free).",
    highlights: [
      "Nail polish breathable & wudhu-friendly",
      "Formula 10-free tanpa bahan berbahaya",
      "60+ pilihan warna trendi",
      "Rangkaian hand care dengan vitamin E",
    ],
    stats: [
      { value: "80+", label: "Varian produk" },
      { value: "2018", label: "Tahun diluncurkan" },
      { value: "60+", label: "Pilihan warna" },
    ],
  },
  {
    slug: "zahra-beauty",
    name: "Zahra Beauty",
    category: "Halal Skincare",
    tagline: "Rangkaian perawatan bersertifikat halal",
    image: "/brands/zahra-beauty.jpg",
    from: "#4267b2",
    to: "#35528e",
    founded: 2016,
    description:
      "Zahra Beauty lahir dari komitmen kami menghadirkan kecantikan yang menenangkan hati. Seluruh rangkaian — dari micellar water hingga night cream — tersertifikasi halal MUI dengan bahan yang sepenuhnya dapat ditelusuri asal-usulnya, wudhu-friendly, dan ramah untuk pemakaian sehari-hari.",
    highlights: [
      "100% tersertifikasi halal MUI",
      "Bahan traceable dari sumber terpercaya",
      "Formula wudhu-friendly",
      "Rangkaian lengkap perawatan harian",
    ],
    stats: [
      { value: "90+", label: "Varian produk" },
      { value: "2016", label: "Tahun diluncurkan" },
      { value: "100%", label: "Halal MUI" },
    ],
  },
  {
    slug: "adeva",
    name: "Adeva",
    category: "Spa & Aromaterapi",
    tagline: "Ketenangan spa nusantara di rumah Anda",
    image: "/brands/adeva.jpg",
    from: "#283e6b",
    to: "#0e1524",
    founded: 2021,
    description:
      "Adeva membawa ritual spa nusantara ke dalam keseharian — massage oil, essential oil, lulur tradisional, hingga aromaterapi dengan wangi khas rempah dan bunga Indonesia. Setiap produk diracik bersama para ahli spa untuk menghadirkan relaksasi otentik di rumah Anda.",
    highlights: [
      "Essential oil dari rempah & bunga lokal",
      "Lulur tradisional resep warisan nusantara",
      "Dipakai jaringan spa & hotel berbintang",
      "Kemasan premium untuk hampers & gift",
    ],
    stats: [
      { value: "60+", label: "Varian produk" },
      { value: "2021", label: "Tahun diluncurkan" },
      { value: "200+", label: "Mitra spa & hotel" },
    ],
  },
];

export function getBrand(slug) {
  return brands.find((b) => b.slug === slug);
}
