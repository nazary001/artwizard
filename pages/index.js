import Head from 'next/head';
import HomePage from './home';

export default function Home() {
  return (
    <>
      <Head>
        <title>ArtWizard</title>
        <meta name="description" content="A website about art events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <HomePage/>
    </>
  )
};
