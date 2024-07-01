import headshot from './assets/images/headshot.jpg';

const About = () => {
    return (
        <main className="About">
            <div className="about-photo">
                <img className="circular-photo" src = {headshot} alt = "Headshot" />
            </div>
            <div className="main-text">
                <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>Welcome!</p>

                <p>I’m David, a junior studying Computer Science and Interdisciplinary Physics with a concentration in Quantum Computing at the University of Michigan.</p>
            
                <p>I have experience as a data scientist at Wilson Sporting Goods, a researcher with professors at Michigan and the University of Illinois at Chicago, and a software engineer and computer scientist with Traders at Michigan, Wolverine Sports Analytics, and Kappa Theta Pi.</p>
            
                <p>I’m interested in fields spanning every corner of data and tech: sports analytics, quantitative analysis and trading, emerging technology, academic research, and so much more. I constantly challenge myself to expand my knowledge and skill set.</p>
            
                <p>In my free time, I love cooking and baking (including previously as a baker at Crumbl), coaching policy debate, playing poker and spikeball, and listening to music and podcasts.</p>
            
                <p>I’d love to hear from you! Contact me at dmcde@umich.edu</p>
            </div>
        </main>
    );
}

export default About;