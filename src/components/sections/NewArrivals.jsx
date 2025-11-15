import { SectionWrapper } from '../common/SectionWrapper.jsx';
import { Card } from '../common/Card.jsx';
import { ResponsiveImage } from '../common/ResponsiveImage.jsx';
import sedan from '../../assets/images/new-arrival-sedan.webp';
import suv from '../../assets/images/new-arrival-suv.webp';
import truck from '../../assets/images/new-arrival-truck.webp';

const items = [
  {
    title: 'City Comfort Sedan',
    category: 'Sedan',
    img: sedan
  },
  {
    title: 'Family Ready SUV',
    category: 'SUV',
    img: suv
  },
  {
    title: 'Workhorse Pickup',
    category: 'Truck',
    img: truck
  }
];

export function NewArrivals() {
  return (
    <SectionWrapper id="new" className="bg-neutralLight dark:bg-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div className="text-left">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold">
            New On The Lot
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mt-2">
            Fresh arrivals this week with introductory pricing. Reserve your favourite
            model before it’s gone.
          </p>
        </div>
        <a
          href="#inventory"
          className="text-xs font-semibold text-accent hover:text-accent/90 flex items-center gap-1 self-start sm:self-auto"
        >
          View all inventory <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="overflow-hidden rounded-xl2">
            <div className="h-40 sm:h-44">
              <ResponsiveImage src={item.img} alt={item.title} />
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  {item.category}
                </p>
                <p className="text-sm font-semibold text-neutralDark dark:text-slate-50 mt-1">
                  {item.title}
                </p>
              </div>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-600 text-xs">
                →
              </span>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
