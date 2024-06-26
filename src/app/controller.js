"use client";
import * as React from 'react'
import "./controller.css";

export default function Controller(props) {
  const {robotNameList, robotName, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate} = props

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

  return (
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
  )
}
