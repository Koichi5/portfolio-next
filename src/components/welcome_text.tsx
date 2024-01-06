interface WelcomeTextProps {
  text: string;
}

function WelcomeText(props: WelcomeTextProps) {
  return (
    <div style={{ textAlign: "left", fontFamily: "serif", fontSize: 30 }}>
      {props.text}
    </div>
  );
}

export default WelcomeText;
