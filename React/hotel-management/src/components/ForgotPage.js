import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

export default function ForgotPage() {
    return (
        <div>
            <MDBContainer fluid className='main-layout'>
                <div className='forgot-section'>
                    <div>
                        <img src={logo} alt='logo' className='logo'></img>
                    </div>
                    <h2 className='text-center'>Forgot section</h2>
                    <div className='input-group mb-4'>
                            <input type='text' placeholder='Enter your Email-id' className='form-control'></input>
                    </div>
                    <Link to='/'><MDBBtn className='submit-btn'>Submit</MDBBtn></Link>
                   
                </div>

            </MDBContainer>

        </div>
    )
}
