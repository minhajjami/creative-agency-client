import React from 'react';
import slack from '../../../images/logos/slack.png';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import './BusinessClientInfo.css';

const BusinessClientInfo = () => {
    return (
        <div className="container mt-5">
            <div className="row client-logos">
                <div className="col-md-2 ml-2">
                    <img src={slack} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2 ml-3">
                    <img src={google} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2 ml-3">
                    <img src={uber} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2 ml-3">
                    <img src={netflix} alt="" className="img-fluid" />
                </div>
                <div className="col-md-2 ml-3">
                     <img src={airbnb} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default BusinessClientInfo;