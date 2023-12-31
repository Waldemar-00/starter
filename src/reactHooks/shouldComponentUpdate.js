import {useState, Component} from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
class UpdateForm extends Component {
  shouldComponentUpdate(nextProps, nextState) {
  return this.props.mail.name === nextProps.mail.name ?  false : true 
  }
  render() {
    console.log('render')
    return (
      <Container>
        <h2 style={{ textAlign: "center", color: 'lightskyblue', marginTop: '50px' }}>shouldComponentUpdate</h2>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
            <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </Container>
    )
  }
}

function UpdateMemo() {
    const [data, setData] = useState({
      mail: {
        name: "name@example.com"
      },
        text: 'some text'
    });

    return (
        <>
            <UpdateForm mail={data.mail} text={data.text}/>
            <button 
                onClick={() => setData({
                  mail: {
                    name: "name@example.io"
                  },
                  text: 'some textus'
                })}>
                Click me
            </button>
        </>
    );
}

export default UpdateMemo;
