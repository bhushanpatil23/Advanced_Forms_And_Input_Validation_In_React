import { useState } from 'react'
import FormInput from './FormInput'

const CustomForm = ({config, onSubmit, isPending}) => {

    const initData = config.reduce((acc,field) => {
        acc[field.name] = field.type === "checkbox"
            ? []
            : field.defaultValue ?? "";
        return acc;
    },{});

    //console.log(initData);

    const[data, setData] = useState(initData);
    const[error, setError] = useState({});

    function handelInputUpdate(e){
        const {name, value} = e.target;
        const newData = {...data, [name]:value}
        setData(newData);

        const field = config.find(item => item.name === name);
        const message = field?.validate?.(value, newData);
        if(message){
            setError(prevErrors => {
                return {...prevErrors, [name]: message};
            })
        }else{
            setError(prevErrors => {
                return {...prevErrors, [name]: undefined};
            })
        }

        console.log(newData);
    }

    function handleFormSubmit(e){
        e.preventDefault();

        const newErros = {};
        config.forEach(item => {
            const name = item.name;
            const value = data[name];
            const error = item.validate?.(value, data);
            if(error){
                newErros[name] = error;
            }
        });

        setError(newErros);

        if(Object.keys(newErros).length == 0){
            onSubmit(data);
            console.log("SUCCESS" , data);
        }else{
            console.log("Errors are here", newErros);
        }
    }

  return (
    <form onSubmit={handleFormSubmit}>
        {config.map(item => 
            <FormInput 
                key={item.id} 
                value={data[item.name]}
                {...item} 
                onChange={handelInputUpdate}
                error={error[item.name]}
            />
        )}
        <button type="submit" disabled={isPending}>Submit</button>
    </form>
  )
}

export default CustomForm   