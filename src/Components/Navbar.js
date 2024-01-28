import React,{useContext, useEffect} from 'react'
import Asset01 from '../Assets/asset01.png'
import Asset02 from '../Assets/asset02.png'
import Asset03 from '../Assets/asset03.png'
import Asset04 from '../Assets/asset04.png'
import Asset05 from '../Assets/asset05.png'
import { bookContext } from '../App'


function Navbar() {
    const{books,setBooks} = useContext(bookContext);
    console.log(books)
  return (
    <div className='navbar'>
        <div className='icon'>
            <span className='image'><img src={Asset01} alt="Logo" /></span>
            <span className='icon-text-container'>
                <span className='primary'>KeazoN</span>
                <span className='secondary'>BOOKS</span>
            </span>
        </div>

        <div className='search'>
            <span className='searchbar'><input type='text' placeholder='Search for the books' value={books.input} onChange={(e) => setBooks({...books,inputSearch : e.target.value})}/></span>
            <span className='search-button'><button onClick={() => setBooks({...books,inputClick : books.inputSearch})}>Search</button></span>
        </div>

        <div className='icons-right'>
            <img src={Asset02} className='icon-image-right' alt=''/>
            <img src={Asset03} className='icon-image-right' alt=''/>
            <img src={Asset04} className='icon-image-right' alt=''/>
            <img src={Asset05} className='icon-image-right' alt=''/>
        </div>
        

    </div>
  )
}

export default Navbar