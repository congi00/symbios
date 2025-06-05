import { homepageTexts } from "../config/texts";
import RoundedButton from "./buttons/RoundedButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowButton from "../components/buttons/ArrowButton";
import {
  BACKGROUND_TOTAL_ROUNDED,
  TERTIARY_TEXT_COLOR,
  MAIN_TEXT_COLOR,
  SECONDARY_TEXT_COLOR
} from "../utilities/costants";

function InfosHomeButtons() {
  const { mainPage } = homepageTexts;

  return (
    <div className="infos-home-buttons">
      <RoundedButton
        text={mainPage.firstButton}
        width={"25%"}
        icon={<ThumbUpOffAltIcon style={{ marginRight: "15px" }} />}
      ></RoundedButton>
      <RoundedButton
        text={mainPage.secondButton}
        width={"32%"}
        marginLeft={"30px"}
        icon={<LanguageIcon style={{ marginRight: "15px" }} />}
      ></RoundedButton>
      <ArrowButton
        backgroundType={BACKGROUND_TOTAL_ROUNDED}
        text={homepageTexts.mainPage.moreButton}
        color={TERTIARY_TEXT_COLOR}
        backgroundColor={MAIN_TEXT_COLOR}
        width={"185px"}
        arrowColor={SECONDARY_TEXT_COLOR}
        marginLeft={"25%"}
      />
    </div>
  );
}

export default InfosHomeButtons;
