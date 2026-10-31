
const FormInput = ({id, label, defaultValue, ...props}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props}/>
    </div>
  )
}

export default FormInput