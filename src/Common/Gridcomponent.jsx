import { useNavigate } from "react-router-dom";
import moment from 'moment';

const Gridcomponent = ({ gridData }) => {
  // console.log(gridData[0].news);
  const grid = gridData[0].news;

  const ascendingDateorderData = grid.sort((a, b) => moment(b.date) - moment(a.date) );


  const navigate = useNavigate();

  const handleClick = (obj) => {
    navigate("/view", { state: obj })
  }

  return (
    <div className='grid_container' >
      {
        ascendingDateorderData.map((obj, index) => {
          return <div className="grid_container_element" key={index} onClick={() => handleClick(obj)}>
            <img src={obj.image} alt={obj.title} />
            <h4>{obj.title}</h4>
            <p className="grid_container_date">Date : {moment(obj.date).format('DD-MM-YYYY')}</p>
          </div>
        })
      }

    </div>
  )
}

export default Gridcomponent
