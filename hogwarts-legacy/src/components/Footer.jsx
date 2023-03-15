import topBar from '../images/to-bar.png';
import botBar from '../images/bot-bar.png';
import logo from '../images/logo.png';


const Footer = () => {
    return (
        <footer id='info'>
            <div className="wrapper">
                <div className='footer-images-wrapper'>
                    <img src={topBar} className='footer-image' alt='hogwarts top bar' />
                    <img src={logo} className='footer-image' alt='hogwarts legacy' />
                    <img src={botBar} className='footer-image' alt='hogwarts bottom bar' />
                </div>
            </div>
        </footer>
    )
}

export default Footer