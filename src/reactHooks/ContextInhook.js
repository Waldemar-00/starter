import {useState, Component, createContext, useContext} from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
const dataContext = createContext(//! default value
  {
  mail: {
    name: "name@example.com"
  },
    text: 'default text',
    forceChangeMail: () => {}
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
        <h2 style={{ textAlign: "center", color: 'lightskyblue', marginTop: '50px' }}>Context In Hook</h2>
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
const Input = () => {
  const context = useContext(dataContext)
  return (
    // <Consumer >
      /* { */
      // value => {
        // return (
    <input value={context.mail.name}
      type="email" className='form-control'
      id="exampleFormControlInput1" placeholder="name@example.com"
      onFocus={() => context.forceChangeMail()}
    />
        // )
      // }
      // }
    // </Consumer>
  )
}
function ContextInHook() {
  const [data, setData] = useState(
    {
      mail: {
        name: "name@example.com"
      },
      text: 'some text',
      forceChangeMail: forceChangeMail
    }
  )
  function forceChangeMail() {
    setData({...data, mail: {name: "TEST@example.com"}})
  }
    return (
        <Provider value={data}>
            <UpdateForm text={data.text}/>
            <button 
                onClick={() => setData({
                  mail: {
                    name: "name@example.io"
                  },
                  text: 'another text',
                  forceChangeMail: forceChangeMail
                })}
              >
                Click me
            </button>
        </Provider>
    );
}

export default ContextInHook;
