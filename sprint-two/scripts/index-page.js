"use strict";
const comments = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];
const commentList = document.querySelector(".comment__list");

function displayComment() {
  commentList.innerHTML = "";

  comments.forEach((commentOBJ) => {
    // create image for comments
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
    date.innerText = commentOBJ.date;

    // create div for name+date=header
    const commentHead = document.createElement("div");
    commentHead.classList.add("comment__head");
    commentHead.appendChild(name);
    commentHead.appendChild(date);

    // create and fill out the comment
    const commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = commentOBJ.comment;

    // create div for header+commentText= commentContenet
    const commentContent = document.createElement("div");
    commentContent.classList.add("comment__content");
    commentContent.appendChild(commentHead);
    commentContent.appendChild(commentText);

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

function addComment(name, date, comment) {
  comments.unshift({
    name: name,
    date: date,
    comment: comment,
  });
}
