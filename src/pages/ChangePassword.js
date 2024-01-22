import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  const changePassword = () => {
    axios
      .put(
        "http://localhost:3001/auth/changepassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          setAlertVariant("info");
          setAlertMessage(response.data.error);
        } else {
          setAlertMessage("Contraseña cambiada exitosamente.");
        }
        setShowAlert(true);
      });
  };

  return (
    <Container className="change-password mt-5">
      <h1>Cambiar Contraseña</h1>
      <Form>
        <Form.Group as={Row} controlId="oldPassword">
          <Form.Label column sm="4">
            Antigua Contraseña:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              placeholder="Antigua contraseña..."
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </Col>
        </Form.Group>
<br></br>
        <Form.Group as={Row} controlId="newPassword">
          <Form.Label column sm="4">
            Nueva Contraseña:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              placeholder="Nueva contraseña..."
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Button variant="primary" onClick={changePassword}>
          Guardar Cambios
        </Button>
      </Form>

      {showAlert && (
        <Alert
          variant={alertVariant} 
          className="mt-3"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
    </Container>
  );
}

export default ChangePassword;
