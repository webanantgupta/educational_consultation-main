import { useLocation } from 'react-router-dom';
import PageBreadcrumb from './PageBreadcrumb';
import NewsComponent from "./NewsComponent"

const ViewGridComponent = () => {

  const location = useLocation();
  const {articleData,country} = location.state || {};
  console.log(articleData);
  console.log(country);
  
  

  return (
    <div>

      {/* <PageBreadcrumb title={articleData ? articleData.title : 'News and Update'} /> */}
      <PageBreadcrumb title={country ?  `Latest News About ${country}` : `News And Updates`}/>
      <NewsComponent newsData={articleData} country={country} />
    </div>
  )
}

export default ViewGridComponent
