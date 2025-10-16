import visitVisaData from "../../Data/Visitvisa/visitvisa.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Visit_VisaComponent from "../../Common/Visit_VisaComponent"

const Visitvisa_Newzealand = () => {
  return (
    <div>
        <PageBreadcrumb title={"Visit Visa for New Zealand"}/>
        <Visit_VisaComponent visitData={visitVisaData[2]}/>
    </div>
  )
}

export default Visitvisa_Newzealand
