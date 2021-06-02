import { Fragment } from 'react';
import { Table, Button } from 'reactstrap';
import dateFormat from 'dateformat';

function BooksTable({books, onDelete}){
  return(
    <Fragment>
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Series</th>
            <th>Genre</th>
            <th>Date added</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => 
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.series}</td>
                <td>{book.genre}</td>
                <td>{dateFormat(book.dateAdded, "mmmm dS, yyyy")}</td>
                <td>
                  <Button
                        className = "remove-btn"
                        color = "danger"
                        size = "sm"
                        onClick = {() => onDelete(id)}
                        id={book._id}
                  >&times;</Button>
                </td>
              </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default BooksTable;