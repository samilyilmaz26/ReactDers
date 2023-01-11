import React, { useEffect } from "react";
import axios from "axios";
import { BooksellerContext, useContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [state, dispatch] = useContext(BooksellerContext);
  const navigate = useNavigate();
  function deleteBook(bookID) {
    const confirmDelete = window.confirm("Delete item forever?"); 
    if (confirmDelete) {
        axios
        .delete(`https://book-store-api-test.herokuapp.com/books/${bookID}`)
        .then((response) => {
       getBooks()
         navigate("/")
        });
    }
  }

  function getBooks() {
    axios
      .get("https://book-store-api-test.herokuapp.com/books")
      .then((response) => {
        dispatch({ type: "FETCH_BOOKS", payload: response.data });
      });
  }

  useEffect(() => {
    getBooks();
  }, []);
  const renderList = state.books.map((b) => {
    return (
      <tr key={b.id}>
        <td>{b.id}</td>
        <td>
          <img src={b.imgUrl} style={{ height: "350", width: 150 }} />
        </td>
        <td>{b.name}</td>
        <td>{b.author}</td>
        <td>{b.about}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() =>
              navigate("/book/edit/" + b.id, {
                state: { id: b.id },
              })
            }
          > Edit Book </button>
        </td>
        <td><button className="btn btn-danger"  href
        onClick={() =>{deleteBook(b.id)}}
        >Delete Book</button></td>
      </tr>
    );
  });
  return (
    <>
    <button   className="btn btn-primary"
    onClick={() => navigate("/book/create")}
    >New Book</button>
      <table className="table table-hoover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </>
  );
}
