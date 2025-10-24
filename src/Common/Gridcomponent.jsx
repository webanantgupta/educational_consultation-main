import { useNavigate, useParams } from "react-router-dom";
import moment from 'moment';
import gridData from "../Data/NewsAndUpdates/NewsData.json"

const Gridcomponent = () => {
 const navigate = useNavigate();
 console.log(gridData);
 
 const {country} = useParams();
 console.log(country);
 


 const countryData = gridData.find(
  (item)=> item.country.toLowerCase() === country.toLowerCase()
 )

if(!countryData){
  return <p>No news found</p>
}


 const sortedData = [...countryData.news].sort((a,b)=> moment(b.date) - moment(a.date)); 

const handleClick = (articleData) =>{
  navigate("/view", {state:{articleData,country:countryData.country}})
}


  return (
    <div className='grid_container' >
      {
        sortedData.map((obj, index) => {
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
