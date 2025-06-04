import logo from '../images/logoSymbios.png'


function Header() {
    return (
      <div className="header">
        <div className="header-logo-container">
            <img src={logo} />
        </div>
        <div className='header-menu-container'>
            <div>About</div>
            <div>Dianetics</div>
            <div>Gallery</div>
            <div>Product</div>
            <div>Contact</div>
        </div>
      </div>
    );
  }
  
  export default Header;
  