
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [name, setname] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigator = useNavigate();

    async function handleLoginForm(e){
        e.preventDefault();

        // Validate name and password fields
        if (!name) {
            setNameError('Username is required');
            return;
        }

        if (!password) {
            setPasswordError('Password is required');
            return;
        }

        // Proceed with form submission if all fields are filled
        const loginobj = { name, password };
        navigator("/list");
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'> Login Form </h2>
                        </div>

                        <div className='card-body'>
                            <form>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Username</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='username'
                                            className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                            placeholder='Enter username'
                                            value={name}
                                            onChange={ (e) => {
                                                setname(e.target.value);
                                                setNameError('');
                                            }}
                                            required
                                        />
                                        {nameError && <div className="invalid-feedback">{nameError}</div>}
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Password </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='password'
                                            name='password'
                                            className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={ (e) => {
                                                setPassword(e.target.value);
                                                setPasswordError('');
                                            }}
                                            required
                                        />
                                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button className='btn btn-primary' onClick={handleLoginForm}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent

