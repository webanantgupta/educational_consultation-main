import studyData from "../Data/Studyvisa/study.json"
import PageBreadcrumb from '../Common/PageBreadcrumb'
import Study_visa from '../Common/Study_visa'

const Study_Newzealand = () => {
  return (
    <div>
        <PageBreadcrumb title={"Study in New Zealand"} />
        <Study_visa  data={studyData[0]}/>
    </div>
  )
}

export default Study_Newzealand

