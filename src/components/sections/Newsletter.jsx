import { SectionWrapper } from '../common/SectionWrapper.jsx';
import { Button } from '../common/Button.jsx';
import { ResponsiveImage } from '../common/ResponsiveImage.jsx';
import lamp from '../../assets/images/pendant-lamp.webp';

export function Newsletter() {
  return (
    <div id="contact" className="mt-12 bg-neutralDark text-white">
      <SectionWrapper className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 items-center">
        <div className="hidden lg:block">
          <ResponsiveImage src={lamp} alt="Pendant lamp above a car detailing bay" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
            STAY AHEAD OF NEW ARRIVALS
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold mb-2">
            Get more discount on your next Leah Motors purchase.
          </h2>
          <p className="text-sm text-white/70 mb-4">
            Join our mailing list to receive exclusive early-access alerts, limited
            offers, and service tips from our technicians.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button type="submit" variant="primary" className="whitespace-nowrap">
              Join mailing list
            </Button>
          </form>
          <p className="text-[11px] text-white/50 mt-2">
            We respect your inbox and only send updates that matter. Unsubscribe at any
            time.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
