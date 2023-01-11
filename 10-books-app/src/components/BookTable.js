import React from 'react'
import {deleteSelectedBook, updateSelectedBook} from '../functions/http'
import { useContext } from 'react'
import { BookContext } from '../context/bookcontext'
import { useNavigate } from 'react-router-dom'

export default function BookTable({ heading, books }) {
    const navigate = useNavigate()
    const context = useContext(BookContext)
    const deleteBook = async(id) => {
        try {
           await deleteSelectedBook(id)
           context.deleteBook(id)  

        //   window.location.reload(); // 
        } catch (error) {
            alert(error)
        }
        
    }
   // navigate("/book/update/:"+ b.id, {state: {id: b.id}})}>Update</button></td>
    const updateBook = async(id)=> {  // 1.yol 
        navigate("/book/update/:" +id,{
            state : {id: id}
        })
    }
    // const updateBook = async(book)=> {   //2.yol
    //     navigate("/book/update/"  ,{
    //         state : {book: book}
    //     })
    // }
    var render = books.map((b) => {
        return (
            <tr key={b.id}>
                <td>{b.bookname}</td>
                <td>{b.description}</td>
                <td>{b.author}</td>
                <td><img src={b.picture} alt="" height={100} /></td>
                
                 
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteBook(b.id)}
                    > Delete Book </button>
                </td>
                <td>
                    <button
                        className="btn btn-success"
                        onClick={() => updateBook(b.id)  // 1.yol
                        }
                        //   onClick={() => updateBook(b)   // 2.yol
                        // }
                    >Update Book </button>
                </td>
            </tr>
        )

    })
    return (
        <>
            <div className='row'>
                <div className='col-md-7'>
                    <h3>{heading}</h3>
                    <button className="btn btn-primary"
                    onClick={() => navigate("/book/create")}
                >New Book</button>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Book bookName</th>
                                <th>Description</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {render}
                           
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}
