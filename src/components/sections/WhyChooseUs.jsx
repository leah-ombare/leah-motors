import { SectionWrapper } from '../common/SectionWrapper.jsx';

const pillars = [
  {
    title: 'Certified Inspections',
    body: 'Each vehicle passes a 120-point inspection covering safety, mechanical condition, and cosmetic quality.'
  },
  {
    title: 'No-Pressure Experience',
    body: 'Browse at your pace, test drive on your schedule, and get clear, upfront pricing with no surprise fees.'
  },
  {
    title: 'After-Sale Support',
    body: 'Enjoy warranty options, service reminders, and friendly follow-ups that keep your car performing its best.'
  }
];

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why" className="bg-neutralLight dark:bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
            WHY LEAH MOTORS
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold mb-3">
            The Best Pre-Owned Partner For Your Next Drive.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
            We combine dealership-grade standards with a community-driven mindset. That
            means curated vehicles, transparent pricing, and a team that treats you like
            a neighbour, not a sales target.
          </p>
        </div>
        <div className="grid gap-5 text-sm text-slate-700 dark:text-slate-200">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <p className="font-semibold text-neutralDark dark:text-slate-50">
                {pillar.title}
              </p>
              <p className="text-xs mt-1">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
