import newsData from "../../Data/NewsAndUpdates/newzealand.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_Zealand = () => {
  return (
    <div>
        <PageBreadcrumb title={"Latest news about New Zealand"}/>
      <Gridcomponent gridData={newsData}/>
    </div>
  )
}

export default News_Zealand
