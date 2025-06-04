import logo from '../images/logoSymbios.png'


function Header() {
    return (
      <div className="header">
        <div className="header-logo-container">
            <img src={logo} />
        </div>
      </div>
    );
  }
  
  export default Header;
  