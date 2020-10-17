import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

// const feedbackData = [
//     {
//         name: 'Nash Patrik',
//         designation: 'CEO, Manpol',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//         img: customer1
//     },
//     {
//         name: 'Miriam Barron',
//         designation: 'CEO, Manpol',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//         img: customer2
//     },
//     {
//         name: 'Bria Malone',
//         designation: 'CEO, Manpol',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//         img: customer3
//     }
// ]

const Feedbacks = () => {

    const [feedbackData,setFeedbackData] = useState([]);
    const baseUrl = 'https://hidden-crag-90889.herokuapp.com';
    useEffect(() =>{
        fetch(`${baseUrl}/getClientFeedback`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>response.json())
        .then(data =>setFeedbackData(data))
    }, [])

    return (
        <section className="feedback-container mt-5">
            <div className="text-center">
                <h2>Clients  <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="container">
                    <div className=" row mt-2 ">
                        {
                            feedbackData.map(feedback => <FeedbackCard feedback={feedback} key={feedback.id}></FeedbackCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;