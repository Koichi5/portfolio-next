interface WelcomeTextProps {
  text: string;
}

function WelcomeText(props: WelcomeTextProps) {
  return (
    <div
      style={{
        textAlign: "left",
        fontFamily: "serif",
        fontSize: 30,
        paddingBottom: 40,
      }}
    >
      {props.text}
    </div>
  );
}

export default WelcomeText;
