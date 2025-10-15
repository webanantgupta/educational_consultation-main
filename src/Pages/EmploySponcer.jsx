import workvisaData from "../Data/Workvisa/workvisa.json"
import PageBreadcrumb from '../Common/PageBreadcrumb'
import Word_visa from "../Common/Word_visa"
import Accordian from "../Common/Accordian"

const EmploySponcer = () => {
  return (
    <div>
      <PageBreadcrumb title={"Employer Sponsorship"}/>
      <Word_visa  workData={workvisaData[1]}/>
      <Accordian faq={workvisaData[1].faqs}/>
    </div>
  )
}

export default EmploySponcer
