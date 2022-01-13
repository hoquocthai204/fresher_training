import React from 'react'
import './header.scss'

function FormHeader() {
    return (
        <React.Fragment>
            <h1 className='form_header'>Exchange Account Login</h1>
            <p className='subheader'>Welcome back! Log In with your Email</p>
        </React.Fragment>
    )
}
export {FormHeader}