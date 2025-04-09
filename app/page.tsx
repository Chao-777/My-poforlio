import Hero from '../public/components/Hero';
import Navbar from '../public/components/Navbar';
import ProjectSection from '../public/components/projectSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectSection />
        {/* Additional sections for contact, about, etc. */}
      </main>
    </>
  );
}
