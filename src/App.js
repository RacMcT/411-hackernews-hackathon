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

    for (let value in objects) {
      dates.push(objects[value].createDate)
    };

    let distinctDates = [...new Set([...dates])];
    distinctDates.sort();
    distinctDates.unshift('All')

    setNews(objects);
    setDateArray(distinctDates);
    let uxSelect = document.getElementById('uxSelect');
    setDateFilter = "All"
    uxSelect.value = "All";
  };

  let setClassName = (date) => {
    let news2 = { ...news };
    for (let prop in news2) {
      let newClass = news2[prop].createDate == date ? 'show' : 'hide';
      if (date == "All") newClass = "show";
      news2[prop].className = newClass;
    };
    setNews(news2);
    setDateFilter(date);
  };

/////////////////////////////

let UxInput = () => {
  return (<input id="123" type="text" value={search} onChange={e => setSearch(e.target.value)} />)
}

let UxSearchBtn = () => {
  return (
    <button onClick={loadData}>Search News</button>
  )
};

let UxSelect = () => {
  return (
    <select id="uxSelect" value={dateFilter} onChange={(event) => setClassName(event.target.value)}>
      {dateArray.map((date, i) =>
        <option value={date} key={i}>{date}</option>
      )}
    </select>
  )
};

let UxNews = () => {
  return (
    <ul>
      {Object.keys(news).map((k, index) => (
        <li key={k} className={news[k].className}>
          *created={news[k].createDate}*index={index}*key={k}*Author={news[k].author}
        </li>
      ))}
    </ul>)
};


//Create UX search functionality for our form-- use JSX objects?
 
  return (
    <div className="App">
      <header>
        <div className="nav-bar">
          <h3 className="urlTitle"> Hacker News Search</h3>
          <nav>
            <span className="navSpan" id="spanBlack">Sort By : </span>
          </nav> 
            <UxInput />

            <UxSearchBtn />

            <UxSelect />

            <div>
            <UxNews />
            </div>
            
            {/* <form onSubmit={this.handleSubmit}>
              <input className="navInput" type="text" id="searchTerm" placeholder="Search Hacker News"/>
              <input type="submit" value="Submit"/>
            </form> */}
            
            
        
        </div>
      </header>





      <footer></footer>
    </div>
  );

}



export default App;
