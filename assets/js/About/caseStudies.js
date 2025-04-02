// Case study data with local images and function names
const caseStudies = [
    {
        id: "case4",
        title: "AI in Customer Support",
        description: "Exploring how AI-driven chatbots reduced support costs by 30%.",
        image: "assets/img/portfolio/portfolio-12.png",
        url: "https://www.google.com/url?q=https://docs.google.com/presentation/d/e/2PACX-1vQ4cjaxe3MQxyqW8b40l58E6P2ciKUpp-S0NPTY8r8s2SA9qZXNrTI945DzUoonqhuCidNynuRTPhsA/pub?start%3Dfalse%26loop%3Dtrue%26delayms%3D10000&sa=D&source=editors&ust=1743509360089809&usg=AOvVaw2NG816tTaWSV21uNrBsjE5",
        functionName: "gotoAboutMe"
    },
  {
      id: "case1",
      title: "Revolutionizing E-commerce UI",
      description: "An in-depth look at how a redesign increased user retention by 40%.",
      image: "assets/img/portfolio/portfolio-7.png",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vTEC36L-LSDZvHnA5zoQ8HRaaji_v-zkECWJqo6KuAYdpZpiGBBa2fhlLfE2wW1EpV56gclIUCjZlgu/pub?start=true&loop=true&delayms=3000",
      functionName: ""
  },
  {
      id: "case2",
      title: "Optimizing Web Performance",
      description: "How reducing page load times by 50% improved user experience and conversions.",
      image: "assets/img/portfolio/portfolio-9.png",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vTci9Gd6WDi7w2DoI6gqwgbkFZHgHQr5Qvvla_BtG7_t0tXJzjVQ1iH49QDF-IV19Z4q3EiIR1Ojtuc/pub?start=true&loop=true&delayms=3000",
      functionName: ""
  },
  {
      id: "case3",
      title: "Branding for Startups",
      description: "How our branding strategy helped a startup gain 200K+ active users in 6 months.",
      image: "assets/img/portfolio/portfolio-10.png",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vTSBRdBnNzLZcR581TVxENYghgdfPY5aA3mDPcz76flmHMngIFc3BMRrKx5twoxaZsZETkTGmGknECd/pub?start=true&loop=true&delayms=5000",
      functionName: ""
  } /* ,
  {
      id: "case4",
      title: "AI in Customer Support",
      description: "Exploring how AI-driven chatbots reduced support costs by 30%.",
      image: "assets/img/portfolio/portfolio-11.png",
      url: "https://docs.google.com/presentation/d/e/2PACX-1vQvtZ-7LJS7tOwhfDVTxoQPmsyZPhJ9nXAKUAUMBgXoYAAx7kCYVAY01eTtuPGbrcdyrhXA2u3FkFjx/pub?start=true&loop=true&delayms=3000",
      functionName: "gotoAboutMe"
  }
      */
];

// Get case studies container
const caseStudiesContainer = document.getElementById("caseStudiesContainer");

// Populate Case Study Cards Dynamically
caseStudies.forEach(study => {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-6", "col-md-12", "col-sm-12", "mb-4");

  colDiv.innerHTML = `
      <div class="card case-card shadow-sm">
      <div class="tag">View Work</div>
          <img src="${study.image}" class="card-img-top" alt="${study.title}" loading="lazy">
      </div>
  `;
/*
  <div class="card-body">
  <h5 class="text-left mb-2">${study.title}</h5>
  <p class="text-left">${study.description}</p>
</div>
 */

  caseStudiesContainer.appendChild(colDiv);

  // Add event listener for click
  colDiv.querySelector(".case-card").addEventListener("click", function () {
      if (study.url) {
          // Open the external link in a new tab
          window.open(study.url, "_blank");
      } else if (study.functionName && typeof window[study.functionName] === "function") {
          // Run the pre-defined function if available
          window[study.functionName]();
      } else {
          console.warn(`No valid URL or function found for ${study.title}`);
      }
  });
});
