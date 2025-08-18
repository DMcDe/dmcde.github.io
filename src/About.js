import headshot from './assets/images/headshot.jpg';

const About = () => {
    return (
        <main className="About">
            <div className="about-photo">
                <img className="circular-photo" src = {headshot} alt = "Headshot" />
            </div>
            <div className="about-text">
                <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>Welcome!</p>

                <p>I’m David, a senior studying Computer Science and Interdisciplinary Physics with a concentration in Quantum Computing at the University of Michigan.</p>
            
                <p>I have experience as a software engineer at Pure Storage, a data scientist at Wilson Sporting Goods, a researcher with professors at Michigan and the University of Illinois at Chicago, and a computer scientist with Traders at Michigan, Wolverine Sports Analytics, and Kappa Theta Pi.</p>
            
                <p>I’m interested in fields spanning every corner of data and technology: systems development and network programming, sports analytics, quantitative analysis and trading, emerging tech, academic research, and so much more. I constantly challenge myself to expand my knowledge and skill set.</p>
            
                <p>In my free time, I love cooking and baking (including previously as a baker at Crumbl), teaching students as an Instructional Aide in Michigan's EECS 482 (Operating Systems), playing poker and spikeball, and listening to music and podcasts. I also participated in and coached policy debate for 10 years.</p>
            
                <p>I’d love to hear from you! Contact me at dmcde@umich.edu</p>
            </div>
        </main>
    );
}

export default About;