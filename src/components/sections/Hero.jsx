import { Button } from '../common/Button.jsx';
import { SectionWrapper } from '../common/SectionWrapper.jsx';
import { ResponsiveImage } from '../common/ResponsiveImage.jsx';
import { Card } from '../common/Card.jsx';
import heroImg from '../../assets/images/hero-showroom.webp';

export function Hero() {
  return (
    <div
      className="bg-white text-neutralDark dark:bg-white dark:text-neutralDark pb-10 lg:pb-16"
      id="top"
    >
      <SectionWrapper className="pt-24 lg:pt-28">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
          <div className="space-y-4 lg:space-y-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutralDark/60">
              PRE-OWNED. NEVER PRE-LOVED.
            </p>
            <h1 className="font-heading text-[30px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight">
              Creative Deals Simplify Your Next Car Purchase.
            </h1>
            <p className="text-sm sm:text-[15px] text-neutralDark/70 max-w-md">
              Leah Motors curates low-mileage, fully inspected used vehicles so you can
              skip the guesswork and drive off confident from day one.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <Button
                as="a"
                href="#inventory"
                variant="primary"
                className="w-full sm:w-auto text-center"
              >
                Browse Available Cars
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                className="w-full sm:w-auto text-center"
              >
                Book a Test Drive
              </Button>
            </div>
            <p className="text-[11px] text-neutralDark/55 max-w-sm">
              Every Leah Motors vehicle includes a detailed history report, 120-point
              inspection, and a 7-day exchange promise.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-neutralDark/5 border border-neutralDark/10 shadow-soft rounded-xl2 overflow-hidden">
              <div className="h-[260px] sm:h-[280px] lg:h-[310px]">
                <ResponsiveImage
                  src={heroImg}
                  alt="Modern showroom with a yellow car inside Leah Motors dealership"
                />
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>
      <HeroStats />
    </div>
  );
}

function HeroStats() {
  const stats = [
    { label: 'Years of trusted service', value: '7+' },
    { label: 'Locations opened', value: '3' },
    { label: 'Vehicles sold', value: '10k+' },
    { label: 'Models in stock', value: '260+' }
  ];

  return (
    <div className="stats-bar-gradient mt-6 lg:mt-8">
      <SectionWrapper className="py-5 lg:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center text-white">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`py-3 lg:py-0 ${
                index > 0 ? 'border-t border-white/10 lg:border-t-0 lg:border-l' : ''
              }`}
            >
              <p className="text-xl lg:text-2xl font-semibold">{item.value}</p>
              <p className="mt-1 text-[11px] text-white/70 max-w-[9rem] mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
