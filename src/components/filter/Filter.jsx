import "./filter.scss";

function Filter(){

    return(
        <div className="filter">
            <h1>Search result for India</h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Locatiopn</label>
                    <input type="text" name="city" id="city" placeholder="city location" />
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Locatiopn</label>
                    <select name="type" id="type">
                    <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

            <div className="item">
                    <label htmlFor="proporty">Proporty</label>
                    <select name="proporty" id="proporty">
                        <option value="">any</option>
                        <option value="apartment">apartment</option>
                        <option value="house">house</option>
                        <option value="condo">condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minprice">Min Price</label>
                    <input type="number" name="minprice" id="minprice" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="maxprice">Max Price</label>
                    <input type="number" name="maxprice" id="maxprice" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bed Room</label>
                    <input type="text" name="bedroom" id="bedroom" placeholder="any" />
                </div>

                <div className="item">
                    <label htmlFor="city">Locatiopn</label>
                    <input type="text" name="city" id="city" placeholder="city location" />
                </div>
                <button>
                    <img src="/search.png" alt=""/>
                </button>
            </div>
        </div>
    )
}


export default Filter;