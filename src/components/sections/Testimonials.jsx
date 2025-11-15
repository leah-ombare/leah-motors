import React from 'react';
import { SectionWrapper } from '../common/SectionWrapper.jsx';
import { Card } from '../common/Card.jsx';
import { ResponsiveImage } from '../common/ResponsiveImage.jsx';
import customer from '../../assets/images/testimonial-josh.webp';
import livingroom from '../../assets/images/testimonial-livingroom.webp';

function TestimonialsInner() {
  return (
    <SectionWrapper id="reviews" className="bg-neutralLight dark:bg-slate-900">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          WHAT DRIVERS SAY
        </p>
        <h2 className="font-heading text-2xl lg:text-3xl font-semibold mt-2">
          People Are Talking About Leah Motors.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <Card className="flex flex-col lg:flex-row items-center gap-4 p-5">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <ResponsiveImage
              src={customer}
              alt="Customer portrait"
              className="object-cover"
            />
          </div>
          <div className="text-sm text-slate-700 dark:text-slate-200">
            <p className="font-semibold text-neutralDark dark:text-slate-50">Josh Smith</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-300 mb-2">
              Freelance designer • Leah Motors customer
            </p>
            <p className="text-xs">
              “They treated my budget with respect, walked me through every detail of the
              car history, and never pushed extras I didn’t need. It felt more like a
              consultation than a sales pitch.”
            </p>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <ResponsiveImage
            src={livingroom}
            alt="Stylish modern interior representing a calm, modern lifestyle"
            className="h-full max-h-60"
          />
        </Card>
      </div>
    </SectionWrapper>
  );
}

export const Testimonials = React.memo(TestimonialsInner);
