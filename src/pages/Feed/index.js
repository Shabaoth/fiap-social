import Header from "../../components/Header";
import { Container } from "./styles";
import Post from "../../components/Post";

function Feed(){
    return (
    <Container>
        <Header />
        <Post />
    </Container>
    );
}

export default Feed;