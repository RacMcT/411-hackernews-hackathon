import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
console.log('chicken')
axios('http://hn.algolia.com/api/v1/items/1')
.then(res => {
  console.log(res.data.author)
})
let App = () => {

// Functions for search and useState

// Add/Use async function for loading data from the API?
// We will need to use await for axios get calls


//Create JSX objects/form?

// Replace boiler code in "return" section with our code for our news app
 
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



export default App;
