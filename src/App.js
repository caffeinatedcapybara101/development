import './App.css';
import { useState } from "react";

import createSquishmallow from "./components/Squishmallow"
import austinImg from "./images/fruits/austin.png"
import kaldetteImg from "./images/fruits/kaldette.png"
import scarletteImg from "./images/fruits/scarlette.png"
import mauiImg from "./images/fruits/maui.png"
import ximenaImg from "./images/fruits/ximena.png"

import milaImg from "./images/fruits/mila.png"

function App() {
  const squishmallows = [
    {
      "name": "Austin", // avacado
      "category": "fruit",
      "size": [3, 5, 12, 16, 20],
      "year": 2020,
      "image": austinImg,
      "description": "Austin loves drawing aliens and dreams of one day living in space! He loves pretending that he lives on the moon or is climbing rock mountains on Mars. Austin became obsessed with outer space in school after reading a book about aliens.",
    },
    {
      "name": "Kaldette", // grapefruit
      "category": "fruit",
      "size": [5],
      "year": 2021,
      "image": kaldetteImg,
      "description": "Kaldette is bursting with talent and loves to sing throughout her day. Kaldette loves singing along to her favorite tunes while she works, but she doesn't always remember to mute her mic.",
    },
    {
      "name": "Scarlette", // strawberry
      "category": "fruit",
      "size": [3, 5, 12, 16],
      "year": 2020,
      "image": scarletteImg,
      "description": "Scarlette loves all things theatre and dance – she wants to be a costume designer AND a performer on Broadway. Her father taught her how to sew and every year she makes the costumes for her school plays. One day he’ll be front row for one of her shows!",
    },
    {
      "name": "Maui", // pineapple
      "category": "fruit",
      "size": [3, 5, 16],
      "year": 2021,
      "image": mauiImg,
      "description": "Skateboards and scuba diving are two scary things Maui is determined to conquer her fear of. She already checked roller coasters and rollerblading off her list. Maui doesn’t like to be scared so she tries to conquer her fears by trying new things.",
    },
    {
      "name": "Ximena", // mango
      "category": "fruit",
      "size": [3, 5, 12, 16],
      "year": 2021,
      "image": ximenaImg,
      "description": "Scrapbooking is how Ximena likes to spend her time. She loves to celebrate her family by creating beautiful scrapbooks for each of them. Last week she started one for her quince, one of her favorite days ever.",
    },
    // {
    //   "name": "Danny", // dinosaur
    //   "category": "classic",
    //   "size": [2, 3, 5, 7, 8, 12, 16],
    //   "year": 2018,
    //   // "image": ,
    //   // "description": ,
    // },
    // {
    //   "name": "Francis", // lion
    //   "category": "jungle",
    //   "size": [5, 7, 8, 12, 16, 20],
    //   "year": 2019,
    //   // "image": ,
    //   // "description": ,
    // },
    {
      "name": "Mila", // elephant
      "category": "jungle",
      "size": [3, 5, 7, 8, 10, 12, 16, 20],
      "year": 2017,
      "image": milaImg,
      "description": "Mila is making moves! She has found her healthy fix through creative recipe tips, which she uses to treat her friends and family!",
    }
  ]

  const [categoryFilters, setCategoryFilters] = useState([])
  const [sizeFilters, setSizeFilters] = useState([])

  const selectCategoryFilters = e => {
    if (e.target.checked) {
      setCategoryFilters([...categoryFilters, e.target.id])
    } else {
      setCategoryFilters(categoryFilters.filter(item => {
        return item !== e.target.id
      }))
    }
  }

  const matchesCategoryFilter = item => {
    // all items should be shown when no filter is selected
    if (categoryFilters.length == 0) {
      return true
    } else if (categoryFilters.indexOf(item.category) > -1) {
      return true
    } else {
      return false
    }
  }

  const selectSizeFilters = e => {
    if (e.target.checked) {
      setSizeFilters([...sizeFilters, parseInt(e.target.id)])
    } else {
      setSizeFilters(sizeFilters.filter(item => {
        return item != parseInt(e.target.id)
      }))
    }
  }

  const checkSizes = sizes => {
    for (let size of sizeFilters) {
      if (sizes.indexOf(size) < 0) {
        return false
      }
    }
    return true
  }

  const matchesSizeFilter = item => {
    // all items should be shown when no filter is selected
    if (sizeFilters.length == 0) {
      return true
    } else if (checkSizes(item.size)) {
      return true
    } else {
      return false
    }
  }

  let filteredList = squishmallows.filter(matchesCategoryFilter)
  filteredList = filteredList.filter(matchesSizeFilter)

  return (
    <div className="App">
      <div className="main-grid">
        {/* side filter/sort */}
        <div id="filter-sort-container">
          {/* sorting */}
          <div className="sort">
            <h3>Sort By</h3>
            <div>
              <input type="radio" id="alphabetical"></input>
              <label>Name</label>
            </div>
            <div>
              <input type="radio" id="year"></input>
              <label>Year</label>
            </div>
          </div>

          {/* category filters */}
          <div className="filter">
            <h3>Category</h3>
            <div>
              <input type="checkbox" id="fruit" onClick={selectCategoryFilters}></input>
              <label>Fruit</label>
            </div>

            <div>
              <input type="checkbox" id="jungle" onClick={selectCategoryFilters}></input>
              <label>Jungle</label>
            </div>
          </div>

          {/* size filters */}
          <div className="filter">
            <h3>Size</h3>
            <div>
              <input type="checkbox" id="3" onClick={selectSizeFilters}></input>
              <label>3</label>
            </div>

            <div>
              <input type="checkbox" id="5" onClick={selectSizeFilters}></input>
              <label>5</label>
            </div>

            <div>
              <input type="checkbox" id="10" onClick={selectSizeFilters}></input>
              <label>10</label>
            </div>

            <div>
              <input type="checkbox" id="12" onClick={selectSizeFilters}></input>
              <label>12</label>
            </div>

            <div>
              <input type="checkbox" id="16" onClick={selectSizeFilters}></input>
              <label>16</label>
            </div>

            <div>
              <input type="checkbox" id="20" onClick={selectSizeFilters}></input>
              <label>20</label>
            </div>
          </div>
        </div>

        <div id="squishmallow-display">
          {filteredList.map((item) => (
            <div key={item.name}>
              {createSquishmallow(item)}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
