
function General() {
    return (
        <form>
            <section> 
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"></input>   
            </section>

            <section> 
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"></input>   
            </section>
            
            <section> 
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone"></input>   
            </section>
        </form>
    )
}

export default General;