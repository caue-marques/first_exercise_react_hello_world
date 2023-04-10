import React from 'react'

const HelloWorld = () => {

    let types = [];
    let basicString = 'Hello World!';

    types.push(basicString);
    types.push(basicString.toLowerCase());


    return (
        <div>
            {types.map((type) => {
                return <><br/>{type}</>
            })}
        </div>
    );
}

export default HelloWorld;