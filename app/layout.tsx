import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Ubuntu({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Группа компаний МЕТА",
  description: "Предоставляем высококачественные строительные материалы",
  keywords: "щебень, керамзит, щпс, бетон, строительные материалы",
  authors: [{ name: "Группа компаний МЕТА" }],
  creator: "Группа компаний МЕТА",

  openGraph: {
    title: "Группа компаний МЕТА",
    description: "Предоставляем высококачественные строительные материалы",
    url: "https://stroi-meta.ru",
    siteName: "Группа компаний МЕТА",
    images: [
      {
        url: "https://stroi-meta.ru/api/og",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "ru",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <div className="px-6 pt-6">{children}</div>
      </body>
    </html>
  );
}
