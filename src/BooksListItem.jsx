import PropTypes from 'prop-types'
import Rating from './Rating'

function BooksListItem({ book, onRate }) {

  // Function to handle a rating-related event
function handleRate(event) {
  // Extract the rating value from the clicked element or its closest ancestor with a 'data-value' attribute
  const rating = event.target.closest('[data-value]')?.dataset.value;
  
  // Check if a valid rating value exists
  if (rating) {
      // Call the onRate function with the book's ID and the parsed integer value of the rating
      onRate(book.id, parseInt(rating, 10));
  }
}


  return (
    <tr>
        <td>{book.title}</td>
        <td>{book.author ? book.author : 'Unknown'}</td>
        <td>{book.isbn}</td>
        <td onClick={handleRate}>
            <Rating item={book} />
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