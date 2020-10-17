import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (  
        <div className="col-md-4 text-center service-card pt-5">
            <Link to={`/dashboard/${service.title}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                <img className="service-logo" style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                <h5 className="mt-3 mb-3">{service.title}</h5>
                <p className="text-secondary">{service.description}</p>
            </Link>
        </div>
    );
};

export default ServiceCard;

