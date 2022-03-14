import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Carousel from "./Carousel/Carousel"

function MainPage() {
  return (
    <div id="mainPage">
        <Header/>
            <div id="mainShell">
              <Main/>
            </div>
        {/* <Carousel/> */}
        <Footer/>
    </div>
  );
}

export default MainPage;