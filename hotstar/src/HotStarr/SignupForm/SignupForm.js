import React from 'react'
import exportFromJSON from 'export-from-json'
import './SignupForm.css'

const SignupForm = () => {
    const data = [{ foo: 'foo'}, { bar: 'bar' }]
    const fileName = 'download'
    const exportType =  exportFromJSON.types.csv

    const handleChange=()=>{
        exportFromJSON({ data, fileName, exportType })
    }
    return (
        <div className='header'>
            {/* <div className='Signupform'>
                <input type="text" placeholder='Enter your Email'/>
                <input type="password" placeholder='Enter your Password'/>
                <input type="password" placeholder='Confirm Password'/>
                <input type="submit" value="Submit" style={{cursor:'pointer'}}/>
            </div> */}
            <button onClick={handleChange}>
                download
            </button>
        </div>
    )
}

export default SignupForm
