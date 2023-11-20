import React, { useState } from 'react'

import styles from './form.module.css';
import Button from '../button/Button';
import InputField from '../inputField/InputField';
import InputArea from '../inputArea/InputArea';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    
  return (
    <div className={styles.container}>
        <span className={styles.heading}>CONTACT US</span>
        <div className={styles.fieldContainer}>
        <InputField value={name} setValue={v => setName(v)} placeholder={"Name"}  />
        <InputField value={email} setValue={v => setEmail(v)} placeholder={"Email"} />
        <InputArea value={msg} setValue={v => setMsg(v)} placeholder={"Write your Message..."} />
        </div>
        <Button label="Send to us"/>
    </div>
  )
}
