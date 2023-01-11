import React, { useEffect, useContext, useState } from 'react'
import { BookContext } from '../context/bookcontext'
import BookTable from './BookTable'
import { useNavigate } from 'react-router-dom'



export default function BookRecyled() {

  const navigate = useNavigate()
  const bookCtx = useContext(BookContext)
  const rclBooks = bookCtx.books.filter((b) => {
    return (b.recyled === true)

  })
  useEffect(() => {
    if (rclBooks.length == 0) {
      navigate("/")
    }
  }, [rclBooks.length])

  return (
    <BookTable heading={"Recyled Books"} books={rclBooks} />
  )
}
