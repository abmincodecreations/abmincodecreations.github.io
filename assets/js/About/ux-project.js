let UXprojectsDatalist=[
  {
    Index:1,
    picture: 'assets/img/portfolio/portfolio-1.png',
    headingOneInPicture:'Foodies',
    paraInPicture: "App",
    labelText: "Foodies Online Food Ordering App"
  },
  {
    Index:2,
    picture: 'assets/img/portfolio/portfolio-2.jpg',
    headingOneInPicture:'Foodies',
    paraInPicture: "App",
    labelText: "Foodies Online Food Ordering App"
  },
  {
    Index:2,
    picture: 'assets/img/portfolio/portfolio-1.png',
    headingOneInPicture:'Foodies',
    paraInPicture: "App",
    labelText: "Foodies Online Food Ordering App"
  },
  {
    Index:2,
    picture: 'assets/img/portfolio/portfolio-1.png',
    headingOneInPicture:'Foodies',
    paraInPicture: "App",
    labelText: "Foodies Online Food Ordering App"
  }
 
];


function UXprojectTemplate(data){
  return `
<div class="col-lg-5 col-md-5 portfolio-item filter-app justify-content-center m-3 p-0">
  <div class="portfolio-wrap">
    <img src="${data.picture}" class="img-fluid" alt="">
    <div class="portfolio-info">
      <h4>${data.headingOneInPicture}</h4>
      <p>${data.paraInPicture}</p>
      <div class="portfolio-links">
        <a onClick="linkManager(${data.Index})" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
      </div>
    </div>
  </div>
  <h6 class="label-UXproject">${data.labelText}</h6>
</div>
  `
}
document.getElementById("ux-project-generator").innerHTML=`
${UXprojectsDatalist.map(UXprojectTemplate).join('')}
`;


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
        <img src="assets/img/Foodies App.png" class="img-fluid my-img"  width="502px" alt="picture of users hand holding a phone and using Foodies App.">
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h2>Foodies App</h2>
        <h3>Online Food ordering App</h3>
          <p class="font-italic">
           UX-Design Lead - Abhishek Mishra
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
    <p>Slide deck below describes user experience design process being conducted while designing foodies App :</p>
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
<div class="image-ux-project col-12">
  <img src="assets/img/Frame 9.png" alt="Image showing 5 screens of foodies App Screen Number 1 on left is cart page of Foodies App. Number 2 from left is menu page. Number 3 in center of screen is welcome page of foodies App.  Number 4 in right of screen is Prepare food online page of foodies App. Lastly Number 5 in right side on screen  is  Customization page for food items of foodies App."> </img>
</div>

  <div class="container mt-2" >
    <div class="row justify-content-center">
      <div class="col-lg-5" data-aos="fade-right">
        <div class="figma-prototype">
<iframe  style="border: 1px solid rgba(0, 0, 0, 0.1);" width="360" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxtK8SvKTdttTBCkPkax9In%2FFoodies-(Hi-FI)%3Fpage-id%3D0%253A1%26node-id%3D301%253A81%26viewport%3D245%252C48%252C0.34%26scaling%3Dmin-zoom%26starting-point-node-id%3D25%253A860" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Live Prototype of Foodies App</h3>
        <p class="font-italic">
          While Designing Foodies App accessibility and usability was considered to target larger audiance to support new users coming as Next Billion Users of smartphones.
        </p>
        <p class="font-italic">Listed below are Design considerations while Prototyping foodies app:</p>
        <div class="row">
          <div class="col-lg-12">
            <ul class="protoype-design-considerations">
              <li><i class="icofont-tick-boxed"></i> <strong>High contrast colour palettes:</strong> Helps users with disabilities and normal users to use App in various lighting and screen glare  conditions .</li>
              <li><i class="icofont-tick-boxed"></i><strong>Key board navigation support:</strong> Tab , Backspace and  enter keys were been given primary importance while designing to make navigation simple and easyfor keyboard and switch device users.</li>
              <li><i class="icofont-tick-boxed"></i> <strong>Smoother interactions: </strong>Simple Smoother interactions were been added keeping users informed about current state of app with respect to the interactions with the help of hover states for web App users on Phone and while pressing button states was provided for gesture by Mobile App users.</li>
            </ul>
      </div>
    </div>
    <p class="font-italic">
      For more details: Check out Design System of Foodies App.
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
      day = "Sunday";
      break;
  }
  function ExploreMoreprojectTemplate(data){
    return `
  <div class="col-lg-5 col-md-5 portfolio-item filter-app justify-content-center m-3 p-0">
    <div class="portfolio-wrap">
      <img src="${data.picture}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${data.headingOneInPicture}</h4>
        <p>${data.paraInPicture}</p>
        <div class="portfolio-links">
          <a onClick="linkManager(${data.Index})" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Project Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
    <h5 class="label-UXproject">${data.labelText}</h5>
  </div>
    `
  }
  document.getElementById("Explore-more-project-generator").innerHTML=`
  ${UXprojectsDatalist.map( ExploreMoreprojectTemplate).join('')}
  `;
}

