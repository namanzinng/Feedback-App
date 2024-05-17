import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from './Components/FeedbackStats';
import AboutIconLink from './Pages/AboutIconLink';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {


  return (
    
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path='/'
                element={
                  <>
                    <FeedbackForm  />
                    <FeedbackStats 
                     />
                    <FeedbackList />
                  </>
                } 
                />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </div>
        </Router>

      </FeedbackProvider>

    
  );
  
}

export default App;
