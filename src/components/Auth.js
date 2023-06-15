import React from 'react'
import Nav from './Nav'

function Auth({ children }) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default Auth