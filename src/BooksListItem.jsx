import PropTypes from 'prop-types'
import Rating from './Rating'

function BooksListItem({ book, onRate }) {
  return (
    <tr>
        <td>{book.title}</td>
        <td>{book.author ? book.author : 'Unknown'}</td>
        <td>{book.isbn}</td>
        {/* <td>{book.rating && <span>{'*'.repeat(book.rating)}</span>}</td>  */}
        <td>
            <Rating item={book} onRate={onRate} />
        </td>
    </tr>
  )
}

BooksListItem.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    onRate: PropTypes.func.isRequired,
}

export default BooksListItem