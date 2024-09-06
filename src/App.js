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



// {Courses Offered}

import DiplomaInFashionDesigning from './components/CoruseDetails/Apparel/DiplomaInFashionDesigning.js';
import GarmentConstructionTechniques from './components/CoruseDetails/Apparel/GarmentConstructionTechniques.js';

import HospitalityManagement from './components/CoruseDetails/Hospitality/HospitalityManagement.js';
import Entrepreneurship from './components/CoruseDetails/Hospitality/Entrepreneurship.js';

import DigitalMarketing from './components/CoruseDetails/IT/DigitalMarketing.js';
import BasicComputer from './components/CoruseDetails/IT/BasicComputer.js';
import ComputerApplication from './components/CoruseDetails/IT/ComputerApplication.js';

import LabTechnology from './components/CoruseDetails/Paramedics/LabTechnology.js';
import Radiology from './components/CoruseDetails/Paramedics/Radiology.js';
import OTTechnician from './components/CoruseDetails/Paramedics/OTTechnician.js';
import PhlebotomyAssistant from './components/CoruseDetails/Paramedics/PhlebotomyAssistant.js';

import HouseWiring from './components/CoruseDetails/Electrical/HouseWiring.js';
import SolarTechnician from './components/CoruseDetails/Electrical/SolarTechnician.js';
import HomeAppliance from './components/CoruseDetails/Electrical/HomeAppliance.js';



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




          <Route path='/diplomainfashiondesigning' element={<DiplomaInFashionDesigning />} />
          <Route path='/garmentconstruction' element={<GarmentConstructionTechniques />} />

          <Route path='/hopitalitymanagement' element={<HospitalityManagement />} />
          <Route path='/entrepreneurship' element={<Entrepreneurship />} />

          <Route path='/digitalmarketing' element={<DigitalMarketing />} />
          <Route path='/basiccomputer' element={<BasicComputer />} />
          <Route path='/computerapplication' element={<ComputerApplication />} />

          <Route path='/labtechnology' element={<LabTechnology />} />
          <Route path='/radiology' element={<Radiology />} />
          <Route path='/ottechnician' element={<OTTechnician />} />
          <Route path='/phlebotomyassistant' element={<PhlebotomyAssistant />} />

          <Route path='/housewiring' element={<HouseWiring />} />
          <Route path='/solartechnician' element={<SolarTechnician />} />
          <Route path='/homeappliance' element={<HomeAppliance />} />




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