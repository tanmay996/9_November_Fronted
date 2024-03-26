import React from 'react'
import { MDBModalDialog ,MDBModal, MDBModalContent,MDBModalBody } from 'mdb-react-ui-kit'
export default function Enquiry() {
  return (
    <>
        <MDBModal role="dialog" id='enq' className='modal fade'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalBody>
                        <h1>Modal working</h1>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
       
    </>
  )
}
