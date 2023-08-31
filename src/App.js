import Navigation from './components/Navigation/Navigation';
import Greeting from './components/Greeting/Greeting';
import MoodTracker from './components/MoodTracker/MoodTracker';
import './App.css';
import JournalEntry from './components/JounrnalEntry/JournalEntry';

function App() {
  return (
    <div className="App">
        <Navigation />
        <div className='flex flex-column justify-center items-center vh-75'>
        <Greeting />
        <MoodTracker />
        <JournalEntry />
        </div>
    </div>
  );
}

export default App;
