import * as React from "react"
import { Link, HeadFC } from "gatsby"
const base = require('../components/scss/base.module.scss')

const NotFoundPage = () => {
  return (
    <main className={base.container}>
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
