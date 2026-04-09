import WorkHero from '@/components/sections/work/WorkHero/WorkHero';
import WorkFeatured from '@/components/sections/work/WorkFeatured/WorkFeatured';
import WorkGrid from '@/components/sections/work/WorkGrid/WorkGrid';
import SlateBandCta from '@/components/sections/shared/SlateBandCta/SlateBandCta';

export const metadata = {
  title: 'Our Work — Pegasus Web Design',
  description:
    'A selection of websites and landing pages designed for service-based businesses in New Zealand. Built to look sharp, load fast, and turn visitors into enquiries.',
};

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <WorkFeatured />
      <WorkGrid />
      <SlateBandCta />
    </main>
  );
}
