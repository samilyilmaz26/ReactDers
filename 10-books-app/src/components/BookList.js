import React, {useEffect,useContext,useState} from 'react'
import { BookContext } from '../context/bookcontext'
import {getBooks} from '../functions/http'
import BookTable from './BookTable'

export default function BookList() {
 
//   const [user, setUser] = useState({
//     "id": 0,
//     "name": "",
//     "role": ""
// })
// const [loggedin, setLoggedin] = useState(false)
    const [blist, setBlist] = useState([])
   const  bookCtx = useContext(BookContext)
    useEffect(() => {
        async function getAllBooks() {
            try {
                //const books = await getBooks() // apiden aldığı books
               // context.setBooks(books) // reverse
                const books = await getBooks() // apiden aldığı books
               var x = await bookCtx.books
              await  bookCtx.sortDesc(books)
            console.log(x)
                
              //  

            } catch (error) {
                console.log(error)
            }
        }
      getAllBooks()
    }, [])
useEffect(()=> {
 // let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text)
},[])
  
    
  return (
   <BookTable  heading={"All Books"} books = {bookCtx.books}  />
  )
}
