import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pathfinder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Athena v.0.2
        </h1>

        <p className={styles.description}>
        &quot;Live-ing with Hermes&quot;
        </p>

        <div className={styles.grid}>
          <a href="./test/simplify" className={styles.card}>
            <h2>Simplify &rarr;</h2>
            <p>Test the Simplify API.</p>
          </a>

          <a href="./test/summarize" className={styles.card}>
            <h2>Summarize &rarr;</h2>
            <p>Test the Summarize API.</p>
          </a>

          <a
            href="./test/dictionary"
            className={styles.card}
          >
            <h2>Dictionary &rarr;</h2>
            <p>Test the Dictionary API.</p>
          </a>

          <a
            href="./test/upload_test"
            className={styles.card}
          >
            <h2>Upload &rarr;</h2>
            <p>Test the Upload function.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
