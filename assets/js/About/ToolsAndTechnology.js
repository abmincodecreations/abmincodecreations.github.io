let ToolsAndTechnologySkillsData=[
  {
    Skill: ' GITHUB ',
    percentage:'60'
  },
  {
    Skill: ' GIT',
    percentage:'60'
  },
  {
    Skill: 'Adobe XD ',
    percentage:'80'
  },
  {
    Skill: ' FIGMA ',
    percentage:'95'
  }
  ,
  {
    Skill: ' JIRA',
    percentage:'95'
  }
  ,
  {
    Skill: ' Microsoft Azure DevOps',
    percentage:'95'
  }
];

var ToolsAndTechnologySkillsDataOne= [];
var ToolsAndTechnologySkillsDataTwo=[];


  for (i = 0; i < ToolsAndTechnologySkillsData.length; i++) {
    if(i%2==0){
      ToolsAndTechnologySkillsDataOne.push(ToolsAndTechnologySkillsData[i]);
    }
    else{
      ToolsAndTechnologySkillsDataTwo.push(ToolsAndTechnologySkillsData[i]);
    }
  }

  function ToolsAndTechnologySkillsTemplate(data){
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
document.getElementById("ToolsAndTechnologySkillsGeneratorOne").innerHTML=`
${ToolsAndTechnologySkillsDataOne.map(ToolsAndTechnologySkillsTemplate).join('')}
`;
document.getElementById("ToolsAndTechnologySkillsGeneratorTwo").innerHTML=`
${ToolsAndTechnologySkillsDataTwo.map(ToolsAndTechnologySkillsTemplate).join('')}
`;