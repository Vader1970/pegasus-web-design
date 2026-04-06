import CaseStudyHero from '@/components/sections/caseStudies/MacAutoServices/CaseStudyHero/CaseStudyHero';
import CaseStudyIntro from '@/components/sections/caseStudies/MacAutoServices/CaseStudyIntro/CaseStudyIntro';
import CaseStudyProblem from '@/components/sections/caseStudies/MacAutoServices/CaseStudyProblem/CaseStudyProblem';
import CaseStudyApproach from '@/components/sections/caseStudies/MacAutoServices/CaseStudyApproach/CaseStudyApproach';
import CaseStudyDesignBuild from '@/components/sections/caseStudies/MacAutoServices/CaseStudyDesignBuild/CaseStudyDesignBuild';
import CaseStudyKeyScreens from '@/components/sections/caseStudies/MacAutoServices/CaseStudyKeyScreens/CaseStudyKeyScreens';
import CaseStudyPerformance from '@/components/sections/caseStudies/MacAutoServices/CaseStudyPerformance/CaseStudyPerformance';
import CaseStudyPlatform from '@/components/sections/caseStudies/MacAutoServices/CaseStudyPlatform/CaseStudyPlatform';
import CaseStudyImprovements from '@/components/sections/caseStudies/MacAutoServices/CaseStudyImprovements/CaseStudyImprovements';
import CaseStudyOutcome from '@/components/sections/caseStudies/MacAutoServices/CaseStudyOutcome/CaseStudyOutcome';
import CaseStudyTestimonial from '@/components/sections/caseStudies/MacAutoServices/CaseStudyTestimonial/CaseStudyTestimonial';
import CaseStudyCTA from '@/components/sections/caseStudies/MacAutoServices/CaseStudyCTA/CaseStudyCTA';

export default function MacAutoServicesCaseStudy() {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudyIntro />
      <CaseStudyProblem />
      <CaseStudyApproach />
      <CaseStudyDesignBuild />
      <CaseStudyKeyScreens />
      <CaseStudyPerformance />
      <CaseStudyPlatform />
      <CaseStudyImprovements />
      <CaseStudyOutcome />
      <CaseStudyTestimonial />
      <CaseStudyCTA />
    </main>
  );
}
