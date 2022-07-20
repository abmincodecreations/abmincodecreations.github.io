let TopSkillsData=[
  {
    Skill: ' HTML ',
    percentage:'100',
    icon:' fa-brands fa-html5'
  },
  {
    Skill: ' CSS',
    percentage:'95',
    icon:' fa-brands fa-css3-alt'
  },
  {
    Skill: ' SASS',
    percentage:'90',
    icon:' fa-brands fa-css3-alt'
  },
  {
    Skill: ' REACT JS',
    percentage:'80',
    icon:' fa-brands fa-react'
  },
  {
    Skill: ' JSON',
    percentage:'100',
    icon:' ri-braces-line '
  },
  {
    Skill: ' BOOTSTRAP',
    percentage:'100',
    icon:' fa-brands fa-bootstrap '
  },
  {
    Skill: ' JAVASCRIPT',
    percentage:'90',
    icon:' fa-brands fa-js '
  },
  {
    Skill: 'GOOGLE CLOUD PLATFORM ',
    percentage:'20',
    icon:' ri-cloud-line '
  },
  {
    Skill: ' CORE JAVA',
    percentage:'50',
    icon:' fa-brands fa-java '
  },
  {
    Skill: ' PYTHON',
    percentage:'40',
    icon:' fa-brands fa-python '
  },
  {
    Skill: ' C PROGRAMMING',
    percentage:'90',
    icon:' fa-brands fa-cuttlefish '
  },
  {
    Skill: ' REACT-REDUX',
    percentage:'55',
    icon:' fa-brands fa-react '
  }
];

var TopSkillsDataOne= [];
var TopSkillsDataTwo=[];


  for (i = 0; i < TopSkillsData.length; i++) {
    if(i%2==0){
      TopSkillsDataOne.push(TopSkillsData[i]);
    }
    else{
      TopSkillsDataTwo.push(TopSkillsData[i]);
    }
  }

  function TopSkillsTemplate(data){
    return `
    <div class="progress">
        <span class="skill"><i class="fab ${data.icon}"></i>${data.Skill} <!-- <i class="val">${data.percentage}${"%"}</i>--!></span>
        <!-- 
        <div class="progress-bar-wrap">
            <div 
              class="progress-bar" 
              role="progressbar" 
              aria-valuenow="${data.percentage}" 
              aria-valuemin="0" 
              aria-valuemax="100">
              </div>
            </div>
            --!>
          </div>`
  }
document.getElementById("TopSkillsGeneratorOne").innerHTML=`
${TopSkillsDataOne.map(TopSkillsTemplate).join('')}
`;
document.getElementById("TopSkillsGeneratorTwo").innerHTML=`
${TopSkillsDataTwo.map(TopSkillsTemplate).join('')}
`;