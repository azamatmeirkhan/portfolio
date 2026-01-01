import { Hero } from '@/presentation/components/home/Hero';
import { About } from '@/presentation/components/home/About';
import { Projects } from '@/presentation/components/home/Projects';
import { Contact } from '@/presentation/components/home/Contact';
import { Footer } from '@/presentation/components/home/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
