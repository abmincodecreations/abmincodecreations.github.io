let TopSkillsData=[
  {
    Skill: ' HTML ',
    percentage:'100'
  },
  {
    Skill: ' CSS',
    percentage:'95'
  },
  {
    Skill: ' SASS',
    percentage:'90'
  },
  {
    Skill: ' REACT JS',
    percentage:'80'
  },
  {
    Skill: ' JSON',
    percentage:'100'
  },
  {
    Skill: ' BOOTSTRAP',
    percentage:'100'
  },
  {
    Skill: ' JAVASCRIPT',
    percentage:'90'
  },
  {
    Skill: 'GOOGLE CLOUD PLATFORM ',
    percentage:'20'
  },
  {
    Skill: ' CORE JAVA',
    percentage:'50'
  },
  {
    Skill: ' PYTHON',
    percentage:'40'
  },
  {
    Skill: ' C PROGRAMMING',
    percentage:'90'
  },
  {
    Skill: ' REACT-REDUX',
    percentage:'55'
  },
  {
    Skill: ' JQUERY',
    percentage:'100'
  },
  {
    Skill: ' PHP',
    percentage:'25'
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
document.getElementById("TopSkillsGeneratorOne").innerHTML=`
${TopSkillsDataOne.map(TopSkillsTemplate).join('')}
`;
document.getElementById("TopSkillsGeneratorTwo").innerHTML=`
${TopSkillsDataTwo.map(TopSkillsTemplate).join('')}
`;