import * as React from "react"
import type { HeadFC } from "gatsby"
import GreetPage from "../components/greeting"
import ProductPage from "../components/products"
import SkillPage from "../components/skill"
const base = require("../components/scss/base.module.scss")
const page = require("../components/scss/page.module.scss")

const year = new Date().getFullYear();

const IndexPage = () => (
  <main>
    <div className={page.top}>
      <div className={`${base.flex} ${base.container} ${page.row_reverse}`}>
        <div className={page.line}></div>
        <div className={page.line}></div>
      </div>
    </div>
    <div className={base.container}>
      <GreetPage></GreetPage>
      <ProductPage></ProductPage>
      <SkillPage></SkillPage>
      <div className={base.copyright}>
        <p>copyright {year} created by tana.</p>
      </div>
    </div>
  </main>
)

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>tana portfolio</title>
    <link rel="icon" href="data:image/svg+xml;charset=utf8,%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2248%22%20width%3D%2248%22%3E%20%3Cpath%20d%3D%22M17.7%2028.85q-1.15%200-1.925-.775Q15%2027.3%2015%2026.15t.775-1.925q.775-.775%201.925-.775t1.925.775q.775.775.775%201.925t-.775%201.925q-.775.775-1.925.775Zm12.65%200q-1.15%200-1.925-.775-.775-.775-.775-1.925t.775-1.925q.775-.775%201.925-.775t1.925.775q.775.775.775%201.925t-.775%201.925q-.775.775-1.925.775ZM24%2041q7.1%200%2012.05-4.95Q41%2031.1%2041%2024q0-1.3-.2-2.55-.2-1.25-.5-2.3-1%20.25-2.175.35-1.175.1-2.425.1-4.85%200-9.175-2-4.325-2-7.375-5.7-1.7%204.05-4.875%207.075Q11.1%2022%207%2023.65V24q0%207.1%204.95%2012.05Q16.9%2041%2024%2041Zm0%203q-4.15%200-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4%2028.15%204%2024t1.575-7.8Q7.15%2012.55%209.85%209.85q2.7-2.7%206.35-4.275Q19.85%204%2024%204t7.8%201.575q3.65%201.575%206.35%204.275%202.7%202.7%204.275%206.35Q44%2019.85%2044%2024t-1.575%207.8q-1.575%203.65-4.275%206.35-2.7%202.7-6.35%204.275Q28.15%2044%2024%2044ZM19.4%207.65q4.4%205.15%208.125%207.05%203.725%201.9%208.175%201.9%201.2%200%201.9-.05t1.55-.3Q36.9%2012.2%2033.025%209.6%2029.15%207%2024%207q-1.35%200-2.55.2-1.2.2-2.05.45ZM7.45%2020.1q2.4-.9%205.475-4.075Q16%2012.85%2017.3%208.35q-4.35%201.95-6.575%204.975Q8.5%2016.35%207.45%2020.1ZM19.4%207.65Zm-2.1.7Z%22%20fill%3D%22%23acbfbf%22%20%2F%3E%20%3C%2Fsvg%3E"/>
  </>
)
