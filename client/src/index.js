import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';

import{
    BrowserRouter as Router,
    Routes,
    Route
    
} from 'react-router-dom'
import HomePage from './components/Home';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateRecipePage from './components/CreateRecipe';

const App = () => {

    
    return ( 
        <Router>
        <div className='container'>
            <NavBar/>
            <Routes>
                <Route path="/create-recipe" element={<CreateRecipePage/>}>
                    
                </Route>
                <Route path="/login" element={<LoginPage/>}>
                    
                </Route>
                <Route path="/signup" element={                    <SignUpPage/>}>
                </Route>
                <Route path="/" element={                    <HomePage/>
}>
                </Route>


            </Routes>
            
        
        </div>
        </Router>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'))