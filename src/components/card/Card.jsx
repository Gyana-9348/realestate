import "./card.scss";

function Card({ item }){

    return(
        <div className="card">
            <a to={`/${item.id}`} className="imageContainer">
                <img src={item.img} alt=""/>
            </a>
            <div className="textContainer">
                <h2 className="title">
                    <a to={`/${item.id}`}>{item.title}</a>
                </h2>
                <p className="address">
                    <img src="/pin.png" alt=""/>
                    <span>{item.address}</span>
                </p>

                <p className="price">$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                    <div className="feature">
                        <img src="/bed.png" alt=""/>
                        <span>{item.bedroom} bedroom</span>
                    </div>

                    <div className="feature">
                        <img src="/bath.png" alt=""/>
                        <span>{item.bathroom} bathroom</span>
                    </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" alt=""/>
                        </div>

                        <div className="icon">
                            <img src="/chat.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card;