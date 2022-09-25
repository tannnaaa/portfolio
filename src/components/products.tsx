import * as React from "react"
const base = require("../components/scss/base.module.scss")
const page = require("../components/scss/page.module.scss")

interface info {
  title: string,
  detail: string,
  time: number,
  url?: string
};

const ProductPage = () => {
  return (
    <div>
      <div className={page.border}></div>
      <article>
        <h2 className={page.title}>制作物</h2>
        <div className={`${base.flex} ${page.wrap}`}>
          { products.map((x, index) => {
            return <div className={page.product_block} key={index}>
              <div>
              <h2 className={page.sentence}><a href={x.url}>{x.title}</a></h2>
              <p className={page.sentence}>{x.detail}</p>
              <p className={page.sentence}>{x.time}~</p>
              </div>
            </div>
          })
          }
        </div>
      </article>
    </div>
  )
}

const products: info[] = [
  {title: 'animation-and-particles', detail: 'スクリーンセーバー風webページ', url: 'https://github.com/tannnaaa/animation-and-particles', time: 2020},
  {title: 'portfolio', detail: 'ポートフォリオ作成', time: 2022}
];

export default ProductPage
