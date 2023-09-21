import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function EditCards({data, setData, goal}){
const [show, setShow] = useState(false);
const [startDate, setStartDate] = useState(goal.date);
const handleClose = ()=> setShow(false);
const handleShow  = ()=> setShow(true);
const titleRef = useRef(null);
const bodyRef  = useRef(null);

const buttonClickHandle =  ()=>{
const newArray = [];
data.map(card=>{
    if(card.key !== goal.key){
        newArray.push(card)
    }
});

const title = titleRef.current.value;
const body = bodyRef.current.value;
setData([ {key: goal.key, title:title,body:body,date:startDate}, ...newArray])
}


const complete = ()=>{
    const newArray = [];
data.map(card=>{
    if(card.key !== goal.key){
        newArray.push(card)
    }
});

setData([ ...newArray])
}

    return (
        <>
          <Button variant="primary m-2" onClick={handleShow}>
            Edit 
          </Button>
          <Button variant="primary m-2" onClick={complete}>
            Mark As Completed
          </Button>
    
          <Offcanvas className="bg-dark text-white" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Edit Goal</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
          <div className='p-3'>
            <p className='lead'> Title: </p>
            <input ref={titleRef} type='text' className='form-control' defaultValue={goal.title} />
          </div>
          <div className='p-3'>
            <p className='lead'> Date:</p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className='p-3'>
            <p className='lead'> Body:</p>
            <textarea ref={bodyRef} type='text' rows={5} className='form-control' defaultValue={goal.body} />
          </div>
          <div className='p-4'>
           <button className='btn btn-primary' onClick={buttonClickHandle}>
            Save Changes
           </button>
          </div>
        </Offcanvas.Body>
          </Offcanvas>
        </>
      );
    }

export default EditCards;