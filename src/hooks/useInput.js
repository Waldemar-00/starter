import {useState} from 'react'
function useInput() {
  const [value, setValue] = useState('')
  const changeValue = (e) => {
    const color = e.target.value.search(/\d/) < 0 ? "green" : "red"
    e.target.style.color = color
    setValue(e.target.value)
  }
  return {value, changeValue}
}
export default useInput