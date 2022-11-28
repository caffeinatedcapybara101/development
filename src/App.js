import './App.css';
import { useState } from "react";

import Squishmallow from "./components/Squishmallow"
import FilterButton from './components/FilterButton';
import SortButton from './components/SortButton';
import SideNav from './components/SideNav';

function App() {
  const squishmallowData = require("./squishmallowData.json")
  const prices = {
    5: 20.95,
    12: 30.62,
    16: 35.55,
    20: 42.69
  }

  // ************** changes in squishmallow data (price) **************//
  const [squishmallows, setSquishmallows] = useState(squishmallowData)

  const changeSquishmallowData = (name, size) => {
    let updated = []
    for (let squish of squishmallows) {
      if (squish.name == name) {
        squish.price = prices[size]
        squish.currSize = size
      }
      updated = [...updated, squish]
    }
    setSquishmallows(updated)
  }

  // ********************** filtering functions **********************//
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sizeFilters, setSizeFilters] = useState([])

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

  let squishmallowList = squishmallows.filter(matchesCategoryFilter)
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

  // ************************ cart functions ************************//
  const [cartItems, setCartItems] = useState([])

  const addToCart = (name, size, price) => {
    let updated = []
    const newItem = name + ", " + size
    let found = false
    for (let cartItem of cartItems) {
      if (cartItem.item == newItem) {
        found = true
        cartItem.price = cartItem.price + price
        cartItem.number = cartItem.number + 1
      }
      updated = [...updated, cartItem]
    }

    if (found !== true) {
      const newCartItem = {
        "item": newItem,
        "price": price,
        "number": 1,
        "basePrice": price
      }
      updated = [...updated, newCartItem]
    }
    setCartItems(updated)
  }

  const adjustCart = (item, basePrice, adjust, numRemoved) => {
    let updated = []
    for (let cartItem of cartItems) {
      if (cartItem.item == item) {
        if (adjust == "-") {
          cartItem.price = cartItem.price - basePrice
          cartItem.number = cartItem.number - numRemoved
        } else {
          cartItem.price = cartItem.price + basePrice
          cartItem.number = cartItem.number + numRemoved
        }
      }

      if (cartItem.number !== 0) {
        updated = [...updated, cartItem]
      }
    }
    setCartItems(updated)
  }

  return (
    <div className="App">
      <header>
        <h1>Squishmallows</h1>
        <SideNav placement="end" name="end" items={cartItems} adjust={adjustCart} />
      </header>
      <div className="main-grid">
        {/* side filter/sort */}
        <div id="filter-sort-container">
          {/* sorting */}
          <div className="sort">
            <h3>Sort By</h3>
            <SortButton id="Name" checked={sortBy} onClick={selectSortBy} />
            <SortButton id="Year" checked={sortBy} onClick={selectSortBy} />
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
            <FilterButton className="category" id="5" onClick={selectSizeFilters} />
            <FilterButton className="category" id="10" onClick={selectSizeFilters} />
            <FilterButton className="category" id="12" onClick={selectSizeFilters} />
            <FilterButton className="category" id="16" onClick={selectSizeFilters} />
            <FilterButton className="category" id="20" onClick={selectSizeFilters} />
          </div>
        </div>

        <div id="squishmallow-display">
          {squishmallowList.map((item) => (
            <div key={item.name}>
              <Squishmallow item={item} change={changeSquishmallowData} addCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
