import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              <p>{book.volumeInfo.title}</p>
            ))}
          </Col>
        </Row>
       
      </Container>
    );
  }


export default Search;
