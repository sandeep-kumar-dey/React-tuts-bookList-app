import React from "react"
import ReactDOM from "react-dom/client"

import "./css/index.css"
import { books } from "./data/books"
import Book from "./components/Book"

const BookList = () => {
  // const getBook = (id) => {
  //   console.log(books.find((book) => book.id === id))
  // }

  return (
    <>
      <h2 className='title'>Book List</h2>
      <section className='booklist'>
        {books.map((book, index) => {
          // return <Book key={book.id} book={book} />
          // return <Book key={book.id} {...book} getBook={getBook} />
          return <Book key={book.id} {...book} index={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
