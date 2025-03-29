let servicesData=[
  
  {
    name: '‎TimeLine App<br>(MERN Stack)',
    logoClass:'custom-fab-fix fa-solid fa-image',
    position: "‎‎‎‎‏‏‎ ",
    btnLink:"https://timeline-feed.netlify.app/"
  },
  {
    name: '‎Pomodoro<br>Clock',
    logoClass:'custom-fab-fix fa-regular fa-clock',
    position: "‎‎‎‎‏‏‎ ",
    btnLink:"https://abmincodecreations.github.io/Pomodoro-Clock/"
  },
  {
    name: '‎JavaScript<br>Calculator',
    logoClass:'custom-fab-fix fa-solid fa-calculator',
    position: "‎‎‎‎‏‏‎ ",
    btnLink:"https://abmincodecreations.github.io/Calculator/"
  },
  {
    name: 'Markdown <br>Live Previewer‏‏‎‎‏‏‎',
    logoClass:'custom-fab-fix fa-brands fa-markdown',
    position: " ",
    btnLink:"https://abmincodecreations.github.io/Markdown-Live-Previewer/"
  },
  {
    name: '‎Drum-Machine',
    logoClass:'custom-fab-fix fa-solid fa-drum',
    position: "‎‎‎‎‏‏‎ ",
    btnLink:"https://abmincodecreations.github.io/Drum-Machine/"
  },
  {
    name: 'Random Quote<br>Machine',
    logoClass:'custom-fab-fix fa-solid fa-quote-left',
    position: " ",
    btnLink:"https://abmincodecreations.github.io/random_quote_generator-/"
  },
  {
    name: '‎Personal Portfolio<br>(CodePen Project)',
    logoClass:' custom-fab-fix fa-solid fa-user',
    position: "‎‎‎‎‏‏‎ ",
    btnLink:"https://codepen.io/abhishek_mishra_codecreations/full/mdeLNRG"
  },
  {
    name: 'Tribute Page<br>(CodePen Project)‏‏‎‎‏‏‎',
    logoClass:'fab fa-page4',
    position: " ",
    btnLink:"https://codepen.io/abhishek_mishra_codecreations/full/zYvqawB"
  },
  {
    name: 'JS Documentation<br>(CodePen Project)',
    logoClass:'fab fa-node-js',
    position: "‎‎‎‎‏‏‎ ",
    btnLink:"https://codepen.io/abhishek_mishra_codecreations/full/RwWyXKB"
  },
  {
    name: 'Product<br>‎Landing Page<br>(CodePen Project)‎‏‏‎‎‏‏‎',
    logoClass:'fab fa-product-hunt',
    position: " ",
    btnLink:"https://codepen.io/abhishek_mishra_codecreations/full/GRpjWvo"
  },
  {
    name: 'Survey Page<br>(CodePen Project)‏‏‎‎‏‏‎',
    logoClass:'fab fa-wpforms',
    position: " ",
    btnLink:"https://codepen.io/abhishek_mishra_codecreations/full/VwvjLBQ"
  }
];
for (i = 0; i < servicesData.length; i++) {
 if((i+1)%4==0)
    servicesData[i].position="col-lg-2";
  else
  servicesData[i].position="col-lg-3";
 console.log(servicesData);
}

function servicesTemplate(data){
  return `
<div class="${'col-sm-12  col-md-5 m-1 '} ${data.position}" >
  <a href="${data.btnLink}" target="_blank">
    <div class="icon-boxx ">
              <div class="chip mt-1">
                  <div class="logodiv"><i class="${data.logoClass} custom-fab"></i></div>
                  <p class="nowrap">${data.name}</p>  
              </div>
     </div>
  </a>   
</div>
`
}
document.getElementById("templateGenerator").innerHTML=`
${servicesData.map(servicesTemplate).join('')}
`;
