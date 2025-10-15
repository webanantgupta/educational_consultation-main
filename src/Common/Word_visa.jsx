

const Word_visa = ({ workData }) => {
    console.log(workData, 'workData')
    return (
        <div className='work_container'>
            <div className='work_head'>
                <div className="work_head_heading">
                    <h2>{workData.title}</h2>
                    <p>{workData.overview}</p>
                </div>
                <div className="work_head_img">
                    <img src={workData.banner_image} alt={workData.title} />
                </div>
            </div>

            <section className="work_content">
                <div>
                    <h3>{workData.why_choose_title}</h3>
                    <p>{workData.why_choose}</p>
                </div>
                <div>
                    <h3>{workData.eligibility_title}</h3>
                    <p>{workData.eligibility}</p>
                </div>
                <div>
                    <h3>{workData.key_features_title}</h3>
                    <p>{workData.key_features}</p>
                </div>
                <div>
                    <h3>{workData.benefits_title}</h3>
                    <p>{workData.benefits}</p>
                </div>
                <div>
                    <h3>{workData.technologies_used_title}</h3>
                    <p>{workData.technologies_used}</p>
                </div>
            </section>

            <section className="work_steps">
                <h3>{workData.application_process_title}</h3>
                {
                    workData.application_process.map((obj, index) => {
                        return <ul key={index}>
                            <li>{obj}</li>
                        </ul>
                    })


                }
            </section>

            <section className="work_accordian">
                {/* accordian component import here */}
            </section>
        </div>
    )
}

export default Word_visa
