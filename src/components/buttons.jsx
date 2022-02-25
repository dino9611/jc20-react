import "./buttons.css";
export const ButtonPrimary = (props) => {
  let className = props.className || "";
  let style = props.style || {};

  return (
    <button
      style={{
        height: "30px",
        width: "100px",
        margin: "10px 0px",
        color: "white",
        backgroundColor: "magenta",
        border: "none",
        fontSize: "20px",

        ...style,
      }}
      className={`tes ${className}`}
    >
      {props.name}
    </button>
  );
};

export const ButtonSecondary = (props) => {
  //   console.log(props);
  return (
    <button
      style={{
        height: "30px",
        width: "100px",
        margin: "10px 0px",
        color: "white",
        backgroundColor: "coral",
        border: "none",
        fontSize: "20px",
        ...props.style,
      }}
      className={`tombol ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
