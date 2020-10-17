import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserServiceDetails from '../UserServiceDetails/UserServiceDetails';


const UserServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userServices, setUserServices] = useState([]);
    const baseUrl = 'https://hidden-crag-90889.herokuapp.com';

    useEffect(() => {
        fetch(`${baseUrl}/getUserOrders/?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setUserServices(data))
    }, [loggedInUser.email])

    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        userServices.map(userService => <UserServiceDetails service={userService} key={userService._id}></UserServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default UserServiceList;