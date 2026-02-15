import { useState } from 'react'
import './App.css'
import BuyerBonus from './Buyerbonus '
import FeaturedProperties from './Featuredproperties'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import WhyChooseUs from './Whychooseus '
import SignUp from './Component/SignUp'

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleOpenSignup = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <>
      <Header onOpenSignup={handleOpenSignup} />
      <HeroSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <BuyerBonus />
      <Footer />
      
      {showSignup && <SignUp onClose={handleCloseSignup} />}
    </>
  )
}

export default App