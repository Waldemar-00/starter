import {useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
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
            'https://st2.depositphotos.com/6672578/9739/i/600/depositphotos_97391824-stock-photo-beautiful-woman-smiling-sweetly-in.jpg',
            'https://t4.ftcdn.net/jpg/06/07/10/03/360_F_607100352_sxqMVVdsMAwXuW3VW1EfyJkJzG82Jtqf.jpg',
            'https://t4.ftcdn.net/jpg/02/12/19/27/360_F_212192737_Cj1xDJHEuOWD93dW2qRfPJE1VrAUfyNh.jpg'
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
        {images.map((url, i) => <img key={i} src={url} alt='woman' className="d-block w-100"/>)}
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
