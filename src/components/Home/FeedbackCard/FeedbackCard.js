import React from 'react';
import './FeedbackCard.css'

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="col-md-4 p-2">
            <div className="feedback-card p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <img src={feedback.image} class="rounded-circle w-75" alt="..." />
                    </div>
                    <div className="col-md-9">
                        <h5>{feedback.name}</h5>
                        <h5>{feedback.companyName}</h5>
                    </div>
                </div>
                <p>{feedback.message}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;