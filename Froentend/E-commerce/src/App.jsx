import React from 'react'
import Postlist from './Post/Postlist'
import './index.css'
import{BrowserRouter as Router ,Route,Routes}from 'react-router-dom'
import Postdetails from './Post/postdetails'

const App = () => {
  return (
    <>
    <Router> 
      <Routes>
        <Route 
         path='/' 
         element={<Postlist/>} // creting the router 

          />
          <Route path='/post/:id'  
          element ={<Postdetails/>}/>
      </Routes>
    </Router>
    
  
      
   
       
</>
    
  )
}

export default App