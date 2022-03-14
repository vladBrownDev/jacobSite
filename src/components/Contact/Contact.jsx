import "./Contact.css"
import JacobPic from "../../imgs/jacobPic.png"



function Contact() {
    return (
        <div id="contact">
            <img alt="Jacob Pic" src={JacobPic}/>
            <div id="contactText">
                <div id="leftCont">
                    <h1>Get in touch</h1>
                    <div id="firstContBlock">
                        <div className="innerContBlock">
                            <span>E-mail</span>
                            <span>contact@jvingtoft.com</span>
                        </div>
                        <div className="innerContBlock">
                            <span>Phone</span>
                            <span>+45 20 67 05 48</span>
                        </div>
                    </div>
                    <div id="secContBlock">
                        <h3>Programs I use</h3>    
                        <div className="program">- Adobe Lightroom Classic</div>
                        <div className="program">- Adobe Photoshop</div>
                        <div className="program">- And Adobe Premiere Pro</div>
                        <div className="program">- Adobe After Effects</div>
                    </div>
                    <div id="thirdContBlock">
                        <h3>Social Media</h3>  
                        <div id="social">
                            <a href="#">Ln</a>
                            <a href="#">Fb</a>
                            <a href="#">Yt</a>
                        </div>  
                    </div>
                </div>
                <div id="rightCont">
                    <h1>Jakob Vingtoft</h1>
                    <div id="authorDesc">
                        <span>
                            My name is Jakob Vingtoft, and I am a freelance photographer and 
                            filmmaker based in Vejle. I have a passion for nature and
                            storytelling like no other, and which I express through both
                            films and images. I specialize in landscape and nature
                            photography, but I am also capable of capturing portrait
                            and lifestyle images.
                        </span>
                        <span>
                            I have always been drawn to traveling and I have traveled a lot around Europe. When you come from Denmark as a nature photographer, where there are neither mountains nor extreme landscapes, you are forced to search for the details of the landscape - and not least wait for the perfect weather conditions. It is always a challenge to take pictures in the Danish nature, and it is this challenge that keeps me going! - Because I love it! In Denmark, you can not just walk out the door and take pictures anywhere with your camera and get good landscape photos. Challenge is what keeps my passion alive.
                        </span>
                        <span>
                            It's a cliché, but nonetheless the truth that my goal is to inspire people. If my images can lead to action or inspiration, then my mission is complete.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;