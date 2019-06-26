import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';



const Main = () => (
      <section className="route-section">
      <Switch >
        <Route exact path='/' component={Home}></Route>
        <Route  path='/resume' component={Resume}></Route>
        <Route  path='/projects' component={Projects}></Route>
      </Switch>
      </section>
       
    );

    export default Main;