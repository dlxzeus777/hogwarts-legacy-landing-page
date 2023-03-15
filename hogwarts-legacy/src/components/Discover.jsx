import houses from '../images/houses.jpeg';
import patronous from '../images/patronous.jpeg';
import wand from '../images/wand.jpeg';

const Discover = () => {
    return (
        <section className="discover" id='tests'>
            <div className="wrapper">
                <h3 className="discover-h3">Discover your Hogwarts house</h3>
                <div className="discover-images">
                    <a href='https://my.wizardingworld.com/login' target='_blank' rel='noreferrer' className='discover-image-container'>
                        <img src={houses} className='discover-image' alt='test of hogwarts houses' />
                        <p>TEST OF HOUSES</p>
                    </a>
                    <a href='https://my.wizardingworld.com/login' target='_blank' rel='noreferrer' className='discover-image-container'>
                        <img src={patronous} className='discover-image' alt='patronous' />
                        <p>Discover your Patronus</p>
                    </a>
                    <a href='https://my.wizardingworld.com/login' target='_blank' rel='noreferrer' className='discover-image-container'>
                        <img src={wand} className='discover-image' alt='a magic wand in a hand' />
                        <p>Be chosen by your wand</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Discover