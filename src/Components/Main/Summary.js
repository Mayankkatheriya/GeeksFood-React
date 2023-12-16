import './Summary.css'
import image from '../Assets/summary.avif';

const Summary =  () => {
    return (
        <section className="summary">
            <div className="summary-content">
                <div className="summary-img-container">
                    <img src={image} alt="image-house" />
                </div>
                <div className="summary-text-container">
                    <span></span>
                    <div className="summary-text">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                        <a href="/">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Summary;