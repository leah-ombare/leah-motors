import { Navigation } from './Navigation.jsx';
import { SectionWrapper } from '../common/SectionWrapper.jsx';

export function Header() {
  const handlePrimaryCta = () => {
    const el = document.querySelector('#inventory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 app-gradient text-white/95 backdrop-blur-sm">
      <SectionWrapper className="py-3 lg:py-3">
        <Navigation onPrimaryCta={handlePrimaryCta} />
      </SectionWrapper>
    </header>
  );
}
