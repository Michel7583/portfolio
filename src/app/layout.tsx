import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/layout/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  ...createMetadata({
    title: `AI, Blockchain & Fintech Software Development | ${site.name}`,
    description: site.description,
    path: "/",
  }),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script src="/theme-init.js" />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
