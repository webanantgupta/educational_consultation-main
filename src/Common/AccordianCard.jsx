

const AccordianCard = ({ handleClick, show, hide, faq }) => {
    // console.log(faq, 'test')
    return (
        <div className='faq_container mb-lg-5 pb-4'>
        <h3>Frequently Asked Questions</h3>

            {
                faq.map((faq, index) => {
                    return <div key={index} className='faq_section'>
                        <div className='faq_question' onClick={() => handleClick(index)}>
                            <p>{faq.question}</p>
                            <button >{hide === false && show === index ? (<i className="fa-solid fa-minus"></i>) : (<i class="fa-solid fa-plus"></i>)} </button>
                        </div>
                        <div className='faq_answer'>
                            {show === index && hide === false && <p>{faq.answer}</p>}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default AccordianCard