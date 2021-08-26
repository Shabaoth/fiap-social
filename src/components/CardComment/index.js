import imgProfile from "../../assets/profile.png"
import { Card } from "./styles";

function CardComment(){
    return( 
    <Card>       
        <header>
            <img src={imgProfile} alt=""/>
            <div>
                <p>por Ciclano</p>
                <span>em 25/08/2021 às 21:00</span>
            </div>
        </header>        
        <p>Este é o comentário</p>
    </Card>
    );
}

export default CardComment;