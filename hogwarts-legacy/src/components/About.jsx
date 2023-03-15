import Button from "./Button"
import Artintelart from '../images/Artintelart.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="wrapper about-container">
                <div className="about-hero">
                    <img src={Artintelart} alt='artintelart' className="about-image" />
                </div>
                <div className="about-text">
                    <h2 className="about-h2">Hogwarts Legacy</h2>
                    <p className="about-p">Hogwarts Legacy is an open world action RPG set in the world presented in the Harry Potter books. Now you can take control of the action and create your own adventure. Discover what it's like to live at Hogwarts as you make allies, fight Dark wizards and ultimately decide the fate of the wizarding world. Your legacy is what you make of it.</p>
                    <div className="about-buttons">
                        <Button href='https://www.hogwartslegacy.com/' text='Website' />
                        <Button href='https://www.youtube.com/watch?v=BtyBjOW8sGY&ab_channel=HogwartsLegacy' text='Trailer' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About