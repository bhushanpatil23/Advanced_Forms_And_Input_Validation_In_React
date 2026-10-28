import React, { useActionState, useState } from "react";

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

    const emptyState = {
        firstName : "",
        email : "",
        password : "",
        gender : "",
        country : "",
        hobbies : []
    };

    const [data,setData] = useState(emptyState);

    function handleInputUpdate(e) {
        const { name, value, type, checked } = e.target;

        if(type === "checkbox"){
            const newHobbies = checked
            ? [data.hobbies, value]
            : data.hobbies.filter((item) => item !== value);

            const newData = {...data ,hobbies : newHobbies};
            setData(newData);
            console.log(newData);
            return;
        }

        const newData = {...data, [name] : value }
        setData(newData);

        console.log(newData);
    }

    function onFormSubmit(e){
        e.preventDefault();

        // call the backend and send the data there ... 
        setData(emptyState);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                First Name
                <input
                    type="text"
                    name="firstName"
                    placeholder="e.g. Bhushan"
                    value={data.firstName}
                    onChange={handleInputUpdate}
                />
            </label>
            <br />
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="e.g. john@ex.com"
                    value={data.email}
                    onChange={handleInputUpdate}
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
                        checked={"male" ===  data.gender}
                        onChange={handleInputUpdate}
                    />
                    Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="female" 
                        name="gender"
                        checked={"female" ===  data.gender}
                        onChange={handleInputUpdate}   
                    />
                    Female
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="others" 
                        name="gender" 
                        checked={"others" ===  data.gender}
                        onChange={handleInputUpdate}
                    />
                    Others
                </label>
            </label>

            <br />
            <label>
                Country
                <select 
                    name="country" 
                    value={data.country}
                    onChange={handleInputUpdate}
                >
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
                        checked={data.hobbies?.includes("sports")}
                        onChange={handleInputUpdate}
                    />
                    Sports
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="hobbies" 
                        value="reading" 
                        checked={data.hobbies?.includes("reading")}
                        onChange={handleInputUpdate}
                    />
                    Reading
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="hobbies" 
                        value="cooking" 
                        checked={data.hobbies?.includes("cooking")}
                        onChange={handleInputUpdate}
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
