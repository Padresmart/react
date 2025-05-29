import React from 'react'
import { Link } from 'react-router-dom'
import myimage from '../assets/myimage.jpg'




const HomePage = () => {
  return (
    <div className='container'>
        <h1>Welcome to the Home Page</h1> 
        <div>
            <img src={myimage} alt="profile" className='profile' />
            <div className='profile-details'>
                <p><strong>Name:</strong>Padre Smart</p>
                <p><strong>Stack:</strong>Frontend Stack</p>
                <p><strong>Type Of Student:</strong>Private Student</p>
                <p><strong>Programming Language:</strong>React Javascript</p>

               <button><Link to="/">Back to Form Page</Link></button> 
            </div>
        </div>
    </div>
  )
}

export default HomePage
