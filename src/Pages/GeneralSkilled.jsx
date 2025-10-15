import wordvisaData from "../Data/Workvisa/workvisa.json"
import PageBreadcrumb from '../Common/PageBreadcrumb'
import Word_visa from '../Common/Word_visa'
import Accordian from "../Common/Accordian"

const GeneralSkilled = () => {
 
  return (
    <div>
      <PageBreadcrumb title={"General Skilled Migration"}/>
      <Word_visa workData={wordvisaData[0]}/>
      <Accordian faq={wordvisaData[0].faqs}/>
    </div>
  )
}

export default GeneralSkilled
