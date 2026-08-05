import About from './About'
import {Nav} from './Nav'
import Top from './Top'

export function Main() {
  return (
    <>
      <Nav />
      <main>
        <Top />
        <About />
      </main>
    </>
  )
}
