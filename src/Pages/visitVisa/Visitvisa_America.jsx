import visitVisaData from "../../Data/Visitvisa/visitvisa.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Visit_VisaComponent from "../../Common/Visit_VisaComponent"

const Visitvisa_America = () => {
  return (
    <div>
      <PageBreadcrumb title={"Visit Visa for America"}/>
      <Visit_VisaComponent visitData={visitVisaData[0]}/>
    </div>
  )
}

export default Visitvisa_America
