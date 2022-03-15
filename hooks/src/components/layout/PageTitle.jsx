import './PageTitle.css'
import React from 'react'

const PageTitle = props => {
    return (
        <div className={`PageTitle ${props.error ? "error" : ""}`}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )

}
export default PageTitle