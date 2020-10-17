
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    function notify() { 
        toast.success("Review Saved Successfully.",{
            transition:Zoom,
            position: toast.POSITION.TOP_CENTER
        });
    }

    function notifyError() {
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const baseUrl = 'https://hidden-crag-90889.herokuapp.com';
    const onSubmit  = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('companyName', data.companyName);
        formData.append('message', data.message);
        formData.append('image', loggedInUser.image);

        fetch(`${baseUrl}/addReview`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
               notify();
            })
            .catch(error => {
              notifyError();
            })
    }

    return (
        <div>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" name="name" defaultValue={loggedInUser.name} ref={register}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Comapany's name, Designation" name="companyName" ref={register} required/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your message" name="message" rows="3" ref={register} required></textarea>
                            </div>
                            <button class="btn btn-dark pl-4 pr-4 d-block mr-5 mt-3" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Reviews;