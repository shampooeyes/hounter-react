import './Footer.css';

const Footer = () => {
    return (
        
    <section class="footer">
    <img src={require("../../assets/bottom-left-blur.png")} class="position-absolute"
        style={{"bottom": "0px", left: "0px", zIndex: "-1",}} alt=""/>
    <img src={require("../../assets/bottom-right-blur.png")} class="position-absolute"
        style={{"bottom": "0px", right: "0px", zIndex: "-1",}} alt=""/>
    <div class="row justify-content-between">
        <div class="col-md-4 col-sm-4 text-start">

            <img src={require("../../assets/logo.png")} alt="company logo" class="logoImage"/>

            <h6 class="pt-3 pb-4" style={{lineHeight: "24px"}}>We provide information about properties such as houses,
                villas and apartments to help people find their dream home</h6>

            <div>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram mx-4"></i>
                <i class="bi bi-twitter"></i>
            </div>
        </div>

        <div class="col-md-6 mt-3">
            <div class="row">
                <div class="col-md-4 col-4">
                    <h4 class="mb-4">Property</h4>
                    <a href="#" class="footer-links">House</a>
                    <a class="footer-links">Apartment</a>
                    <a class="footer-links">Villa</a>
                </div>
                <div class="col-md-4 col-4 ">
                    <h4 class="mb-4">Article</h4>
                    <a href="#" class="footer-links">New Article</a>
                    <a href="#" class="footer-links">Popular Article</a>
                    <a href="#" class="footer-links">Most Read</a>
                    <a href="#" class="footer-links">Tips & Tricks</a>
                </div>
                <div class="col-md-4 col-4">
                    <h4 class="mb-4">Contact</h4>
                    <p class="footer-links text-decoration-none">2464 Royal Ln. Mesa, New Jersey 45463</p>
                    <p class="footer-links text-decoration-none">(671) 555-0110</p>
                    <p class="footer-links text-decoration-none">info@hounter.com</p>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default Footer;