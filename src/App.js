import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About Us/About';
import Programs from './components/Programs/Programs.js';
import Stories from './components/Stories/Stories.js';
import News_Events from './components/NewsEEvents/News_Events.js';
import GetInvolved from './components/GetInvolved/GetInvolved.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import DonateUs from './components/DonateUs/Donate.js';



//programs

import HospitalHealthcare from './components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js';
import SkillDevelopment from './components/Programs/Pages/SkillDevelopment/skilldevelopment.js';
import WellnessCenter from './components/Programs/Pages/WellnessCenter/WellnessCenter.js';
import SportsComplex from './components/Programs/Pages/SportsComplex/sportscomplex.js';
import OrganicFarming from './components/Programs/Pages/OrganicFarming/organicfarming.js';
import TissueCulture from './components/Programs/Pages/TissueCulture/tissueculture.js';
import Gaushala from './components/Programs/Pages/Gaushala/gaushala.js';



//Sports Complex

import Athletics from './components/Programs/Pages/SportsComplex/Athletics/athletics.js';
import Badminton from './components/Programs/Pages/SportsComplex/Badminton/badminton.js';
import Basketball from './components/Programs/Pages/SportsComplex/BasketBall/basketball.js';
import Kabaddi from './components/Programs/Pages/SportsComplex/Kabbadi/kabbadi.js';
import Kushti from './components/Programs/Pages/SportsComplex/Kushti/kushti.js';
import Volleyball from './components/Programs/Pages/SportsComplex/VolleyBall/volleyball.js';






function App() {
  return (
    <>
    {/* <NavBar/>
    <Main />
    <Footer/></> */}
    



    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/news_events' element={<News_Events />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/donateus' element={<DonateUs />} />






        <Route path="/" element={<Programs />} />
        <Route path="/components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js" element={<HospitalHealthcare />} />
        <Route path="/components/Programs/Pages/SkillDevelopment/skilldevelopment.js" element={<SkillDevelopment />} />
        <Route path="/components/Programs/Pages/WellnessCenter/WellnessCenter.js" element={<WellnessCenter />} />
        <Route path="/components/Programs/pages/SportsComplex/sportscomplex.js" element={<SportsComplex />} />
        <Route path="/components/Programs/Pages/OrganicFarming/organicfarming.js" element={<OrganicFarming />} />
        <Route path="/components/Programs/Pages/TissueCulture/tissueculture.js" element={<TissueCulture />} />
        <Route path="/components/Programs/Pages/Gaushala/gausahala.js" element={<Gaushala />} />"





        <Route path="/" element={<SportsComplex />} />
        <Route path="/components/Programs/Pages/SportsComplex/Athletics/athletics.js" element={<Athletics />} />
        <Route path="/components/Programs/Pages/SportsComplex/Badminton/badminton.js" element={<Badminton />} />
        <Route path="components/Programs/Pages/SportsComplex/BasketBall/basketball.js" element={<Basketball />} />
        <Route path="/components/Programs/Pages/SportsComplex/Kabbadi/kabbadi.js" element={<Kabaddi />} />
        <Route path="/components/Programs/Pages/SportsComplex/Kushti/kushti.js" element={<Kushti />} />
        <Route path="/components/Programs/Pages/SportsComplex/VolleyBall/volleyball.js" element={<Volleyball />} />










          
          {/* Uncomment and add components as needed */}
          {/* <Route path='/programs' element={<Programs />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/createWaves' element={<CreateWaves />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>  
  );
}

export default App;