import React from 'react'
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import logo from './image/logo.png'
export default function Layout() {
    return (
        <div>
            <MDBContainer fluid className='main-layout'>
                <div className='login-section'>
                    <div>
                        <img src={logo} alt='logo' className='logo'></img>
                    </div>
                    <div>

                   
                    <div className='login-form'>
                        <div className='input-group mb-4'>
                            <input type='text' placeholder='Enter your Email-id' className='form-control'></input>
                        </div>
                        <div className='input-group mb-3'>
                            <input type='password' placeholder='Enter your password' className='form-control'></input>
                        </div>
                    </div>
                    <MDBBtn className='login-btn'>Login</MDBBtn>
                    <p className='text-center'><Link to='/forgot'>Forgot Password</Link></p>
                    <p className='text-center fs-1 '><Link to='/dashbaord' className='text-white'>Dashboard</Link></p>
                    </div>
                </div>
            </MDBContainer>

        </div>
    )
}
