import { SectionWrapper } from '../common/SectionWrapper.jsx';
import { ResponsiveImage } from '../common/ResponsiveImage.jsx';
import statsImg from '../../assets/images/stats-lot.webp';

export function Stats() {
  return (
    <SectionWrapper className="bg-neutralLight dark:bg-slate-900">
      <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-center">
        <div className="rounded-xl2 overflow-hidden shadow-soft bg-cardBg">
          <ResponsiveImage
            src={statsImg}
            alt="Couple reviewing a vehicle at Leah Motors lot"
            className="h-64"
          />
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold">
            We Make Buying a Used Car Feel Brand New.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Leah Motors is built for drivers who want dealership-level confidence
            without dealership-level pricing. Every vehicle is sourced, inspected, and
            prepared by technicians who treat safety as non-negotiable.
          </p>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <div>
              <p className="font-semibold text-neutralDark dark:text-slate-50">
                Transparent Vehicle Histories
              </p>
              <p className="text-xs">
                We provide full service records, ownership history, and accident
                checks—so you know the story before turning the key.
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutralDark dark:text-slate-50">
                Tailored Financing Options
              </p>
              <p className="text-xs">
                From first-time buyers to upgrading families, our finance partners help
                you find terms that match your budget and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
