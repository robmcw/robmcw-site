import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rob McWhirter</title>
        <meta name="description" content="Rob McWirter's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>

        <div id="content">

          <header>
            <div className="logo"><h1>Rob McWhiter</h1></div>
            <nav>
              <a href="https://medium.com/@Rob_McW" target="blank">Writing </a>
            </nav>
          </header>
          <main>
            <section className="intro">
              <p><span className="dropcap">I</span>’m Rob, an app founder, product manager, and web hobbyist based in Barcelona and London. </p>
              <p>I love making web products like the Slackbot, <a href="https://revelapp.io" target="blank">Revel</a> and SaaS app <a href="https://twineapp.com" target="blank">Twine</a> whilst my role at <a
                href="https://www.browserlondon.com" target="blank"> Browser London</a> sees me guide established companies and startups to create the great software to solve real
					problems.
				</p>
              <p>I also have a knack for creating explainer videos for new tools, like the one I did for <a
                href="https://youtube.com" target="blank">Common Surface</a>.
				</p>
              <p>Finally, I’m a big fan of learning new things and picking up new hobbies – a dangerous combination.
              At
              the moment I’m studying the Catalan language, dabbling in React/Next.js and spending the odd day
              making
					artisanal cheese. </p>
            </section>
          </main>
          <aside>
            <div className="robpic">
              <Image src="/rob.jpg" layout="fill" objectFit="cover" objectPosition="35% 0" alt="Photo of Rob smiling with sunglasses" />
            </div>
          </aside>
          <footer>
            <div className="footer-text">
              <p>Email me at <u></u>rob@robmcw.com or see more on <a href="https://www.linkedin.com/in/robertmcwhirter/"
                target="blank">LinkedIn</a>.</p>
              <p className="ps">Site by Rob. Code on <a href="https://github.com/robmcw" target="blank">GitHub</a>. I
					reserve the right
					to put snowflakes, confetti showers or god awful animations on
					this site.</p>
            </div>
          </footer>
        </div>
      </body>
    </div>
  )
}
