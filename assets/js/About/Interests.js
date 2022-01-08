let InterestsData=[
  {
    Interest: 'UI/Frontend Development',
    logoClass:'ri-file-list-3-line',
    position: " ",
    color:'#11dbcf'
  },
  {
    Interest: 'UX Designing',
    logoClass:'ri-device-line',
    position: " ",
    color:'#ffbb2c'
  },
  {
    Interest: 'AR-VR Design',
    logoClass:'fas fab-1 fa-vr-cardboard',
    position: " ",
    color:'#29cc61'
  },
  {
    Interest: 'Software Development',
    logoClass:'ri-bar-chart-box-line',
    position: " ",
    color:'#5578ff'
  },
  {
    Interest: 'Cloud Computing',
    logoClass:'ri-cloud-line',
    position: " ",
    color:' #e80368'
  },
  {
    Interest: 'Backend Development',
    logoClass:'ri-price-tag-2-line',
    position: " ",
    color:'#4233ff'
  },
  {
    Interest: 'Full Stack Web Development',
    logoClass:'ri-database-2-line',
    position: " ",
    color:' #47aeff'
  },
  {
    Interest: 'Graphic design & Photography',
    logoClass:'ri-camera-line',
    position: " ",
    color:' #ffa76e'
  },
  {
    Interest: 'Learning Medical Facts',
    logoClass:'ri-hospital-line',
    position: " ",
    color:'#e361ff'
  },
  {
    Interest: 'Diet/Fitness & Meditation',
    logoClass:'ri-anchor-line',
    position: " ",
    color:'#b2904f'
  },
  {
    Interest: 'Drawing & Painting',
    logoClass:'ri-brush-fill',
    position: " ",
    color:' #ff5828'
  },
  {
    Interest: 'Traveling & Music',
    logoClass:' ri-disc-line ',
    position: " ",
    color:' #b20969'
  }

];
for (i = 0; i < InterestsData.length; i++) {
  
  InterestsData[i].position="mt-4";

}

function InterestsTemplate(data){
  return `
  <div class="col-lg-3 col-md-4 ${data.position}">
  <div class="icon-box">
    <i class="${data.logoClass}" style="color:${data.color};"></i>
    <h3>${data.Interest}</h3>
  </div>
</div>
  `
}
document.getElementById("InterestsGenerator").innerHTML=`
${InterestsData.map(InterestsTemplate).join('')}
`;