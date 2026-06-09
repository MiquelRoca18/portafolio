import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="top">
      <Hero />
      <Stats />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
