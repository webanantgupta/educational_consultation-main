import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import ContactUs from '../Pages/ContactUs'
import OurStory from '../Pages/OurStory'
import NewsAndUpdate from '../Pages/NewsAndUpdate'
import News_UpdateDetails from '../Pages/News_UpdateDetails'
import Study_Australia from '../Pages/Study_Australia'
import Study_Newzealand from '../Pages/Study_Newzealand'
import Study_Us from '../Pages/Study_Us'
import Study_Uk from '../Pages/Study_Uk'
import GeneralSkilled from '../Pages/GeneralSkilled'
import EmploySponcer from '../Pages/EmploySponcer'
import News_Australia from '../Pages/newsAndUpdates/News_Australia'
import News_Zealand from '../Pages/newsAndUpdates/News_Zealand'
import News_UnitedKingdom from '../Pages/newsAndUpdates/News_UnitedKingdom'
import News_America from '../Pages/newsAndUpdates/News_America'
import ViewGridComponent from '../Common/ViewGridComponent'
import Visitvisa_America from '../Pages/visitVisa/Visitvisa_America'
import Visitvisa_Australia from '../Pages/visitVisa/Visitvisa_Australia'
import Visitvisa_Newzealand from '../Pages/visitVisa/Visitvisa_Newzealand'
import Visitvisa_UnitedKingdom from '../Pages/visitVisa/Visitvisa_UnitedKingdom'
import Consultation from '../Pages/ourServices/Consultation'
import Review from '../Pages/ourServices/Review'
import Internship from '../Pages/ourServices/Internship'
import TrainingProgram from '../Pages/ourServices/TrainingProgram'
import Jobready from '../Pages/ourServices/Jobready'
import Skillassessment from '../Pages/ourServices/Skillassessment'
import Professional from '../Pages/ourServices/Professional'
import EnglishTest from '../Pages/ourServices/EnglishTest'

const AllRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/our_story' element={<OurStory />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/news_update' element={<NewsAndUpdate />} />
                    <Route path='/news_update_detail' element={<News_UpdateDetails />} />
                    <Route path='/study-australia' element={<Study_Australia/>}/>
                    <Route path='/study-newzealand' element={<Study_Newzealand/>}/>
                    <Route path='/study-USA' element={<Study_Us/>}/>
                    <Route path="/study-UK" element={<Study_Uk/>}/>
                    <Route path='/workvisa_general_skilled' element={<GeneralSkilled/>}/>
                    <Route path='/workvisa_employ_sponcer' element={<EmploySponcer/>}/>
                    <Route path='/news_updates/:country' element={<News_Australia/>}/>
                    <Route path='/news_updates/:country' element={<News_Zealand/>}/>
                    <Route path='/news_updates/:country' element={<News_UnitedKingdom/>}/>
                    <Route path='/news_updates/:country' element={<News_America/>}/>
                    <Route path='/view' element={<ViewGridComponent/>}/>
                    <Route path='/visitvisa_america' element={<Visitvisa_America/>}/>
                    <Route path='/visitvisa_australia' element={<Visitvisa_Australia/>}/>
                    <Route path='/visitvisa_newzealand' element={<Visitvisa_Newzealand/>}/>
                    <Route path='/visitvisa_unitedkingdom' element={<Visitvisa_UnitedKingdom/>}/>
                    <Route path='/ourservice_consultation' element={<Consultation/>}/>
                    <Route path='/ourservice_review' element={<Review/>}/>
                    <Route path='/ourservice_internship' element={<Internship/>}/>
                    <Route path='/ourservice_training' element={<TrainingProgram/>}/>
                    <Route path='/ourservice_jobready' element={<Jobready/>}/>
                    <Route path='/ourservice_skillassessment' element={<Skillassessment/>}/>
                    <Route path='/ourservice_professional' element={<Professional/>}/>
                    <Route path='/ourservice_englishtest' element={<EnglishTest/>}/>
                    



                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
