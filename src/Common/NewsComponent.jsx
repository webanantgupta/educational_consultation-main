

const NewsComponent = ({ newsData , country }) => {
// console.log(country);
console.log(newsData);


    return (
        <>
            {newsData ?
                <div className='container-fluid '>
                    <div className="detail_container d-flex justify-content-between align-items-center m-5">
                        <div className="detail_heading">
                            <h2>{newsData.title}</h2>
                            <p>{newsData.description}{newsData.content}</p>

                        </div>
                        <div className="detail_image">
                            <img src={newsData.image} alt={newsData.title} />
                        </div>
                    </div>
                    

                   

                   
                </div> : ""}
        </>
    )
}

export default NewsComponent
