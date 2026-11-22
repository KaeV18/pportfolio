import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Sidebar from "@/components/Sidebar";
import Cat from "@/components/Cat";
import { site } from "@/content/site";

const serif = Libre_Baskerville({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--serif-font", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name}, Designer`, template: `%s · ${site.name}` },
  description: "Portfolio of Kenisha Verma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={serif.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');try{var t=sessionStorage.getItem('wipe');if(t){sessionStorage.removeItem('wipe');var d=document.documentElement;d.setAttribute('data-arrive','1');d.style.setProperty('--wt',JSON.stringify(t));d.style.setProperty('--p','1')}}catch(e){}" }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <div className="shell">
          <Cat />
          <Sidebar />
          <main className="main" id="main">
            {children}
          </main>
        </div>
        <div className="wipe" id="wipe" aria-hidden="true" />
        <Script src="/cat.js" strategy="afterInteractive" />
        <Script src="/scrollnext.js" strategy="afterInteractive" />
        <Script src="/lightbox.js" strategy="afterInteractive" />
        <Script src="/sections.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
