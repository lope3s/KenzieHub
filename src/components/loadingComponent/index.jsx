import {Container} from './style'
import loadingImage from './seo-bw.png'

const LoadingDiv = () => {

    return(

        <Container>
            <img src = {loadingImage} />
            <div>Loading ...</div>
        </Container>
    )

}

export default LoadingDiv