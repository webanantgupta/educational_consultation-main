

const NewsComponent = ({ newsData , country }) => {
console.log(country);
console.log(newsData);


    return (
        <>
            {newsData ?
                <div className='container-fluid '>
                    <div className="d-flex justify-content-between align-items-center m-5">
                        <div>
                            <h2>{newsData.title}</h2>
                            <p>{newsData.description}</p>
                        </div>
                        <div>
                            <img src={newsData.image} alt={newsData.title} />
                        </div>
                    </div>
                    <div>

                    </div>

                   

                   
                </div> : ""}
        </>
    )
}

export default NewsComponent
