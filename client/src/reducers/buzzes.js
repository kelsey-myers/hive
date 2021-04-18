export default (buzzes = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "CREATE":
      return [...buzzes, action.payload];
    default:
      return buzzes;
  }
};
