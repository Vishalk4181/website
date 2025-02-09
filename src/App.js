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
// import DonateUs from './components/DonateUs/Donate.js';



//programs

import HospitalHealthcare from './components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js';
import SkillDevelopment from './components/Programs/Pages/SkillDevelopment/skilldevelopment.js';
import WellnessCenter from './components/Programs/Pages/WellnessCenter/WellnessCenter.js';
import SportsComplex from './components/Programs/Pages/SportsComplex/sportscomplex.js';
import OrganicFarming from './components/Programs/Pages/OrganicFarming/organicfarming.js';
import TissueCulture from './components/Programs/Pages/TissueCulture/tissueculture.js';
import Gaushala from './components/Programs/Pages/Gaushala/gaushala.js';
import Library from './components/Programs/Pages/Library/Library.js';



//Sports Complex

import Athletics from './components/Programs/Pages/SportsComplex/Athletics/athletics.js';
import Badminton from './components/Programs/Pages/SportsComplex/Badminton/badminton.js';
import Basketball from './components/Programs/Pages/SportsComplex/BasketBall/basketball.js';
import Kabaddi from './components/Programs/Pages/SportsComplex/Kabbadi/kabbadi.js';
import Kushti from './components/Programs/Pages/SportsComplex/Kushti/kushti.js';
import Volleyball from './components/Programs/Pages/SportsComplex/VolleyBall/volleyball.js';
import Gallery from './components/Gallery/Gallery.js';



//Gallery

import Auditorium from './components/Gallery/Auditorium/Auditorium.js';
import BasketballCourt from './components/Gallery/Basketball Court/BasketballCourt.js';
import Bhojnalya from './components/Gallery/Bhojnalya/Bhojnalya.js';
import CinemaSports from './components/Gallery/Cinema&Sports Hall/CinemaSports.js';
import Dormitory from './components/Gallery/Dormitory/Dormitory.js';
import Exercise from './components/Gallery/Exercise/Exercise.js';
import Farming from './components/Gallery/Farming/Farming.js';
import Gaushalaa from './components/Gallery/Gaushala/Gaushala.js';
import Generator from './components/Gallery/Generator Set/Generator.js';
import Hospital from './components/Gallery/Hospital/Hospital.js';
import Libraryy from './components/Gallery/Library/Library.js';
import Living from './components/Gallery/Living Rooms/Living.js';
import Mhall from './components/Gallery/Meeting Hall/Mhall.js';
import Plants from './components/Gallery/Medicinal Plants/Plants.js';
import MLrooms from './components/Gallery/Meeting+Living Rooms/MLrooms.js';
import Offices from './components/Gallery/Offices/Offices.js';
import Polyhouses from './components/Gallery/PolyHouses/Polyhouses.js';
import Quotes from './components/Gallery/Quotes/Quotes.js';
import RunningGrounds from './components/Gallery/Running Track+Ground/Running_Grounds.js';
import TennisNets from './components/Gallery/Tennis Nets/TennisNets.js';
import TissueLabs from './components/Gallery/Tissue Culture Labs/Tissuelabs.js';





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
          <Route path='/donateus' element={<Gallery/>} />






        <Route path="/" element={<Programs />} />
        <Route path="/components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js" element={<HospitalHealthcare />} />
        <Route path="/components/Programs/Pages/SkillDevelopment/skilldevelopment.js" element={<SkillDevelopment />} />
        <Route path="/components/Programs/Pages/WellnessCenter/WellnessCenter.js" element={<WellnessCenter />} />
        <Route path="/components/Programs/pages/SportsComplex/sportscomplex.js" element={<SportsComplex />} />
        <Route path="/components/Programs/Pages/OrganicFarming/organicfarming.js" element={<OrganicFarming />} />
        <Route path="/components/Programs/Pages/TissueCulture/tissueculture.js" element={<TissueCulture />} />
        <Route path="/components/Programs/Pages/Gaushala/gausahala.js" element={<Gaushala />} />
        <Route path="/components/Programs/Pages/Library/Library.js" element={<Library />} />





        <Route path="/" element={<SportsComplex />} />
        <Route path="/components/Programs/Pages/SportsComplex/Athletics/athletics.js" element={<Athletics />} />
        <Route path="/components/Programs/Pages/SportsComplex/Badminton/badminton.js" element={<Badminton />} />
        <Route path="components/Programs/Pages/SportsComplex/BasketBall/basketball.js" element={<Basketball />} />
        <Route path="/components/Programs/Pages/SportsComplex/Kabbadi/kabbadi.js" element={<Kabaddi />} />
        <Route path="/components/Programs/Pages/SportsComplex/Kushti/kushti.js" element={<Kushti />} />
        <Route path="/components/Programs/Pages/SportsComplex/VolleyBall/volleyball.js" element={<Volleyball />} />





        <Route path="/components/Gallery/Auditorium" element={<Auditorium />} />
        <Route path="/components/Gallery/Basketball" element={<BasketballCourt/>} />
        <Route path="/components/Gallery/Bhojnalya" element={<Bhojnalya/>} />
        <Route path="/components/Gallery/Cinema&Sports" element={<CinemaSports/>} />
        <Route path="/components/Gallery/dormitory" element={<Dormitory/>} />
        <Route path="/components/Gallery/exercise" element={<Exercise/>} />
        <Route path="/components/Gallery/farming" element={<Farming/>} />
        <Route path="/components/Gallery/gaushala" element={<Gaushalaa/>} />
        <Route path="/components/Gallery/generator" element={<Generator/>} />
        <Route path="/components/Gallery/hospital" element={<Hospital/>} />
        <Route path="/components/Gallery/library" element={<Libraryy/>} />
        <Route path="/components/Gallery/livingroom" element={<Living/>} />
        <Route path="/components/Gallery/meetinghall" element={<Mhall/>} />
        <Route path="/components/Gallery/medicalplant" element={<Plants/>} />
        <Route path="/components/Gallery/mlrooms" element={<MLrooms/>} />
        <Route path="/components/Gallery/offices" element={<Offices/>} />
        <Route path="/components/Gallery/polyhouses" element={<Polyhouses/>} />
        <Route path="/components/Gallery/running&ground" element={<RunningGrounds/>} />
        <Route path="/components/Gallery/tennisnets" element={<TennisNets/>} />
        <Route path="/components/Gallery/tissueculturelabs" element={<TissueLabs/>} />
        <Route path="/components/Gallery/quotes" element={<Quotes/>} />











          
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