
const FormInput = ({id, label, options, type, name,value, onChange, error}) => {

    const RadioComponent = type === "radio" && (
        <div>
            {options.map((option)=>(
                <label key={option.value}>
                    <input 
                        type="radio" 
                        name={name}
                        value={option.value} 
                        onChange={onChange}
                        checked={value === option.value}
                    />
                    {option.label}
                </label>

            ))}
        </div>
    );

    const SelectComponent = type === 'select' && (
        <select id={id} name={name} value={value} onChange={onChange}>
            {options.map(item => (
                <option key={item.value} value={item.value} >{item.label}</option>
            ))}
        </select>
    );

    function handleCheckBoxUpdate(e){
        const newValue = e.target.checked 
            ? [...value, e.target.value]
            : value.filter((item) => item !== e.target.value);
            onChange({target: {name, value:newValue}});
    }

    const CheckBoxComponent = type === "checkbox" && (
        <>
             {options.map((option)=>(
                <label key={option.value}>
                    <input 
                        type="checkbox" 
                        name={name}
                        value={option.value} 
                        onChange={handleCheckBoxUpdate}
                        checked={value.includes(option.value)}
                    />
                    {option.label}
                </label>

            ))}
        </>
    );

  return (
    <div>
        <label htmlFor={id}>{label}</label>

        {
            type === "radio" ? (
                RadioComponent
            ) : type === "select" ? (
                    SelectComponent
            ) : type === "checkbox" ?(
                CheckBoxComponent
            ) :
            (
            <input 
                id={id} 
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
            />
        )}
        {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default FormInput