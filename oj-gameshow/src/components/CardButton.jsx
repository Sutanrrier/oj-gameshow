function CardButton(props) {
  const classes = props.ativo
    ? "ojCardTitle active-color"
    : "ojCardTitle disabled-color";

  return (
    <div>
      <div
        style={!props.isRodada2 && props.id > 24 ? { display: "none" } : null}
        className={classes}
      >
        {props.id}
      </div>
    </div>
  );
}
export default CardButton;
