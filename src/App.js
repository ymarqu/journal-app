import Navigation from './components/Navigation/Navigation';
import Greeting from './components/Greeting/Greeting';
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
      route: 'login',
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
   }
  }


  loadUser = (data) => {
    this.setState({user : {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }});
  }

  onChangeRoute = (route) => {
      if(route === 'signout'){
        this.setState({loggedIn: false})
      }else if(route === 'home'){
        this.setState({loggedIn: true})
      }
      this.setState({route: route})
  }


  componentDidMount(){
    fetch('http://localhost:3000')
    .then(res => res.json())
  }

render(){

  return (
    <div className="App">
        <Navigation isSignedIn={this.state.loggedIn} onChangeRoute={this.onChangeRoute} />
        { this.state.route === 'home' ?
          <div className='flex flex-column justify-center items-center vh-75'>
        <Greeting userName={this.state.user.name} />

        <JournalEntry user={this.state.user}/>
        </div>
           :
           this.state.route === 'register' ?
           <div className='flex justify-center items-center vh-75'>
            <Register loadUser={this.loadUser} onChangeRoute={this.onChangeRoute}/>
          </div>
           :
           <div className='flex justify-center items-center vh-75'>
            <Login loadUser={this.loadUser} onChangeRoute={this.onChangeRoute}/>
          </div>
        }
    </div>
  );
 }
}

export default App;
