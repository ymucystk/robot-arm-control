"use client";
import * as React from 'react'
import "./controller.css";

export default function Controller(props) {
  const {robotNameList, robotName} = props
  const {j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate} = props
  const {c_pos_x, c_pos_y, c_pos_z} = props
  const {c_deg_x, c_deg_y, c_deg_z} = props
  

  const set_robotName = (e)=>{
    props.set_robotName(e.target.value)
  }

  const set_j1_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_j1_rotate(value)
  }

  const set_j2_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_j2_rotate(value)
  }

  const set_j3_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_j3_rotate(value)
  }

  const set_j4_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_j4_rotate(value)
  }

  const set_j5_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_j5_rotate(value)
  }

  const set_j6_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_j6_rotate(value)
  }

  const set_c_pos_x = (e)=>{
    let value = e.target.value
    props.set_c_pos_x(value)
  }

  const set_c_pos_y = (e)=>{
    let value = e.target.value
    props.set_c_pos_y(value)
  }

  const set_c_pos_z = (e)=>{
    let value = e.target.value
    props.set_c_pos_z(value)
  }

  const set_c_deg_x = (e)=>{
    let value = e.target.value
    props.set_c_deg_x(value)
  }

  const set_c_deg_y = (e)=>{
    let value = e.target.value
    props.set_c_deg_y(value)
  }

  const set_c_deg_z = (e)=>{
    let value = e.target.value
    props.set_c_deg_z(value)
  }

  return (
    <>
      <div className="controller" >
        <div className="mb-2">
          <select className="form-select" onChange={set_robotName} value={robotName}>
            {robotNameList.map((name,idx)=><option key={idx} value={name}>{name}</option>)}
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="j1_rotate_number" className="form-label">J1 Deg</label>
          <input type="number" className="form-control" id="j1_rotate_number" value={j1_rotate} onChange={set_j1_rotate} min={-180} max={180}/>
        </div>
        <div className="mb-2">
          <label htmlFor="j2_rotate_number" className="form-label">J2 Deg</label>
          <input type="number" className="form-control" id="j2_rotate_number" value={j2_rotate} onChange={set_j2_rotate} min={-180} max={180}/>
        </div>
        <div className="mb-2">
          <label htmlFor="j3_rotate_number" className="form-label">J3 Deg</label>
          <input type="number" className="form-control" id="j3_rotate_number" value={j3_rotate} onChange={set_j3_rotate} min={-180} max={180}/>
        </div>
        <div className="mb-2">
          <label htmlFor="j4_rotate_number" className="form-label">J4 Deg</label>
          <input type="number" className="form-control" id="j4_rotate_number" value={j4_rotate} onChange={set_j4_rotate} min={-180} max={180}/>
        </div>
        <div className="mb-2">
          <label htmlFor="j5_rotate_number" className="form-label">J5 Deg</label>
          <input type="number" className="form-control" id="j5_rotate_number" value={j5_rotate} onChange={set_j5_rotate} min={-180} max={180}/>
        </div>
        <div className="mb-2">
          <label htmlFor="j6_rotate_number" className="form-label">J6 Deg</label>
          <input type="number" className="form-control" id="j6_rotate_number" value={j6_rotate} onChange={set_j6_rotate} min={-180} max={180}/>
        </div>
      </div>
      <div className="camera-controller" >
        <span>CAMERA</span>
        <div className="mb-2">
          <label htmlFor="c_pos_x_number" className="form-label">pos X</label>
          <input type="number" className="form-control" id="c_pos_x_number" value={c_pos_x} onChange={set_c_pos_x} step={0.01}/>
        </div>
        <div className="mb-2">
          <label htmlFor="c_pos_y_number" className="form-label">pos Y</label>
          <input type="number" className="form-control" id="c_pos_y_number" value={c_pos_y} onChange={set_c_pos_y} step={0.01}/>
        </div>
        <div className="mb-2">
          <label htmlFor="c_pos_z_number" className="form-label">pos Z</label>
          <input type="number" className="form-control" id="c_pos_z_number" value={c_pos_z} onChange={set_c_pos_z} step={0.01}/>
        </div>
        <div className="mb-2">
          <label htmlFor="c_deg_x_number" className="form-label">deg X</label>
          <input type="number" className="form-control" id="c_deg_x_number" value={c_deg_x} onChange={set_c_deg_x} step={0.1}/>
        </div>
        <div className="mb-2">
          <label htmlFor="c_deg_y_number" className="form-label">deg Y</label>
          <input type="number" className="form-control" id="c_deg_y_number" value={c_deg_y} onChange={set_c_deg_y} step={0.1}/>
        </div>
        <div className="mb-2">
          <label htmlFor="c_deg_z_number" className="form-label">deg Z</label>
          <input type="number" className="form-control" id="c_deg_z_number" value={c_deg_z} onChange={set_c_deg_z} step={0.1}/>
        </div>
      </div>
    </>
    )
}
