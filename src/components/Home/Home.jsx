import './Home.css'
import Hero from './Hero/Hero.jsx'
import Section01 from './Section01/Section01.jsx'
import Section02 from './Section02/Section02.jsx'
import Section03 from './Section03/Section03.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  )
}

export default Home