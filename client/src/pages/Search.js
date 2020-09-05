import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import {Input} from "../components/Form";

import API from "../utils/API";

function Search(props) {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
 
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.search(formObject.title)
        .then(res => {
          console.log (res)
          setBooks(res.data.items)})
        .catch(err => console.log(err));
    }
  };
  function saveBook(title,authors,description, image, link) {
    API.saveBook({title,authors,description, image, link})
      .then(res => {console.log("saveBook")})
      .catch(err => console.log(err));
  }
  // title: { type: String, required: true },
  // authors: [{ type: String, required: true }],
  // description: String,
  // image: String,
  // link: String,
  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success" onClick={handleFormSubmit}>
    Search </button>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            {books.map(book =>(
              <div className="row">
              <div className="col s12">
                  <div className="card light-blue darken-1">
                      <div className="card-content white-text">
                          <span className="card-title">{book.volumeInfo.title}</span>
                          <p>{book.volumeInfo.authors.join()}</p>
                          <p>{book.volumeInfo.description}</p>
                          {/* <p>{book.volumeInfo.authors}</p> */}
                      </div>
                      <div className="card-action">
                      <a className="btn-floating btn-large waves-effect waves-light red" href={book.volumeInfo.infoLink}><i className="material-icons">link</i></a>
                          <a className="btn-floating btn-large waves-effect waves-light red" onClick={()=>saveBook(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.infoLink)}><i className="material-icons">save</i></a>
                      </div>
                  </div>
              </div>
          </div>
            ))}
          </Col>
        </Row>
       
      </Container>
    );
  }


export default Search;
