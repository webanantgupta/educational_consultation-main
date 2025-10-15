
import Slider from '../Components/HomeComponents/Slider'
import SpecialistSection from '../Components/HomeComponents/SpecialistSection'
import VisionSection from '../Components/HomeComponents/VisionSection'
import ClientsSection from '../Components/HomeComponents/ClientsSection'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import TimingSection from '../Components/HomeComponents/TimingSection'
import TeamSection from '../Components/HomeComponents/TeamSection'
import CounterSection from '../Components/HomeComponents/CounterSection'
import Testimonial from '../Components/HomeComponents/Testimonial'
import FAQSection from '../Components/HomeComponents/FAQSection'
import NewsSection from '../Components/HomeComponents/NewsSection'

const Home = () => {
 const sponsors = [
        "images/MMA.png",
        "images/MARA.png",
        "images/MIA.png",
        "images/MMA.png",
        "images/MARA.png",
        "images/MIA.png",
    ];

  return (
    <>
      <div className="page-wrapper">
        
        <Slider />
        <SpecialistSection />
        <VisionSection />
        <ClientsSection sponsors={sponsors}/>
        {/* <ServicesSection /> */}
        <TimingSection />
        <TeamSection />
        <CounterSection />
        <Testimonial />
        <FAQSection />
        {/* <NewsSection /> */}
      </div>
    </>
  )
}

export default Home
