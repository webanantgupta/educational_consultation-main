import React from 'react'
import { Link } from 'react-router-dom'

const PageBreadcrumb = ({ title, subTitle, link }) => {
  return (
    <>
      <section className="page-title" style={{ backgroundImage: "url(https://uniassistedu.com/wp-content/uploads/2023/04/istockphoto-1402418115-170667a.jpg)" }}>
        <div className="icon-layer-one" style={{ backgroundImage: "url(images/icons/pattern-5.png)" }} />
        <div className="auto-container">
          <h2>{title}</h2>
          <ul className="page-breadcrumb">
            <li><Link to="/">home</Link>  </li>
            {subTitle ? <li><Link to={`/${link}`}>{subTitle}</Link>  </li> : ''}
            <li>{title}</li>
          </ul>
        </div>
      </section>

    </>
  )
}

export default PageBreadcrumb
