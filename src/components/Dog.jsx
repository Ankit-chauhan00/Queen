/* eslint-disable no-unused-vars */
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


  const modelRef = useRef();


  const modelColor = useRef({ r: 1, g: 0, b: 0 }) // gold

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


useFrame(() => {

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.setRGB(
        modelColor.current.r,
        modelColor.current.g,
        modelColor.current.b
      )
    }
  })
})


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
useGSAP(() => {

  // INTRO ANIMATION
  gsap.timeline()
    .from(modelRef.current.position, {
      x: -15,
      duration: 2,
      ease: "power3.out"
    })
    .from(modelRef.current.rotation, {
      y: 1.5,
      duration: 3.5,
      ease: "power3.out"
    }, 0)

  // SCROLL ANIMATION
  const tl = gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
      trigger: '#section-1',
      start: 'top top',
      endTrigger: '#section-3',
      end: 'top top',
      scrub: true,
    }
  })

  tl.to(modelRef.current.position, {
    z: "-=2",
    y: "+=1.5",
  }, 0)

  // COLOR → purple glow
  tl.fromTo(
    modelColor.current,
    { r: 1, g: 1, b: 1 },
    { r: 0.6, g: 0.4, b: 1 },
    0
  )

  // REFRESH
  ScrollTrigger.refresh()

}, [])

  
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 2.5, 2]} />
       {/* Lights */}
      <ambientLight intensity={1.4} />
      <directionalLight position={[5, 5, 5]} intensity={5}/>

      <group
        ref={modelRef}
        position={[0, -0.5, 0]}
        rotation={[0, 4.7, 0]}
        scale={1.8}
      
      >
        <primitive object={scene} />
      </group>
      
       <OrbitControls enableDamping  enablePan={false} enableZoom={false} enableRotate={false}  target={[0, 2.7, 0]} args={[camera, gl.domElement]} />
    </>
  )
}

export default Dog

useGLTF.preload("/models/queen.glb")