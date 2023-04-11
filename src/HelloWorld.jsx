import React from 'react'

const HelloWorld = () => {

    let types = [];
    let basicString = 'Hello World!';
    let date = new Date();

    types.push({"id": 1, "string": basicString, "date": `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`});
    types.push({"id": 2, "string": basicString.toLowerCase(), "date": `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`});
    types.push({"id": 3, "string": basicString.toUpperCase(), "date": `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`});
    types.push({"id": 4, "string": basicString.split("").reverse().join(""), "date": `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`});
    types.push({"id": 5, "string": basicString.replaceAll('l', 'L'), "date": `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`});

    return (
        <div>
            {types.map((type) => {
                return <p key={type.id}><br/>{type.string} - {type.date}</p>
            })}
        </div>
    );
}

export default HelloWorld;