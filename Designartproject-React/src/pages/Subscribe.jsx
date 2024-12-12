import { useParams } from 'react-router-dom'

const Subscribe = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Subscribe {id}</h1>
        </div>
    )
}

export {Subscribe}
