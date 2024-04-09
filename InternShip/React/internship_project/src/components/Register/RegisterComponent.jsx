
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    const navigator = useNavigate();

    const handleRegistrationForm = async (e) => {
        e.preventDefault();
    
        // Check for empty fields
        if (!name || !dob || !email || !password) {
          setFormError('All fields are required');
          return;
        }
    
        // Send registration data to backend
        try {
          const response = await axios.post('http://localhost:9000/api/register', {
            username: name,
            dateOfBirth: dob,
            email,
            password,
          });
          console.log(response.data);
          navigator("/list");
        } catch (error) {
          console.error('Registration error:', error);
          setFormError('Registration failed. Please try again.');
        }
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'> User Registration Form </h2>
                        </div>

                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Name </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            placeholder='Enter name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Date of Birth </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='date'
                                            name='dob'
                                            className='form-control'
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Email </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='email'
                                            name='email'
                                            className='form-control'
                                            placeholder='Enter email address'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Password </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    {formError && <div className='text-danger'>{formError}</div>}
                                    <button className='btn btn-primary' onClick={handleRegistrationForm}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;


