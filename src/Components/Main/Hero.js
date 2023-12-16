import './Hero.css'

function Hero () {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Let us find your <strong>Forever Food.</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="hero-btn">
                    <a href="/" id = "hero-search-btn">Search now</a>
                    <a href="/">Know more</a>
                </div>
            </div>
        </section>
    )
}

export default Hero