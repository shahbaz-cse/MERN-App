import React, { useState } from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';

const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {user, token} = isAuthenticated();
    
    const goBack = () => (
        <div>
            <Link className='btn btn-sm btn-success mb-3' to="/admin/dashboard">Admin Home</Link>
        </div>
    );
    
    const handleChange = event => {
        setError("");
        setName(event.target.value)
    };

    const successMessage = () => {
        if(success){
            return <h4 className='text-success'>Category Created Successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error){
            return <h4 className='text-danger'>Failed to create category</h4>
        }
    }

    const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        // backend request fired
        createCategory(user._id, token, {name})
            .then(data => {
                if(data.error){
                    setError(true);
                } else {
                    setError("");
                    setSuccess(true);
                    setName("");
                }
            });
    }

    const myCategoryForm = () => (
        <form>
            <div className='form-group'>
                <p className='lead'>Enter The Category Name</p>
                <input
                type="text"
                className='form-control my-3'
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder='For example: Winter Collection'
                />
                <button onClick={onSubmit} className='btn btn-outline-info pd'>Create Category</button>
            </div>
        </form>
    );

  return (
    <Base
        title='Create A Category Here'
        description='Create a new category for new products below'
        className='container bg-success p-4'
    >
        <div className='row bg-white rounded'>
            <div className='col-md-8 offset-md-2'>
                {successMessage()}
                {warningMessage()}
                {myCategoryForm()}
                <br/>
                {goBack()}
            </div>
        </div>
    </Base>
  );
};

export default AddCategory;