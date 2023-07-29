// const Book = ({ img, author, title, getBook, id }) => {
const Book = ({ img, author, title, index }) => {
  // const getSingleBook = () => {
  //   getBook(id)
  // }

  return (
    <>
      <article className='book'>
        <span className='number'>{`#${index + 1}`}</span>
        <img src={img} alt='Some book' />
        <h2>{title}</h2>
        {/* <button onClick={() => getBook(id)}>click me</button> */}
        <button>click me</button>
        <h4>{author.toUpperCase()}</h4>
      </article>
    </>
  )
}

export default Book
