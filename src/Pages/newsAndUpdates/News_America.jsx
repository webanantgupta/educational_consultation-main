
import { useParams } from 'react-router-dom'
import Gridcomponent from '../../Common/Gridcomponent'
import PageBreadcrumb from '../../Common/PageBreadcrumb'

const News_America = () => {
  // const country = "United States of America";
  const {country} = useParams();
  return (
    <div>
        <PageBreadcrumb title={`Latest news about ${country}`}/>
      <Gridcomponent/>
    </div>
  )
}

export default News_America
