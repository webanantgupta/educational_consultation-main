import PageBreadcrumb from '../Common/PageBreadcrumb'
import Study_visa from '../Common/Study_visa';
import studyData from "../Data/Studyvisa/study.json"

const Study_Us = () => {
  return (
    <div>
      <PageBreadcrumb title={"Study in United States of America"}/>
      <Study_visa data={studyData[2]}/>
    </div>
  )
}

export default Study_Us;