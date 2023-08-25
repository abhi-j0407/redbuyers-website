import './Navbar.css'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className="nav-container">
              <div className="left">
                  <div className="menu-icon">
                      <img src="/public/assets/menu.svg" alt="menu" />
                  </div>
                  <div className="logo">
                      <img src="/public/assets/Logo.svg" alt="logo" />
                  </div>
              </div>
              <div className="navlinks">
                  <a href="#" className="navlink active">Sell</a>
                  <a href="#" className="navlink">Buy</a>
                  <a href="#" className="navlink">Contact Us</a>
              </div>
              <div className="right">
                  <button className="login-btn">Log In</button>
                  <button className="register-btn">Register</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar