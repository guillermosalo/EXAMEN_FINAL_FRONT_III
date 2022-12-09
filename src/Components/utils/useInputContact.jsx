import React from 'react'
import { useState } from 'react'

const useInputContact = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    // retorna un objeto
  return {
    value,
    onChange,
    type   
  }
}

export default useInputContact