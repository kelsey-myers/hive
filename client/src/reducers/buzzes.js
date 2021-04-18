export default (buzzes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...buzzes, action.payload];
    case "UPDATE":
    case "LIKE":
      return buzzes.map((buzz) =>
        buzz._id === action.payload._id ? action.payload : buzz
      );
    case "DELETE":
      return buzzes.filter((buzz) => buzz._id !== action.payload);
    default:
      return buzzes;
  }
};
