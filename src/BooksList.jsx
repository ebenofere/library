import './BooksList.css'
import BooksListItem from './BooksListItem';


const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0061120084",
    rating: 4.5
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    rating: 5
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    // rating: 4
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    // author: "J.D. Salinger",
    isbn: "978-0316769480",
    rating: 4.2
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0141439518",
    rating: 4.8
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0345339683",
    // rating: 4.7
  },
  {
    id: 7,
    title: "The Harry Potter series",
    author: "J.K. Rowling",
    isbn: "978-0545162074",
    rating: 4.9
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "978-0544003415",
    rating: 5
  },
  {
    id: 9,
    title: "Fahrenheit 451",
    // author: "Ray Bradbury",
    isbn: "978-1451673319",
    rating: 4.3
  },
  {
    id: 10,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    isbn: "978-0061120084",
    rating: 4.6
  }
];


function BooksList() {
  if (books.length === 0) {
    return <div>No books found.</div>
  } else {
    return (
      <table>
        <thead>
          <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
                <BooksListItem key={book.id} book={book} />
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default BooksList