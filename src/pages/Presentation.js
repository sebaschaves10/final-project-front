import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Presentation() {
  return (
    <Container className="mt-5" id='Presentation'>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center mb-4">Bienvenido a Crazy Posts</h1>
          <p className="text-center">
            Crazy Posts es tu espacio en línea para expresarte de manera libre y
            creativa. En nuestra plataforma, te ofrecemos la libertad de
            compartir tus pensamientos, ideas y experiencias en publicaciones
            que van desde lo cómico hasta lo profundo. ¿Eres amante del humor
            absurdo, o prefieres compartir reflexiones más serias? ¡En Crazy
            Posts, todo es posible!
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={6}>
          <h2 className="text-center mb-4">Características Principales</h2>
          <ul>
            <li>
              <strong>Registro e Inicio de Sesión:</strong> Únete a nuestra
              comunidad creando una cuenta personalizada. Inicia sesión
              fácilmente para acceder a todas las funciones de Crazy Posts.
            </li>
            <li>
              <strong>Publicaciones Creativas:</strong> Sé el autor de tus
              propias publicaciones. Desde historias divertidas hasta
              pensamientos profundos, compartimos la diversidad de tu
              creatividad.
            </li>
            <li>
              <strong>Interacción Social:</strong> Dale un toque especial a las
              publicaciones que te encanten con nuestra función de "Me Gusta".
              La interacción social es clave, así que siéntete libre de comentar
              y conectar con otros usuarios.
            </li>
            <li>
              <strong>Edición y Eliminación:</strong> Tu voz es importante, y es
              por eso que te damos el control total. Edita tus publicaciones
              para reflejar tus cambios y elimina aquellas que ya no representan
              tu visión.
            </li>
          </ul>
        </Col>

        <Col lg={6}>
          <h2 className="text-center mb-4">Cómo Empezar</h2>
          <ol>
            <li>
              <strong>Registro:</strong> Crea tu cuenta en minutos
              proporcionando algunos detalles básicos. ¡La comunidad de Crazy
              Posts te espera!
            </li>
            <li>
              <strong>Explora y Publica:</strong> Descubre las fascinantes
              publicaciones de otros usuarios y comparte las tuyas propias. Ya
              sea que busques risas, inspiración o debates, hay un espacio para
              ti.
            </li>
            <li>
              <strong>Interactúa:</strong> Haz amigos, da "Me Gusta", y deja
              comentarios en las publicaciones que te llamen la atención. La
              diversidad de perspectivas hace que Crazy Posts sea un lugar
              vibrante y emocionante.
            </li>   
            <li>
              <strong>Personalización:</strong> Podras cambiar tu contraseña de perfil. Crazy Posts es tu plataforma; hazla tuya.
            </li>
          </ol>
        </Col>
      </Row>

      <h1 className="text-center mb-4">Herramientas utlizadas</h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/node.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              Entorno de ejecución del lado del servidor para construir
              aplicaciones web eficientes en JavaScript.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/react.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              Biblioteca de JavaScript para crear interfaces de usuario
              interactivas y dinámicas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/mysql.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>
              Sistema de gestión de bases de datos relacional de código abierto
              y confiable.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bootstrap.jpg"
            alt="Four slide"
          />
          <Carousel.Caption>
            <p>
              Biblioteca que combina las funcionalidades de React y Bootstrap
              para el desarrollo rápido de interfaces web atractivas y
              responsivas.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Presentation;
