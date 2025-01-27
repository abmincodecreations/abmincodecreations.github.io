const articles = [
  {
      title: "Designing Enterprise UX with Enterprise Architecture (EA) for Scalable Solutions",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fGfM0soDp8_yfu2afxrCIQ.png",
      alt: "Designing Enterprise UX with Enterprise Architecture (EA) for Scalable Solutions image",
      link: "https://medium.com/design-bootcamp/designing-enterprise-ux-with-enterprise-architecture-ea-3102436147c1"
  },
  {
      title: "Where Logic Ends and Creativity Begins: A Designer’s Perspective",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fo6IKdtkFkwfkiJpn2Fzxw.png",
      alt: "Where Logic Ends and Creativity Begins: A Designer’s Perspective",
      link: "https://medium.com/design-bootcamp/where-logic-ends-and-creativity-begins-a-designers-perspective-524e18c7821c"
  },
  {
      title: "Designing Enterprise UX with Enterprise Architecture (EA) for Scalable Solutions",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Eu4S2Qf9jgLsOlD7cqfgAg.png",
      alt: "Designing Enterprise UX with Enterprise Architecture (EA) for Scalable Solutions image",
      link: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Eu4S2Qf9jgLsOlD7cqfgAg.png"
  }
];

const articlesContainer = document.getElementById('articles');

articles.forEach(article => {
  const articleDiv = document.createElement('div');
  articleDiv.className = 'article';
  articleDiv.innerHTML = `
      <a href="${article.link}" target="_blank">
          <img src="${article.image}" alt="${article.alt}">
      </a>
      <div class="article-content">
          <a href="${article.link}" target="_blank" class="article-title">${article.title}</a>
      </div>
  `;
  articlesContainer.appendChild(articleDiv);
});