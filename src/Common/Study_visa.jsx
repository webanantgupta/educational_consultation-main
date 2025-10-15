import React from 'react'
import ClientsSection from '../Components/HomeComponents/ClientsSection'

const Study_visa = ({ data }) => {
    console.log(data);
 const sponsors = [
        "images/MMA.png",
        "images/MARA.png",
        "images/MIA.png",
        "images/MMA.png",
        "images/MARA.png",
        "images/MIA.png",
    ];
    return (
        <div className='study_container'>



            {/* all three heading */}
            <div>

                 <div className='study_title_main'>
                    <h2>{data.title}</h2>

                 </div>

                <div className='study_title'>
                     <p>{data.overview}</p>
                    <img src={data.banner_image} alt={data.title} />

                </div>

                <div className='study_section'>
                    <section className='study_heading1'>

                        <h3>{data.why_this_country_title}  </h3>
                        {
                            data.why_this_country_content.map((obj, index) => {
                                return <ul key={index}>
                                    <li>{obj}</li>
                                </ul>
                            })
                        }

                    </section>

                    <section className='study_heading2'>
                        
                            <h3>{data.estimated_cost_title}</h3>
                            {
                                data.estimated_cost_content.map((obj, index) => {
                                    return <ul key={index}>
                                        <li>{obj}</li>
                                    </ul>
                                })
                            }
                        
                    </section>
                </div>


                <section className='study_heading3'>
                       <div className='study_heading3_title'>
                        <h3>{data.education_partners_title}</h3>

                       </div>
                        <ClientsSection sponsors={sponsors}/>
                    
                </section>
            </div>
        </div>
    )
}

export default Study_visa
