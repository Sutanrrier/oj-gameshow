function CardButton(props) {
  const classes = props.ativo
    ? "ojCardTitle active-color"
    : "ojCardTitle disabled-color";

  return (
    <div>
      <div className={classes}>{props.id}</div>
    </div>
  );
}
export default CardButton;
