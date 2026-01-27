import Dog from './components/Dog'
import { Canvas } from "@react-three/fiber"
import { RiHeartFill } from "@remixicon/react";

const App = () => {

  return (
    <>
    <main>
    <Canvas style={{height: "100vh", width:'100vw', position: 'fixed', top:0 , left: 0, zIndex: 1, backgroundImage: 'url(/images/cosmic.jpg)', backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
      <Dog />
    </Canvas>
    <section id='section-1'>
      <nav>
        <div className="nav-element">
         <h1>Dogstudio</h1>
        </div>
        <div className="nav-element "> <i  className="ri-arrow-drop-right-fill "></i><h2>Our Showeels</h2></div>
        <div className="nav-element"><i className="ri-menu-3-line"></i></div>
      </nav>
      <div className="middle">
        <div className="left">
         <h1> We <br/> Make <br/> Good <br/> Shit</h1>
        </div>
        <div className="right"></div>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className="right"><h3>Dogstudio is a multidisciplinary
creative studio at the intersection
of art, design and technology.</h3>

<p>Our goal is to deliver amazing experiences that make
people talk, and build strategic value for brands, tech,
entertainment, arts & culture</p>
</div>
      </div>
    </section>
    <section id='section-2'></section>
    <section id='section-3'></section>
    </main>
    </>
  )
}

export default App