import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// console.log('chicken')
axios('http://hn.algolia.com/api/v1/items/1')
.then(res => {
  console.log(res.data.author)
})
let App = () => {

// Functions for search and useState

let [search, setSearch] = useState('');

  useEffect(() => {
    let element = document.getElementById("123");
    element.focus();
  });

  let [news, setNews] = useState({});
  let [dateArray, setDateArray] = useState([]);
  let [dateFilter, setDateFilter] = useState('All');

  // Add/Use async function for loading data from the API?
// We will need to use await for axios get calls

  async function loadData(event) {
    event.preventDefault();
    let res = await axios.get("http://hn.algolia.com/api/v1/search_by_date?query=" + search);
    let data = await res.data.hits;
    let objects = {};

    for (let i = 0; i < data.length; i++) {
      let createDate = Object.values(data[i])[0];
      let author = Object.values(data[i])[3];
      objects[i] = { createDate: createDate, author: author, className: "show" };
    };

    let dates = [];

    for (let value in objects) {
      dates.push(objects[value].createDate)
    };




//Create UX search functionality for our form-- use JSX objects?
 
  return (
    <div className="App">
      <header>
        <div className="nav-bar">
          <h3 className="urlTitle"> Hacker News Search</h3>
          <nav>
            <span className="navSpan" id="spanBlack">Sort By : </span>



            {/* TODO:Need methods inside app class/constructor */}

            <span className="navSpan" onClick={this.sortTwentyFour}>Last 24 Hours</span>
            <span className="navSpan" onClick={this.sortLastWeek}>Last Week</span>
            <span className="navSpan" onClick={this.sortLastMonth}>Last Month</span>
            <form onSubmit={this.handleSubmit}>
              <input className="navInput" type="text" id="searchTerm" placeholder="Search Hacker News"/>
              <input type="submit" value="Submit"/>
            </form>
            



            
          </nav>
        </div>
      </header>





      <footer></footer>
    </div>
  );

}
}


export default App;
