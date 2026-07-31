/* Data produk dari sistem internal Sastro Grup */

export const generateImageUrl = (filePath) => {
  const hasFolderPrefix = filePath.includes("/");

  if (hasFolderPrefix) {
    return `https://assets.sastro.id/${filePath}`;
  } else {
    return `https://assets.sastro.id/original/${filePath}`;
  }
};

/* Hilangkan tag HTML dari deskripsi produk untuk ditampilkan sebagai teks biasa */
export function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatPrice(price) {
  if (!price || price <= 0) return null;
  return `Rp${price.toLocaleString("id-ID")}`;
}

export const products = [
  {
    id: 2046996,
    brand_name: "Fix Nutri",
    category_name: "COLLAGEN DRINK",
    product_name: "FixNutri Collagen Drink Booster & Fixlim Fiber Active",
    product_code: "FIXLIM",
    product_image: "product/da27f6d8-8776-4e6d-8d1d-b719e2e91215.png",
    product_price: 0,
    product_description: "",
  },
  {
    id: 2046785,
    brand_name: "Others",
    category_name: "Meteran",
    product_name: "Voucher Card",
    product_code: "CARD",
    product_image: "product/a8813ffc-f778-4e87-a0ca-aca4652a5916.PNG",
    product_price: 0,
    product_description: "",
  },
  {
    id: 2046447,
    brand_name: "QUEENSI",
    category_name: "Body Lotion",
    product_name: "Queensi Lotion Glowly Bloom",
    product_code: "GB",
    product_image: "image_1766136208040.jpg",
    product_price: 30000,
    product_description: `<p>Based Bahan Aktif :</p><p>1. Niacinamide (Vitamin B3)</p><p>- mencerahkan kulit : menghambat transfer melanin ke permukaan kulit, sehingga efektif memudarkan noda hitam, bekas jerawat, dan warna kulit tidak merata</p><p>- menguatkan skin barrier : meningkatkan produksi ceramide yang membantu menjaga kelembapan dan kekuatan lapisan pelindung kulit</p><p>- anti inflamasi : mengurngi kemerahan dan iritasi, cocok untuk kulit sensitif atau yang mudah berjerawat</p><p>- mengontrol minyak berlebih : membantu menyeimbangkan produksi sebum mencegah pori-pori tersumbat</p><p><br></p><p>2. Tranexamic acid </p><p>- mengatasi hiperpigmentasi : menghambat enzim dan proses yang menyebabkan produksi melanin berlebih, membantu memudarkan melasma, sun spot, dan PIH (post-inflammatory hyperpigmentation)</p><p>- mencerahkan kulit : memberikan efek cerah merata tanpa menyebabkan iritasi&nbsp;</p><p>- aman untuk kulit sensitif : efektif namun tetap lembut dikulit, bahkan dalam konsentrasi rendah</p><p><br></p><p>3. Aloevera extract </p><p>- menyejukkan kulit : mengandung sifat anti-inflamasi yang membantu meredakan kemerahan, iritasi, dan rasa panas di kulit</p><p>- melembapkan : menjaga hidrasi kulit tanpa rasa lengket</p><p>- menyembuhkan luka ringan : mendukung proses regenerasi kulit dan mempercepat penyembuhan iritasi ringan</p><p><br></p><p>4. Apple extract </p><p>- antioksidan alami : mengandung vitamin C dan polifenol yang membantu melindungi kulit dari radikal bebas dan polusi</p><p>- mendukung regenerasi kulit : meningkatkan pergantian sel kulit, membantu kulit tampak lebih segar dan cerah</p><p>- melembapkan dan menghaluskan : membantu menjaga kelembapan dan tekstur kulit lebih lembut</p><p><br></p><p>5. Vitamin E </p><p>- antioksidan kuat : Melindungi kulit dari kerusakan akibat sinar UV dan polusi lingkungan.</p><p>- melembapkan : Meningkatkan kelembapan dan elastisitas kulit.</p><p>- mempercepat penyembuhan : Mendukung perbaikan jaringan kulit dan mengurangi tampilan bekas luka atau stretch marks.</p><p><br></p><p>Manfaat :</p><p>Lotion tubuh dengan kandungan tranexamic acid dan niacinamide yang membantu mencerahkan dan meratakan warna kulit. Diperkaya dengan apel ekstrak, aloe vera ekstrak dan vitamin E untuk menjaga kulit tetap halus dan lembut.</p><p><br></p><p>Cara Pakai : </p><p>Dioleskan secara merata ke seluruh tubuh, tunggu hingga meresap secara menyeluruh. Untuk hasil yang maksimal gunakan setiap hari pada pagi dan malam.</p>`,
  },
  {
    id: 2046446,
    brand_name: "QUEENSI",
    category_name: "Body Lotion",
    product_name: "Queensi Lotion Charming Bloom",
    product_code: "CB",
    product_image: "image_1766136224593.jpg",
    product_price: 30000,
    product_description: `<p>Based Bahan Aktif :</p><p>1. Niacinamide (Vitamin B3)</p><p>- mencerahkan kulit : menghambat transfer melanin ke permukaan kulit, sehingga efektif memudarkan noda hitam, bekas jerawat, dan warna kulit tidak merata</p><p>- menguatkan skin barrier : meningkatkan produksi ceramide yang membantu menjaga kelembapan dan kekuatan lapisan pelindung kulit</p><p>- anti inflamasi : mengurngi kemerahan dan iritasi, cocok untuk kulit sensitif atau yang mudah berjerawat</p><p>- mengontrol minyak berlebih : membantu menyeimbangkan produksi sebum mencegah pori-pori tersumbat</p><p><br></p><p>2. Tranexamic acid </p><p>- mengatasi hiperpigmentasi : menghambat enzim dan proses yang menyebabkan produksi melanin berlebih, membantu memudarkan melasma, sun spot, dan PIH (post-inflammatory hyperpigmentation)</p><p>- mencerahkan kulit : memberikan efek cerah merata tanpa menyebabkan iritasi&nbsp;</p><p>- aman untuk kulit sensitif : efektif namun tetap lembut dikulit, bahkan dalam konsentrasi rendah</p><p><br></p><p>3. Aloevera extract </p><p>- menyejukkan kulit : mengandung sifat anti-inflamasi yang membantu meredakan kemerahan, iritasi, dan rasa panas di kulit</p><p>- melembapkan : menjaga hidrasi kulit tanpa rasa lengket</p><p>- menyembuhkan luka ringan : mendukung proses regenerasi kulit dan mempercepat penyembuhan iritasi ringan</p><p><br></p><p>4. Apple extract </p><p>- antioksidan alami : mengandung vitamin C dan polifenol yang membantu melindungi kulit dari radikal bebas dan polusi</p><p>- mendukung regenerasi kulit : meningkatkan pergantian sel kulit, membantu kulit tampak lebih segar dan cerah</p><p>- melembapkan dan menghaluskan : membantu menjaga kelembapan dan tekstur kulit lebih lembut</p><p><br></p><p>5. Vitamin E </p><p>- antioksidan kuat : Melindungi kulit dari kerusakan akibat sinar UV dan polusi lingkungan.</p><p>- melembapkan : Meningkatkan kelembapan dan elastisitas kulit.</p><p>- mempercepat penyembuhan : Mendukung perbaikan jaringan kulit dan mengurangi tampilan bekas luka atau stretch marks.</p><p><br></p><p>Manfaat :</p><p>Lotion tubuh dengan kandungan tranexamic acid dan niacinamide yang membantu mencerahkan dan meratakan warna kulit. Diperkaya dengan apel ekstrak, aloe vera ekstrak dan vitamin E untuk menjaga kulit tetap halus dan lembut.</p><p><br></p><p>Cara Pakai : </p><p>Dioleskan secara merata ke seluruh tubuh, tunggu hingga meresap secara menyeluruh. Untuk hasil yang maksimal gunakan setiap hari pada pagi dan malam.</p>`,
  },
  {
    id: 1956337,
    brand_name: "Others",
    category_name: "Meteran",
    product_name: "Meteran Pinggang for Free",
    product_code: "MT",
    product_image: "image_1736481140940.jpg",
    product_price: 1100,
    product_description: `<p>Meteran Pinggang untuk Bundlings</p>`,
  },
  {
    id: 1906672,
    brand_name: "QUEENSI",
    category_name: "Masker Wajah",
    product_name: "Queensi Brightening Exfoliating Gel New",
    product_code: "QEPT",
    product_image: "image_1731903375241.jpg",
    product_price: 89000,
    product_description: `<p>Queensi Brightening Exfoliating Gel</p><p>Diformulasikan dengan kombinasi Vitamin E, Lidah buaya, Vitamin C, Gliserin dan Licorice yang mampu mengangkat sel-sel kulit mati, menyejukkan kulit yang teriritasi akibat jerawat dan membuat kulit tampak cerah dalam satu solusi praktis.&nbsp;</p><p><br></p><p>Manfaat Queensi Exfoliatin Gel</p><p>a.	Mencerahkan kulit</p><p>b.	Mengurangi hiperpigmentasi</p><p>c.	&nbsp;&nbsp;Mencegah timbulnya jerawat</p><p>d.	Merawat kulit yang berjerawat</p><p>e.	Melembabkan kulit</p><p>f.	&nbsp;&nbsp;Mencegah penuaan dini</p><p>g.	Menangkal efek buruk radikal bebas</p><p>h.	Meratakan warna kulit</p><p>i.	&nbsp;&nbsp;Membersihkan pori-pori</p><p>j.	&nbsp;&nbsp;Menghaluskan kulit</p><p>k.	&nbsp;&nbsp;Membersihkan kotoran pada wajah dan tubuh</p>`,
  },
  {
    id: 1450992,
    brand_name: "QUEENSI",
    category_name: "COLLAGEN DRINK",
    product_name: "Queensi Collagen Drink 14 Sachet",
    product_code: "QCL14",
    product_image: "image_1697641350306.jpg",
    product_price: 149000,
    product_description: `<p>Collagen merupakan salah satu jenis protein yang memberikan struktur pada rambut, kulit, tulang, dan kuku.&nbsp;</p><p><br></p><p>Dengan Komposisi Premix Strowberry, Glikosida Steviol, Dextrose, Vitamin C, Collagen Bovine Peptiplus dan L-Gluthatione.</p><p><br></p><p><br></p><p><br></p><p>Manfaat nya&nbsp;</p><p><br></p><p>- Menjaga kesehatan dan kecantikan kulit dari dalam.&nbsp;</p><p><br></p><p>- Menjadikan kulit lebih halus,&nbsp;</p><p><br></p><p>- Kelembapan alami kulit terjaga,&nbsp;</p><p><br></p><p>- Mencerahkan dan meratakan warna kulit,&nbsp;</p><p><br></p><p>- Mencegah kerutan pada kulit wajah,&nbsp;</p><p><br></p><p>- Menjaga kekencangan kulit.</p><p><br></p><p>- Mengurangi rambut rontok</p><p><br></p><p>- Menguatkan rambut hingga akar&nbsp;</p><p><br></p><p>- Membuat kuku tampak cerah dan sehat, bersinar</p>`,
  },
  {
    id: 1180462,
    brand_name: "Bellymaag",
    category_name: "MADU",
    product_name: "Bellymaag 200ml",
    product_code: "BML",
    product_image: "image_1693836082285.jpg",
    product_price: 145000,
    product_description: `<p>Bellymaag merupakan Ramuan Madu Herbal Alami yang aman dan alami membantu mengatasi beragam masalah pada lambung, mempunyai reaksi cepat karena terbuat dan diformulasikan khusus dari bahan-bahan ekstraksi herbal terbaik berbentuk cair sehingga sangat mudah menyerap ke dalam tubuh. Bellymaag juga teruji secara ilmiah dapat mengatasi permasalahan asam lambung akut, sekaligus bisa meredakan radang usus, perih di lambung, mengembalikan nafsu makan, dan juga melancarakan pencernaan dalam waktu yang relatif singkat.</p>`,
  },
  {
    id: 1145652,
    brand_name: "AQTORIS",
    category_name: "PIL",
    product_name: "AQTORIS",
    product_code: "AQT",
    product_image: "image_1693835704927.jpg",
    product_price: 149000,
    product_description: `<p>Membantu memelihara stamina pria</p>`,
  },
  {
    id: 684766,
    brand_name: "HEO BEU",
    category_name: "TEA",
    product_name: "BRIGHTENING PEELING GEL",
    product_code: "PGL",
    product_image: "image_1684169042898.jpg",
    product_price: 99000,
    product_description: "",
  },
  {
    id: 684765,
    brand_name: "HEO BEU",
    category_name: "TEA",
    product_name: "BULUS OIL",
    product_code: "BLO",
    product_image: "image_1684169084748.jpg",
    product_price: 119000,
    product_description: "",
  },
  {
    id: 684764,
    brand_name: "HEO BEU",
    category_name: "TEA",
    product_name: "HERBAMU",
    product_code: "HRB",
    product_image: "image_1687847962749.jpg",
    product_price: 139000,
    product_description: `<p>Herbamu merupakan herbal 100% alami yang berkhasiat</p><p>untuk membantu memperbaiki nafsu makan. Diracik berdasarkan efek</p><p>farmakologi setiap herbal, zat aktif dan fungsi tanaman obat (herba),</p><p>sehingga Herbamu memiliki khasiat utama menyembuhkan dari</p><p>permasalahan, merekonstruksi organ dan menghilangkan gejalanya.</p><p>Herbamu dibuat dengan 100% tumbuhan berkhasiat dengan</p><p>proses ekstraksi, sehingga mudah diserap dan mudah dikeluarkan jika</p><p>berlebihan tanpa khawatir efek samping penimbunan dan kerusakan</p><p>pada ginjal dan organ lainya.</p><p><br></p><p><strong>MANFAAT HERBAMU :</strong></p><p><br></p><p>Brotowali (Tinosporae crispa caulis</p><p>extract)</p><p>Menghambat kerja enzim alfa glucosidase</p><p>sehingga menjadi mudah merasakan lapar,</p><p>Sebagai anti malaria, anti inflamasi, anti diabetes, dan antimikroba.</p><p><br></p><p>Temulawak (Curcuma xanthorrhiza rhizome</p><p>extract)</p><p>Sebagai anti tumor, Sebagai anti oksidan dan</p><p>obat malaria, Merangsang pengeluaran</p><p>cairan empedu sehingga dapat menambah</p><p>nafsu makan, Sebagai anti spasmodicum</p><p>yaitu menenangkan dan mengembalikan</p><p>kekejangan otot, Meningkatkan daya tahan</p><p>dan stamina tubuh.</p><p>Kunyit (Curcuma domes</p><p><br></p><p>ca rhizome</p><p><br></p><p>extract)</p><p>Sebagai analgetik atau penghilang rasa nyeri,</p><p>Membantu menambah nafsu makan,</p><p>Sebagai anti bakteri, Sebagai anti jamur,</p><p><br></p><p>Sebagai anti septik, Sebagai antioksidan.</p>`,
  },
  {
    id: 74298,
    brand_name: "Bellymaag",
    category_name: "MADU",
    product_name: "Bellymaag 200ml",
    product_code: "BML",
    product_image: "image_1737510050281.jpg",
    product_price: 145000,
    product_description: `<p>Bellymaag merupakan Ramuan Madu Herbal Alami yang aman dan alami membantu mengatasi beragam masalah pada lambung, mempunyai reaksi cepat karena terbuat dan diformulasikan khusus dari bahan-bahan ekstraksi herbal terbaik berbentuk cair sehingga sangat mudah menyerap ke dalam tubuh. Bellymaag juga teruji secara ilmiah dapat mengatasi permasalahan asam lambung akut, sekaligus bisa meredakan radang usus, perih di lambung, mengembalikan nafsu makan, dan juga melancarakan pencernaan dalam waktu yang relatif singkat.</p>`,
  },
  {
    id: 33410,
    brand_name: "SASTRA",
    category_name: "TAS",
    product_name: "1 TAS PREMIUM",
    product_code: "TP",
    product_image: "image_1737509780181.jpg",
    product_price: 119000,
    product_description: "",
  },
  {
    id: 23020,
    brand_name: "AISH",
    category_name: "CREAM",
    product_name: "Aish Night Cream",
    product_code: "NC",
    product_image: "image_1687848737426.jpg",
    product_price: 85000,
    product_description: `<p>Aish Bright Night Cream
Fungsinya untuk memaksimalkan regenerasi kulit di malam hari saat Kakak tidur 😊 di dalamnya ada kandungan di dalamnya dilengkapi dua kandungan alami dari Pomegranate Extract dan Anthemis Nobilis Flower Extract. Lebih lengkapnya fungsinya sebagai berikut kak:

🌼Meredakan kemerahan pada kulit
🌼Memperbaiki struktur kulit di malam hari
🌼Mencerahkan warna kulit dan melembabkan kulit
🌼Menjadikan kulit lebih kenyal di pagi hari
🌼Menenangkan kulit dan melembutkan tekstur kulit</p>`,
  },
  {
    id: 23019,
    brand_name: "AISH",
    category_name: "CREAM",
    product_name: "Aish Day Cream",
    product_code: "DC",
    product_image: "image_1687848747922.jpg",
    product_price: 85000,
    product_description: `<p>Aish Sunscreen Day Cream. pagi hari saat anda ingin beraktivitas sekarang tidak perlu khawatir kulit jadi kusam atau rusak karena matahari.
Aish Day Cream ini siap melindungi dengan dua kandungan utama dari bahan alami yaitu Ekstrak Mutiara dan Fragaria vesca (strawberry) extract. Fungsinya adalah:

🐚Melindungi kulit dari bahaya sinar UV dengan SPF ...
🐚Mencerahkan kulit wajah dan membantu memudarkan noda di kulit
🐚Mengangkat sel-sel kulit mati di kulit
🐚Merangsang pertumbuhan sel kulit baru di kulit
🐚Mencegah tanda-tanda penuaan dini (keriput, flek) pada kulit
🐚Menjadikan tekstur permukaan kulit menjadi lebih halus.</p>`,
  },
  {
    id: 240,
    brand_name: "AISH",
    category_name: "CREAM",
    product_name: "AISH DAY & NIGHT CREAM",
    product_code: "DNC",
    product_image: "image_1687848441928.jpg",
    product_price: 149000,
    product_description: `<p>Aish Sunscreen Day Cream. pagi hari saat anda ingin beraktivitas sekarang tidak perlu khawatir kulit jadi kusam atau rusak karena matahari.
Aish Day Cream ini siap melindungi dengan dua kandungan utama dari bahan alami yaitu Ekstrak Mutiara dan Fragaria vesca (strawberry) extract. Fungsinya adalah:

🐚Melindungi kulit dari bahaya sinar UV dengan SPF ...
🐚Mencerahkan kulit wajah dan membantu memudarkan noda di kulit
🐚Mengangkat sel-sel kulit mati di kulit
🐚Merangsang pertumbuhan sel kulit baru di kulit
🐚Mencegah tanda-tanda penuaan dini (keriput, flek) pada kulit
🐚Menjadikan tekstur permukaan kulit menjadi lebih halus.

Aish Bright Night Cream
Fungsinya untuk memaksimalkan regenerasi kulit di malam hari saat Kakak tidur 😊 di dalamnya ada kandungan di dalamnya dilengkapi dua kandungan alami dari Pomegranate Extract dan Anthemis Nobilis Flower Extract. Lebih lengkapnya fungsinya sebagai berikut kak:

🌼Meredakan kemerahan pada kulit
🌼Memperbaiki struktur kulit di malam hari
🌼Mencerahkan warna kulit dan melembabkan kulit
🌼Menjadikan kulit lebih kenyal di pagi hari
🌼Menenangkan kulit dan melembutkan tekstur kulit</p>`,
  },
  {
    id: 239,
    brand_name: "AISH",
    category_name: "Serum Wajah",
    product_name: "AISH FACIAL WASH",
    product_code: "FW",
    product_image: "image_1687848908802.jpg",
    product_price: 99000,
    product_description: `<p>AISH HYDRAMILD FACIAL WASH (WITH ALOE VERA EXTRACT)
Aish Facial Wash dapat digunakan untuk semua jenis kulit wajah, termasuk kulit dengan masalah jerawat. Didalamnya terdapat kandungan Allantoin serta Aloe Vera Extract untuk membersihkan kotoran, membersihkan sel kulit mati, serta mengatasi jerawat.

☘️Mengangkat kotoran pada kulit hingga pori terdalam
☘️Mengatasi Kulit berjerawat
☘️Mencerahkan kulit dan noda hitam pada kulit
☘️Meregenerasi Sel Kulit baru
☘️Meredakan kemerahan pada kulit
☘️Mengatasi kulit yang kasar dan bertekstur
☘️Menutrisi kulit dan memperbaiki struktur kulit</p>`,
  },
  {
    id: 238,
    brand_name: "AISH",
    category_name: "Serum Wajah",
    product_name: "AISH DARKSPOT SERUM",
    product_code: "SD",
    product_image: "image_1687849455246.jpg",
    product_price: 123000,
    product_description: `<p>Aish Darkspot Serum merupakan serum kecantikan yang berasal dari korea. Aish Darkspot Serum terbuat dari bahan-bahan pilihan terbaik yang di kombinasikan dengan Tranexamoyl Dipeptide-23 yang secara farmakologis memiliki efek anti-alergi yang mengandung zat pemutih fungsional, dan memiliki efek yang sangat baik dalam pengobatan bintik-bintik hitam (flek) pada kulit serta terdapat kandungan extract licorise yang berfungsi untuk memperbaiki kondisi hiperpigmentasi kulit.</p>`,
  },
  {
    id: 237,
    brand_name: "AISH",
    category_name: "Serum Wajah",
    product_name: "AISH BRIGHTENING SERUM",
    product_code: "SB",
    product_image: "image_1687848882819.jpg",
    product_price: 119000,
    product_description: `<p>Aish Brightening Serum merupakan serum kecantikan yang berasal dari korea. Aish Brightening Serum terbuat dari bahan-bahan pilihan terbaik yang di kombinasikan dengan glabridin yang berfungsi sebagai pencerah kulit alami dan lembut yang cepat dan efektif. serta terdapat kandungan extract lemon yang kaya akan vitamin C berfungsi meningkatkan collagen dan memperbaiki sel kulit yang rusak dan menghilangkan garis halus dan kerutan.</p>`,
  },
  {
    id: 117,
    brand_name: "AISH",
    category_name: "Toner",
    product_name: "TONER AISH",
    product_code: "TON",
    product_image: "image_1687848893990.jpg",
    product_price: 49000,
    product_description: `<p>Fungsi AISH toner ini adalah agar skincare yang Kakak pakai dapat menyerap dan berfungsi maksimal, Kak. Di dalamnya dilengkapi dengan kandungan Centella Asiatica yang terkenal jadi kandungan terbaik pada skincare korea. Fungsi Cetella Asiatica ini sendiri adalah sebagai berikut:

💖Menyeimbangkan pH kulit wajah
💖Menenangkan kulit yang meradang/memerah
💖Membantu menyamarkan bekas jerawat
💖Membantu menghaluskan tekstur kulit wajah
💖Menjadikan penyerapan dan fungsi skincare menjadi lebih maksimal</p>`,
  },
];
