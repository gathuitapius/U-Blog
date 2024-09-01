import './Hero.sass'
import image from "../assets/blogimg.png"
export const Hero = () => {
    return <div className="hero">
        <div className="left">
            <h3>Discover, Learn, and Be Inspired</h3>
            <p>Join us on a journey of exploration and insight.<br/>
                From expert tips to inspiring stories, find the <br/>
                content that sparks your curiosity and fuels your <br/>
                passion</p>

            <button>Get started</button>
        </div>
        <div className="right">
    <img src={image} alt="Blog"/>
</div>

    </div>
}