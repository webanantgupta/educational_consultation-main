import { useNavigate } from "react-router-dom";

const Gridcomponent = ({ gridData }) => {
  // console.log(gridData[0].news);
  const grid = gridData[0].news;
  console.log(grid);

const navigate = useNavigate();

const handleClick = (obj) =>{
navigate("/view",{state:obj})
}

  return (
    <div className='grid_container' >
      {
        grid.map((obj, index) => {
          return <div  className="grid_container_element" key={index} onClick={()=>handleClick(obj)}>
            <img src={obj.image} alt={obj.title} />
            <h4>{obj.title}</h4>
            <p className="grid_container_date">Date : {obj.date}</p>
          </div>
        })
      }

    </div>
  )
}

export default Gridcomponent
