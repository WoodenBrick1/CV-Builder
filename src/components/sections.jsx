

function section({name, form, setForm}) {

    return <button onClick={() => {setForm(form)}}>{name}</button>;
}

export default section;