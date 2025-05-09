
function Educational() {
    return (
        <form>
            <section> 
                <label htmlFor="school">School:</label>
                <input type="text" id="school" name="school"></input>   
            </section>

            {/*TODO make this a dropdown list with an other option*/}
            <section> 
                <label htmlFor="study">Studied:</label>
                <input type="text" id="study" name="study"></input>   
            </section>
            
            <section> 
                <label htmlFor="graduation">Date of Graduation:</label>
                <input type="date" id="graduation" name="graduation"></input>   
            </section>
        </form>
    )
}

export default Educational;