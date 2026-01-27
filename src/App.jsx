import Dog from './components/Dog'
import { Canvas } from "@react-three/fiber"
import { RiHeartFill } from "@remixicon/react";

const App = () => {

  return (
    <>
    <main>

      <div className="images">
        <img id='space' src="/images/space.jpg" alt="" />
        <img id='cosmic2' src="/images/cosmic2.jpg" alt="" />
        <img id='cosmic3' src="/images/cosmic3.jpg" alt="" />
        <img id='cosmic4' src="/images/cosmic4.jpg" alt="" />
        <img id='cosmic5' src="/images/cosmic5.jpg" alt="" />
        <img id='cosmic6' src="/images/cosmic6.jpg" alt="" />
        <img id='cosmic7' src="/images/cosmic7.jpg" alt="" />
      </div>
    <Canvas id='canvas-elem' style={{height: "100vh", width:'100vw', position: 'fixed', top:0 , left: 0, zIndex: 1,  }} >
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
    <section id='section-2'>
      <div  className="titles">

        <div img-title="space" className="title">
          <small>2020 - OnGoing</small>
          <h1>TomorrowLand</h1>
        </div>

        <div img-title="cosmic2" className="title">
          <small>2020 - OnGoing</small>
          <h1>Navy Peer</h1>
        </div>

        <div img-title="cosmic3" className="title">
          <small>2020 - OnGoing</small>
          <h1>MSI Chicago</h1>
        </div>

        <div img-title="cosmic4" className="title">
          <small>2020 - OnGoing</small>
          <h1>This Was Louise's Phone</h1>
        </div>

        <div img-title="cosmic5" className="title">
          <small>2020 - OnGoing</small>
          <h1>The Kenny Center</h1>
        </div>

        <div img-title="cosmic6" className="title">
          <small>2020 - OnGoing</small>
          <h1>Royal Opera Of Wallonia</h1>
        </div>

        <div img-title="cosmic7" className="title">
          <small>2020 - OnGoing</small>
          <h1>KIKK Festival 2018</h1>
        </div>

      </div>
    </section>
    <section id='section-3'></section>
    </main>
    </>
  )
}

export default App