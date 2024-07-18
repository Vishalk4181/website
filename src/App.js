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