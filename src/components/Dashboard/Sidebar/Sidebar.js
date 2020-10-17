import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = ({serviceId}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const style = {
        textDecoration: 'none'
    }
    return (
        <div>
            <div className="m-2">
                <Link to='/'><img src={logo} alt="" style={{ width: "250px" }} className='w-50'></img></Link>
            </div>
            <ul className="list-unstyled dashboard-nav" >
                <li>
                    {
                        !loggedInUser.isAdmin &&
                        <Link to={`/dashboard/${serviceId}?name=orders`} className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faGripHorizontal} /><span>Order</span>
                        </Link>
                    }
                </li>
                <li>
                    {
                        !loggedInUser.isAdmin &&
                        <Link to="/dashboard?name=serviceList" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
                        </Link>
                    }
                </li>
                <li>
                    {
                        !loggedInUser.isAdmin &&
                        <Link to="/dashboard?name=reviews" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faCalendar} /> <span>Review</span>
                        </Link>
                    }
                </li>
                <li>
                    {
                        loggedInUser.isAdmin &&
                        <Link to="/dashboard?name=serviceList" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faUserPlus} /><span>Service List</span>
                        </Link>
                    }
                </li>
                <li>
                    {
                        loggedInUser.isAdmin &&
                        <Link to="/dashboard?name=addService" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                        </Link>
                    }
                </li>
                <li>
                    {
                        loggedInUser.isAdmin &&
                        <Link to="/dashboard?name=makeAdmin" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faUserPlus} /><span>Make Admin</span>
                        </Link>

                    }
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;