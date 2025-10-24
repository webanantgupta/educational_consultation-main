
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'
import { useParams } from 'react-router-dom'

const News_Zealand = () => { 
  // const country = "New Zealand";
  const {country} = useParams();
  return (
    <div>
        <PageBreadcrumb title={`Latest news about ${country}`}/>
        <Gridcomponent/>
    </div>
  )
}

export default News_Zealand
