import newsData from "../../Data/NewsAndUpdates/australia.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_Australia = () => {
  return (
    <div>
      <PageBreadcrumb title={"Latest news about Australia"}/>
      <Gridcomponent  gridData={newsData}/>
    </div>
  )
}

export default News_Australia