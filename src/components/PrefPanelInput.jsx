

const PrefPanelInput = ({ type, name, placeholder, errorLog, disabled, ifValid, onInputChange }) => {
    return (
        <div className="form-floating mb-3">
            <input type={ type } 
                className={ ifValid[name] && "is-valid form-control" || "is-invalid form-control" }
                id={ name } placeholder={ placeholder } disabled={ disabled }
                onChange={e => onInputChange(e)}
            />
            <label htmlFor={name}>{ placeholder }</label>
            <div className="invalid-feedback">{ errorLog }</div>
        </div>
    )
}

export default PrefPanelInput;