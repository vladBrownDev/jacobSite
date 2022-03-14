import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

export default function CloseTemplate () {
    return (
        <>
            <Header/>
                <div id="mainShell">
                    <Main/>
                </div>
            <Footer/>
        </>
        
    )
} 