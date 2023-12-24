
const BooksListItem = ({key, book}) => {
  return (
    <div>
        <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author ? book.author : 'Unknown'}</td>
            <td>{book.isbn}</td>
            <td>{book.rating && <span>{'*'.repeat(book.rating)}</span>}</td> 
        </tr>
    </div>
  )
}

export default BooksListItem