import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [serviceData,setServiceData] = useState([]);
    const baseUrl = 'https://hidden-crag-90889.herokuapp.com';
    useEffect(() =>{
        fetch(`${baseUrl}/getService`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
        .then(data =>setServiceData(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2>Provide awesome  <span style={{ color: '#7AB259' }}>services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;