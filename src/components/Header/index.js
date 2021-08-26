import { Container, IconSignOut } from "./styles";
import imgLogo from "../../assets/logo.png"
import imgProfile from "../../assets/profile-standard.png"

function Header(){
    return(
        <Container>
            <div>
                <img src={imgLogo} alt="" id="logo"/>
                <img src={imgProfile    } alt="" />
                <p>Fulano</p>
            </div>
            <IconSignOut />
        </Container>
    );
}

export default Header;