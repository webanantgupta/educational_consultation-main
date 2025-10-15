import newsData from "../../Data/NewsAndUpdates/unitedkingdom.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_UnitedKingdom = () => {
  return (
    <div>
        <PageBreadcrumb title={"Latest news about United Kingdom"}/>
        <Gridcomponent gridData={newsData} />
        
    </div>
  )
}

export default News_UnitedKingdom
