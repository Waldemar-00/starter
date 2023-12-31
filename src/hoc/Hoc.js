import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import '../App.css';


const withSlider = (BaseComponent, getData) => {
  return (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false)
    useEffect(() => {
        setSlide(getData());
    }, [])
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }
    return <BaseComponent
              {...props}
              changeSlide={changeSlide}
              slide={slide}
              setSlide={setSlide}
              autoplay={autoplay}
              setAutoplay={setAutoplay} />
  }
}

const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

const SliderFirst = (props) => {
    return (
        <Container>
        <div className="slider w-50 m-auto">
                <span>{props.name}</span>
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <span>{props.name}</span>
                <img className="d-block w-100" src="https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.setAutoplay(autoplay => !props.autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}
const First = withSlider(SliderFirst, getDataFromFirstFetch)
const Second = withSlider(SliderSecond, getDataFromSecondFetch)
const Hello = (props) => {
  return (
    <h2 className='h2' style={{textAlign: 'center', margin: '40px auto'}}>Hello {props.cities}</h2>
  )
}
const withHello = Wrapper => props => {
  useEffect(() => {
    const styles = {
      color: 'red'
    }
    document.querySelector('.h2').style.color = styles.color
  }, [])
  return <Wrapper {...props}/>
}
const NewHello = withHello(Hello)
function Hoc() {
    return (
      <>
        <NewHello cities={'Cities'}/>
        <First name={'Paris'}/>
        <Second name={'London'}/>
    </>
    );
}

export default Hoc;
