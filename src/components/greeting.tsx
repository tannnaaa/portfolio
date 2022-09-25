import * as React from "react"
const base = require("../components/scss/base.module.scss")
const page = require("../components/scss/page.module.scss")

const GreetPage = () => {
  return (
      <div>
      <div className={page.border}></div>
        <article>
          <h2 className={page.title}>わたしのこと</h2>
          <div className={base.flex}>
          <div className={page.sentence_block}>
            <p className={page.sentence}>ほぼJavaScriptメインのプログラマー</p>
            <p className={page.sentence}>独学でwebデザイン勉強中。</p>
          </div>
          </div>
        </article>
      </div>
  )
}

export default GreetPage

