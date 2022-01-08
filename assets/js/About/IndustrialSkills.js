let IndustrialSkillsData=[
  {
    Skill: ' USER-CENTERED DESIGN PROCESS ',
    percentage:'100'
  },
  {
    Skill: ' UX RESEARCH ',
    percentage:'97'
  },
  {
    Skill: ' VISUAL DESIGN',
    percentage:'100'
  },
  {
    Skill: 'UX WRITING ',
    percentage:'99'
  },
  {
    Skill: ' WIREFRAMING',
    percentage:'100'
  },
  {
    Skill: ' ACCESSIBILITY CONSIDERATION',
    percentage:'90'
  },
  {
    Skill: ' UI PROTOTYPING',
    percentage:'100'
  },
  {
    Skill: 'DESIGN SYSTEM IMPLEMENTATION',
    percentage:'85'
  },
  {
    Skill: ' INTERACTION DESIGN',
    percentage:'85'
  },
  {
    Skill: ' USABILITY TESTING',
    percentage:'100'
  },
  {
    Skill: ' OBJECT ORIENTED PROGRAMMING',
    percentage:'70'
  },
  {
    Skill: ' COMMAND LINE',
    percentage:'25'
  },
  {
    Skill: 'BROWSER DEVELOPER TOOLS ',
    percentage:'75'
  },
  {
    Skill: ' RESPONSIVE WEB DESIGN',
    percentage:'100'
  }
];

var IndustrialSkillsDataOne= [];
var IndustrialSkillsDataTwo=[];


  for (i = 0; i < IndustrialSkillsData.length; i++) {
    if(i%2==0){
      IndustrialSkillsDataOne.push(IndustrialSkillsData[i]);
    }
    else{
      IndustrialSkillsDataTwo.push(IndustrialSkillsData[i]);
    }
  }

  function IndustrialSkillsTemplate(data){
    return `
    <div class="progress">
        <span class="skill">${data.Skill} <i class="val">${data.percentage}${"%"}</i></span>
          <div class="progress-bar-wrap">
              <div 
              class="progress-bar" 
              role="progressbar" 
              aria-valuenow="${data.percentage}" 
              aria-valuemin="0" 
              aria-valuemax="100">
              </div>
            </div>
          </div>`
  }
document.getElementById("IndustrialSkillsGeneratorOne").innerHTML=`
${IndustrialSkillsDataOne.map(IndustrialSkillsTemplate).join('')}
`;
document.getElementById("IndustrialSkillsGeneratorTwo").innerHTML=`
${IndustrialSkillsDataTwo.map(IndustrialSkillsTemplate).join('')}
`;