import React,{useContext, useEffect} from 'react'
import { bookContext } from '../App'


function RenderBook() {

  const {books} = useContext(bookContext)
  console.log(books.data.volumeInfo.infoLink)

  
  return (


   
      <div className='renderBook'>
              <div><img src={books.data.volumeInfo.imageLinks.thumbnail} alt='' className='book-details'/></div>
              <div className='details-container'> 
                <div className='title-desc-container'>
                  <span className='title'>Title : {books.data.volumeInfo.title}</span>
                  <span className='description'>Description : {books.data.volumeInfo.description ||  "No Description Available"}</span>
                </div>
                <div className='button-container'>
                  <button className='btn'><a href={books.data.volumeInfo.infoLink }target='_blank'>Read Now!</a></button>
                </div>
              </div>
        </div>
     

  

  )
}

export default RenderBook