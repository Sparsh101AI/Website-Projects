
import './App.css';
import { Route, BrowserRouter as Router,} from 'react-router-dom';
import Home from "./home/Home";


function App() {
  return (
    <div >
    
    <div className="page-container">
    <div className="content-wrap">
    
    <Router>

    

    <Route path='/' exact component={Home}></Route>
    
    </Router>
   
    </div>
    
    </div>







    
    </div>
  );
}

export default App;
