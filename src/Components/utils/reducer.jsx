export const reducerTheme = (state, action) => {
  switch (action.type){
    case "THEME_LIGHT":
        return {
            theme:(state.theme = ""),
        };
    case "THEME_DARK":
        return {
            theme:(state.theme = "dark"),
        };
        default:
            throw new Error();
}
};
  
  export const reducerFav = (state, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return {
          data: [...state.data, action.payload],
        };
        case "REMOVE_ALL_FAV":
          return {
            data: [],
          };
        case "REMOVE_FROM_CART":
          return state.filter((item) => item.name !== action.item.name);
        default:
          throw new Error();
    }
  };