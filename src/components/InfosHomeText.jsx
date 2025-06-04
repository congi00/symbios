import { homepageTexts } from "../config/texts";
import RoundedButton from "./buttons/RoundedButton";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function InfosHomeText() {

    const {mainPage} = homepageTexts

    return (
      <div className="infos-home-text">
        <div className="infos-home-title">{mainPage.mainTitle}</div>
        <div className="infos-home-subtitles">
            <div className="infos-home-motto">
                {mainPage.motto}
            </div>        
            <div className="infos-home-motto-subtitle">
                {mainPage.mottoSubTitle}
            </div>     
        </div>
      </div>
    );
  }
  
  export default InfosHomeText;
  