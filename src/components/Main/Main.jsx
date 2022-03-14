import './Main.css';
import ReactDOM from 'react-dom';
import Album from "../Album/Album"

function Main() {
  function renderAlbum() {
    const shell = document.getElementById("mainShell")
    ReactDOM.render(<Album/>, shell)
  }
  return (
    <>
    <main>
      <div onClick={renderAlbum} className='cover' id="fCover">
        <div id="fText">
          Danish coasts
        </div>
      </div>
      <div onClick={renderAlbum} className='cover' id="secCover">
        <div id="fText">
          Iceland
        </div>
      </div>
      <div onClick={renderAlbum}className='cover' id="thirdCover">
        <div id="fText">
          Scotland
        </div>
      </div>
      <div onClick={renderAlbum} className='cover' id="fourthCover">
        <div id="fText">
          Madeira
        </div>
      </div>
      <div onClick={renderAlbum} className='cover' id="fifthCover">
        <div id="fText">
          London
        </div>
      </div>
    </main>
    </>
  );
}

export default Main;