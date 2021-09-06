import './Footer.css';
import '../../Components/ButtonsStyling.css';

const Footer = () => {
    return (
        <footer className='footer main-grid'>
           <div className='footer-content'>
               <div className='footer-logo-nav-links'>
                    <h1 className='footer-logo'>loopstudios</h1>
                    <div className='footer-nav-links'>
                        <button className='transparent-white-btn'>About</button>
                        <button className='transparent-white-btn'>Careers</button>
                        <button className='transparent-white-btn'>Events</button>
                        <button className='transparent-white-btn'>Products</button>
                        <button className='transparent-white-btn'>Support</button>
                    </div>
               </div>

               <div className='footer-social-copyright'>
                    <div className='footer-social'>
                        <div><img src="./icon-facebook.svg" alt="" /></div>
                        <div><img src="./icon-twitter.svg" alt="" /></div>
                        <div><img src="./icon-pinterest.svg" alt="" /></div>
                        <div><img src="./icon-instagram.svg" alt="" /></div>
                    </div>
                    <p className='footer-copyright'>
                        &copy; 2021 loopstudios. All rights reserved.
                    </p>
               </div>
           </div> 
        </footer>
    )
}

export default Footer
