import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Upload Image');

    function notify() { 
        toast.success("Service successfully added.",{
            transition:Zoom,
            position: toast.POSITION.TOP_CENTER
        });
    }

    function notifyError() {
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('https://hidden-crag-90889.herokuapp.com/addService', {
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

            e.preventDefault();
    }
    const handleBlur = (e) => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleChange = (e) => {
        setFileName(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    return (
        <section className="mt-3">
        <form action="" onSubmit={handleSubmit} className="">
            <div className="row add-service ml-3">
                <div className="col-md-6  mb-3">
                    <label className="m-2 mt-3 font-weight-bold">Service Title</label>
                    <input type="text" name="title" className="form-control p-3 ml-2" onBlur={handleBlur} placeholder="Enter Title" required />
                    <label className="m-2 mt-3 font-weight-bold">Description</label>
                    <textarea type="text" name="description" className="form-control p-3 ml-2" cols="10" rows="5" placeholder="Enter Description" onBlur={handleBlur} required />
                </div>
                <div className="col-md-6">
                    <label className="m-2 mt-3 font-weight-bold">Icon</label><br/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <FontAwesomeIcon icon={faCloudUploadAlt} /> {fileName}
                    </label>
                    <input type="file" id="file-upload" className="form-control ml-2" onChange={handleChange} placeholder="Enter Title" required />
                </div>
            </div>
            <div className="form-group text-right mr-5">
                <button type="submit" className="btn btn-success m-2">Submit</button>
            </div>
            <ToastContainer />
        </form>
    </section>
    );
};

export default AddService;