import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene=new THREE.Scene()

const size={
  width:window.innerWidth/2,
  height:window.innerHeight
}


const camera=new THREE.PerspectiveCamera(45,size.width/size.height,0.1,100)

camera.position.z=40
scene.background = new THREE.Color(0xffffff);
scene.add(camera)


const light=new THREE.PointLight(0xffffff)
light.position.set(20,20,20)


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
  
  camera.updateProjectionMatrix()
  camera.aspect=size.width/size.height

  renderer.setSize(size.width,size.height)
})




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


const loop=()=>{
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
  
  console.log(window.innerWidth+" "+window.innerWidth/2)
 
}
loop()


//script functions
//com

const test=()=>{
  window.open('https://github.com/suneepathangay')
}

const linkedin=()=>{
  window.open('https://www.linkedin.com/in/suneet-pathangay-25137021a/')
}

const resume=()=>{
  window.open('https://media.licdn.com/dms/document/media/D4E2DAQHCpP6a8MQNQA/profile-treasury-document-pdf-analyzed/0/1697933141863?e=1706140800&v=beta&t=v-TQgeKvn_YFEiG0nBscU-WQKJBI0hPQ07WYTvfpRuE')

}

//hello

const showPop=(event)=>{
  const card = event.target;
  const popup = card.querySelector('.popup');
  popup.style.visibility = 'visible';
  popup.style.display='block'
}

const closePop=(event)=> {
  const card = event.target;
  const popup = card.querySelector('.popup');
  popup.style.visibility = 'hidden';
}

const openChess=()=>{
  window.open('https://github.com/suneepathangay/Chess')
}

const openSum=()=>{
  window.open('https://github.com/suneepathangay/Sum-News2')
}

window.test = test;
window.linkedin=linkedin;
window.resume=resume;
window.showPop=showPop;
window.closePop=closePop;
window.openChess=openChess;
window.openSum=openSum;