function Professional() {
    return (
        <form>
            <section> 
                <label htmlFor="company-name">Company:</label>
                <input type="text" id="company-name" name="companyName"></input>   
            </section>

            <section> 
                <label htmlFor="position-title">Position Title:</label>
                <input type="text" id="position-title" name="positionTitle"></input>   
            </section>
            
            <section> 
                <label htmlFor="responsibility">Main Responsibilities:</label>
                <input type="text" id="responsibilities" name="responsibilities"></input>   
            </section>

            <section> 
                <label htmlFor="responsibility">Date From/To
                    <input type="date" id="date-from" name="dateFrom"></input>   
                    <input type="date" id="date-to" name="dateTo"></input>
                </label>
            </section>
        </form>
    )
}

export default Professional;