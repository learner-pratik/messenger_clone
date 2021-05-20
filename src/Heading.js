import React from 'react'

function Heading(props) {
    return (
        <div className="app__heading">
            <h1>Messenger App</h1>
            <h2>Welcome {props.username}</h2>
        </div>
    )
}

export default Heading
