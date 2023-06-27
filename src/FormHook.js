import {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import useInput from './customHooks/useInput'
import './App.css'

const FormHook = () => {
  const text = useInput('')
  const textAr = useInput('')
  const rezult = useInput('')
  useEffect(() => {
    const input = document.querySelector('#inputRez')
    const color = input.value.search(/\d/) < 0 ? "green" : "red"
    input.style.color = color
  })
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
              <div className="mb-3">
            <input
              id='inputRez'
              value={`${text.value} / ${textAr.value}`}
              onChange={rezult.changeValue}
              type="text" className="form-control" readOnly />
                  <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                  <input
                    onChange={text.changeValue}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={text.value}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea
                value={textAr.value}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={textAr.changeValue}
              ></textarea>
                </div>
            </form>
        </Container>
    )
}

export default FormHook;
