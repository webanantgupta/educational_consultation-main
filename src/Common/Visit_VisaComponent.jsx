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
                    <div>
                        <img src={visitData.image} alt={visitData.title} />
                    </div>
                </div>
                <div className='visit_heading2'>
                    <div>
                        <img src={visitData.overview_image} alt={visitData.overview_title} />
                    </div>
                    <div>
                        <h2>{visitData.overview_title}</h2>
                        <p>{visitData.overview_content}</p>
                    </div>
                </div>
                <div className='visit_bottom_heading'>
                    <div className='visit_bottom_flex'>
                        <div>
                            <h3>{visitData.eligibility_title}</h3>
                            <p>{visitData.eligibility_content}</p>
                        </div>
                        <div>
                            <h3>{visitData.benefits_title}</h3>
                            <p>{visitData.benefits_content}</p>
                        </div>
                        <div>
                            <h3>{visitData.interview_tips_title}</h3>
                            <p>{visitData.interview_tips_content}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Visit_VisaComponent
