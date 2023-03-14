import React from 'react'

const Great = ({ name }: { name?: string }) => {
    return (
        <div>
            <p>hello {name}</p>
        </div>
    )
}

export default Great