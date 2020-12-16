import {Container} from './style'

const LoadingDiv = ({img, text}) => {

    return(

        <Container>
            <img src = {img} />
            <div>{text}</div>
        </Container>
    )

}

export default LoadingDiv