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
                <div className="header-button">LINKS</div>
            </div>
        </header>
    )
}

export default Header;