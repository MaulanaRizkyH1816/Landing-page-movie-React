import "./App.css"
import NavigationBar from "./components/NavigationBar"
import "./style/landingpage.css"
import Trending from "./components/Trending"
import Intro from "./components/Intro"
import SuperHero from "./components/Superhero"

function App(){
  return(
    <div>
      <div className="myBG">
      <NavigationBar />
      <Intro/>
      </div>

      <div className="trending">
          <Trending />
      </div>

      <div className="superHero">
        <SuperHero/>
      </div>
    </div>
  )
}

export default App