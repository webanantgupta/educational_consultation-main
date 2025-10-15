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
                    <Route  path='/study-australia' element={<Study_Australia/>}/>
                    <Route path='/study-newzealand' element={<Study_Newzealand/>}/>
                    <Route path='/study-USA' element={<Study_Us/>}/>
                    <Route path="/study-UK" element={<Study_Uk/>}/>
                    <Route path='/workvisa_general_skilled' element={<GeneralSkilled/>}/>
                    <Route path='/workvisa_employ_sponcer' element={<EmploySponcer/>}/>
                    <Route path='/news_updates_australia' element={<News_Australia/>}/>
                    <Route path='/news_updates_newzealand' element={<News_Zealand/>}/>
                    <Route path='/news_updates_unitedkingdom' element={<News_UnitedKingdom/>}/>
                    <Route path='/news_updates_america' element={<News_America/>}/>
                    <Route path='/view' element={<ViewGridComponent/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
