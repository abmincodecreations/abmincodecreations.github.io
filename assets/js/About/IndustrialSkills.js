let IndustrialSkillsData = [
  { Skill: 'USER-CENTERED DESIGN', percentage: '100', icon: 'ri-user-heart-fill' },
  { Skill: 'UX RESEARCH', percentage: '97', icon: 'ri-book-open-fill' },
  { Skill: 'VISUAL DESIGN', percentage: '100', icon: 'ri-palette-line' },
  { Skill: 'UX WRITING', percentage: '99', icon: 'ri-ball-pen-fill' },
  { Skill: 'WIREFRAMING', percentage: '100', icon: 'ri-article-fill' },
  { Skill: 'ACCESSIBILITY (A11Y)', percentage: '90', icon: 'ri-wheelchair-fill' },
  { Skill: 'UI PROTOTYPING', percentage: '100', icon: 'ri-window-fill' },
  { Skill: 'DESIGN SYSTEMS', percentage: '85', icon: 'ri-folder-settings-fill' },
  { Skill: 'INTERACTION DESIGN', percentage: '85', icon: 'ri-drag-drop-fill' },
  { Skill: 'USABILITY TESTING', percentage: '100', icon: 'ri-user-follow-fill' },
  { Skill: 'Storyboarding', percentage: '100', icon: 'ri-grid-line' },
  { Skill: 'Information Architecture', percentage: '100', icon: 'ri-organization-chart' },
  { Skill: 'OBJECT ORIENTED PROGRAMMING', percentage: '70', icon: 'ri-parentheses-line' },
  { Skill: 'COMMAND LINE', percentage: '25', icon: 'ri-terminal-box-fill' },
  { Skill: 'BROWSER DEVELOPER TOOLS', percentage: '75', icon: 'ri-tools-fill' },
  { Skill: 'RESPONSIVE WEB DESIGN', percentage: '100', icon: 'ri-device-line' },
  { Skill: 'user testing', percentage: '100', icon: 'ri-user-star-fill' },
  { Skill: 'a/b testing', percentage: '100', icon: 'ri-a-b' },
];

let IndustrialSkillsDataOne = [];
let IndustrialSkillsDataTwo = [];

for (let i = 0; i < IndustrialSkillsData.length; i++) {
  if (i % 2 === 0) {
    IndustrialSkillsDataOne.push(IndustrialSkillsData[i]);
  } else {
    IndustrialSkillsDataTwo.push(IndustrialSkillsData[i]);
  }
}

function IndustrialSkillsTemplate(data) {
  return `
    <div class="progress">
        <br>
        <span class="skill"><i class="${data.icon.trim() } custom-fab "></i>${data.Skill}
        </span>
    </div>`;
}

if (document.getElementById("IndustrialSkillsGeneratorOne")) {
  document.getElementById("IndustrialSkillsGeneratorOne").innerHTML = `
    ${IndustrialSkillsDataOne.map(IndustrialSkillsTemplate).join('')}
  `;
}

if (document.getElementById("IndustrialSkillsGeneratorTwo")) {
  document.getElementById("IndustrialSkillsGeneratorTwo").innerHTML = `
    ${IndustrialSkillsDataTwo.map(IndustrialSkillsTemplate).join('')}
  `;
}
