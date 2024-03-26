import React from 'react'
import { MDBBtn , MDBContainer , MDBRow} from 'mdb-react-ui-kit'
export default function ButoonApp() {
  return (
    <div>
      <MDBContainer className='mt-5'>
        <MDBRow className='text-center'>
            <div className='col-md-12'>
                <div>
                <MDBBtn className='btn-lg'>Click Me</MDBBtn>
                <MDBBtn className='btn-danger btn-lg ms-5' data-bs-toggle="modal" data-bs-target="#e">Enquiry</MDBBtn>

                </div>
            </div>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
