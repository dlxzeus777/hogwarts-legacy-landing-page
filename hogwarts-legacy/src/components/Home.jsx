import Button from "./Button"
import { AiOutlineArrowDown } from 'react-icons/ai'

const Home = () => {
    return (
        <section className="home-container" id='home'>
            <h1 className="home-h1">Hogwarts Legacy</h1>
            <p className="home-p">Discover the Magical World of Harry Potter</p>
            <Button href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/" text="See more on Steam!" />
            <AiOutlineArrowDown className="down-arrow"/>
        </section>
    )
}

export default Home