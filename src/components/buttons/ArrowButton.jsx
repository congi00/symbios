import * as React from "react";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { BACKGROUND_TOTAL_ROUNDED } from "../../utilities/costants";

function ArrowButton(props) {
  const {
    text,
    backgroundType,
    color,
    arrowColor,
    backgroundColor,
    fontSize,
    marginLeft,
    disabled,
    width,
    height,
  } = props;

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
        backgroundColor: backgroundColor? backgroundColor : undefined,
        borderRadius:
          backgroundType === BACKGROUND_TOTAL_ROUNDED ? "100%" : "45px",
        textTransform: "none",
        fontSize: fontSize ? fontSize : "1.5rem",
        marginLeft: marginLeft ? marginLeft : "0px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {text && <div className="text_container_arrow_button">{text}</div>}

      <NorthEastIcon style={{ fontSize: "6rem", color: arrowColor }} />
    </Button>
  );
}

export default ArrowButton;
