let UXprojectsDatalist=[
  {
    Index:1,
    picture: 'assets/img/portfolio/portfolio-1.png',
    headingOneInPicture:'Foodies',
    paraInPicture: "App Design",
    labelText: "Foodies  <br> Online Food Ordering App"
  },
  {
    Index:2,
    picture: 'assets/img/portfolio/portfolio-2.png',
    headingOneInPicture:'Battle Ground City',
    paraInPicture: "Responsive Website Design",
    labelText: "Battle Groung City<br>Responsive Website<br> Account Creation Flow Design."
  },
  {
    Index:3,
    picture: 'assets/img/portfolio/portfolio-3.png',
    headingOneInPicture:'Be-Fit',
    paraInPicture: "Mobile App & Responsive Website Design",
    labelText: "Be-Fit <br>Online Fitness Coaching <br> Website & Mobile App Design."
  }


];


function UXprojectTemplate(data){
  return `
<div class="col-lg-5 col-md-5 portfolio-item filter-app justify-content-center m-3 p-0">
  <div class="portfolio-wrap">
  <a href="#ux-projects" onClick="linkManager(${data.Index})" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details Link">
    <img src="${data.picture}" class="img-fluid" alt="">
    <div class="portfolio-info">
      <h4>${data.headingOneInPicture}</h4>
      <p>${data.paraInPicture}</p>
      <div class="portfolio-links">
        <a href="#ux-projects" onClick="linkManager(${data.Index})" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details Link"><i class="bx bx-link"></i></a>
      </div>
    </div>
    </a>
  </div>
  <h6 class="label-UXproject">${data.labelText}</h6>
</div>
  `
}
document.getElementById("ux-project-generator").innerHTML=`
${UXprojectsDatalist.map(UXprojectTemplate).join('')}
`;

function gotoUxProjects(){
  document.getElementById("nav-ux-projects").click();
  sliderBtnVisibility();
  slidergifVisibility();
  anyclickonpage= true;
}

function linkManager(i){
  switch (i){
    case 1:
      document.getElementById("projectslink-generator").innerHTML=`
              
      <div class="section-title container">
      <h2>UX Project:</h2>
      <p>Check out my UX project</p>
    </div>
    
  <div class="row justify-content-center">   
  <div class="container">
    <div class="row">
      <div class="col-lg-5" data-aos="fade-right">
        <img src="assets/img/Foodies App.webp" class="img-fluid my-img"  width="502px" alt="picture of users hand holding a phone and using Foodies App.">
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h2>Foodies App</h2>
        <h3>Online Food ordering App</h3>
          <p class="font-italic">
          UX-Design Project By - Abhishek Mishra.
         </p>
        <p class="font-italic">
           This is an online food ordering app of a local restaurant helping busy life working users to save time by ordering food online & spend quality time having their foods without waiting in line for their orders.
        </p>
        <p class="font-italic">Here are some features of Foodies App:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul>
              <li><i class="icofont-rounded-right"></i> <strong>Easy to navigate menu :</strong> helps users navigate app easily & check different foods with in the App.</li>
              <li><i class="icofont-rounded-right"></i> <strong>Customization : </strong>This feature lets users customize their order before addding to cart.</li>
              <li><i class="icofont-rounded-right"></i> <strong>Cart checkout: </strong>This feature lets users check food items in cart & adjust it's quantity before conforming their order. </li>
              <li><i class="icofont-rounded-right"></i> <strong>Order Tracking: </strong> This feature lets users track current & previous order and also let's them to reorder previously ordered food items.</li>
              <li><i class="icofont-rounded-right"></i> <strong>Prepare</strong> This is a new feature That let's users to prepare food online this feature is currently supported only for one menu item.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="container" >
  <div class="row justify-content-center">
  <div class="presentation-container">
  <div class="presentation">
    <h2>Design Process</h2>
    <p>Slide deck below describes Full User Experience design process conducted while designing Foodies App:</p>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSFQuDSYFrxT9DVIcly7qT1cuqMe5BSNAL0ZT3e54ej_4oSUa_XUY7qxb7D4300QSJm42-p2JGmkobC/embed?start=true&loop=true&delayms=3000" frameborder="0"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <div>
      <p>
        <br>
      </p>
    </div>
  </div>
  </div>
  </div>
</div>
<div class="image-ux-project image-style-border-foodies col-12">
  <img src="assets/img/Frame 9.png" alt="Image showing 5 screens of foodies App Screen Number 1 on left is cart page of Foodies App. Number 2 from left is menu page. Number 3 in center of screen is welcome page of foodies App.  Number 4 in right of screen is Prepare food online page of foodies App. Lastly Number 5 in right side on screen  is  Customization page for food items of foodies App."> </img>
</div>

  <div class="container mt-2" >
    <div class="row justify-content-center">
      <div class="col-lg-5" data-aos="fade-right justify-content-center">
        <div class="figma-prototype">
<iframe  style="border: 1px solid rgba(0, 0, 0, 0.1);" width="360" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxtK8SvKTdttTBCkPkax9In%2FFoodies-(Hi-FI)%3Fpage-id%3D0%253A1%26node-id%3D301%253A81%26viewport%3D245%252C48%252C0.34%26scaling%3Dmin-zoom%26starting-point-node-id%3D25%253A860" allowfullscreen></iframe>
       
        </div>
        <p class="prototype-text">Live Prototype of Foodies App</p>
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
      <div class="Prototype-heading-switch">
      <h3>  Design Considerations While Prototyping Foodies App:</h3>
      </div>
        <p class="font-italic">
          While Designing Foodies App accessibility and usability was considered to target larger audiance to support new users coming as Next Billion Users of smartphones.
        </p>
        <p class="font-italic">Listed below are Design considerations while Prototyping foodies app:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul class="protoype-design-considerations">
              <li><i class="icofont-tick-boxed"></i> <strong>High contrast colour palettes:</strong> Helps users with disabilities and normal users to use App in various lighting and screen glare  conditions .</li>
              <li><i class="icofont-tick-boxed"></i><strong>Keyboard navigation support:</strong> Tab , Backspace and  enter keys were been given primary importance while designing to make navigation simple and easyfor keyboard and switch device users.</li>
              <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Simple Smoother interactions were been added keeping users informed about current state of app with respect to the interactions with the help of hover states for web App users on Phone and while pressing button states was provided for gesture by Mobile App users.</li>
            </ul>
      </div>
      <p class="font-italic">
      Check out Live Prototype of Foodies App in Full Screen:
      <a href="https://www.figma.com/proto/xtK8SvKTdttTBCkPkax9In/Foodies-(Hi-FI)?page-id=0%3A1&node-id=301%3A81&viewport=245%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=301%3A81" target="_blank" >
      <button class="col-12 m-1 view-prototype-btn" aria-label="View Mobile Version Prototype Button.">Foodies App Live Prototype</button>
      <a>
    </p>
    </div>
    <p class="font-italic">
      For more details: Check out <a target="_blank" href="https://www.figma.com/proto/xtK8SvKTdttTBCkPkax9In/Foodies-(Hi-FI)?node-id=901%3A9287&scaling=min-zoom&page-id=890%3A5934&starting-point-node-id=963%3A6716">Design System of Foodies App</a>.
    </p>
  </div>
  <div id="portfolio" class="portfolio">
    <div class="container">
      <div class="section-title">
        <h2>  Explore more</h2>
        <p>UX Projects</p>
      </div>
      <div  id="Explore-more-project-generator" class="row portfolio-container">
                 <!--Projects links generation area-->
      </div>
    </div>
  </div>
</div>
</div>`
      break;
    case 2:
      document.getElementById("projectslink-generator").innerHTML=`
              
      <div class="section-title container">
      <h2>UX Project:</h2>
      <p>Check out my UX project</p>
    </div>
    
  <div class="row justify-content-center">   
  <div class="container">
    <div class="row">
      <div class="col-lg-5" data-aos="fade-right">
        <img src="assets/img/BGC-Picture.webp" class="img-fluid my-img"  width="100%" alt=" Picture showing Desktop and Mobile Screens with Battle Ground City gaming website Loaded.">
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h2>Battle Ground City</h2>
        <h3>Account Creation Flow For Gaming Web Site </h3>
          <p class="font-italic">
           UX-Design Project By - Abhishek Mishra.
         </p>
        <p class="font-italic">
           This is a Web Based Gaming Website Letting users play game on their Mobile Phone, PC and Desktop Just by completing simple account creation process.
        </p>
        <p class="font-italic">Here are Some Easy Ways to Get Started:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul>
              <li><i class="icofont-rounded-right"></i> <strong>Try For Free :</strong>New Users Can try this Game for free without signing up with their Emails for 60 mins.</li>
              <li><i class="icofont-rounded-right"></i> <strong> Sign up:</strong> Allowing users to Sign by Setting up their Username and Veryfying Email ID and then allowing them to set their account password. Users are also provided an easy way to sign up with Google or Facebook to make Sign up process faster. </li>
              <li><i class="icofont-rounded-right"></i> <strong>Sign in : </strong> Sign in with Google and Facebook options are provided on sign up page to make process fast at the same time letting users enter their username or Email ID and previously seted up password for their account.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="container" >
  <div class="row justify-content-center">
  <div class="presentation-container">
  <div class="presentation">
    <h2>Design Process</h2>
    <p>Slide deck below describes Full User experience design process conducted while designing Responsive website for Battle Ground City Account Creation flow :</p>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTivwtgBzMKYsC1Vuh1kiF-Z4NVnYpnP1spL9ryLw4C7pwiHZGQ1KN8MExTIEuOhmwTY_ZfhkidYHMS/embed?start=true&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <div>
      <p>
        <br>
      </p>
    </div>
  </div>
  </div>
  </div>
</div>
<div class="image-ux-project col-12">
  <img src="assets/img/Desktop-game-view.webp" alt="Image showing A Desktop Screen with Battle Ground City Game Screen has a picture of military soldier with a gun  and written text Battle Ground City By Game On Studios with a button to load game. Benith the button their is a text which says press tab key to turn on voice support. Screen Also Shows Game logo"> </img>
</div>

  <div class="container mt-2" >
    <div class="row justify-content-center">
      <div class="col-lg-5" data-aos="fade-right">
      <img src="assets/img/Battle-Ground-City.webp" class="img-fluid my-img"  width="100%" alt=" Picture showing Desktop and Mobile Screens with Battle Ground City gaming website Loaded.">
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Design Considerations While Prototyping Battle Grounds City Website</h3>
        <p class="font-italic">
          While Designing Battle Ground City Gaming Website's Account Creation flow Responsive Design ,accessibility and usability was considered to target larger audience to support new users coming as Next Billion Users to use digital screens.
        </p>
        <p>
          Aim was to make Battle Ground City Website Design screens Simple and easy to interact with. This was acomplished by making account creation flow friendly for childrens the main target audience  and other age group audience.
        </p>
        <p class="font-italic">Listed below are Design considerations while Prototyping Battle Ground City Website:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul class="protoype-design-considerations">
              <li><i class="icofont-tick-boxed"></i> <strong>Voice Support Feature:</strong> Helps Childrens who prefer to read less and enjoy a true Gaming Experience , users with disabilities and normal users to Create Account and navigate screens by getting and giving instructions in voice mode.</li>
              <li><i class="icofont-tick-boxed"></i><strong>Keyboard navigation support:</strong> Tab , Backspace and  enter keys and other keyboard keys will help keyboard users to interact with the website in a simple and easy Way.</li>
              <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Simple Smoother interactions were been added keeping users informed about current state of Screen with respect to the interactions with the help of hover states.</li>
            </ul>
      </div>
    </div>
    <p class="font-italic">
    <Strong>Check out Live Prototype of Battle Ground City:</Strong>
      <br>
      <Strong>Note:</Strong> Please wait for links to Load ,Press F11 while viewing Prototype on PC or Desktop as soon as link loads to  experience designs in real time by entering in full-screen mode .
      <a href="https://xd.adobe.com/view/12a8f8be-6e6d-4b0a-9d17-dbfc15dffd43-47fb/?fullscreen&hints=off" target="_blank" >
            <button class="col-12 m-1 view-prototype-btn" aria-label="View  PC/Desktop Version Prototype Button." >Battle Ground City PC/Desktop View Prototype</button>
      <a>
      <a href="https://xd.adobe.com/view/6e20c04a-aa5d-4d1d-a82d-202006967406-3b73/?fullscreen" target="_blank" >
          <button class="col-12 m-1 view-prototype-btn" aria-label="View Mobile Version Prototype Button.">Battle Ground City Mobile View Prototype </button>
      </a>
    </p>
  </div>
  <div id="portfolio" class="portfolio">
    <div class="container">
      <div class="section-title">
        <h2>  Explore more</h2>
        <p>UX Projects</p>
      </div>
      <div  id="Explore-more-project-generator" class="row portfolio-container">
                 <!--Projects links generation area-->
      </div>
    </div>
  </div>
</div>
</div>`
      break;
    case 3:
      document.getElementById("projectslink-generator").innerHTML=`
              
      <div class="section-title container">
      <h2>UX Project:</h2>
      <p>Check out my UX project</p>
    </div>
    
  <div class="row justify-content-center">   
  <div class="container">
    <div class="row">
      <div class="col-lg-5" data-aos="fade-right">
        <img src="assets/img/Laptop-Be-Fit.webp" class="img-fluid my-img"  width="100%" alt=" Picture showing a Laptop kept on the table with Be-Fit Online Fitness coaching Website loaded.">
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h2>Be-Fit</h2>
        <h3>Online Fitness Coaching Service Provider</h3>
          <p class="font-italic">
           UX-Design Project By - Abhishek Mishra.
         </p>
        <p class="font-italic">
        Be-Fit is a Online Fitness Coaching service provider brand available online as a responsive website and a native  mobile app  letting users do exercise and strengthen them self by  staying in their room following their daily routine and do exercise at their own pace according to their convenience.
        </p>
        <p class="font-italic">Here are Some Features Of Be-Fit App & Website:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul>
              <li><i class="icofont-rounded-right"></i> <strong> Easy to Start :</strong>Users can easily start their Fitness Journey by signing up with Google or Facebook they can even sign up or sign in manually.</li>
              <li><i class="icofont-rounded-right"></i><strong> Easy to use Menu Design:</strong> Menu is designed to help users start their daily workout  easily allowing them to choose from exercises and various instructors available before starting their exercise.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="container" >
  <div class="row justify-content-center">
  <div class="presentation-container">
  <div class="presentation">
    <h2>Design Process</h2>
    <p>Slide deck below describes User Experience design process being conducted while designing Online Be-Fit Fitness Coaching  Services :</p>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ35Dtt7vlsdCQnPog9DUXIQ3ezm7sHCkUHW2JgpT60-v6ZMIetMkxI7tR830a7SmM4clIWWhJ-PSGV/embed?start=true&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <div>
      <p>
        <br>
      </p>
    </div>
  </div>
  </div>
  </div>
</div>
<div class="image-ux-project col-12">
  <img src="assets/img/Comited-to-be-fit.jpg" class="img-fluid my-img" alt="Image with a Apple and a Wooden Dumble and a small Black board with written text Commited to be Fit with a single peace of white chalk kept on it"> </img>
</div>

  <div class="container mt-2" >
    <div class="row justify-content-center">
      <div class="col-lg-5" data-aos="fade-right">
      <img src="assets/img/Fit-be.webp" class="img-fluid my-img"  width="100%" alt=" Picture showing Desktop and Mobile Screens with Be-FIT  Application Loaded and aother pictures showing users doing exersise by using be-fit on their phone and laptop.">
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Design Considerations While Prototyping Be-Fit Web & Mobile Application</h3>
        <p class="font-italic">
          While Designing Be-Fit Online Fitness Coaching services it was considered Be-Fit is available as Native App & Responsive Website. Services were been designed considering ,accessibility and usability and it was aimed to target larger audience to support new users coming as Next Billion Users to use digital screens along with users with  disabilities.
        </p>
        <p>
          Aim was to make Be-Fit Design screens Simple and easy to interact with. This was acomplished by making account creation flow friendly for childrens the main target audience  and other age group audience.
        </p>
        <p class="font-italic">Listed below are Design considerations while Prototyping Be-Fit Online Services :</p>
        <div class="row">
          <div class="col-lg-12">
            <ul class="protoype-design-considerations">
            <li><i class="icofont-tick-boxed"></i> <strong>Read aloud Loud:</strong> Read Out aloud button was provided on page with instructions to help users with Disability as well as normal users to hear out instructions Whenever they wanted and also allow them to hear it as many number of times they wanted to reduce confusion. This will also help users to concentrate on exercise instead of reading by themselves on  Devices.</li>
              <li><i class="icofont-tick-boxed"></i> <strong>Voice Support Feature:</strong> Helps Users to Interact with application While Doing Exercise They Can use speak "read out aloud Be-fit" to read them out instructions. they can even speak out simple instructions like "Be-Fit go back" and "Done Be-Fit" to go back to previous Page and to go to Next Page after doing one exercise.</li>
              <li><i class="icofont-tick-boxed"></i><strong>Keyboard navigation support:</strong> Tab , Backspace and  enter keys and other keyboard keys will help keyboard users to interact with the website in a simple and easy Way.</li>
              <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Simple Smoother interactions were been added keeping users informed about current state of Screen with respect to the interactions with the help of hover states.</li>
            </ul>
      </div>
    </div>
    <p class="font-italic">
    <Strong>Check out Live Prototype of Be-Fit Fitness Coaching Services available as Native App , and Responsive WebSite:</Strong>
      <br>
      <Strong>Note:</Strong> Please wait for links to Load ,Press F11 while viewing Prototype on PC or Desktop as soon as link loads to experience designs in  real-time by viewing designs in full-screen mode .
      <a href="https://xd.adobe.com/view/cc56bfbe-9f8b-47f6-b162-1ef9f023e852-9905/?fullscreen" target="_blank" >
            <button class="col-12 m-1 view-prototype-btn" aria-label="View BE-Fit Mobile Version Prototype Button." >BE-Fit Mobile Version Prototype</button>
      <a>
      <a href="https://xd.adobe.com/view/144ee3b7-a592-48fd-a3cd-8a9e7a60bc7c-411d/?fullscreen" target="_blank" >
            <button class="col-12 m-1 view-prototype-btn" aria-label="View BE-Fit Tablet Version Prototype Button.">BE-Fit Tablet Version Prototype</button>
      <a>
      <a href="https://xd.adobe.com/view/07fc4d35-678e-44fd-b47c-4b4dc5d3e71a-52af/?fullscreen" target="_blank" >
            <button class="col-12 m-1 view-prototype-btn" aria-label="View BE-Fit Desktop/PC Version Prototype Button.">BE-Fit Desktop/PC Version Prototype </button>
      </a>
    </p>
  </div>
  <div id="portfolio" class="portfolio">
    <div class="container">
      <div class="section-title">
        <h2>  Explore more</h2>
        <p>UX Projects</p>
      </div>
      <div  id="Explore-more-project-generator" class="row portfolio-container">
                 <!--Projects links generation area-->
      </div>
    </div>
  </div>
</div>
</div>`
      break;
  }
  function ExploreMoreprojectTemplate(data){
    return `
  <div class="col-lg-5 col-md-5 portfolio-item filter-app justify-content-center m-3 p-0">
    <div class="portfolio-wrap">
    <a href="#ux-projects" onClick="linkManager(${data.Index})" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details Link">
      <img src="${data.picture}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${data.headingOneInPicture}</h4>
        <p>${data.paraInPicture}</p>
        <div class="portfolio-links">
          <a onClick="linkManager(${data.Index})" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details Link"><i class="bx bx-link"></i></a>
        </div>
      </div>
      </a>
    </div>
    <h5 class="label-UXproject">${data.labelText}</h5>
  </div>
    `
  }
  document.getElementById("Explore-more-project-generator").innerHTML=`
  ${UXprojectsDatalist.map( ExploreMoreprojectTemplate).join('')}
  `;
  gotoUxProjects();
}

