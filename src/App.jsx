import { Header } from './components/layout/Header.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Stats } from './components/sections/Stats.jsx';
import { NewArrivals } from './components/sections/NewArrivals.jsx';
import { WhyChooseUs } from './components/sections/WhyChooseUs.jsx';
import { Inventory } from './components/sections/Inventory.jsx';
import { Testimonials } from './components/sections/Testimonials.jsx';
import { Newsletter } from './components/sections/Newsletter.jsx';
import { Footer } from './components/layout/Footer.jsx';

function App() {
  return (
    <div
      className="min-h-screen bg-neutralLight text-neutralDark dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300"
      id="top"
    >
      <Header />
      <main>
        <Hero />
        <Stats />
        <NewArrivals />
        <WhyChooseUs />
        <Inventory />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
