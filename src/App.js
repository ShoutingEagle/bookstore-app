import './App.css';
import Navbar from './Components/Navbar';
import React,{useState,useEffect} from 'react';


export const bookContext = React.createContext()


function App() {
  const [books,setBooks] = useState({});

  return (
    <div className="app">
      <bookContext.Provider>

        <Navbar/>

      </bookContext.Provider>
      
      
    </div>
  );
}

export default App;
