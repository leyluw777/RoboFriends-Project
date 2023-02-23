import {React} from 'react';
import 'tachyons'

const Card = ({id, name, email}) => {
    return(
        <div className='bg-light-blue dib br4  pa3 ma3 grow bw2 shadow-5'>
        <img  alt="" src={`https://robohash.org/${id}?200x200`} />
        <h2 className="text-xs font-bold underline"> {name} </h2>
        <p> {email} </p>
        </div>
    )
}

export default Card