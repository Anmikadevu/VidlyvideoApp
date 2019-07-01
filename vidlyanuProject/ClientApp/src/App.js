import React, { Component } from 'react';
import { Route  } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Movie } from './components/Movie';
import loginForm from './components/loginForm'
import RegistrationForm from './components/RegistrationForm'
import NewMovie from './components/NewMovie';
export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                

                    <Route exact path='/movies/new' component={NewMovie} />

                    <Route  exact path='/movies' component={Movie} />

                    <Route path='/login' component={loginForm} />
                    <Route path='/registrationform' component={RegistrationForm} />
                    <Route exact path='/' component={Home} />
              
            </Layout>
        );
    }
}
