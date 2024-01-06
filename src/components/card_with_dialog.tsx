import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: 30,
  },
  media: {
    height: 350,    
  },
  dialoigMedia: {
    height: 400,
    objectFit: "fill",
  },
  dialogPaper: {
    minWidth: 500,
    maxWidth: 700,
    borderRadius: "15px",
    padding: theme.spacing(2),
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  subtitle: {
    fontFamily: "Chogokuboso-Gothic",
    fontSize: "0.8rem",
    borderBottom: "1px solid rgba(32, 36, 53, 0.741)",
    textDecorationColor: "#FFFFFF",
    paddingBottom: "0.8rem",
    letterSpacing: "0.2rem",
  },
  content: {
    paddingTop: 20,
    paddingBottom: 40,
    fontSize: 18,
  },
}));

interface CardProps {
  imageSrc: string;
  title: string;
  attribute: string;
  firstContentTitle: string;
  firstContent: string;
  secondContentTitle: string;
  secondContent: string;
  thirdContentTitle?: string;
  thirdContent?: string;
  fourthContentTitle?: string;
  fourthContent?: any;
  fifthContent?: any;
}

function CardWithDialog({
  imageSrc,
  title,
  attribute,
  firstContentTitle,
  firstContent,
  secondContentTitle,
  secondContent,
  thirdContentTitle,
  thirdContent,
  fourthContentTitle,
  fourthContent,
  fifthContent,
}: CardProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia className={classes.media} component="img" src={imageSrc} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {attribute}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle className={classes.dialogTitle}>
          <Typography variant="h4">{title}</Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CardMedia className={classes.dialoigMedia} image={imageSrc} title={title} />
          <Typography color="textPrimary" gutterBottom>
            <span className={classes.subtitle}>{firstContentTitle}</span>
          </Typography>
          <Typography
            className={classes.content}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {firstContent}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            <span className={classes.subtitle}>{secondContentTitle}</span>
          </Typography>
          <Typography
            className={classes.content}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {secondContent}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            <span className={classes.subtitle}>{thirdContentTitle}</span>
          </Typography>
          <Typography
            className={classes.content}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {thirdContent}
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            <span className={classes.subtitle}>{fourthContentTitle}</span>
          </Typography>
          <Typography
            className={classes.content}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {fourthContent}
          </Typography>
          <Typography
            className={classes.content}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {fifthContent}
          </Typography>
        </DialogContent>
        <DialogActions>
          <div />
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default CardWithDialog;
