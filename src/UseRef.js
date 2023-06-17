import {useRef, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Form = () => {
  const [text, setText] = useState('')
  const textareaRef = useRef(null)
  const myRef = useRef(null)
  const counter = useRef(null)
  useEffect(() => {
    console.log(counter.current)
  }, [text])
  

  const focusFirstTI = () => {
      if(document.querySelector('input').value === '') myRef.current.focus();
    }

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input ref={myRef} onChange={(e) => setText(e.target.value)}
                        type="email" className="form-control"
                        id="exampleFormControlInput1" placeholder="name@example.com"
                        value={text}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea
                    onClick={focusFirstTI}
                    ref={textareaRef}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={() => counter.current++}
                    >
                  </textarea>
                </div>
            </form>
        <div style={{
          textAlign: 'center',
          margin: '20px auto 20px',
          fontSize: '30px'
        }}>{counter.current}</div>
        </Container>
    )
}

function Ref() {
    return (
        <Form/>
    );
}

export default Ref;