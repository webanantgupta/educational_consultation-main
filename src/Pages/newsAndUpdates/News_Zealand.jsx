
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_Zealand = () => {
  const country = "New Zealand";
  return (
    <div>
        <PageBreadcrumb title={`Latest news about ${country}`}/>
        <Gridcomponent/>
    </div>
  )
}

export default News_Zealand
