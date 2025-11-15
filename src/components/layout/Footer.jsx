import { SectionWrapper } from '../common/SectionWrapper.jsx';

export function Footer() {
  return (
    <footer className="footer-gradient text-white mt-16">
      <SectionWrapper className="pt-12 pb-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white font-bold text-lg">
                LM
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-semibold tracking-wide">
                  Leah Motors
                </span>
                <span className="text-xs text-white/70">Drive Confident. Every Mile.</span>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Quality pre-owned vehicles with transparent history reports, flexible
              financing, and a no-pressure buying experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <h3 className="mb-3 font-semibold text-white">Inventory</h3>
              <ul className="space-y-1 text-white/70">
                <li>Sedans</li>
                <li>SUVs &amp; Crossovers</li>
                <li>Trucks</li>
                <li>Electric &amp; Hybrid</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">Company</h3>
              <ul className="space-y-1 text-white/70">
                <li>About Leah Motors</li>
                <li>Financing</li>
                <li>Trade-In</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">Support</h3>
              <ul className="space-y-1 text-white/70">
                <li>FAQ</li>
                <li>Service &amp; Warranty</li>
                <li>Contact</li>
                <li>Privacy &amp; Terms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-4 text-xs text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Leah Motors. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Follow us</span>
            <div className="flex gap-2">
              <button className="h-7 w-7 rounded-full border border-white/30 text-[10px]">
                FB
              </button>
              <button className="h-7 w-7 rounded-full border border-white/30 text-[10px]">
                IG
              </button>
              <button className="h-7 w-7 rounded-full border border-white/30 text-[10px]">
                X
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
