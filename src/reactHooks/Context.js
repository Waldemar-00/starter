import {useState, Component, createContext} from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
const dataContext = createContext(//! default value
  {
  mail: {
    name: "name@example.com"
  },
    text: 'some text'
  }
) //! default value
console.dir(dataContext)
const {Provider, Consumer} = dataContext
class UpdateForm extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      <Consumer>
        {
          value => {
            return value.mail.name === nextProps.mail.name ?  false : true 
          }
        }
      </Consumer>
  )
  }
  render() {
    console.log('render')
    return (
      <Container>
        <h2 style={{ textAlign: "center", color: 'lightskyblue', marginTop: '50px' }}>Context In Class</h2>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
            <Input/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <Consumer>
              {
                value => {
                  return <textarea value={value.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                }
              }
            </Consumer>
          </div>
        </form>
      </Container>
    )
  }
}
class Input extends Component {
  render() {
    return (
      <Consumer >
        {
        value => {
          return <input value={value.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
        }
        }
      </Consumer>
    )
  }
}
function Context() {
  const [data, setData] = useState(
    {
      mail: {
        name: "name@example.com"
      },
        text: 'some text'
    }
  );
    return (
        <Provider value={data}>
            <UpdateForm text={data.text}/>
            <button 
                onClick={() => setData({
                  mail: {
                    name: "name@example.io"
                  },
                  text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default Context;
