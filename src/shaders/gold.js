import * as THREE from "three";

export const GoldShader = {
  uniforms: {
    uTime: { value: 0 },

    // Gold color tones
    uColor1: { value: new THREE.Color(1.0, 0.78, 0.25) },
    uColor2: { value: new THREE.Color(0.55, 0.35, 0.15) },
  },

  // =========================
  // VERTEX SHADER
  // =========================
  vertexShader: `
    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vUv = uv;

      // Correct normal for lighting & fresnel
      vNormal = normalize(normalMatrix * normal);

      // Subtle animated distortion (metal shimmer)
      vec3 pos = position;
      float wave = sin(pos.y * 6.0 + uTime * 1.2) * 0.003;
      pos += normal * wave;

      vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
      vWorldPosition = worldPosition.xyz;

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,

  // =========================
  // FRAGMENT SHADER
  // =========================
  fragmentShader: `
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {

    vec3 normal = normalize(vNormal);

    // Fake light direction (like directionalLight)
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.8));
    float light = max(dot(normal, lightDir), 0.0);

    // Fresnel (edge glow)
    float fresnel = pow(
      1.0 - dot(
        normal,
        normalize(cameraPosition - vWorldPosition)
      ),
      3.0
    );

  float specular = pow(
  max(dot(reflect(-lightDir, normal),
  normalize(cameraPosition - vWorldPosition)), 0.0),
  32.0
);

color += specular * 0.8;

    // Gold base color
    vec3 color = mix(uColor1, uColor2, vUv.y);

    // Apply lighting
    color *= light * 1.2 + 0.25;
    color += fresnel * 0.6;

    gl_FragColor = vec4(color, 1.0);
  }
`

};
