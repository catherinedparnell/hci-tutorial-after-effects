import Head from 'next/head'
import Lottie from '../lib/lottie'
import Data from '../animations/lottieData.json'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Adobe After Effects Demonstration for Assignment 2</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center p-20 text-center">
        <h1 className="text-6xl font-bold">
          Adobe After Effects Demonstrations for Assignment 2 {' '}
          <a className="text-blue-600" href="">
            CS67: HCI
          </a>
        </h1>
        <Lottie animationData={Data} />
      </main>
      <footer className="flex flex-col h-24 w-full items-center justify-center border-t">
        <p className="font-bold">
          Catherine Parnell
        </p>
        <p>
          Dartmouth College COSC 67
        </p>
      </footer>
    </div>
  )
}
