import React, {  } from 'react'
import {Link} from 'react-router-dom'
import home_anime from './../../assets/home_anime.gif'
// import Modal from '../Modal/Modal'
import './Home.css'
const Home = () => {
    // const [showmodal, setshowmodal] = useState(true)

    // const ShowingModal = () =>{
    //     setshowmodal(false)
    // }
    return (
        <div className=' home-page'>
            

           {/* {showmodal && <Modal ShowingModal={ShowingModal}/>} */}
            <div className="home-txt">
                <h1>Hello....👋 I'm Prathyu Prasad</h1>
                <p>Im a Web Devaloper</p>
            </div>
            <div className="home-btn">
                <Link to='/about' className="btn btn-white">
                    <p className="btn-txt">know more about me</p>
                </Link>
                <Link to='/contact' className="btn btn-transparennt">
                <p className="btn-txt">connect me</p>
                </Link>

            </div>
            <div className="splash-img">
                <img  className="home_anime"
                src={home_anime} alt="animation-home" />
            </div>
           
        </div>
    )
}

export default Home
