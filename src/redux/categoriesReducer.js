// selector
export const getAllCategories = state => state.categories;
export const getCategoriesByTitle = ({ categories }, title) => 
  categories.find(category => category.title === title);

// action

//action creators

const categoriesReducer = (statePart = [], action) => {
    switch(action.type) {
      default:
        return statePart;
    }
  }

  export default categoriesReducer;