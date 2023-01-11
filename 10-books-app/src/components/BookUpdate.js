import React ,{useState,useEffect,useContext} from 'react'
import { getBook,updateSelectedBook } from '../functions/http'
import { useLocation,useNavigate } from 'react-router-dom';
import BookPage from './BookPage';
import {BookContext} from '../context/bookcontext'
  

export default function BookUpdate() {
  const context = useContext(BookContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedBook, setSelectedBook] = useState({
    bookname: "",
    description: "",
    author: "",
    picture: "",
    recyled: false,
  });
  useEffect(() => {  //.yol
    getBook(location.state.id).then((res) => {
      setSelectedBook(res.data)
    })
  }, [])
  // useEffect(() => {   //2.yol
  //      console.log(location.state)
  //      setSelectedBook(location.state.book)
     
  // }, [])
  const onChangeText = (event) => {
    setSelectedBook({ ...selectedBook, [event.target.name]: event.target.value })
  }
  const updateBook = async () => {
    try {
      await updateSelectedBook(location.state.id, selectedBook);
      await context.updateBook(location.state.id, selectedBook);
     alert(selectedBook.bookname + "Güncellendi")
       navigate("/")
    } catch (error) {
      alert(error)
    }
  }
  return (
     <BookPage book={selectedBook} text={"Update Book" }
     onChangeText= {onChangeText} handleBook ={updateBook}
     />
  )
}
