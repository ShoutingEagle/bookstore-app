import './App.css';
import Navbar from './Components/Navbar';
import React,{useState,useEffect} from 'react';
import Home from './Components/Home';
import axios from 'axios'
import RenderBook from './Components/RenderBook';



export const bookContext = React.createContext()


function App() {
  const [books,setBooks] = useState({
    list:[],
    error:'',
    data : {},
    isLoading:false,
    inputSearch : '',
    inputClick : '',
  });


  useEffect(() => {
    axios
    .get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    .then(res=>setBooks((prevBooks) => ({...prevBooks,list:res.data.items})))
    .catch(err=>console.log(err))
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
    .then((res)=>setBooks((prevBooks) => ({...prevBooks,list:[...prevBooks.list,...res.data.items]})))
    .catch((error) => console.log(error))
  },[])

  useEffect(() => {
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${books.inputClick}`)
    .then(res=>setBooks((prevBooks) => ({...prevBooks,list:res.data.items})))
    .catch(err=>console.log(err))
  },[books.inputClick])



  return (
    <div className="app">
      <bookContext.Provider value={{books,setBooks}}>
        <Navbar/>
        {books.isLoading?<RenderBook/>:<h2 className='text'>No Books Selected</h2>}
        <Home/>
      </bookContext.Provider>
    </div>
  );
}

export default App;
