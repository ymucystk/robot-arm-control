"use client";
import * as React from 'react'
import Controller from './controller.js'

export default function Home() {
  const [rendered,set_rendered] = React.useState(false)
  const robotNameList = ["DOBOT Nova 2","Cobotta PRO 900","JAKA Zu 5"]
  const [robotName,set_robotName] = React.useState(robotNameList[0])
  const [j1_rotate,set_j1_rotate] = React.useState(0)
  const [j2_rotate,set_j2_rotate] = React.useState(0)
  const [j3_rotate,set_j3_rotate] = React.useState(0)
  const [j4_rotate,set_j4_rotate] = React.useState(0)
  const [j5_rotate,set_j5_rotate] = React.useState(0)
  const [j6_rotate,set_j6_rotate] = React.useState(0)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
      setTimeout(set_rendered(true),1000)
      console.log('set_rendered')
    }
  }, [typeof window])

  const controllerProps = {
    robotName, robotNameList, set_robotName,
    j1_rotate,set_j1_rotate,j2_rotate,set_j2_rotate,j3_rotate,set_j3_rotate,
    j4_rotate,set_j4_rotate,j5_rotate,set_j5_rotate,j6_rotate,set_j6_rotate
  }

  const robotProps = {
    robotNameList, robotName, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate
  }

  if(rendered){
    return (
    <>
      <a-scene>
        <a-plane position="0 0 0" rotation="-90 0 0" width="10" height="10" color="#7BC8A4" shadow></a-plane>
        <Assets/>
        <Select_Robot {...robotProps}/>
        <a-entity id="rig" position="0 -1.2 1.2">
          <a-camera id="camera" cursor="rayOrigin: mouse;"></a-camera>
        </a-entity>
      </a-scene>
      <Controller {...controllerProps}/>
    </>
    );
  }else{
    return(
      <a-scene>
        <Assets/>
      </a-scene>
    )
  }
}

const Assets = ()=>{
  return (
    <a-assets>
      {/*Cobotta PRO 900*/}
      <a-asset-items id="base_link" src="base_link.gltf" ></a-asset-items>
      <a-asset-items id="j1" src="j1.gltf" ></a-asset-items>
      <a-asset-items id="j2" src="j2.gltf" ></a-asset-items>
      <a-asset-items id="j3" src="j3.gltf" ></a-asset-items>
      <a-asset-items id="j4" src="j4.gltf" ></a-asset-items>
      <a-asset-items id="j5" src="j5.gltf" ></a-asset-items>
      <a-asset-items id="j6" src="j6.gltf" ></a-asset-items>

      {/*DOBOT Nova 2*/}
      <a-asset-items id="BASE_ASM" src="NOVA2_BASE_ASM.gltf" ></a-asset-items>
      <a-asset-items id="J1_ASM" src="NOVA2_J1_ASM.gltf" ></a-asset-items>
      <a-asset-items id="J2_ASM" src="NOVA2_J2_ASM.gltf" ></a-asset-items>
      <a-asset-items id="J3_ASM" src="NOVA2_J3_ASM.gltf" ></a-asset-items>
      <a-asset-items id="J4_ASM" src="NOVA2_J4_ASM.gltf" ></a-asset-items>
      <a-asset-items id="J5_ASM" src="NOVA2_J5_ASM.gltf" ></a-asset-items>
      <a-asset-items id="J6_ASM" src="NOVA2_J6_ASM.gltf" ></a-asset-items>

      {/*JAKA Zu 5*/}
      <a-asset-items id="JAKA_BASE" src="JAKA_Zu_5_BASE.gltf" ></a-asset-items>
      <a-asset-items id="JAKA_J1" src="JAKA_Zu_5_J1.gltf" ></a-asset-items>
      <a-asset-items id="JAKA_J2" src="JAKA_Zu_5_J2.gltf" ></a-asset-items>
      <a-asset-items id="JAKA_J3" src="JAKA_Zu_5_J3.gltf" ></a-asset-items>
      <a-asset-items id="JAKA_J4" src="JAKA_Zu_5_J4.gltf" ></a-asset-items>
      <a-asset-items id="JAKA_J5" src="JAKA_Zu_5_J5.gltf" ></a-asset-items>
      <a-asset-items id="JAKA_J6" src="JAKA_Zu_5_J6.gltf" ></a-asset-items>
    </a-assets>
  )
}

const JAKA_Zu_5 = (props)=>{
  const {visible, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate} = props
  return (
    <a-entity gltf-model="#JAKA_BASE" position="0 0 0" rotation="0 0 0" visible={visible}>
      <a-entity gltf-model="#JAKA_J1" position="0 0 0" rotation={`0 ${j1_rotate} 0`}>
        <a-entity gltf-model="#JAKA_J2" position="0 0.12 0" rotation={`0 0 ${(90 + Number(j2_rotate))}`}>
          <a-entity gltf-model="#JAKA_J3" position="0.43 0 0" rotation={`0 0 ${j3_rotate}`}>
            <a-entity gltf-model="#JAKA_J4" position="0.3685 0 0" rotation={`0 0 ${90 + Number(j4_rotate)}`}>
              <a-entity gltf-model="#JAKA_J5" position="0 -0.068 -0.114" rotation={`0 ${j5_rotate} 0`}>
                <a-entity gltf-model="#JAKA_J6" position="0 -0.0455 0.068" rotation={`0 0 ${j6_rotate}`}></a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>
  )
}

const DOBOT_Nova_2 = (props)=>{
  const {visible, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate} = props
  return (
    <a-entity gltf-model="#BASE_ASM" position="0 0 0" rotation="0 0 0" visible={visible}>
      <a-entity gltf-model="#J1_ASM" position="0 0 0" rotation={`0 ${j1_rotate} 0`}>
        <a-entity gltf-model="#J2_ASM" position="0 0.218 0" rotation={`0 0 ${j2_rotate}`}>
          <a-entity gltf-model="#J3_ASM" position="0 0.28 0" rotation={`0 0 ${j3_rotate}`}>
            <a-entity gltf-model="#J4_ASM" position="0 0.225 0" rotation={`0 0 ${j4_rotate}`}>
              <a-entity gltf-model="#J5_ASM" position="0 0.064 -0.1155" rotation={`0 ${j5_rotate} 0`}>
                <a-entity gltf-model="#J6_ASM" position="0 0.056 -0.052" rotation={`0 0 ${j6_rotate}`}></a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>
  )
}

const Cobotta_PRO_900 = (props)=>{
  const {visible, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate} = props
  return (
    <a-entity gltf-model="#base_link" position="0 0 0" rotation="-90 0 0" visible={visible}>
      <a-entity gltf-model="#j1" position="0 0 0.1" rotation={`0 0 ${j1_rotate}`}>
        <a-entity gltf-model="#j2" position="0 0 0.11" rotation={`0 ${-j2_rotate} 0`}>
          <a-entity gltf-model="#j3" position="0 0 0.51" rotation={`0 ${-j3_rotate} 0`}>
            <a-entity gltf-model="#j4" position="0 -0.03 0.3" rotation={`0 0 ${j4_rotate}`}>
              <a-entity gltf-model="#j5" position="0 0.03 0.09" rotation={`0 ${-j5_rotate} 0`}>
                <a-entity gltf-model="#j6" position="0 0.12 0.17" rotation={`0 0 ${j6_rotate}`}></a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>
  )
}

const Select_Robot = (props)=>{
  const {robotNameList, robotName, ...rotateProps} = props
  const visibletable = robotNameList.map(()=>false)
  // const robotNameList = ["DOBOT Nova 2","Cobotta PRO 900","JAKA Zu 5"]
  const findindex = robotNameList.findIndex((e)=>e===robotName)
  if(findindex >= 0){
    visibletable[findindex] = true
  }
  return (<>
    <DOBOT_Nova_2 visible={visibletable[0]} {...rotateProps}/>
    <Cobotta_PRO_900 visible={visibletable[1]} {...rotateProps}/>
    <JAKA_Zu_5 visible={visibletable[2]} {...rotateProps}/>
  </>)
}









