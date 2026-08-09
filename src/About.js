import headshot from './assets/images/headshot.jpg';

const About = () => {
    return (
        <main className="About">
            <div className="about-photo">
                <img className="circular-photo" src = {headshot} alt = "Headshot" />
            </div>
            <div className="about-text">
                <p style={{fontSize: "1.5rem", fontWeight: "bold"}}>Welcome!</p>

                <p>I’m David. I recently graduated with high honors from the University of Michigan, where I double majored in Computer Science and Interdisciplinary Physics (concentrating in Quantum Computing). As a senior, I completed a thesis developing an open source dataloader for optimized LLM Pretraining under Professor Mosharaf Chowdhury, which I presented at OSDI 2026 and which won Best Poster at the Michigan Computer Science & Engineering Undergraduate Research Symposium.</p>
            
                <p>I have experience as a software engineer at Base Power Company and Everpure, a data scientist at Wilson Sporting Goods, and a researcher at Michigan and the University of Illinois at Chicago. As a student, I served as an Instructional Aide for Michigan’s Operating Systems course and founded Michigan’s first and only student organization for quantum science and quantum computing, which grew to over 600 members under my leadership.</p>
            
                <p>I am interested in scalable, distributed systems. I am especially fascinated by distributed energy resources and ML systems. I am also fond of sports analytics, quantum computing, and quantitative trading. I constantly challenge myself to expand my knowledge and skill set.</p>
            
                <p>In my free time, I love cooking and baking (including previously as a baker at Crumbl), reading narrative nonfiction, playing poker and spikeball, and cheering on Michigan’s sports teams. I also participated in and coached policy debate for 10 years.</p>
            
                <p>I’d love to hear from you! Contact me at dmcde@umich.edu</p>
            </div>
        </main>
    );
}

export default About;
