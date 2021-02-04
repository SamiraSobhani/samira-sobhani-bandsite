"use strict";

const commentList = document.querySelector(".comment__list");
const myKey = "53870676-ced4-4dbd-9e31-675986686347";
const API = "https://project-1-api.herokuapp.com";

function displayComment() {
  commentList.innerHTML = "";
  axios
    .get(`${API}/comments?api_key=${myKey}`)

    .then(function (response) {
      appendToDOM(response.data);
    })

    .catch(function (error) {
      console.log(error);
    });
}

function appendToDOM(response) {
  const sortedComments = response.sort((a, b) => b.timestamp - a.timestamp);

  sortedComments.forEach((commentOBJ) => {
    // create image for response
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("comment__imageDiv");
    const image = document.createElement("img");
    image.classList.add("comment__image");
    imageDiv.appendChild(image);

    // create and fill out the name
    const name = document.createElement("h5");
    name.classList.add("comment__name");
    name.innerText = commentOBJ.name;

    // create and fill out the date
    const date = document.createElement("span");
    date.classList.add("comment__date");

    const myDate = new Date(commentOBJ.timestamp);
    const formatedDate =
      myDate.getDate() +
      "/" +
      (myDate.getMonth() + 1) +
      "/" +
      myDate.getFullYear();

    date.innerText = formatedDate;

    // create div for name+date=header
    const commentHead = document.createElement("div");
    commentHead.classList.add("comment__head");
    commentHead.appendChild(name);
    commentHead.appendChild(date);

    // create and fill out the comment
    const commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = commentOBJ.comment;

    // create hidden commentId element
    const commentId = document.createElement("div");
    commentId.classList.add("comment__id");
    commentId.setAttribute("name", "commentId");
    commentId.innerText = commentOBJ.id;

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("comment__delete");
    deleteButton.setAttribute("type", "click");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteHandler)
   


    // create div for header+commentText= commentContenet
    const commentContent = document.createElement("div");
    commentContent.classList.add("comment__content");
    commentContent.appendChild(commentHead);
    commentContent.appendChild(commentText);
    commentContent.appendChild(deleteButton);
    commentContent.appendChild(commentId);
    // create commentItem
    const commentItem = document.createElement("li");
    commentItem.classList.add("comment__item");

    commentItem.appendChild(imageDiv);
    commentItem.appendChild(commentContent);
    commentList.appendChild(commentItem);
  });
}

displayComment();

function handleFormSubmit(event) {
  event.preventDefault();

  const myDate = new Date();
  const commentDate = myDate.toLocaleDateString();

  const commentName = event.target.name.value;

  const commentText = event.target.comment.value;

  if (commentName !== "" && commentText !== "") {
    addComment(commentName, commentDate, commentText);
    displayComment();
    event.target.reset();
  } else {
    alert("please enter a name and description");
  }
}

const conversation = document.querySelector(".conversation__form");
conversation.addEventListener("submit", handleFormSubmit);

function addComment(commentName, commentDate, commentText) {
  axios
    .post(`${API}/comments?api_key=${myKey}`, {
      name: commentName,
      comment: commentText,
    })
    .then(displayComment)

    .catch(function (error) {
      console.log(error);
    });
}

function deleteHandler(event) {
  event.preventDefault();
  const selectedId = event.target.commentId.value;
  console.log(selectedId);
  if (selectedId !== "") {
    deleteComment(selectedId);
    displayComment();
  } else {
    alert("comment has been deleted");
  }
}

function deleteComment(selectedId) {
  const id = selectedId;
  axios
    .delete(`${API}/comments/${id}?api_key=${myKey}`)
    .then(displayComment)
    .catch(function (error) {
      console.log(error);
    });
}
