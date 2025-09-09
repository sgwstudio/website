import "./globals.css";
import { ServerThemeProvider } from "next-themes";
import Providers from "./providers";
import { generalData } from "@/data/general";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://sgwstudio.com'),
  title: `SGW Studio - Creative Design & Brand Identity`,
  description: "A creative studio specialized in brand identity, design direction, and digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sgwstudio.com",
    siteName: "SGW Studio",
    title: "SGW Studio - Creative Design & Brand Identity",
    description: "A creative studio specialized in brand identity, design direction, and digital experiences.",
    images: [
      {
        url: "/profile-image.png",
        width: 1200,
        height: 630,
        alt: "SGW Studio - Creative Design & Brand Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SGW Studio - Creative Design & Brand Identity",
    description: "A creative studio specialized in brand identity, design direction, and digital experiences.",
    images: ["/profile-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className="dark:bg-neutral-900">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
