import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Gridcomponent from '../../Common/Gridcomponent'

const News_Australia = () => {
  const country = "Australia";
  return (
    <div>
      <PageBreadcrumb title={`Latest news about ${country}`}/>
      <Gridcomponent/>
    </div>
  )
}

export default News_Australia