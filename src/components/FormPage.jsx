import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Assuming you have a CSS file for styling

const FormPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();
 
    const handleChange = (e) => {
        e.preventDefault();
    if ( password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
        setError('');

      navigate('/home');    
    };
  return (
    <div className='container'>
      <h2>Form Page</h2> 
      <form onSubmit={handleChange}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            placeholder='Confirm your password'
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <button type="submit">Submit</button>

      </form>
    </div>
  );

};
export default FormPage
