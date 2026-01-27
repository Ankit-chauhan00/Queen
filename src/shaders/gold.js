import * as THREE from "three"

export const GoldShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(1.0, 0.8, 0.3) }, // gold
    uColor2: { value: new THREE.Color(0.6, 0.4, 0.2) }, // dark gold
  },

  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      vUv = uv;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,

  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0,0.0,1.0)), 2.0);
      vec3 color = mix(uColor1, uColor2, vUv.y + sin(uTime)*0.1);
      color += fresnel * 0.4;
      gl_FragColor = vec4(color, 1.0);
    }
  `,
}
