import { makeStyles } from '@material-ui/core/styles';

interface TitleProps {
  text: string;
}

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: 'Chogokuboso-Gothic',
    fontSize: '0.6rem',
    borderBottom: "1px solid rgba(32, 36, 53, 0.741)",
    textDecorationColor: '#FFFFFF',
    paddingBottom: '1.0rem',
    letterSpacing: '0.2rem',
  },
}));

function Title(props: TitleProps) {
  const classes = useStyles();
  return (
    <div style={{paddingTop: 40, paddingBottom: 40}}><h1 style={{textAlign: 'left'}}><span className={classes.title}>{props.text}</span></h1></div>
  );
}

export default Title;