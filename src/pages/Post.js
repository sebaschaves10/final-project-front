import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { authState } = useContext(AuthContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: response.data.username,
          };
          setComments([...comments, commentToAdd]);
          setNewComment("");
          window.location.reload();
        }
      });
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id !== id;
          })
        );
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        navigate("/");
      });
  };

  const editPost = (option) => {
    // Almacena temporalmente los valores actuales antes de la edición
    const currentValue =
      option === "title" ? postObject.title : postObject.postText;

    let newValue;

    do {
      newValue = prompt(
        `Ingrese el nuevo ${option === "title" ? "título" : "texto"}`,
        currentValue // Establece el valor actual como valor predeterminado
      );

      if (newValue === null) {
        alert("Debe ingresar un texto. Por favor, inténtelo de nuevo.");
      }
    } while (newValue === null || !newValue.trim());

    const apiUrl = "http://localhost:3001/posts/";
    const endpoint = option === "title" ? "title" : "postText";

    axios
      .put(
        apiUrl + endpoint,
        {
          [option === "title" ? "newTitle" : "newText"]: newValue,
          id: id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then(() => {
        setPostObject((prevPostObject) => {
          return {
            ...prevPostObject,
            [option === "title" ? "title" : "postText"]: newValue,
          };
        });
      })
      .catch((error) => {
        console.error("Error al editar el post:", error);
      });
  };
  

  

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div
            className="title"
            onClick={() => {
              if (authState.username === postObject.username) {
                editPost("title");
              }
            }}
          >
            {" "}
            {postObject.title}{" "}
          </div>
          <div
            className="body"
            onClick={() => {
              if (authState.username === postObject.username) {
                editPost("body");
              }
            }}
          >
            {postObject.postText}
          </div>
          <div className="footer">
            <PersonIcon />
            {postObject.username}
            {authState.username === postObject.username && (
              <div className="footer-Button">
                <Button
                  variant="danger"
                  onClick={() => {
                    deletePost(postObject.id);
                  }}
                >
                  <DeleteIcon /> Borrar{" "}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Agrega un comentario..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <Button variant="info" onClick={addComment}>
            {" "}
            Comentar
          </Button>
        </div>

        <div className="listOfComments">
          {comments.map((comment, key) => (
            <Toast key={key} className="ToastComment">
              <Toast.Header>
                <strong className="me-auto"><PersonIcon />{comment.username}</strong>
              </Toast.Header>
              <Toast.Body>
                {comment.commentBody}
                {authState.username === comment.username && (
                  <div className="deleteCommentButton">
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                    >
                      <DeleteIcon/>
                      Borrar
                    </Button>
                  </div>
                )}
              </Toast.Body>
            </Toast>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;