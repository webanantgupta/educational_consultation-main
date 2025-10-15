import { useLocation } from 'react-router-dom';
import PageBreadcrumb from './PageBreadcrumb';

const ViewGridComponent = () => {

const location = useLocation();
const locate = location.state;
console.log(locate,'locate');

  return (
    <div>
      <PageBreadcrumb title={locate ? locate.title:'News and Update'}/>
    
    </div>
  )
}

export default ViewGridComponent
