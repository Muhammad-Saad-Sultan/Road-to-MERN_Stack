import { useState } from "react";
import DisplayForm from "./DisplayForm";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        setSubmitted(true);
    }

    return (
        <div>
            <h2>FORM</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:
                    <input type="text" id="firstName" onChange={(e) => {
                        setFirstName(e.target.value);
                    }}/>
                </label>
                <label htmlFor="lastName">Last Name:
                    <input type="text" id="lastName" onChange={(e) => {
                        setLastName(e.target.value);
                    }}/>
                </label>
                <label htmlFor="email">Email:
                    <input type="email" name="email" id="email" onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </label>
                <button type="submit" className="btn green width">Submit</button>
            </form>
            {submitted && <DisplayForm firstName={firstName} lastName={lastName} email={email}/>}
        </div>

    )
}

export default Form
