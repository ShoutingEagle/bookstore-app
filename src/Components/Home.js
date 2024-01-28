import React,{useContext} from 'react'
import { bookContext } from '../App'

function Home() {
const {books,setBooks} = useContext(bookContext)
console.log(books)
  return (    
    <div className='home'>
        {
            books.list.map((item,index) => {
                return (
                    <div key={item.id} className='thumbnail-wrapper' onClick={()=>setBooks((prevBooks) => ({...prevBooks,data:prevBooks.list[index],isLoading:true}))}>
                        <span className='thumbnail'>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt='' className='rendered-image'/>
                        </span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home