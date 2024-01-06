import { makeStyles } from "@material-ui/core/styles";

interface SubTitleProps {
  text: string;
}

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 26,
    paddingBottom: 20,
  },
}));

function SubTitle(props: SubTitleProps) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{paddingTop: 20, textAlign: 'left'}}>
      {props.text}
    </div>
  );
}

export default SubTitle;
