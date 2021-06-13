import Header from '../components/header'
import ExtLink from '../components/ext-link'
// import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Notion Blog</h1>
        <img
          src="https://i.ibb.co/RTCB3CM/01.jpg"
          width="350"
          alt="Vercel + Notion"
        />
        <div className={sharedStyles.img_wrapper}>
          <div>
            <h4>
              Blazing Fast Notion Blog with Next.js'{' '}
              <ExtLink
                href="https://github.com/vercel/next.js/issues/9524"
                className="dotted"
                style={{ color: 'inherit' }}
              >
                SSG
              </ExtLink>
            </h4>
          </div>
          <img src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
            width="350"
            alt="astronaut"
          />
        </div>

      </div>
    </>
  )
}
