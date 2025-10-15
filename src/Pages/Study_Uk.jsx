import studyData from "../Data/Studyvisa/study.json"
import PageBreadcrumb from '../Common/PageBreadcrumb'
import Study_visa from "../Common/Study_visa";

const Study_Uk = () => {
  return (
    <div>
      <PageBreadcrumb title={"Study In United Kingdom"}/>
      <Study_visa  data={studyData[3]}/>
    </div>
  )
}

export default Study_Uk;