import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



const scene=new THREE.Scene()

const size={
  width:window.innerWidth,
  height:window.innerHeight
}


//takes in fielf of view and aspect ratio
const camera=new THREE.PerspectiveCamera(45,size.width/size.height,0.1,100)
//moving camera to the z axis to get that 3d view
camera.position.z=40
scene.add(camera)


const light=new THREE.PointLight(0xffffff)
light.position.set(20,20,20)

//light to see verything
const ambientLight=new THREE.AmbientLight(0xffffff)


scene.add(light,ambientLight)


const canvas=document.querySelector('.webgl')



const renderer=new THREE.WebGLRenderer({canvas})

renderer.setSize(size.width,size.height)

renderer.render(scene,camera)

const controls=new OrbitControls(camera,canvas)
controls.enableDamping=true
controls.enablePan=false
controls.enableZoom=false
controls.autoRotate=true
controls.autoRotateSpeed=1;


window.addEventListener('resize',()=>{
  size.width=window.innerWidth,
  size.height=window.innerHeight
  //update camera
  camera.updateProjectionMatrix()
  camera.aspect=size.width/size.height

  renderer.setSize(size.width,size.height)
})

const addStar=()=>{
  const geometry=new THREE.SphereGeometry(0.25,24,24)
  const material=new THREE.MeshStandardMaterial({color:0xffffff})
  const star=new THREE.Mesh(geometry,material)

  const[x,y,z]=Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100))
  star.position.set(x,y,z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)




//adding the sun

// const sphere=new THREE.SphereGeometry(8,64,64)

// const sunTexture=new THREE.TextureLoader().load('/public/images/sun.jpeg')

// const sun=new THREE.Mesh(
//     sphere,
//   new THREE.MeshBasicMaterial({map:sunTexture,opacity:1,transparent:true}),

// )
// sun.position.set(-2,0,0)


// scene.add(sun)

//adding the torus

const sphereGeo=new THREE.SphereGeometry(4,64,64)
const sphereMaterial=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true})

const sphere=new THREE.Mesh(
  sphereGeo,sphereMaterial
)

scene.add(sphere)

const geometry=new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347,wireframe:true } ); 
const torus=new THREE.Mesh(
  geometry,material
)
scene.add(torus)




// const geometry=new THREE.SphereGeometry(8,64,64)

// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
// const sphere = new THREE.Mesh( geometry, material ); 

// scene.add(sphere)








const loop=()=>{
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
  sun.rotation.y+=0.005;
 
}

loop()