
import {useState} from "react";

import Section from "./components/sections.jsx"
import General from "./components/forms/general.jsx"
import Educational from "./components/forms/educational.jsx";
import Professional from "./components/forms/professional.jsx";


function App() {

    const [displayedForm, setDisplayedForm] = useState(General);

    return (
    <>
        <section id ="sections">
            <Section name = "General" form={General} setForm={setDisplayedForm}></Section>
            <Section name = "Educational Experience" form={Educational} setForm={setDisplayedForm}></Section>
            <Section name = "Professional Experience" form={Professional} setForm={setDisplayedForm}></Section>
        </section>
        <main>
            {displayedForm}
        </main>
    </>
)

}
export default App;