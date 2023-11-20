import React from "react"
import styles from './inputArea.module.css'

const InputArea = ({ placeholder, value, setValue }) => {
    return (
        <div className={styles.container}>
            <textarea 
                className={styles.field} 
                type="text" 
                onChange={e => setValue(e.target.value)} 
                value={value} 
                placeholder={placeholder}
                rows={4}
            />
        </div>
    )
}

export default InputArea