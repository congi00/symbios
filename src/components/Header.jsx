import logo from '../images/logoSymbios.png'
import { homepageTexts } from '../config/texts';

function Header() {

    const {
        headerMenu
    } = homepageTexts

    return (
      <div className="header">
        <div className="header-logo-container">
            <img src={logo} />
        </div>
        <div className='header-menu-container'>
            {headerMenu.voices.map((e) =>
                <div>{e}</div>
            )}
        </div>
      </div>
    );
  }
  
  export default Header;
  