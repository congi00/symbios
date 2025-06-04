import * as React from "react";
import Button from "@mui/material/Button";

function RoundedButton(props) {
  const { disabled, width, height, icon, text, color, fontSize, marginLeft } = props;

  return (
    <Button
      variant="outlined"
      disabled={disabled}
      className="button-rounded"
      style={{
        width: width ? width : "fit-content",
        height: height ? height : "fit-content",
        color: color ? color : "#000",
        border: "2px solid #000",
        borderRadius: "45px",
        textTransform: "none",
        fontSize: fontSize ? fontSize : "1.5rem",
        marginLeft: marginLeft? marginLeft: '0px', 
      }}
    >
      {icon}
      {text}
    </Button>
  );
}

export default RoundedButton;
