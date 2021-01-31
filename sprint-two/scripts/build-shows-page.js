"use strict";

const showList = document.getElementById("showList");
const shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },
];
shows.forEach((showObj) => {
  //create date label
  const dateLabel = document.createElement("h5");
  dateLabel.classList.add("show__labelD");
  dateLabel.innerText = "DATE";
  // add data to date label
  const date = document.createElement("h6");
  date.classList.add("show__date");
  date.innerText = showObj.date;

  //create venue label
  const venueLabel = document.createElement("h5");
  venueLabel.classList.add("show__labelV");
  venueLabel.innerText = "VENUE";
  // add data to venue label
  const venue = document.createElement("h6");
  venue.classList.add("show__venue");
  venue.innerText = showObj.venue;

  //create location lable
  const locationLabel = document.createElement("h5");
  locationLabel.classList.add("show__labelL");
  locationLabel.innerText = "LOCATION";
  // add data to location lable
  const location = document.createElement("h6");
  location.classList.add("show__location");
  location.innerText = showObj.location;

  // creat button
  const myButton = document.createElement("button");
  myButton.classList.add("show__button");
  myButton.innerText = "BUY TICKETS";

  // create dvider line
  const myLine = document.createElement("div");
  myLine.classList.add("show__divider");
  // create li
  const showItem = document.createElement("li");
  showItem.classList.add("show__item");

  showItem.appendChild(dateLabel);
  showItem.appendChild(date);
  showItem.appendChild(venueLabel);
  showItem.appendChild(venue);
  showItem.appendChild(locationLabel);
  showItem.appendChild(location);
  showItem.appendChild(myButton);
  showItem.appendChild(myLine);
  showList.appendChild(showItem);
});
