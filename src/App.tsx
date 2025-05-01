import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import ProductShowcase from './components/ProductShowcase';
import BenefitsSection from './components/BenefitsSection';
import CostSection from './components/CostSection';
import CourseFeatures from './components/CourseFeatures';
import Testimonials from './components/Testimonials';
import BonusSection from './components/BonusSection';
import UrgencySection from './components/UrgencySection';
import TransformSection from './components/TransformSection';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cake-light to-white">
      <Header />
      <Hero />
      <ProofSection />
      <ProductShowcase />
      <BenefitsSection />
      <CostSection />
      <CourseFeatures />
      <Testimonials />
      <BonusSection />
      <UrgencySection />
      <TransformSection />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;