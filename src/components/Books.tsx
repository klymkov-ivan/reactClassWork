interface Book {
  id: number;
  name: string;
  author?: string;
}

interface BooksProps {
  books: Book[];
}

function Books({ books }: BooksProps) {
  return (
    <div>
      <h1>Books of the week</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>{book.name}</p>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
