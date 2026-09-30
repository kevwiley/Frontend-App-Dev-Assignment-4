import "./Hero.css";

//will have a title, with subtitle and a button with text
function Hero({title, subtitle, calltoaction }) {
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button>{calltoaction}</button>
            </div>
        </section>
    );
}

export default Hero;