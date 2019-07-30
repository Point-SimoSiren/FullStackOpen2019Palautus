import React from 'react'
import Part from './part'

const Content = (props) => {

    //restrukturointia
    const { parts } = props

    return (
        <>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </>
    )
}

export default Content