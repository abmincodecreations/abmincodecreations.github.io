let UXprojectsDatalist=[
  {
    Index:5,
    picture: 'assets/img/portfolio/portfolio-5.png',
    headingOneInPicture:'Foodies',
    paraInPicture: "Desktop Website Design",
    labelText: "Foodies <br> Online Food Ordering <br> Desktop Website Design  <br> Considering 60+ aged User Group"
  },
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
  ,
  {
    Index:4,
    picture: 'assets/img/portfolio/portfolio-4.png',
    headingOneInPicture:'Classroom',
    paraInPicture: "Mobile App Design",
    labelText: "Smart Online Classroom App <br> Experience design for Students & Teachers in this Lockdown "
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
          A UX-Design Project By - Abhishek Mishra.
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
        <p class="prototype-text">Live Prototype of Foodies App.</p>
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
      <div class="Prototype-heading-switch">
      <h3>  Design Considerations While Prototyping Foodies App:</h3>
      </div>
        <p class="font-italic">
          While Designing Foodies App accessibility and usability was considered to target larger audience to support new users coming as Next Billion Users of smartphones.
        </p>
        <p class="font-italic">Listed below are Design considerations while Prototyping foodies app:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul class="protoype-design-considerations">
              <li><i class="icofont-tick-boxed"></i> <strong>High contrast colour palettes:</strong> Helps users with disabilities and normal users to use App in various lighting and screen glare  conditions .</li>
              <li><i class="icofont-tick-boxed"></i><strong>Keyboard navigation support:</strong> Tab , Backspace and  enter keys were been given primary importance while designing to make navigation simple and easyfor keyboard and switch device users.</li>
              <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Simple Smoother interactions & motion design were been added keeping users informed about current state of app with respect to the interactions with the help of hover states for web App users on Phone and while pressing button states was provided for gesture by Mobile App users.</li>
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

<div class="container" >
 <div class="row justify-content-center">
  <div class="content">
   <h2>Conclusion</h2>
   <h3></h3>
   <p>
     A  Online Food ordering App was been designed for a local restaurant based in Munich, Germany. Goal was to make product's design specialised for a particular restaurant so it was important to build it's brand  identity. Primary importance was given to make mobile app easy to use & to make product compitent enough with competitors app which was offering food orders from multiple restaurants. It was strongly considered that foodies app had it's unique brand identity and simple User Interface design wich could be easily perseved by German users as well as users from various backgrounds.
   </p>
   <h2>What I learned?</h2>
   <h3></h3>
   <p>
   Throughout this project I learned to Design  a product  from start to finish starting by drawing paper wireframes,conducting UX research and discovering importance of user feedback and UX Design process, I Learned to make accessible products and to prototype digital products in both high as well as low fedality prototype to bring ideas to life designs to be tested with users to iterate on Existing design by testing designs with real users , and realised value of iterating on design process and testing with real users can improve usability and user satisfaction.
   <Br>
   </p>
   <p>
   <Strong>
   Check out this article on :-
   <a target="_blank" href="https://bootcamp.uxdesign.cc/importance-of-design-systems-1ab3c28438f" > <u> How I realized the importance of design systems while Working on my first UX Design Project to know more about my discoverings while working with Foodies App design Project. </u> </a>
   </Strong>
   </p>
   </div>
 </div>
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
           A UX-Design Project By - Abhishek Mishra.
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

  <div class="container" >
  <div class="row justify-content-center">
  <div class="content">
    <h2>Demonstration Video</h2>
    <h3>For Acessability with Voice Support with keyboard input in Battle Ground City Account Creation Flow</h3>
    <p></p>
    <div class="iframe-container">
    <iframe width="100%" height="900px" src="https://www.youtube-nocookie.com/embed/pGSVybbkXZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div>
    </div>
  </div>
 </div>
 
 <div class="container" >
 <div class="row justify-content-center">
 <div class="content">
   <h2>Conclusion</h2>
   <h3></h3>
   <p>
    An Account creation flow for a gaming website was been created considering web based users who don't have much of hardware but want to enjoy gaming experience on web on their browser. Account creation flow allowed users to try game without sign up where in users can play the game for a period of time and then when free trial time period is over user can sign up to continue playing game online.  Adding this feature will allow web users who try out a lot of games and then end up only signing up to the game that they like and  to avoid not geting email and product updates about the games which they signed in just to try out for free on web. Special feature and gaming experience can be provided to signed in users and to atract users who use try to sign up for free option.
    implementing voice support can cost less data and can bring next level gaming experience for browser based games with enhancement in browser based support with voice interactions.
   </p>

   <h2>What I learned ?</h2>
   <h3></h3>
   <p>
  I realised How important it is to have a planned and well designed  account creation flow of any Digital Application to help users easily start with digital products online on web, It is very important to verify user identity and take required data from users while signing up to design exclusive experience further in the product for users. But the challenge was to keep users informed about reasons behind the data been asked during account creation flow. So that user will not hesitate or feel Privacy issues while signing up.

  I also Realized how gaming Experience design can include multiple ways to acess content and theirfore acessability implimentation here not just enhances user experience by bringing gaming experience but also make product's overall design enjoyable and fun to use.
   <Br>
   </p>
   </div>
 </div>
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
           A UX-Design Project By - Abhishek Mishra.
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
      <img src="assets/img/Fit-be.webp" class="img-fluid my-img"  width="100%" alt=" Picture showing Desktop and Mobile Screens with Be-FIT  Application Loaded and aother pictures showing users doing exercise by using be-fit on their phone and laptop.">
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

<div class="container" >
 <div class="row justify-content-center">
  <div class="content">
   <h2>Conclusion</h2>
   <h3></h3>
   <p>
   An Accessible simple product was been designed to help normal people and for users with special abilities  to help them concentrate on their fitness and overall health via Be-Fit Digital Products. Aim was to give uses from various backgrounds equal opportunity and a platform to do exersice by getting instructions from Be-Fit Online Fitness coaching service. 
   </p>
   <h2>What I learned?</h2>
   <h3></h3>
   <p>
   I learned value Of Accessibility and how implementing acessability can not just help users with disabilities but it can help a very wide range of users with various backgrounds , abilities  & users under special situations.  Being Inclusive while Designing considering  Accessibility and usability can make digital products more interactive, usable and acessable for everyone making products experience lovable and enjoyable for Global audience. I designed Be-Fit digital products using adobe xd so this project also gave me an opprtunity to learn and to work on projects using xd. 
   <Br>
   </p>
   </div>
 </div>
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

      case 4:
        document.getElementById("projectslink-generator").innerHTML=`
                
        <div class="section-title container">
        <h2>UX Project:</h2>
        <p>Check out my UX project</p>
      </div>
      
    <div class="row justify-content-center">   
    <div class="container">
      <div class="row">
        <div class="col-lg-5" data-aos="fade-right">
          <img src="assets/img/Classroom-App.gif" class="img-fluid my-img"  width="100%" alt=" Picture showing Classroom App loaded on a Mobile phone">
        </div>
        <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h2>Classroom Mobile App</h2>
          <h3>Smart Online Classroom Experience in this Lockdown for Students and Teachers</h3>
            <p class="font-italic">
             A UX-Design Project By - Abhishek Mishra.
           </p>
          <p class="font-italic">
          Classroom Is a Online service provider providing  a Comfortable and flexible  digital Classroom experience  for students and teachers with improved User Experience. Available as a Mobile App. Aim is to help students and teachers in effective management of their classroom experience under remote conditions in this  Lockdown by improving collaboration and learning. Product Aims to Offer Solutions to  problems existing  in the current Online Education System.
          </p>
          <p class="font-italic">Some Quick Features of Classroom App:</p>
          <div class="row">
            <div class="col-lg-12">
              <ul>
                <li><i class="icofont-rounded-right"></i> <strong>Online Time Table Management Support :</strong> Smart Time table management feature helps in class sheduling by collecting real time feedback from teachers about class starting time in advance and giving this status update to students in their menu page.</li>
                <li><i class="icofont-rounded-right"></i> <strong>Study Resources Management:</strong> Helping students to effectively acess study resorces in this lockdown by allowing teachers to post study resorses in a well organized way. Idea was to share Youtube Playlists made by teachers as Study resorses along with Study notes to makes study materials living and usefull for students because not every student is intrested in reading so much </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  

  <div class="container" >
    <div class="row justify-content-center">
    <!-- Classroom App Video -->
    <div class="container" >
      <div class="row justify-content-center">
      <div class="content">
        <div class="iframe-container">

      <iframe width="100%" height="900px" src="https://www.youtube.com/embed/nwbfsy_82g0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div>
        </div>
      </div>
    <!-- Classroom App Video-->
    <div class="presentation-container">
    <div class="presentation">
      <h2>Design Process</h2>
      <p>Slide deck below describes Full User experience design process conducted while designing Classroom Mobile App:</p>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSFO6_cWxBJAfewNTr67g8N_y5djqelWXI9Maq-Ug-mDB8zCyq3S0kHEwo70v0qyWHwwskoj87uXePA/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
    <img src="assets/img/classroom-app-in-lockdown.png" alt="Image showing a mobile screen kept on a mask on table with classrom app loaded. With other things such as pens tand with pens in it & sanitizer bottle kept on the table too."> </img>
  </div>
  
    <div class="container mt-2" >
      <div class="row justify-content-center">
        <div class="col-lg-5" data-aos="fade-right">
        <img src="assets/img/classroom-users.webp" class="img-fluid my-img"  width="100%" alt="Hey! I’m Nobita, I’m a student studying in remote mode in this lockdown , Classroom app has really helped me in managing my Online Classroom Experience in this lockdown ,  I can save my Time now , i can take rest in free time by sleeping & enjoy my life by playing games. Before Using This app my life was so exaustinng. Thanks to classroom app for making my life easy.

        Hey! I’m Sensei, I’m Nobita’s teacher , i completly agree with Nobita’s thought about classroom app. It has really help me too in sheduling my classes online, I like how students can ask for attendence points by submitting assignments and best part of it is students can get study resorses in a well Organized way. At the end all i want is Online learning should be able to give students knowledge. 
        ">
        </div>
        <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Design Considerations While Prototyping Classroom Mobile App</h3>
          <p class="font-italic">
            While Designing Classroom Mobile App , it was considered that problems and pain points of target users who were basically students and teachers studying in online mode in this lockdown was been considerd acessability and usability was given primary importance while designing classroom App.
          </p>
          <p>
            Aim was to make classroom App easy to use for students and teachers despite of their situations and abilities.
          </p>
          <p class="font-italic">Listed below are Design considerations while Prototyping Classroom Mobile App:</p>
          <div class="row">
            <div class="col-lg-12">
              <ul class="protoype-design-considerations">
                <li><i class="icofont-tick-boxed"></i> <strong> Accessible Colour Palate:</strong> High Contrast Colour Palette was been chosen to support users with various abilities and users under different situations such as users facing screen  glare  and low screen brightness cases in sunlight.</li>
                <li><i class="icofont-tick-boxed"></i><strong>Use Of Icons and Imagery:</strong> Icons and imagery was been used along with different states in the progress bar and through out the application to keep users informed about the state of application with respect to interactions.</li>
                <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Smoother Meaning full interactions and motion design were been added to make application easy to use and understand  for children which come under target audience of classroom application.</li>
              </ul>
        </div>
      </div>
      <p class="font-italic">
      <Strong>Check out Live Prototype of Classroom App:</Strong>
        <br>
        <Strong>Note:</Strong> Please wait for links to Load ,Press F11 while viewing Prototype on PC or Desktop as soon as link loads to  experience designs in real time by entering in full-screen mode .
        <a href="https://www.figma.com/proto/wkMS4XuXR3dpdTCLVlrNhR/Classroom?page-id=40%3A178&node-id=40%3A179&viewport=277%2C48%2C1.21&scaling=min-zoom&starting-point-node-id=40%3A179" target="_blank" >
              <button class="col-12 m-1 view-prototype-btn" aria-label="View  Classroom App Prototype Button." >View Classroom App Prototype</button>
        <a>
        <a href="https://www.figma.com/proto/wkMS4XuXR3dpdTCLVlrNhR/Classroom?page-id=40%3A191&node-id=40%3A195&viewport=277%2C48%2C0.36&scaling=min-zoom&starting-point-node-id=40%3A195" target="_blank" >
            <button class="col-12 m-1 view-prototype-btn" aria-label="View Design Systems file of Classroom App Button">View Design Systems file of Classroom App</button>
        </a>
      </p>
    </div>

<div class="container" >
 <div class="row justify-content-center">
 <div class="content">
   <h2>Conclusion</h2>
   <h3></h3>
   <p>
   A more productive , efficient Classroom Experience was been created Online for students and teachers in current remote learning mode in this lockdown by allowing users to get information about status of indivisual classes in their daily time table. Students get flexibility of self studying and preparing an assignment and submiting them to get attendence points in case if they missed a class or if a student  marked a class as i will not be able to attend due to some reasons. Students also get study resorses in the form of notes and youtube playlist videos in a well organized way. With proper classroom scheduling in online classes both teachers and students could now focus on studying in class and not to comunicate over chat  and arrange study resorses on their phones which is a real hectic task for users. Users get everything Organized as features within Classroom App.
   </p>
   <h2>What I learned?</h2>
   <h3></h3>
   <p>
   While Working On this Project I learned to solve real world problems faced by users in their daily lives by using digital technology. Solving even a small problem can help a wide range of users by improving their lives by making their lives easy & productive.
   <br>
   I implemented Design System by creating style guide and  sticker sheet effectively in this project using figma. Implementing Design Systems helped me to design a product which could be scaled easily maintaining a consistent style & Brand identity  throughout the product  by following style guidelines.   
   <Br>
   </p>
  
   </div>
 </div>
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
        

        case 5:
          document.getElementById("projectslink-generator").innerHTML=`
                  
          <div class="section-title container">
          <h2>UX Project:</h2>
          <p>Check out my UX project</p>
        </div>
        
      <div class="row justify-content-center">   
      <div class="container">
        <div class="row">
          <div class="col-lg-5" data-aos="fade-right">
            <img src="assets/img/Foodies-Desktop.png" class="img-fluid my-img"  width="100%" alt=" Picture showing Foodies Website Loaded On Laptop">
          </div>
          <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h2> Foodies</h2>
            <h3>Online Food ordering Desktop Website </h3>
              <p class="font-italic">
               A UX-Design Project By - Abhishek Mishra.
             </p>
            <p class="font-italic">
            This is an online food ordering Website of a local restaurant helping busy life working users to save time by ordering food online & spend quality time having their foods without waiting in line for their orders. Foodies Website Is Designed Specifically Considering 60+ Aged User Group & Childrens who sometimes help elderly user group  with Online food Ordering.
            </p>
            <p class="font-italic">Some Quick Features of Foodies Website:</p>
            <div class="row">
              <div class="col-lg-12">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong> Order Food Over Chat :</strong> This Feature will help users to place their order or to even sign up on foodies website using automated chatbot in a interactive and userfriendly way.</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Order Over Phone Call:</strong> This feature allows user to enter their phone number on their computer to get automated phone call where in users can order food online over phone call while having interactive conversation with foodies virtual assistant. Taking Order Over Phone Call Ensures Order is from a verified User.</li>
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
        <p>Slide deck below describes Full User experience design process conducted while designing Foodies Website:</p>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ7OeHG8owZF4omTl5sUSI-cqDXMJ0oRpXrWIURd4ENTp93bhoQJjcQd8NP3wWxLfLUDhTmCuU6hxYb/embed?start=true&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
      <img src="assets/img/Food-Delivery.png" alt="Image showing a Delivery man taking Order From Foodies Desktop user to Foodies customer Ram Prasd's home address "> </img>
    </div>
    
      <div class="container mt-2" >
        <div class="row justify-content-center">
          <div class="col-lg-5" data-aos="fade-right">
          <img src="assets/img/Foodies-Desktop-Ram-Prasad.webp" class="img-fluid my-img"  width="100%" alt="Hey! I’m Ram Prasad, I use Foodies Desktop website to get my Food delivered to my home. I can now get my food delivered to my home without visiting a Restaurant and waiting In line for my orders to get prepared. It’s just done with my Online Order Via Foodies Website..  ">
          </div>
          <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Design Considerations While Prototyping Classroom Mobile App</h3>
            <p class="font-italic">
              While Designing Foodies Online Food Ordering Website ,accessibility and usability was considered to target larger audience to support new users coming as Next Billion Users to use digital screens. 60+ aged elderly user group & childrens were been considered while Designing Foodies Website.
            </p>
            <p>
              Aim was to make Foodies Website Not just Compliet with WCAG standards but to make Foodies Website Experience interactive and enjoyable for everyone.  
            </p>
            <p>
            So Chat box and Order Over Phone call feature was been introduced where in users can sign up or sign in to foodies website and can then acess Foodies menu and finally confirm items in cart and continue with Food ordering by having an interactive conversation with foodies Digital Assistant 'Halwai Ram'.
            </p>
            <p class="font-italic">Listed below are Design considerations while Prototyping Foodies Website:</p>
            <div class="row">
              <div class="col-lg-12">
                <ul class="protoype-design-considerations">
                  <li><i class="icofont-tick-boxed"></i> <strong>Colour Palette Selection:</strong>High Contrast Colour Palette was been chosen to support 60+ aged user Group with low Vision Due to aging and users with various abilities and users under different situations such as users facing screen  glare  and low screen brightness cases in sunlight. Online WebAim website was used to check colour contrast levels as recommended by WCAG.
                  </li>
                  <li><i class="icofont-tick-boxed"></i><strong>Keyboard navigation support:</strong> Overall Content On the Page Was Designed to Support Keyboard Navigation by users with less number of tab key presses this was accomplished by grouping up contents while designing and laying out content and control buttons on the page. This will help Engineers to easily add meaningful Keyboard  design experience by assigning Tabindex numbers accordingly after design hand offs to engineering team. This will help users who prefer to use keyboard to access web content.
                  </li>
                  <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Simple Smoother interactions were been added keeping users informed about current state of Screen with respect to the interactions with the help of hover states.</li>
                  <li><i class="icofont-tick-boxed"></i> <strong> Mic Button : </strong>Mic button was given on the chat bot chatting page to allow users to easily interact with  Foodies digital assistant by using voice input to chat .</li>
                </ul>
          </div>
        </div>
        <p class="font-italic">
        <Strong>Check out Live Prototype of Foodies Website:</Strong>
          <br>
          <Strong>Note:</Strong> Please wait for links to Load ,Press F11 while viewing Prototype on PC or Desktop as soon as link loads to  experience designs in real time by entering in full-screen mode .
          <a href="https://www.figma.com/proto/2ACItq6ObXIsxgmDL3xfPb/Foodies-Desktop?page-id=1%3A5&node-id=48%3A47&viewport=277%2C48%2C0.79&scaling=scale-down&starting-point-node-id=48%3A47" target="_blank" >
                <button class="col-12 m-1 view-prototype-btn" aria-label="View Foodies Desktop Website Prototype Button." >View Foodies Desktop Website Prototype</button>
          <a>
          <a href="https://www.figma.com/proto/2ACItq6ObXIsxgmDL3xfPb/Foodies-Desktop?page-id=1%3A6&node-id=52%3A130&viewport=501%2C48%2C0.9&scaling=scale-down-width&starting-point-node-id=52%3A130" target="_blank" >
              <button class="col-12 m-1 view-prototype-btn" aria-label="View Design Systems file of Foodies Desktop Website  Button">View Design Systems file of <br> Foodies Desktop Website</button>
          </a>
        </p>
      </div>

<div class="container" >
 <div class="row justify-content-center">
 <div class="content">
   <h2>Conclusion</h2>
   <h3></h3>
   <p>
   An Accessible and Usable User Experience was been designed  for Foodies Desktop Website Considering 60+ Aged User Group and childrens and users with disabilities.
Users of Foodies Website will be happy and Will Never leave Out Their User Journey just because the website was not well designed enough to support their special abilities ,situations and interests. This will lead to a better user experience and more number of order placements on web and increase number of sign ups using foodies website.
   </p>
   <h2>What I learned ?</h2>
   <h3></h3>
   <p>
   I learned about Problems faced by elderly user group while using web. I also found out unique as well as recommended solutions to be implemented in designs to make products accessible and usable for everyone.
   <Br>
  I successfully implemented Design Systems in figma and implemented it in this project. Implementing design system helped me to maintain consistent design tone and consistency by maintaining style guide throughout the design process.
   
   <Br>
   </p>
  
   </div>
 </div>
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

