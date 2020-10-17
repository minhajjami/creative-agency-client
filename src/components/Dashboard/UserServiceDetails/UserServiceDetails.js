import React from 'react';
import './UserServiceDetails.css'
const UserServiceDetails = ({ service }) => {
    let style;
    service.status=='Pending'? style={color: 'red',backgroundColor:'#FFE3E3'}:style={color: 'green',backgroundColor:'#C6FFE0'}
    return (
        <div className="col-md-5 bg-white service-details m-2">
            <div className="d-flex justify-content-between">
                <img style={{height:'50px'}} src={`data:image/png;base64,${service.image.img}`} ></img>
                <div className='p-3' style={style}>{service.status}</div>
            </div>
            <h5 className="font-weight-bold">{service.serviceName}</h5>
            <p>{service.projectDetail}</p>
        </div>
    );
};

export default UserServiceDetails;
