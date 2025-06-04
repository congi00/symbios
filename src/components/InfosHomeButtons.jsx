import { homepageTexts } from "../config/texts";
import RoundedButton from "./buttons/RoundedButton";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function InfosHomeButtons() {

    const {mainPage} = homepageTexts

    return (
      <div className="infos-home-buttons">
        <RoundedButton text={mainPage.firstButton} width={"25%"} icon={<ThumbUpOffAltIcon style={{marginRight:"15px"}}/>}></RoundedButton>
      </div>
    );
  }
  
  export default InfosHomeButtons;
  