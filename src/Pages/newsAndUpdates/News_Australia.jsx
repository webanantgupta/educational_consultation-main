import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'
import { useParams } from 'react-router-dom'

const News_Australia = () => {
  const {country} = useParams();
  // const country = "Australia";
  return (
    <div>
      <PageBreadcrumb title={`Latest news about ${country}`}/>
      <Gridcomponent/>
    </div>
  )
}

export default News_Australia