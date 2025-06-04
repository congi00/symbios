import InfosHomeButtons from "../../components/InfosHomeButtons";
import InfosHomeText from "../../components/InfosHomeText";
import "../../styles/App.scss"

function InfoHomeSection() {
  return (
    <div className="info-home-section">
        <InfosHomeText />
        <InfosHomeButtons />
    </div>
  );
}

export default InfoHomeSection;
