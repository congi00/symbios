import Header from "../components/Header";
import "../styles/App.scss";
import InfoHomeSection from "./infohome/InfoHomeSection";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <InfoHomeSection />
    </div>
  );
}

export default HomePage;
