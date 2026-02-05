import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import ExploreImpact from '@/components/ExploreImpact';
import Programs from '@/components/Programs';

export default function HomePage() {
  return (
    <main>
      <div className="overflow-hidden">
        <Hero />
        <Partners />
        <ExploreImpact />
        <Programs />
      </div>
    </main>
  );
}
