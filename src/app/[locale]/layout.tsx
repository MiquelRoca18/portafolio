import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealController } from "@/components/RevealController";
import Script from "next/script";
import { site } from "@/content/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Miquel Roca — Desarrollador Full-stack"
    : "Miquel Roca — Full-stack Developer";
  const description = es
    ? "Portfolio de Miquel Roca, desarrollador full-stack junior (frontend · backend · mobile). Disponible para trabajar."
    : "Portfolio of Miquel Roca, junior full-stack developer (frontend · backend · mobile). Available for work.";

  return {
    title,
    description,
    alternates: {
      canonical: es ? "/" : "/en",
      languages: { es: "/", en: "/en" },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: es ? "es_ES" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Miquel Roca", // TODO
    jobTitle: locale === "es" ? "Desarrollador Full-stack" : "Full-stack Developer",
    email: `mailto:${site.email}`,
    sameAs: [site.socials.github, site.socials.linkedin],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        {/* Gate reveal animations behind JS so no-JS users still see content. */}
        <Script
          id="js-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Nav />
            {children}
            <Footer />
            <RevealController />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
