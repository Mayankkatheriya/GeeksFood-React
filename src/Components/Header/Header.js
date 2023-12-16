import './Header.css'
import logo from '../Assets/logo.svg'
function Header () {
    return (
        <header className="header">
            <div className="nav">
                <a href = "/" className="nav-logo">
                    <img src={logo} alt="Logo" />
                    <h1>GeeksFoods</h1>
                </a>
                <div className="nav-menu">
                    <ul>
                        <li><a href="/" style = {{color: "rgb(59, 130, 246)"}}>Home</a></li>
                        <li><a href="/">Quote</a></li>
                        <li><a href="/">Resturants</a></li>
                        <li><a href="/">Foods</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-btn-container">
                    <button className="nav-btn">Get Started</button>
                    <i class='bx bx-menu'></i>
                </div>
            </div>
        </header>
    )
}

export default Header