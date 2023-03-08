// selector
export const getAllCategories = state => state.categories;
export const getFilteredPosts = ({ posts }, category) => posts
  .filter(post => post.category === category); 

// action

//action creators

const categoriesReducer = (statePart = [], action) => {
    switch(action.type) {
      default:
        return statePart;
    }
  }

  export default categoriesReducer;