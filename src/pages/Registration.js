import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      setShowConfirmation(true);
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <h1>¡Regístrate!</h1>
          <label><AccountCircleIcon/> Usuario: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ej. John123...)"
          />

          <label><PasswordIcon/> Contraseña: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Tu contraseña..."
          />

          <Button variant="primary" type="submit"> Registrar</Button>
        </Form>
      </Formik>

      {showConfirmation && (
        <Alert variant="success" className="mt-3">
          ¡Registro exitoso! Ahora puedes iniciar sesión.
        </Alert>
      )}
    </div>
  );
}

export default Registration;
