import React, { useActionState } from "react";

const IntroForm = () => {

    const initState = {
        firstName : "Bhushan",
        email : "bhushan@gmail.com",
        password : "1234",
        gender : 'male',
        country : 'usa',
        hobbies : ["sports"]
    }

    const [state, action, isPending] = useActionState(formSubmitted,initState);

    async function formSubmitted(prevData, formData) {
        console.log(prevData,Object.fromEntries(formData));
        console.log("Submitting....");

        await new Promise((resolve) => setTimeout(resolve,4000));

        let data = Object.fromEntries(formData);
        const allHobbies = formData.getAll("hobbies");

        data = {...data, hobbies: allHobbies}

        console.log("Submitted Successfully", data);

        return {};
    }

    function handleInputUpdate(e) {
        const { name, value } = e.target;
        console.log(name, value);
    }

    return (
        <form action={action}>
            <label>
                First Name
                <input
                    type="text"
                    name="firstName"
                    placeholder="e.g. Bhushan"
                    defaultValue={state.firstName}
                    onChange={handleInputUpdate}
                />
            </label>
            <br />
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    defaultValue={state.email}
                    placeholder="e.g. john@ex.com"
                />
            </label>

            <br />
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    defaultValue={state.password}
                    placeholder="e.g. Strong password"
                />
            </label>

            <br />
            <label>
                Gender
                <label>
                    <input 
                        type="radio" 
                        value="male" 
                        name="gender" 
                        defaultChecked={"male" ===  state.gender}/>
                    Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="female" 
                        name="gender"
                        defaultChecked={"female" ===  state.gender} />
                    Female
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="others" 
                        name="gender" 
                        defaultChecked={"others" ===  state.gender}/>
                    Others
                </label>
            </label>

            <br />
            <label>
                Country
                <select name="country" defaultValue={state.country}>
                    <option value="">Choose a Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select>
            </label>

            <br />
            <label>
                Hobbies
                <label>
                    <input 
                        type="checkbox" 
                        name="hobbies" 
                        value="sports" 
                        defaultValue={state.hobbies?.includes("sports")}
                    />
                    Sports
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="hobbies" 
                        value="reading" 
                        defaultValue={state.hobbies?.includes("reading")}
                    />
                    Reading
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="hobbies" 
                        value="cooking" 
                        defaultValue={state.hobbies?.includes("cooking")}
                    />
                    Cooking
                </label>
            </label>

            <br />
            <button disabled={isPending} type="submit">Submit</button>
            <button type="button">Cancel</button>
        </form>
    );
};

export default IntroForm;
