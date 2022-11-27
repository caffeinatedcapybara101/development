import './App.css';
import { useState } from "react";

import createSquishmallow from "./components/Squishmallow"
import FilterButton from './components/FilterButton';
import SortButton from './components/SortButton';

function App() {
  const squishmallows = require("./squishmallowData.json")

  // *************************** favorites ***************************//
  const [favoritesList, setFavoritesList] = useState([])

  const addToFavorites = (squishmallow) => {
    setFavoritesList([...favoritesList, squishmallow])
  }

  // ********************** filtering functions **********************//
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sizeFilters, setSizeFilters] = useState([])
  const [favoritesFilter, setFavoritesFilter] = useState(false)

  // Category Filters
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

  // Size Filters
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

  // Favorites Filters
  const selectFavoritesFilters = e => {
    if (e.target.checked) {
      setFavoritesFilter(true)
    } else {
      setFavoritesFilter(false)
    }
  }

  let squishmallowList = []
  console.log(favoritesList)
  if (favoritesFilter) {
    squishmallowList = favoritesList
  } else {
    squishmallowList = squishmallows
  }
  squishmallowList = squishmallowList.filter(matchesCategoryFilter)
  squishmallowList = squishmallowList.filter(matchesSizeFilter)

  // *********************** sorting functions ***********************//
  const [sortBy, setSortBy] = useState("Name")

  const selectSortBy = e => {
    setSortBy(e.target.id)
  }

  const sortFunc = (a, b) => {
    if (sortBy == "Name") {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    } else if (sortBy == "Year") {
      return a.year - b.year
    } else if (sortBy == "Collector Num") {
      return a.collectorNum - b.collectorNum
    }
  }

  squishmallowList = squishmallowList.sort(sortFunc)

  return (
    <div className="App">
      <div className="main-grid">
        {/* side filter/sort */}
        <div id="filter-sort-container">
          {/* sorting */}
          <div className="sort">
            <h3>Sort By</h3>
            <SortButton id="Name" checked={sortBy} onClick={selectSortBy} />
            <SortButton id="Year" checked={sortBy} onClick={selectSortBy} />
            <SortButton id="Collector Num" checked={sortBy} onClick={selectSortBy} />
          </div>

          {/* category filters */}
          <div className="filter">
            <h3>Category</h3>
            <FilterButton className="category" id="Fruit" onClick={selectCategoryFilters} />
            <FilterButton className="category" id="Jungle" onClick={selectCategoryFilters} />
            <FilterButton className="category" id="Fantasy" onClick={selectCategoryFilters} />
          </div>

          {/* size filters */}
          <div className="filter">
            <h3>Size</h3>
            <FilterButton className="category" id="3" onClick={selectSizeFilters} />
            <FilterButton className="category" id="5" onClick={selectSizeFilters} />
            <FilterButton className="category" id="10" onClick={selectSizeFilters} />
            <FilterButton className="category" id="12" onClick={selectSizeFilters} />
            <FilterButton className="category" id="16" onClick={selectSizeFilters} />
            <FilterButton className="category" id="20" onClick={selectSizeFilters} />
          </div>

          {/* other filters */}
          <div className="filter">
            <h3>Other</h3>
            <FilterButton className="other" id="Favorites" onClick={selectFavoritesFilters} />
          </div>
        </div>

        <div id="squishmallow-display">
          {squishmallowList.map((item) => (
            <div key={item.name}>
              {createSquishmallow(item, addToFavorites)}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
