import React from 'react';

const Card=({id,name,email})=>{ //card accepts parameters=props
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw-2 shadow">   
            <img alt ="img" src={`https://robohash.org/${id}?200x200`}/>  
            <div>
                
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;