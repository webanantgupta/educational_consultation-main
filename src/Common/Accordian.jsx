import AccordianCard from "./AccordianCard";
import { useState } from 'react';

const Accordian = ({faq}) => {
// console.log(faq,'uuu')
    //this is for data showing
const [show,setShow] = useState("");
const [hide,setHide] = useState(false);

const handleClick = (value) =>{
    console.log(value);
    setShow(value)
    setHide(!hide);

}


  return (
    <div className="accordian_container">
      <AccordianCard
      handleClick={handleClick}
      show={show}
      hide={hide}
      faq={faq}
      />
    </div>
  )
}

export default Accordian;