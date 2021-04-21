import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    fontFamily: "Yu Gothic",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#000",
    fontFamily: "Yu Gothic",
    fontWeight: "bold",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
