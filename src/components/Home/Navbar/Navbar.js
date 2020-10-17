import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const logoStyle = {
        width: '150px',
        height: '47px',
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand" href="#"><img style={logoStyle} src={logo} alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        {
                            loggedInUser.name ?
                                <button className="btn btn-dark my-2 my-sm-0">{loggedInUser.name}</button>
                                : <Link className="nav-link" to="/login"><button className="btn btn-dark my-2 my-sm-0">Login</button></Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;