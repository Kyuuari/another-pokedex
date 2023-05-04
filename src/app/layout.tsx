import "./globals.css";
import { Inter } from "next/font/google";
import QueryProvider from "@/components/query-provider";
import SiteHeader from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Another Pokedex",
  description: "Yet another pokemon app ... but, it uses new shiny tools 🤩",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SiteHeader />
        <QueryProvider>{children}</QueryProvider>
        <SiteFooter />
      </body>
    </html>
  );
}
