import React, {useState} from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { createPost } from '../actions/postActions.jsx';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../actions/postActions.jsx';


import Error from './Error.jsx'

// Styled-components styles
const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }
  .form-message.invalid{
      color: red;
  }
  .error {
    border: 2px solid #FF6565;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;
  margin : 0px auto;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

const validationSchema = yup.object().shape({
  title: yup.string()
  .min(5, "*Title must have at least 5 characters")
  .max(100, "*Title can't be longer than 100 characters")
  .required("*Title is required"),
  descripton: yup.string()
  .max(100, "*Descripton must be less than 100 characters")
  .required("*Descripton is required"),
  article: yup.string()
  .required("Article is required"),
});
const BasicForm = () => {
    const newPost = { title:"", descripton:"", article:""}
    const { posts  } = useSelector(state => ({
        posts: state.posts.items,
      }));
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        dispatch(createPost());
        // dispatch(fetchPosts());
        
    }
  return (
    <CONTAINER>
        <h1>Add Post</h1>
      <Formik initialValues={newPost} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {/* Callback function containing Formik state and helpers that handle common form actions */}
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          submitForm,
          isSubmitting }) => (
        <MYFORM className="mx-auto">
          {console.log(values)}
          <Form.Group controlId="formName">
            <Form.Label className="mr-3">Title: </Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="title"
              placeholder="Title"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.title}
              className={touched.title && errors.title ? "error" : null}
              />
              <Error touched={touched.title} message={errors.title} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Descripton: </Form.Label>
            <Form.Control
              type="text"
              name="descripton"
              placeholder="Descripton"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.descripton}
              className={touched.descripton && errors.descripton ? "error" : null}
            />
            {touched.descripton && errors.descripton ? (
                <div className="error-message">{errors.descripton}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="article">
            <Form.Label>Article: </Form.Label>
            <Form.Control
              type="text"
              name="article"
              placeholder="Article"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.article}
              />
              {touched.article && errors.article ? (
                  <div className="error-message">{errors.article}</div>
                ): null}
          </Form.Group>
          <BUTTON variant="primary" onClick={submitForm} disabled={isSubmitting}>
            Submit
          </BUTTON>
        </MYFORM>
      )}
      </Formik>
    </CONTAINER>
  );
}


export default BasicForm;