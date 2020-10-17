import React, { useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    
    function notify() { 
        toast.success("Admin successfully added.",{
            transition:Zoom,
            position: toast.POSITION.TOP_CENTER
        });
    }

    function notifyError() {
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const handleBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        fetch('https://hidden-crag-90889.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    notify();
                }
            }).catch(error => {
                notifyError();
            })
        e.preventDefault();
    }
    
    return (
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h5>Email</h5>
                        <div class="form-group d-flex">
                            <input onBlur={handleBlur} type="email" class="form-control" id="exampleFormControlInput1" placeholder="john@gmail.com" required  />
                            <button class="btn btn-success  m-2 d-block" type="submit">Submit</button>
                        </div>   
                        <ToastContainer/>          
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MakeAdmin;