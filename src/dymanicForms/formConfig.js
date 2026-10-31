export const SIGN_IN_FORM_CONFIG = [
    {
        id : "nusername",
        name : "username",
        label : "Username",
        placeholder : "Bhushan123",
        defaultValue : "Bhushan123",
        type  : "text"
    },
    {
        id : "email",
        name : "email",
        label : "Email",
        placeholder : "e.g. john@ex.com",
        default : "",
        type  : "email"
    },
    {
        id : "password",
        name : "password",
        label : "Password",
        placeholder : "e.g. Strong Password",
        type  : "password"
    }
];

export const SIGN_UP_FORM_CONFIG = [
    {
        id : "username",
        name : "username",
        label : "Name",
        placeholder : "Bhushan",
        defaultValue : "Bhushan",
        type  : "text"
    },
    {
        id : "email",
        name : "email",
        label : "Email",
        placeholder : "e.g. john@ex.com",
        default : "",
        type  : "email"
    },
    {
        id : "password",
        name : "password",
        label : "Password",
        placeholder : "e.g. Strong Password",
        type  : "password"
    },
    
    {
        id : "confirmPassword",
        name : "consfirmPassword",
        label : "Confirm Password",
        placeholder : "same as above",
        type  : "password"
    },
    {
        id : "gender",
        name : "gender",
        label : "Gender",
        placeholder : "",
        type : "radio",
        options : [
            {
                label : "Male",
                value : "male",
            },
            {
                label: "Female",
                value : "female"
            },
            {
                label : "Others",
                value : "others"
            }
        ]
    },    
    {
        id : "country",
        name : "country",
        label : "Country",
        placeholder : "",
        type : "select",
        options : [
            {
                label : "India",
                value : "india",
            },
            {
                label: "USA",
                value : "usa"
            },
            {
                label : "Canada",
                value : "canada"
            }
        ]
    },    
    {
        id : "hobbies",
        name : "hobbies",
        label : "Hobbies",
        placeholder : "",
        type : "checkbox",
        options : [
            {
                label : "Sports",
                value : "sports",
            },
            {
                label: "Reading",
                value : "reading"
            },
            {
                label : "Coding",
                value : "coding"
            }
        ]
    }
];