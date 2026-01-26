import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect,useState, useRef } from "react"
import GUI from "lil-gui"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useFrame } from "@react-three/fiber"
 
gsap.registerPlugin(useGSAP,ScrollTrigger)

const Dog = () => {
  const { scene } = useGLTF("/models/queen.glb")
  const { camera, gl } = useThree();

  

  const guiRef = useRef()
  const modelRef = useRef();


  useEffect(() => {
    const gui = new GUI()
    guiRef.current = gui

    const params = {
      rotationY: 0,
      metalness: 0.9,
      roughness: 0.3,
    }

  

    // ROTATION
    gui.add(params, "rotationY", 0, Math.PI * 2).onChange((v) => {
      scene.rotation.y = v
    })

    // METALNESS
    gui.add(params, "metalness", 0, 1).onChange((v) => {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.metalness = v
        }
      })
    })

    // ROUGHNESS
    gui.add(params, "roughness", 0, 1).onChange((v) => {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.roughness = v
        }
      })
    })

    return () => gui.destroy()
  }, [scene])

  const modelColor = useRef({ r: 0, g: 0, b: 0 }) // gold

  useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.metalness = 0.73
      child.material.roughness = 0.55
      child.material.needsUpdate = true
      child.material.color.setRGB(
        modelColor.current.r,
        modelColor.current.g,
        modelColor.current.b
      )
    }
  })
}, [scene])

  useGSAP(()=>{


    const tl = gsap.timeline({
      delay: 0.5,
       scrollTrigger:{
        trigger: '#section-1',
        start: 'top top',
        endTrigger: '#section-3',
        end: 'top top',
        scrub: true,
        markers: true,
      }
    })

    tl.to(modelRef.current.position,{
      z:"-=2",
      y:"+=0.8"
    },'0').to(modelRef.current.rotation,{
      y:'+=6.3',
    },'0')

      // COLOR ANIMATION
     tl.fromTo(
    modelColor.current,
    { r: 1, g: 1, b: 1 },   // gold
    { r: 0.6, g: 0.5, b: 1.5 },         // black
    0
  )
     setTimeout(() => {
  ScrollTrigger.refresh();
}, 100);
    
  },[])

  useFrame(() => {
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.setRGB(
        modelColor.current.r,
        modelColor.current.g,
        modelColor.current.b,

      )
    }
  })
})
  
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 3, 2]} />
       {/* Lights */}
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 5, 5]} intensity={5}/>

      <group
        ref={modelRef}
        position={[0, 0, 0]}
        rotation={[0, 4.7, 0]}
        scale={1.6}
      
      >
        <primitive object={scene} />
      </group>

      

       <OrbitControls enableDamping  enablePan={false} enableZoom={false} enableRotate={false}  target={[0, 2.7, 0]} args={[camera, gl.domElement]} />
    </>
  )
}

export default Dog

useGLTF.preload("/models/queen.glb")