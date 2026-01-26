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
        <div className="nav-element">DogStudio</div>
        <div className="nav-element">Reels</div>
        <div className="nav-element"></div>
      </nav>
    </section>
    <section id='section-2'></section>
    <section id='section-3'></section>
    </main>
    </>
  )
}

export default App