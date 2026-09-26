import type { Metadata } from "next";
import { Archivo_Black, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { AccentSetter } from "@/components/AccentSetter";
import { Navbar } from "@/components/Navbar";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const condensed = Barlow_Condensed({
  weight: ["600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-condensed",
});

export const metadata: Metadata = {
  title: "Keshar - UI Designer Portfolio",
  description:
    "Black and white UI designer portfolio. Fast, user-friendly product design for founders and teams.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('theme-light')}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${condensed.variable} bg-background font-body text-foreground antialiased`}
      >
        <AccentSetter />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
