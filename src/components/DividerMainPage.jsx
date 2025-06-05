import { homepageTexts } from "../config/texts";
import starDiv from "../images/starDivider.png";

function DividerMainPage() {
  const { mainPage } = homepageTexts;

  return (
    <div className="divider-home-container">
      {mainPage.dividerTexts.map((e, i) => (
        <div className="divider-home-text">
          {e}
          {i< mainPage.dividerTexts.length -1 &&<img src={starDiv} alt="start divider"/>}
        </div>
      ))}
    </div>
  );
}

export default DividerMainPage;
