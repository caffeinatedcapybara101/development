# Development

## Link to Deployed Website
[Here](https://caffeinatedcapybara101.github.io/development/) is the link to the deployed site.

## Goal and Value of the Application
The goald of this site is to aggreate a portion of all squishmallows so that people can view their different collectors details and the average prices of each of the different sizes. For anyone interesting in purchasing a squishmallow or multiple from certain categories or of certain sizes, they can easily find those here. 

## Usability Principles Considered
1. **Visibility of System Status**: Users can see which the exact properties they are filtering and sorting by. They can select the properties they want to sort and filter by and how these selections affect the squishmallows displayed. Additionally, they can clearly see and select the price that corresponds to a particular size as well as the items in their cart and total price.
2. **User Control and Freedom**: Users have the ability to clearly remove items from their cart if they accidentally add the wrong size or the wrong squishmallow. 
3. **Recognition Rather than Recall**: The sorting and filter menu stays fixed in the page. Thus, when the users are scrolling, they don't have to remember which filter or sort property they have selected (and they can easily change their selection). 
4. **Flexibility and Efficiency of Use**: The page is not cluttered with text. The squishmallow cards have only the essential information (name, category, sizes, ect.). Furthermore, the sorting and filtering menu divides the sorting and filtering categories up based on their headers, allowing for users to easily identify each. 

## Organization of Components
The following are the components I created:
1. `App.js`: This component is the wrapper for the site. It contains the header, the sorting and filtering buttons, the squishmallow cards, and the cart.
2. `Squishmallow.js`: This component is for the squishmallow card. It contains the information (name, category, year, sizes, price) for the particular squishmallow and an cart button that allows you to add the squishmallow (of the selected size and price) to the cart. 
3. `FilterButton.js`: This component is for each filter button. Each set of filters (category and size) contain filter buttons where multiple filter buttons can be selected at once. 
4. `SortButton.js`: This component is for each sort button. The sort category contains sort buttons where only one sort button can be selected at once. 
5. `Cart.js`: This component is for the cart pop-up on the right side of the screen. It is the aggreagtor component for this project. It contains the button that opens and closes the pop-up window as well as the items in the cart. Each item is a `CartItem` component. 
6. `CartItem.js`: This component is for each cart item within the cart. It contains the name of the squishmallow, the size, the quantity, the price, and a remove button. Additionally, it contains two buttons that allow the user to adjust the number of the specific item rather than completely removing it from the cart. 

## How Data is Passed Down Through Components
The squishmallow data is stored in the `squishmallowData.json` file. This file contains a list of squishmallow objects where each object contains the squishmallow's name, category, sizes, year, image path, price, and current size. This data is imported in the `App` component, stored in a state variable, and each object in this array is pased to the `Squishmallow.` component. 

The following are the state variables I used (all in the `App.js` component):
1. `squishmallows`: This variable stores all of the squishmallow objects. It is primarily responsible for maintaining the current price for the squishmallow depending on which size is selected. The filtering and sorting takes objects from this list to create the new filtered/sorted list. This list is then used to display the squishmallows on the screen -- I map through the list and pass each squishmallow object to the `Squishmallow` component. 
2. `categoryFilters`: This variable stores all of the selected category filters (fruits, fantasy, jungle). Each category is stored as a string. Once the `filterButton` component for a particular category is clicked, it updates this variable. Then, this variable is used to filter the `squishmallows` list with the squishmallows that lie in the particular category. Additionally, this list is passed into the `filterButton` component in order to determine whether the button should be checked. This particular functionality is primarily for the reset button.
3. `sizeFilters`: This variable stores all of the selected size filters (5, 12, 16, 20). Each category is stored as an integer. Once the `filterButton` component for a particular size is clicked, it updates this variable. Then, this variable is used to filter the `squishmallowsList` list with the squishmallows that are available in that size. Additionally, this list is passed into the `filterButton` component in order to determine whether the button should be checked. This particular functionality is primarily for the reset button.
4. `sortBy`: This variable stores the current sort parameter and is stored as a string. It defaults to sorting by name (alphabetical). Once the `sortButon` component is clicked, it updates this variable. Then this variable is used to sort the filtered `squishmallowsList` list by the selected parameter. Additionally, this variable is passed to the `sortButton` component in order to determine whether the button should be checked. This particular functionality ensures that only one sorting button can be selected at once.
5. `cartItems`: This variable stores a list of objects of the squishmallows that are in the cart. This variable gets passed to the `Cart` component. Within the `Cart` component, I map through this variable and create a `CartItem` component for each cart object in this list. 


## How the User Triggers State Changes
The user triggers state changes in the following manners:
1. **Clicking on the Sort Buttons**: When the user clicks on any of the sort buttons, the `sortBy` state variable gets updated with the current sort parameter. 
2. **Clicking on the Filter Buttons**: When the user click on the filter buttons in the 'Category' section, the `categoryFilters` state variable gets updated by adding the current filter parameter to the list. When the user clicks on the filter buttons in the 'Size' section, the `sizeFilters` state variable gets updated by adding the current filter parameter to the list. 
3. **Clicking on the Sizes within each Squishmallow Card**: When the user clicks on the sizes, the `squishmallows` state variable gets updated with the price corresponding to the selected size for the particular squishmallow. 
4. **Clicking on the 'Add to Cart' Button within each Squishmallow Card**: When the user click the the cart button, the `cartItems` state variable gets updated with the current squishmallow, the size, the price, and the quantity. 
5. **Clicking on the '-', '+', and 'Trash' Buttons within each Item in the Cart**: When the user clicks on these buttons, the `cartItems` state variable gets updated with the current quantity or current items in the cart. 
6. **Clicking on the 'Reset' Button**: When the user clicks on the reset button, all of the state variables get updated to their default states.
