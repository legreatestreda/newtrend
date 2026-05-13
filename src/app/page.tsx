import { Hero } from '@/components/home/Hero';
import { Discover } from '@/components/home/Discover';
import { Promotions } from '@/components/home/Promotions';

export default function Page() {
  return (
    <>
      <Hero />
      <Discover />
      <Promotions />
    </>
  );
}