import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';

function CreatePost() {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    postText: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required(),

  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data, {
      headers: {accessToken: localStorage.getItem("accessToken") },
    })
    .then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
        <h1>¡Crea tu post!</h1>
          <label><TitleIcon/> Título: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ej. Título...)"
          />
          <label><DescriptionIcon/> Descripción: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ej. Descripción...)"
          />
          <button type="submit"> Crear Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
