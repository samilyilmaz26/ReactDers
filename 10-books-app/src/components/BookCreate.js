import React, {useContext, useState} from 'react'
import BookPage from './BookPage'
import {addSelectedBook} from '../functions/http'
import { BookContext } from "../context/bookcontext"
import { useNavigate } from 'react-router-dom'

export default function BookCreate() {
  const context = useContext(BookContext)
  const navigate = useNavigate()
  const [newBook, setnewBook] = useState ({
    id : "",
    bookname: "",
    description: "",
    author: "",
    picture: "",
    recyled: false,

  });
  const createBook= async ( )=> {
    console.log("new Book",newBook)
      try {
        const id = await addSelectedBook(newBook);
       context.addBook({ ...newBook, id: id });
       alert(id)
      
        navigate("/")
      } catch (error) {
        
      }
   }
  const onChangeText= (event)=> {
    setnewBook ({...newBook, [event.target.name]: event.target.value})
  }
  return (
     <BookPage book={newBook} text= {"New Book"}  onChangeText = {onChangeText} handleBook = {createBook} /> 
  )
}
