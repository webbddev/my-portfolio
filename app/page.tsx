import Intro from '@/components/Intro';
import SectionDivider from '@/components/Section-Divider';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
    </main>
  );
}
