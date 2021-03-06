import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, RandomPage } from './pages';


class App extends Component {
render() {
    return(
      <div className='App'>
        <BrowserRouter>
          <Route path="/" component={ Home } exact />
          <Route path="/FilePage" component={ RandomPage } exact/>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;

