import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_UnitedKingdom = () => {
  const country = "United Kingdom"; 
  return (
    <div>
        <PageBreadcrumb title={`Latest news about ${country}`}/>
        <Gridcomponent/>
    </div>
  )
}

export default News_UnitedKingdom
