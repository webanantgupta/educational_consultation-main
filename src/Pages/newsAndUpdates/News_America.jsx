import newsData from "../../Data/NewsAndUpdates/america.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_America = () => {
  return (
    <div>
        <PageBreadcrumb title={"Latest news about United States of America"}/>
       <Gridcomponent gridData={newsData}/>
    </div>
  )
}

export default News_America
