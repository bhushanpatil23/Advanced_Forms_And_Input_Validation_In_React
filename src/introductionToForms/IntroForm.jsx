import React from "react";

const IntroForm = () => {
    function formSubmitted(formData) {
        let data = Object.fromEntries(formData);
        const allHobbies = formData.getAll("hobbies");

        data = {...data, hobbies: allHobbies}

        console.log(data);
    }

    function handleInputUpdate(e) {
        const { name, value } = e.target;
        console.log(name, value);
    }

    return (
        <form action={formSubmitted}>
            <label>
                First Name
                <input
                    type="text"
                    name="firstName"
                    placeholder="e.g. Anuj"
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
                />
            </label>

            <br />
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    placeholder="e.g. Strong password"
                />
            </label>

            <br />
            <label>
                Gender
                <label>
                    <input type="radio" value="male" name="gender" />
                    Male
                </label>
                <label>
                    <input type="radio" value="female" name="gender" />
                    Female
                </label>
                <label>
                    <input type="radio" value="others" name="gender" />
                    Others
                </label>
            </label>

            <br />
            <label>
                Country
                <select name="country">
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
                    <input type="checkbox" name="hobbies" value="sports" />
                    Sports
                </label>
                <label>
                    <input type="checkbox" name="hobbies" value="reading" />
                    Reading
                </label>
                <label>
                    <input type="checkbox" name="hobbies" value="cooking" />
                    Cooking
                </label>
            </label>

            <br />
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
        </form>
    );
};

export default IntroForm;
