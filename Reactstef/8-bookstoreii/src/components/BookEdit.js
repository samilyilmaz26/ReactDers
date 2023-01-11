import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext, BooksellerContext } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookEdit() {
 const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useContext(BooksellerContext);
  const book = state.book;
  const onChangeText = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "FETCH_BOOK_ID",
      payload: { ...book, [name]: value },
    });
  };

  function fetchBookById() {
    axios
      .get(
        "https://book-store-api-test.herokuapp.com/books/" + location.state.id
      )
      .then((res) => {
        dispatch({ type: "FETCH_BOOK_ID", payload: res.data });
      });
  }
  useEffect(() => {
    fetchBookById();
  }, []);
  function editBook() {
    axios
      .put(
        "https://book-store-api-test.herokuapp.com/books/" + location.state.id,
        book
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Book successfully updated");
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
          value={book.name}
          name="name"
          onChange={onChangeText}
        />
        <input
          className="form-control"
          type="text"
          value={book.author}
          name="author"
          onChange={onChangeText}
        />
        <input  className="btn btn-success" type="submit" value ="Update" 
          onClick={() =>editBook()}
        />
      </div>
    </div>
  );
}
