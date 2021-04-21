import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./Styles";
import { useDispatch } from "react-redux";
import { deleteBuzz, likeBuzz } from "../../../actions/buzzes";

const Buzz = ({ buzz, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={buzz.selectedFile}
        title={buzz.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{buzz.creator}</Typography>
        <Typography variant="body2">
          {moment(buzz.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(buzz._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {buzz.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" component="h2">
        {buzz.title}
      </Typography>
      <CardContent>
        <Typography color="textSecondary" variant="body2" component="p">
          {buzz.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          className={classes.likeButton}
          size="small"
          onClick={() => dispatch(likeBuzz(buzz._id))}
        >
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {buzz.likeCount}
        </Button>
        <Button
          size="small"
          className={classes.deleteButton}
          onClick={() => dispatch(deleteBuzz(buzz._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Buzz;
