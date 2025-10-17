import React from 'react'

const Visit_VisaComponent = ({ visitData }) => {
    // console.log(visitData, 'visitData')
    return (
        <>
            <div className='visit_visa_container'>
                <div className='visit_heading1'>
                    <div>
                        <h2>{visitData.title}</h2>
                        <p>{visitData.content}</p>
                    </div>
                    <div className='visit_visa_image1'>
                        <img src={visitData.image} alt={visitData.title} />
                    </div>
                </div>
                <div className='visit_heading2'>
                    <div className='visit_visa_image2'>
                        <img src={visitData.overview_image} alt={visitData.overview_title} />
                    </div>
                    <div>
                        <h2>{visitData.overview_title}</h2>
                        <p>{visitData.overview_content}</p>
                    </div>
                </div>
                <div className='visit_bottom_heading'>
                    <div className='row visit_bottom_flex'>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <h2>{visitData.eligibility_title}</h2>
                            <p>{visitData.eligibility_content}</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <h2>{visitData.benefits_title}</h2>
                            <p>{visitData.benefits_content}</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <h2>{visitData.interview_tips_title}</h2>
                            <p>{visitData.interview_tips_content}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Visit_VisaComponent
