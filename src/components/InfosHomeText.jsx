import { homepageTexts } from "../config/texts";

function InfosHomeText() {

    const {mainPage} = homepageTexts

    return (
      <div className="infos-home-text">
        <div className="infos-home-title">{mainPage.mainTitle}</div>
      </div>
    );
  }
  
  export default InfosHomeText;
  