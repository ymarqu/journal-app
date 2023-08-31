import Navigation from './components/Navigation/Navigation';
import Greeting from './components/Greeting/Greeting';
import MoodTracker from './components/MoodTracker/MoodTracker';
import './App.css';
import JournalEntry from './components/JounrnalEntry/JournalEntry';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn : false,
      route: 'login'
    }
  }

  onChangeRoute = (route) => {
      if(route === 'signout'){
        this.setState({loggedIn: false})
      }else if(route === 'home'){
        this.setState({loggedIn: true})
      }
      this.setState({route: route})
  }

render(){

  return (
    <div className="App">
        <Navigation isSignedIn={this.state.loggedIn} onChangeRoute={this.onChangeRoute} />
        { this.state.route === 'home' ?
          <div className='flex flex-column justify-center items-center vh-75'>
        <Greeting />
        <MoodTracker />
        <JournalEntry />
        </div>
           :
           this.state.route === 'register' ?
           <div className='flex justify-center items-center vh-75'>
            <Register />
          </div>
           :
           <div className='flex justify-center items-center vh-75'>
            <Login onChangeRoute={this.onChangeRoute}/>
          </div>
        }
    </div>
  );
 }
}

export default App;
