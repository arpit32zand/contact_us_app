import React from "react"
import styles from './inputField.module.css'

const InputField = ({ placeholder, value, setValue }) => {
    return (
        <div className={styles.container}>
            <input 
                className={styles.field} 
                type="text" 
                onChange={e => setValue(e.target.value)} 
                value={value} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField