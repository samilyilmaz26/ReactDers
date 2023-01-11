import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookCreate() {
    const [newBook, setnewBook] = useState ({
        name: "",
        author: "",
        imgUrl: "",
        about: "",
      });
const navigate = useNavigate();
function onChangeText(e) {
    const { name, value } = e.target;
    setnewBook({ ...newBook, [name]: value });
}
function createBook() {
    axios
    .post("https://book-store-api-test.herokuapp.com/books", newBook)
    .then((res) => {
      if (res.status === 201) {
        alert("Book created successfully");
        navigate("/")
      }
    });
}
 
  return (
    <div className="row">
    <div className="col-md-5">
      <input
        className="form-control"
        type="text"
        value={newBook.name}
        name="name"
        onChange={onChangeText}
      />
      <input
        className="form-control"
        type="text"
        value={newBook.author}
        name="author"
        onChange={onChangeText}
      />
      <input  className="btn btn-success" type="submit" value ="Create" 
        onClick={() =>createBook()}
      />
    </div>
  </div>
  )
}
