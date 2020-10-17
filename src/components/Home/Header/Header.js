import React from 'react';
import BusinessClientInfo from '../BusinessClientInfo/BusinessClientInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Feedbacks from '../Feedbacks/Feedbacks';
import Works from '../Works/Works';


const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessClientInfo></BusinessClientInfo>
            <Service></Service>
            <Works></Works>
            <Feedbacks></Feedbacks>
            <Contact></Contact>
        </div>
    );
};

export default Header;