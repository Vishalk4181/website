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






// {Operating Models}

import Build from './components/OperatingModels/Build/Build.js';
import Operate from './components/OperatingModels/Operate/Operate.js';
import Assist from './components/OperatingModels/Assist/Assist.js';
import Transfer from './components/OperatingModels/Transfer/Transfer.js';



// {Sustainable Development}

import NoPoverty from './components/SustainableDevelopment/NoPoverty/NoPoverty.js';
import ZeroHunger from './components/SustainableDevelopment/ZeroHunger/ZeroHunger.js';
import GoodHealth from './components/SustainableDevelopment/GoodHealth/GoodHealth.js';
import QualityEducation from './components/SustainableDevelopment/QualityEducation/QualityEducation.js';
import GenderEquality from './components/SustainableDevelopment/GenderEquality/GenderEquality.js';
import CleanEnergy from './components/SustainableDevelopment/CleanEnergy/CleanEnergy.js';
import IndustryInnovation from './components/SustainableDevelopment/IndustryInnovation/IndustryInnovation.js';
import ReducedInequalities from './components/SustainableDevelopment/ReducedInequalities/ReducedInequalities.js';
import LifeBelowWater from './components/SustainableDevelopment/LifeBelowWater/LifeBelowWater.js';
import LifeAndLand from './components/SustainableDevelopment/LifeAndLand/LifeAndLand.js';


//programs

import HospitalHealthcare from './components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js';
import SkillDevelopment from './components/Programs/Pages/SkillDevelopment/skilldevelopment.js';
import YogaMeditaion from './components/Programs/Pages/YogaMeditaion/yogameditaion.js';
import SportsComplex from './components/Programs/Pages/SportsComplex/sportscomplex.js';
import OrganicFarming from './components/Programs/Pages/OrganicFarming/organicfarming.js';
import TissueCulture from './components/Programs/Pages/TissueCulture/tissueculture.js';



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




          <Route path='/build' element={<Build />} />
          <Route path='/operate' element={<Operate />} />
          <Route path='/assist' element={<Assist />} />
          <Route path='/transfer' element={<Transfer />} />




          <Route path='/nopoverty' element={<NoPoverty />} />
          <Route path='/zerohunger' element={<ZeroHunger />} />
          <Route path='/goodhealth' element={<GoodHealth />} />
          <Route path='/qualityeducation' element={<QualityEducation />} />
          <Route path='/genderequality' element={<GenderEquality />} />
          <Route path='/cleanenergy' element={<CleanEnergy />} />
          <Route path='/industryinnovation' element={<IndustryInnovation />} />
          <Route path='/reducedinequalities' element={<ReducedInequalities />} />
          <Route path='/lifebelowwater' element={<LifeBelowWater />} />
          <Route path='/lifeandland' element={<LifeAndLand />} />




        <Route path="/" element={<Programs />} />
        <Route path="/components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js" element={<HospitalHealthcare />} />
        <Route path="/components/Programs/Pages/SkillDevelopment/skilldevelopment.js" element={<SkillDevelopment />} />
        <Route path="/components/Programs/Pages/YogaMeditaion/yogameditaion.js" element={<YogaMeditaion />} />
        <Route path="/components/Programs/pages/SportsComplex/sportscomplex.js" element={<SportsComplex />} />
        <Route path="/components/Programs/Pages/OrganicFarming/organicfarming.js" element={<OrganicFarming />} />
        <Route path="/components/Programs/Pages/TissueCulture/tissueculture.js" element={<TissueCulture />} />





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