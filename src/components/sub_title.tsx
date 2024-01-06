interface SubTitleProps {
  text: string;
}

function SubTitle(props: SubTitleProps) {
  return (
    <div
      style={{
        paddingTop: 20,
        textAlign: "left",
        fontFamily: "serif",
        fontWeight: "bold",
        fontSize: 26,
        paddingBottom: 20,
      }}
    >
      {props.text}
    </div>
  );
}

export default SubTitle;
