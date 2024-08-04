import {useNavigate} from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();

    const navHome = () => nav("/");

    const navExp = () => nav("/experience");

    const navWSA = () => window.open("https://www.wolverinesportsanalytics.com/blog", "mozillaTab");

    return(
        <header className="Header">
            <h1 className="header-name" onClick={navHome}>DAVID MCDERMOTT</h1>
            <div className="header-menu">
                <div className="header-button" onClick={navHome}>ABOUT</div>
                <div className="header-button" onClick={navExp}>EXPERIENCE</div>
                <div className="header-button" onClick={navWSA}>WRITING</div>
                <div className="dropdown">
                    <>LINKS</>
                    <div className="dropdown-links">
                        <a href="https://www.linkedin.com/in/dmcde/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/DMcDe" target="_blank" rel = "noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;