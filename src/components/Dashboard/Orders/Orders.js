import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null);
    const { register, handleSubmit } = useForm();
    const [fileName, setFileName] = useState('Upload Project File');

    let serviceId = useParams();
    serviceId = serviceId.serviceId;

    function notify() {
        toast.success("Your Order has been  successfully saved.", {
            transition: Zoom,
            position: toast.POSITION.TOP_CENTER
        });
    }

    function notifyError() {
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const onSubmit  = (data) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('serviceName', data.serviceName);
        formData.append('projectDetail', data.projectDetail);
        formData.append('price', data.price);

        fetch('https://hidden-crag-90889.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    notify();
                }
            })
            .catch(error => {
                notifyError();
            })
    }

    const handleChange = (e) => {
        setFileName(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Your name / comapany's name" defaultValue={loggedInUser.name} ref={register}/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Your email address" defaultValue={loggedInUser.email} ref={register} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="serviceName" className="form-control" placeholder="Your Service" defaultValue={serviceId}  ref={register}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="projectDetail" placeholder="Project Details" rows="3" ref={register} required></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="number"  name="price" className="form-control" placeholder="Price"  ref={register} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="file-upload" className="custom-file-upload m-2">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} /> {fileName}
                                    </label>
                                        <input type="file" id="file-upload" onChange={handleChange} className="form-control m-2" ref={register} required />
                                </div>
                            </div>
                            <button className="btn btn-dark pl-4 pr-4 d-block mr-5 mt-3" type="submit">Send</button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;