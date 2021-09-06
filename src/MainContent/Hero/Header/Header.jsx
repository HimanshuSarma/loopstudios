import './Header.css';
import '../../../Components/ButtonsStyling.css';
const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-logo'>loopstudios</h1>

            <div className='header-nav-btns'>
                <button className='transparent-white-btn header-nav-btn'>About</button>
                <button className='transparent-white-btn header-nav-btn'>Careers</button>
                <button className='transparent-white-btn header-nav-btn'>Events</button>
                <button className='transparent-white-btn header-nav-btn'>Products</button>
                <button className='transparent-white-btn header-nav-btn'>Support</button>
            </div>

            <div className='header-ham-menu'>
                <div className='header-ham-menu-top'></div>
                <div className='header-ham-menu-mid'></div>
                <div className='header-ham-menu-bottom'></div>
            </div>
        </header>
    )
}

export default Header
