import React, { useState, useContext } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { UserContext } from '../../../App';
import Orders from "../Orders/Orders";
import Reviews from "../Reviews/Reviews";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddService from "../AddService/AddService";
import AdminServiceList from "../AdminServiceList/AdminServiceList";
import UserServiceList from "../UserServiceList/UserServiceList";

const DashboardDetails = ({ isAdmin, serviceId }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let currentbar = query.get("name")

    const findSelectedBar = () => {
        if (isAdmin) {
            switch (currentbar) {
                case 'makeAdmin':
                    return <MakeAdmin></MakeAdmin>
                case 'addService':
                    return <AddService></AddService>
                default:
                    return <AdminServiceList></AdminServiceList>
            }
        }
        else {
            switch (currentbar) {
                case 'serviceList':
                    return <UserServiceList></UserServiceList>
                case 'reviews':
                    return <Reviews></Reviews>
                default:
                    return <Orders serviceId={serviceId}></Orders>
            }
        }
    }

    return (
        <div>
            <div className="d-flex">
                {/* <h4>
                    {currentbar.toUpperCase()}
                </h4> */}
                <div className="ml-auto d-flex">
                    <img src={loggedInUser.image} className="rounded-circle w-25 p-1" />
                    <h6 className="p-2">{loggedInUser.name}</h6>
                </div>
            </div>
            <div className="dashboard-container">
                {
                    findSelectedBar()
                }
            </div>
        </div>
    );
};

export default DashboardDetails;