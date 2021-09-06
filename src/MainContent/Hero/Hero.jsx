import './Hero.css';
import Header from './Header/Header';

const Hero = () => {
    return (
        <div className='hero main-grid'>
            <div className='hero-background-img'>
                <img src="./image-hero.jpg" alt="" />
            </div>
            <Header />

            <div className='hero-content'>
                <p className='hero-content-heading'>
                    <span className='hero-content-heading-words'>IMMERSIVE</span>
                    <span className='hero-content-heading-words'>EXPERIENCES</span>
                    <span className='hero-content-heading-words'>THAT</span>
                    <span className='hero-content-heading-words'>DELIVER</span>
                </p>
            </div>
        </div>
    )
}

export default Hero
