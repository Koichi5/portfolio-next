import { makeStyles } from "@material-ui/core/styles";

interface WelcomeTextProps {
  text: string;
}

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "serif",
    fontSize: 30
  },
}));

function WelcomeText(props: WelcomeTextProps) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{textAlign: 'left'}}>
      {props.text}
    </div>
  );
}

export default WelcomeText;
