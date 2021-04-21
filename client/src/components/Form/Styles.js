import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#B77F66",
    "&:hover": {
      background: "#fff",
    },
    fontFamily: "Yu Gothic",
    fontWeight: "bold",
    textTransform: "lowercase",
  },
  buttonClear: {
    backgroundColor: "#D2D2D2",
    fontFamily: "Yu Gothic",
    fontWeight: "bold",
    "&:hover": {
      background: "#fff",
    },
    textTransform: "lowercase",
  },
  formTitle: {
    fontWeight: "bold",
    fontFamily: "Yu Gothic",
  },
}));
