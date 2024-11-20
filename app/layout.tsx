import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Panggilin - Solusi Terbaik untuk Kebutuhan Jasa Anda",
  description: "Panggilin adalah platform inovatif yang menghubungkan pengguna dengan penyedia jasa terpercaya. Temukan layanan terbaik seperti tukang, kebersihan, dan banyak lagi di sekitar Anda.",
  keywords: [
    "Panggilin",
    "layanan jasa",
    "platform jasa",
    "penyedia jasa",
    "kebutuhan rumah tangga",
    "jasa kebersihan",
    "jasa tukang",
    "solusi jasa",
    "hubungi penyedia jasa",
    "booking jasa online"
  ],
  authors: [
    {
      name: "Panggilin Team", 
      url: "https://panggilin.com"
    }
  ],
  openGraph: {
    title: "Panggilin - Solusi Terbaik untuk Kebutuhan Jasa Anda",
    description: "Platform terpercaya untuk menemukan penyedia jasa profesional di sekitar Anda.",
    url: "https://panggilin.com",
    siteName: "Panggilin",
    images: [
      {
        url: "/services.svg",
        width: 1200,
        height: 630,
        alt: "Panggilin - Solusi Terbaik untuk Kebutuhan Jasa Anda",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panggilin - Solusi Terbaik untuk Kebutuhan Jasa Anda",
    description: "Platform terpercaya untuk menemukan penyedia jasa profesional di sekitar Anda.",
    site: "@panggilin",
    creator: "@panggilin",
    images: ["/services.svg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
