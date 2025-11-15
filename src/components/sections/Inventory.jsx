import { SectionWrapper } from '../common/SectionWrapper.jsx';
import { Card } from '../common/Card.jsx';
import { ResponsiveImage } from '../common/ResponsiveImage.jsx';
import sedan from '../../assets/images/inventory-sedan.webp';
import suv from '../../assets/images/inventory-suv.webp';
import coupe from '../../assets/images/inventory-coupe.webp';

const vehicles = [
  {
    name: 'Leah Select Sedan 2021',
    price: '$18,900',
    oldPrice: '$20,400',
    mileage: '28,300 km',
    img: sedan,
    tag: 'Hot offer'
  },
  {
    name: 'Urban Comfort SUV 2019',
    price: '$24,300',
    oldPrice: '$26,900',
    mileage: '41,700 km',
    img: suv,
    tag: 'Family favourite'
  },
  {
    name: 'Sportline Coupe 2020',
    price: '$27,800',
    oldPrice: '$29,600',
    mileage: '19,800 km',
    img: coupe,
    tag: 'Low mileage'
  }
];

export function Inventory() {
  return (
    <SectionWrapper id="inventory" className="bg-neutralLight dark:bg-slate-900">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">ALL VEHICLES</p>
        <h2 className="font-heading text-2xl lg:text-3xl font-semibold mt-2">
          Hand-Picked Cars Ready To Drive Home.
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
          We list only vehicles that pass our quality standards, so you never have to
          wonder what’s hiding under the hood.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {vehicles.map((car) => (
          <Card key={car.name} className="flex flex-col">
            <div className="relative h-40">
              <ResponsiveImage src={car.img} alt={car.name} />
              {car.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-accent text-white text-[10px] px-2 py-1">
                  {car.tag}
                </span>
              )}
            </div>
            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-neutralDark dark:text-slate-50">
                  {car.name}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-300 mt-1">
                  {car.mileage} • 1-owner • full service record
                </p>
              </div>
              <div className="flex items-end justify-between mt-3">
                <div>
                  <p className="text-sm font-semibold text-neutralDark dark:text-slate-50">
                    {car.price}
                  </p>
                  <p className="text-[10px] text-slate-400 line-through">{car.oldPrice}</p>
                </div>
                <button
                  type="button"
                  className="text-[11px] font-semibold text-accent hover:text-accent/80"
                >
                  View details
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
