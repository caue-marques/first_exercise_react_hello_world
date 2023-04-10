import React from 'react'

const HelloWorld = () => {

    let types = [];
    let basicString = 'Hello World!';

    types.push(basicString);
    types.push(basicString.toLowerCase());
    types.push(basicString.toUpperCase());
    types.push(basicString.split("").reverse().join(""));
    types.push(basicString.replaceAll('l', 'L'));

    return (
        <div>
            {types.map((type) => {
                return <><br/>{type}</>
            })}
        </div>
    );
}

export default HelloWorld;