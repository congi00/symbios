import { homepageTexts } from "../config/texts";
import RoundedButton from "./buttons/RoundedButton";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LanguageIcon from '@mui/icons-material/Language';

function InfosHomeButtons() {

    const {mainPage} = homepageTexts

    return (
      <div className="infos-home-buttons">
        <RoundedButton text={mainPage.firstButton} width={"25%"} icon={<ThumbUpOffAltIcon style={{marginRight:"15px"}}/>}></RoundedButton>
        <RoundedButton text={mainPage.secondButton} width={"32%"} marginLeft={"30px"} icon={<LanguageIcon style={{marginRight:"15px"}}/>}></RoundedButton>
      </div>
    );
  }
  
  export default InfosHomeButtons;
  