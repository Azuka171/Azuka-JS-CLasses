import { updateUI } from "./products.js"

const index_content = `<div class="banner-section">
<div class="welcome"> Welcome to the D-Empire's</div>
<div class="note">The home of credibility and satisfaction</div>

</div>
<div class="about-us-section">
<div class="more">
    <img src="./images/docoration.jpeg">
    <div>D-Empire's</div>
</div>
<div class="about">
    <h3>About us</h3>
    <div>
        <p>
            D-Empire's is a reliable industry that's specialized on all kinds of decoration, cakes, chapman, cocktails, photography, makeover, bridal hair, surprise package, small chops, food tray, 
            and everything that will make your events memorable. 
            D-Empire's got you covered for a suitable and exceptional event.
            Seeking for the perfect touch for an extraordinary event?
            Look no further: at D-Empire's, we specialize in turning vision's into 
            vibrant realities from weding's, to birthday's, to cooperate  gatherings, 
            to corporate occasion, and lots more.. our creative teams craft enchanting 
            atmosphere that leaves a lasting impression.
        </p>
    </div>
    <div class="learn-more-btn"><a href="About-us.html" class="aboutlink">Read More</a></div> 
</div>
</div>
<div class="mission-vision-section">
<div class="card">
    <div class="heading">mission</div>
    <ul class="card-content">
        <li>We strive to offer our customers the lowest possible prices, the best available selection and the utmost convenience.</li>
        <li>To design and plan a memorable event.</li>
        <li>To create a solid events budget </li>                        
    </u>
    <div class="blue-dot"></div>
</div>
<div class="card">
    <div class="heading">vision</div>
    <ul class="card-content">
       To be the leading events management company in Nigeria, by meeting and exceeding the expectation of our clients true innovative ideas and the delivery of excellent services.
    </ul>
    <div class="blue-dot"></div>
</div>
<div class="card">
    <div class="heading"> core value</div>
    <ul class="card-content">
        <li>We Practice Integrity</li>
        <li>Honesty</li>
        <li>Character</li>
        <li>Dependability</li>
        <li>Trust</li>
        <li>Honor and Excellence.</li>
        <li>We focus on attention</li>
        <li>customer service</li> 
        <li>professionalism</li>
        <li>engagement</li>
        <li>being approachable and helpful.</li> 
    </ul>
    <div class="blue-dot"></div>
</div>
</div>
<div class="galley">
<div class="product">our products</div>
<div id="product-div">
    <a href="our-services.html"><img src="./images/wedding picture.jpg"></a>
    <a href="our-services.html"><img src="./images/ballon.jpeg"></a>   
    <a href="our-services.html"> <img src="./images/dE1.jpeg"></a>    
    <a href="our-services.html"><img src="./images/dE2s.jpeg"></a>   
    <a href="our-services.html"><img src="./images/make-up.jpg"></a>   
    <a href="our-services.html"> <img src="./images/cakep1.jpeg"></a>   
    <a href="our-services.html"><img src="./images/castle1.jpeg"></a> 
    <a href="our-services.html"> <img src="./images/dEs1.jpeg"></a>   
</div>
</div>
<div class="empire"><a href="contact-us.html">Book now</a></div>
<div class="team-div">
<div class="our">
    <img src="./images/team picture.jpg">
    <div>D-Empire's</div>
</div>
<div class="team">
    our team
     <div  class="focus">
        <p>
            At D-Empire's, we offer the best services on ushering, event planning, event coverage, makeover, bridal hair, surprise package, small chops, all kind of cakes and lots more.. We train and we build! Elevate your event with an unforgettable touch.. 
            Abouts.. We create a methodical event leavin you with an unforgettable touch and create a lasting smile on your face. D-Empire's gives you all in 1 package and help you make more sustainable choices..  
        </p>
    </div>
</div>
</div>`

const about_us_content = `<div class="about-us-banner-section">
<div class="history">About Us</div>
</div> 
<div class="words">
<p>
    D-Empire's is a reliable industry that's specialized on all kinds of decoration, cakes, chapman, cocktails, photography, makeover, bridal hair, surprise package, small chops, food tray, 
    and everything that will make your events memorable. 
    D-Empire's got you covered for a suitable and exceptional event.
    Seeking for the perfect touch for an extraordinary event?
    Look no further: at D-Empire's, we specialize in turning vision's into 
    vibrant realities from weding's, to birthday's, to cooperate  gatherings, 
    to corporate occasion, and lots more.. our creative teams craft enchanting 
    atmosphere that leaves a lasting impression.
</p>
<p>
    At D-Empire's, we offer the best services on ushering, event planning, event coverage, makeover, bridal hair, surprise package, small chops, all kind of cakes and lots more.. We train and we build! Elevate your event with an unforgettable touch.. 
    Abouts.. We create a methodical event leavin you with an unforgettable touch and create a lasting smile on your face. D-Empire's gives you all in 1 package and help you make more sustainable choices..  
</p>
<div class="choose">Why choose us?</div>
<ul class="list">
    <li>
        <span class="son">Experience :</span> Years of industry experience; ensure exceptional transformation that exceeds expectation.
    </li>
    <li>
         <span class="son">Credibility :</span> D-Empire's does not leave your events without an unforgettable touch; we create memories of euphoria and give absolutely the best.
    </li>
    <li>
        <span class="son">Personalization :</span> Your styes shines  through as we infuse your idea into our unique designs.
    </li>
    <li>
        <span class="son">Attention to details:</span> We harmonize every element,  creating an enchanting and stunning ambience.
    </li>
    <li>
        <span class="son">Stress free:</span> Sit back and relax while we handle your event precisely giving you a systematic nd methodical event.
    </li>
</ul>
</div>
<div class="empire"><a href="contact-us.html">Book now</a></div>`

const contact_content = `<div class="contact-section">
<div class="welcome-page"> Welcome to the D-Empire's</div>
<div class="note-form">The home of credibility and satisfaction</div>
<div class="service-event">we are at your service book your Event:</div>
<form class="contact-form_f">
    <div>
        <label for="fullname">Name:</label>
        <input type="text"  name="Fullname" id="fullname" placeholder="fullName">
    </div>
   <div>
        <label for="email-address">Email:</label>
        <input type="text"  name="email-address" id="email-address" placeholder="email address">
   </div>
   <div>
        <label for="phone-number">Phone:</label>
        <input type="text"  name="phone-number" id="phone-number" placeholder="phone number">
   </div>
    <div>
        <label for="whatsapp-number">Alternative:</label>
        <input type="text"  name="whatsapp-number" id="whatsapp-number" placeholder="whatsapp number">
    </div>
    <div class="col-span2">
        <label for="location">Location:</label>
        <input type="text"  name="location" id="location" placeholder="event address">
    </div>
    <div class="col-span2">
        <label for="state">State:</label>
        <input type="text"  name="state" id="state" placeholder="">
    </div>
    
    <div class="select-services-grid col-span2">
        <div class="booking">
            what service are you booking for:
        </div>
        <div>
            <div>
                <input type="checkbox" name="event-planning" id="event-planning" value="event-planning">
                <label for="event-planning">Event Planning</label>
            </div>
            <div>
                <input type="checkbox" name="event-coverage" id="event-coverage" value="event-coverage">
                <label for="event-coverage">Event Coverage</label>
            </div>
            <div>
                <input type="checkbox" name="bridal-makeup" id="bridal-makeup" value="bridal-makeup">
                <label for="bridal-makeup">Bridal Makeup</label>
            </div>
            <div>
                <input type="checkbox" name="bridal-hair" id="bridal-hair" value="bridal-hair">
                <label for="bridal-hair">Bridal Hair</label>
            </div>
            <div>
                <input type="checkbox" name="Traditional-bridal-dressing" id="Traditional-bridal-dressing" value="Traditional-bridal-dressing">
                <label for="Traditional-bridal-dressing">Traditional Bridal Dressing</label>
            </div>
            <div>
                <input type="checkbox" name="Wedding-dress" id="Wedding-dress" value="Wedding-dress">
                <label for="Wedding-dress">Wedding Dress </label>
            </div>
            <div>
                <input type="checkbox" name="cakes-for-all-occasions" id="cakes-for-all-occasions" value="cakes-for-all-occasions">
                <label for="cakes-for-all-occasions">Cakes For All Occasions </label>
            </div>
            <div>
                <input type="checkbox" name="small-chops 
             " id="small-chops" value="small-chops">
                <label for="small-chops">Small Chops</label>
            </div>
            <div>
                <input type="checkbox" name="cocktails  
            " id="cocktails" value="cocktails">
                <label for="cocktails">Cocktails</label>
            </div>
            <div>
                <input type="checkbox" name="suprise-package
            " id="suprise-package" value="suprise-package">
                <label for="suprise-package">Suprise Package</label>
            </div>
            <div>
                <input type="checkbox" name="food-tray
            " id="food-tray" value="food-tray">
                <label for="food-tray">food Tray
                </label>
            </div>
            <div>
                <input type="checkbox" name="decoration
            " id="decoration" value="decoration">
                <label for="decoration">Decoration</label>
            </div>
        </div>
    </div>
    <div class="col-span2">
        <label class="select-event"> Select Event to Book:</label>
        <select name="Event" >
            <option selected disabled>Select Event</option>
            <option value="Traditional-Marriage">Traditional Marriage</option>
            <option value="Wedding">Wedding</option>
            <option value="Wedding-Anniversary">Wedding Anniversary</option>
            <option value="Birthday-Party">Birthday Party</option>
            <option value="House-Warming">House Warming</option>
            <option value="Banquets">Banquets</option>
            <option value="Suprise-party">Suprise Party</option>
            <option value="Dinner-party">Dinner Party</option>
            <option value="Garden-part">Garden Party</option>
            <option value="Cocktail-party">Cocktail Party</option>
            <option value="Tea-part">Tea Party</option>
            <option value="Tea-part">Balls</option>
        </select>
    </div>
    <div class="contact-form-submit-btn col-span2">
        <input type="submit" class="submit-btn">
    </div>
</form>
<!-- <form class="form-section">
    <div>
        <label for="fullname" class="label-block">Name:</label>
        <input type="text"  name="Fullname" id="fullname" placeholder="fullName" class="input-form">
    </div>
   <div>
        <label for="email-address" class="label-block">Email:</label>
        <input type="text"  name="email-address" id="email-address" placeholder="email address" class="email-form">
   </div>
   <div>
        <label for="phone-number" class="label-block">Phone:</label>
        <input type="text"  name="phone-number" id="phone-number" placeholder="phone number" class="phone-number">
   </div>
    <div>
        <label for="whatsapp-number" class="label-block">Alternative:</label>
        <input type="text"  name="whatsapp-number" id="whatsapp-number" placeholder="whatsapp number" class="whatsapp-number">
    </div>
    <div class="col-span2">
        <label for="location" class="label-block">Location:</label>
        <input type="text"  name="location" id="location" placeholder="event address" class="location">
    </div>
    <div class="col-span2">
        <label for="state" class="label-block">State:</label>
        <input type="text"  name="state" id="state" placeholder="" class="state">
    </div>
    
    <div class="container-checkbox col-span2">
        <div class="booking">
            what service are you booking for:
        </div>
        <div  class="checkbox-section">
            <div>
                <input type="checkbox" name="event-planning" id="event-planning" value="event-planning">
                <label for="event-planning" class="event-planning">Event Planning</label>
            </div>
            <div>
                <input type="checkbox" name="event-coverage" id="event-coverage" value="event-coverage">
                <label for="event-coverage" class="event-planning">Event Coverage</label>
            </div>
            <div>
                <input type="checkbox" name="bridal-makeup" id="bridal-makeup" value="bridal-makeup">
                <label for="bridal-makeup" class="bridal-makeup">Bridal Makeup</label>
            </div>
            <div>
                <input type="checkbox" name="bridal-hair" id="bridal-hair" value="bridal-hair">
                <label for="bridal-hair" class="bridal-hair">Bridal Hair</label>
            </div>
            <div>
                <input type="checkbox" name="Traditional-bridal-dressing" id="Traditional-bridal-dressing" value="Traditional-bridal-dressing">
                <label for="Traditional-bridal-dressing" class="Traditional-bridal-dressing">Traditional Bridal Dressing</label>
            </div>
            <div>
                <input type="checkbox" name="Wedding-dress" id="Wedding-dress" value="Wedding-dress">
                <label for="Wedding-dress " class="Wedding-dress">Wedding Dress </label>
            </div>
            <div>
                <input type="checkbox" name="cakes-for-all-occasions" id="cakes-for-all-occasions" value="cakes-for-all-occasions">
                <label for="cakes-for-all-occasions" class="cakes-for-all-occasions">Cakes For All Occasions </label>
            </div>
            <div>
                <input type="checkbox" name="small-chops 
             " id="small-chops" value="small-chops">
                <label for="small-chops" class="small-chops">Small Chops</label>
            </div>
            <div>
                <input type="checkbox" name="cocktails  
            " id="cocktails" value="cocktails">
                <label for="cocktails" class="cocktails ">Cocktails</label>
            </div>
            <div>
                <input type="checkbox" name="suprise-package
            " id="suprise-package" value="suprise-package">
                <label for="suprise-package" class="suprise-package">Suprise Package</label>
            </div>
            <div>
                <input type="checkbox" name="food-tray
            " id="food-tray" value="food-tray">
                <label for="food-tray" class="food-tray">food Tray
                </label>
            </div>
            <div>
                <input type="checkbox" name="decoration
            " id="decoration" value="decoration">
                <label for="decoration" class="decoration">Decoration</label>
            </div>
        </div>
    <div>
        <label class="select-event"> Select Event to be Booked</label><br>
    </div>
    <div>
        <select name="Event" >
            <option selected disabled>Select Event</option>
            <option value="Traditional-Marriage">Traditional Marriage</option>
            <option value="Wedding">Wedding</option>
            <option value="Wedding-Anniversary">Wedding Anniversary</option>
            <option value="Birthday-Party">Birthday Party</option>
            <option value="House-Warming">House Warming</option>
            <option value="Banquets">Banquets</option>
            <option value="Suprise-party">Suprise Party</option>
            <option value="Dinner-party">Dinner Party</option>
            <option value="Garden-part">Garden Party</option>
            <option value="Cocktail-party">Cocktail Party</option>
            <option value="Tea-part">Tea Party</option>
            <option value="Tea-part">Balls</option>
        </select><br>
    </div>
    <div>
        <input type="submit" class="submit-btn">
    </div>
</form> -->
</div>`

const service_content = `
    <div class="galley">
        <div class="product">our products</div>
        <div id="product-div">
            <!--contents-->
        </div>

    </div>`

const video_content = `<div class="video-grid-section">
<video src="./videos/DE EMPIRE VID 1.mp4"  controls play loop  muted></video>
<video src="./videos/DE EMPIRE VID 2.mp4"  controls play loop muted></video>
<video src="./videos/DE EMPIRE VID 3.mp4"  controls play loop muted></video>
<video src="./videos/video new1.mp4"  controls play loop muted></video>
<video src="./videos/video new2.mp4" controls play loop muted></video>
</div>
<div class="empire"><a href="contact-us.html">Book now</a></div>`

const contents_container = document.getElementsByTagName('main')[0];
contents_container.innerHTML = index_content

document.getElementById('home_link').addEventListener('click', (event)=>{
    event.preventDefault()
   contents_container.innerHTML = index_content
    }
)
document.getElementById('service_link').addEventListener('click', (event)=>{
        event.preventDefault()
        contents_container.innerHTML = service_content
        updateUI()
    }
)
document.getElementById('about_link').addEventListener('click', (event)=>{
    event.preventDefault()
   contents_container.innerHTML = about_us_content
    }
)
document.getElementById('contact_link').addEventListener('click', (event)=>{
    event.preventDefault()
   contents_container.innerHTML = contact_content
    }
)
document.getElementById('video_link').addEventListener('click', (event)=>{
    event.preventDefault()
   contents_container.innerHTML = video_content
    }
)

