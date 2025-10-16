import visitVisaData from "../../Data/Visitvisa/visitvisa.json"
import PageBreadcrumb from '../../Common/PageBreadcrumb'
import Visit_VisaComponent from "../../Common/Visit_VisaComponent"

const Visitvisa_UnitedKingdom = () => {
  return (
    <div>
      <PageBreadcrumb title={"Visit Visa for United Kingdom"}/>
      <Visit_VisaComponent visitData={visitVisaData[3]}/>
    </div>
  )
}

export default Visitvisa_UnitedKingdom
