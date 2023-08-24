
// Local
import  SocialMedia                    from "../specific/SocialMedia/SocialMedia"
import IconsComponent               from '../IconsComponent/IconsComponent.js'
// Data
import socialMedia from "../../data/socialMedia.json"
// Styles
import "./Footer.css"

const Footer = ({ data }) => {

    return (
        <footer className="theme--2">
            <div className="footer-elements">
                <div className="footerSection--nav">
                    <ul className="menu-options-list">
                        <li className="footer--link"><a href="/"> Inicio </a></li>
                        <li className="footer--link"><a href="/philosophy"> Sobre Nosotros </a></li>
                        <li className="footer--link"><a href="/help"> Centro de Ayuda </a></li>
                    </ul>
                </div>
                <div className="footerSection--SocialMedia">
                    <h2 className="text--center">
                        {'Redes sociales'}
                    </h2>
                    {socialMedia && <SocialMedia data={socialMedia} componentName={"Footer"}/>}
                </div>
                <div className="footerSection--contact">
                    
                    <div>
                        <h3  >
                            <IconsComponent className="icon" icon="email"/>
                            easytrade@gmail.com
                        </h3>
                    </div>

                    <div>
                        <h3  >
                            <IconsComponent className="icon" icon="phone"/>
                            0412-8509595
                        </h3>
                    </div>
                </div>
            </div>
        </footer>);
}

export default Footer;