import { Sora, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["italic", "normal"],
});

export const metadata = {
  title: "PT Sastro Utama Media Grup — Perusahaan Kosmetik & Kecantikan Indonesia",
  description:
    "PT Sastro Utama Media Grup adalah perusahaan induk yang menaungi brand-brand kosmetik dan perawatan diri Indonesia — dari riset formula, manufaktur, hingga distribusi nasional.",
  keywords: [
    "kosmetik",
    "skincare",
    "perusahaan kosmetik indonesia",
    "brand kecantikan",
    "PT Sastro Utama Media Grup",
  ],
  openGraph: {
    title: "PT Sastro Utama Media Grup — Perusahaan Kosmetik & Kecantikan Indonesia",
    description:
      "Perusahaan induk yang menaungi brand-brand kosmetik dan perawatan diri Indonesia.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sora.variable} ${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
