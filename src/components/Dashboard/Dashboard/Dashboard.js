import React, { useContext, useState } from 'react';
import './Dashboard.css'
import DashboardDetails from '../DashboardDetails/DashboardDetails';
import Sidebar from '../Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Dashboard = () => {  
    const serviceId = useParams();
    const [service,setService] = useState(serviceId.serviceId);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <section>
            <div className="row mt-3">
                <div className="col-md-3">
                    <Sidebar serviceId={service}></Sidebar>
                </div>
                <div className="col-md-9">
                    <DashboardDetails isAdmin={loggedInUser.isAdmin} serviceId={service}></DashboardDetails>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;