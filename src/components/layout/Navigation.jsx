import PropTypes from 'prop-types';
import { useState } from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint.js';
import { ThemeToggle } from '../common/ThemeToggle.jsx';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Inventory', href: '#inventory' },
  { label: 'Why Leah Motors', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' }
];

export function Navigation({ onPrimaryCta }) {
  const breakpoint = useBreakpoint();
  const [open, setOpen] = useState(false);
  const isDesktop = breakpoint === 'lg';

  const menu = (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-xs lg:text-sm font-medium items-start lg:items-center">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-white/80 hover:text-white transition-colors"
          >
            {item.label}
          </a>
        </li>
      ))}
      <li>
        <button
          type="button"
          onClick={onPrimaryCta}
          className="mt-2 lg:mt-0 inline-flex items-center rounded-full border border-accent px-3 py-1.5 text-[11px] font-semibold text-accent bg-white/5 hover:bg-accent hover:text-white transition"
        >
          Book a Test Drive
        </button>
      </li>
      <li className="mt-2 lg:mt-0">
        <ThemeToggle />
      </li>
    </ul>
  );

  return (
    <nav className="flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white font-bold text-base">
          LM
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-heading font-semibold tracking-wide text-sm">
            Leah Motors
          </span>
          <span className="text-[10px] text-white/60">Certified Pre-Owned</span>
        </div>
      </a>

      {isDesktop ? (
        menu
      ) : (
        <>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Open navigation</span>
            <span className="h-[2px] w-4 bg-white block relative">
              <span className="h-[2px] w-4 bg-white block absolute -translate-y-2" />
              <span className="h-[2px] w-4 bg-white block absolute translate-y-2" />
            </span>
          </button>
          {open && (
            <div className="absolute left-4 right-4 top-16 z-30 rounded-2xl bg-neutralDark/95 p-5 shadow-soft lg:hidden">
              {menu}
            </div>
          )}
        </>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  onPrimaryCta: PropTypes.func
};
