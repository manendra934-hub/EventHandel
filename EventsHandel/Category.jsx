import React from 'react';

import { BrowserRouter as Router,Route,NavLink } from 'react-router-dom';
import All from './All';
import Music from './Music';
import Business from './Business';
import Sports from './Sports';
import Workshops from './Workshops';


const Category=()=>{
    
   
    return(
        <div>
            <Router >
                <div className="navbar-container">
                <NavLink activeClassName="active-link" exact className="links" to=""  >All</NavLink>
                <NavLink activeClassName="active-link" className="links" to="/music">Music</NavLink>
                <NavLink activeClassName="active-link" className="links" to="/sports">Sports</NavLink>
                <NavLink activeClassName="active-link" className="links" to="/business">Business</NavLink>
                <NavLink  activeClassName="active-link" className="links" to="/workshops">Workshops</NavLink>
                
                </div>
                <Route exact path ="/" component={All}  />
                <Route exact path ="/music" component={Music} />
                <Route exact path ="/sports" component={Sports} />
                <Route exact path ="/business" component={Business} />
                <Route exact path ="/workshops" component={Workshops} />
            </Router>


      </div>
    )
}
export default Category;