import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      
    </div>
   
  )
}

export default App
