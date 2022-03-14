import './Album.css';
import ReactDOM from "react-dom"

import headph from "../../imgs/album1/Photo 1.png"
import ph2 from "../../imgs/album1/Photo 2.png"
import ph3 from "../../imgs/album1/Photo 3.png"
import ph4 from "../../imgs/album1/Photo 4.png"
import ph5 from "../../imgs/album1/Photo 5.png"
import ph6 from "../../imgs/album1/Photo 6.png"
import ph7 from "../../imgs/album1/Photo 7.png"
import ph8 from "../../imgs/album1/Photo 8.png"

import Main from '../Main/Main';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';

function Album() {
    function renderMain () {
        const shell = document.getElementById("mainShell")
        ReactDOM.render(<Main/>, shell)
    }
    function renderCarousel(e) {
        const name = e.target.name - 1
        const page = document.getElementById("mainPage")
        ReactDOM.render([<Carousel slide={name}/>,<Footer/>],page)
    }
    
  return (
      <>
        <section className='albumHead'>
            <div id="albumText">
                <div id="tabName">
                    <span onClick={renderMain} className='grayText'>Portfolio</span>
                    <span> / Danish coasts album</span>
                </div>
                <h1>Danish Coasts</h1>
                <div id="desc">
                    <span>The Danish coastlines have always had a very special place in my photographer's heart! The coasts of Denmark are the ones that make the country unique.</span>
                    <span>In addition, it is without a doubt the coasts, which constitute the most extreme nature found in Denmark - which is appealing to a nature and landscape photographer.</span>
                    <span>I have explored the Danish coasts many times with a camera and below are the best selections.</span>
                </div>
                <h1>Tool I use</h1>
                <div className='toolSec'>
                    <span>Camera</span><span>Sony A7III</span>
                </div>
                <div className='toolSec'>
                    <span>Lens</span>
                    <span>
                        <p>Sony FE 16-35mm f / 4</p>
                        <p>Sony FE GM 100-400mm f / 3.5-5.6</p>
                    </span>
                </div>
                <div className='toolSec'>
                    <span>Drone</span><span>DJI Mavic Pro</span>
                </div>
            </div>
            <img onClick={renderCarousel} name="1" id="headImg" src={headph} alt="" srcSet="" />
        </section> 
        <section id="restAlbum">
            <div className='multiplePhotos'>
                <img onClick={renderCarousel} name="3" className='smallPh' src={ph3} alt="" srcSet="" />
                <img onClick={renderCarousel} name="4" className='smallPh' src={ph4} alt="" srcSet="" />
                <img onClick={renderCarousel} name="2"  className='bigPh' src={ph2} alt="" srcSet="" />
            </div>
            <img onClick={renderCarousel} name="5"id="biggestPh" src={ph5} alt="" srcSet="" />
            <div className='multiplePhotos2'>
                <img onClick={renderCarousel} name="6" className='bigPh2' src={ph6} alt="" srcSet="" />
                <img onClick={renderCarousel} name="7" className='smallPh2' src={ph7} alt="" srcSet="" />
                <img onClick={renderCarousel} name="8" className='smallPh2' src={ph8} alt="" srcSet="" />
            </div>
        </section>
      </>
    
  );
}

export default Album;