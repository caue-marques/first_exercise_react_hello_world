import React from 'react'

const HelloWorld = () => {

    //creating array to push different hello World methods
    let types = [];
    let basicString = 'Hello World!';

    types.push(basicString);


    return (
        <div>
            {types.map((type) => {
                return <><br/>{type}</>
            })}
        </div>
    );
}

export default HelloWorld;