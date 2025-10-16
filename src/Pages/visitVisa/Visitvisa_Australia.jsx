import visitVisaData from "../../Data/Visitvisa/visitvisa.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Visit_VisaComponent from "../../Common/Visit_VisaComponent"

const Visitvisa_Australia = () => {
  return (
    <div>
      <PageBreadcrumb title={"Visit Visa for Australia"}/>
      <Visit_VisaComponent visitData={visitVisaData[1]}/>
    </div>
  )
}

export default Visitvisa_Australia
