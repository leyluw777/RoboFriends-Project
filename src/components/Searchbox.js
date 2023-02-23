import React from "react";


const Searchbox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input type='search' placeholder="Type robo name..."  onChange={searchChange}/>
        </div>
    )
}

export default Searchbox;