import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Films from './components/Films';
import Contacts from './components/Contacts';
import SingleFilm from './components/SingleFilm';
import Booking from './components/Booking';
import 'antd/dist/antd.css'

function App () {
  return (<BrowserRouter>
    <div>
      <Header />
      <div style={{ height: 'calc(100vh - 114px)' }}>
        <Scrollbars>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/films' component={Films}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/films/:id?' component={SingleFilm}/>
            <Route exact path='/films/:id?/booking/:bookingId?' component={Booking}/>
          </Switch>
        </Scrollbars>
      </div>
      <Footer />
    </div>
  </BrowserRouter>);
}

export default App;
