import { useState } from 'react';
import QuizScreen from "./components/QuizScreen.jsx"
import JoinScreen from "./components/JoinScreen.jsx"
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className='quiz-container'>
        {
          isQuizStarted ? (
            <QuizScreen retry={() => setIsQuizStarted(false)} />
          ) : (
            <JoinScreen start={() => setIsQuizStarted(true)} />
          )
        }

      </div>
    </>
  );
}

export default App;
