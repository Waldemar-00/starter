import {useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
// class Slider extends Component {
// 
    // constructor(props) {
        // super(props);
        // this.state = {
            // autoplay: false,
            // slide: 0
        // }
    // }
    // conponentDidMount() {
        // document.title = `Slide: ${this.state.slide}`
    // }
    // componentDidUpdate() {
        // document.title = `Slide: ${this.state.slide}`
    // }
    // changeSlide = (i) => {
        // this.setState(({slide}) => ({
            // slide: slide + i
        // }))
    // }
// 
    // toggleAutoplay = () => {
        // this.setState(({autoplay}) => ({
            // autoplay: !autoplay
        // }))
    // }
// 
    // render() {
        // return (
            // <Container>
                /* <div className="slider w-50 m-auto"> */
                    /* {/* <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" /> */
                    /* <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div> */
                        /* <div className="buttons mt-3"> */
                        /* <button */
                            // className="btn btn-primary me-2"
                            // onClick={() => this.changeSlide(-1)}>-1</button>
                        /* <button */
                            // className="btn btn-primary me-2"
                            // onClick={() => this.changeSlide(1)}>+1</button>
                        /* <button  */
                            // className="btn btn-primary me-2"
                            // onClick={this.toggleAutoplay}>toggle autoplay</button>
                    /* </div> */
                /* </div> */
            /* </Container>  */
        // )
    // }
// }


// const Slider = () => {
    // const [slide, setSlide] = useState(0)
    // const [autoplay, setAutoplay] = useState(false)
    // const changeSlide = (i) => {
        // setSlide(slide => slide + i)
    // }
    // const toggleAutoplay = () => {
        // setAutoplay(autoplay => !autoplay)
    // }
    // return (
        // <Container>
            /* <div className="slider w-50 m-auto"> */
                /* {/* <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" /> */
                /* <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div> */
                /* <div className="buttons mt-3"> */
                    /* <button  */
                        // className="btn btn-primary me-2"
                        // onClick={() => changeSlide( -1)}>-1</button>
                    /* <button  */
                        // className="btn btn-primary me-2"
                        // onClick={() => changeSlide(1)}>+1</button>
                    /* <button  */
                        // className="btn btn-primary me-2"
                        // onClick={toggleAutoplay}>toggle autoplay</button>
                /* </div> */
            /* </div> */
        /* </Container> */
    // )
// }
const Slider = () => {
    const [state, setState] = useState({ slide: 0, autoplay: false })
    
    const logging = () => {
        console.log('logging')
    }

    useEffect(() => {
        console.log('useEffect')
        document.title = `Sl: ${state.slide}`
        window.addEventListener('click', logging)
        return () => {
            window.removeEventListener('click', logging)
        }
    }, [state.slide])
    const getSomeImages = useCallback(() => {
        console.log('GET')
        return [
            'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArTzo_6ODTO8yjuSqaWUEAbvVM3oFubu5VWrRnv9Kh4pgWRPNsNUU--p9lOrQYmElzR0&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAAsrkv-bDma7wGa3UiXPHbNZzlqkfpaTH5POwWF0qoQE-RVw51Jbr0AyBTDkhUFe54c&usqp=CAU'
        ]
    }, [])
    const changeSlide = (i) => {
        setState(state => {
            return {...state, slide: state.slide + i}
        })
    }
    const toggleAutoplay = () => {
        setState(state => ({...state, autoplay: !state.autoplay}))
    }
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/
france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <Slide getSomeImages={getSomeImages}/>
                <div className="text-center mt-5">Active slide {state.slide} <br/> {state.autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide( -1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div> 
            </div>
        </Container>
    )
}
const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])
    return (
        <>
        {images.map((url, i) => <img key={i} src={url} alt='woman'/>)}
        </>
    )
}
function App() {
    const [slider, setSlider] = useState(true)
    return (
        <>
            <button onClick={() => setSlider(false)}>Delete Slider</button>
            { slider ? <Slider/> : null}
        </>
    );
}

export default App;
