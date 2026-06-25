const fs = require('fs');
const path = require('path');

const dirsToProcess = [
  'Explicaçoes/HTML/formulario',
  'Explicaçoes/CSS/CSS Animations',
  'Explicaçoes/CSS/CSS FLEXBOX',
  'Explicaçoes/CSS/CSS Grid',
  'Explicaçoes/CSS/CSS Profissional',
  'Explicaçoes/CSS/CSS functions',
  'Explicaçoes/CSS/Media Queries',
  'Explicaçoes/CSS/SVG-Cores'
];

function processFile(filePath, isHtml) {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'Guia de Estudos';
  
  // Extract hero text
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
  const h1 = h1Match ? h1Match[1] : title;
  
  let pDesc = '';
  const heroMatch = content.match(/<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/);
  if (heroMatch) {
    pDesc = heroMatch[1].trim().replace(/\n\s*/g, ' ').replace(/<[^>]+>/g, '');
  }
  
  // Also try to extract cards looking for resource-card if they were updated recently
  let cardRegex = /<a[^>]*class="[^"]*(card|resource-card)[^"]*"[^>]*href="([^"]+)"[^>]*>[\s\S]*?<h[23]>(.*?)<\/h[23]>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/a>/g;
  
  const cards = [];
  let match;
  while ((match = cardRegex.exec(content)) !== null) {
    cards.push({
      href: match[2],
      title: match[3].replace(/<[^>]+>/g, ''),
      desc: match[4].trim().replace(/\n\s*/g, ' ').replace(/<[^>]+>/g, '')
    });
  }

  const cssPath = '../../../index.css';
  const arrowIcon = '../../Assets/Icons/ArrowUpRight.svg';
  const backLink = '../index.html';

  const cardsHtml = cards.map(c => `
        <a href="${c.href}" class="glass-card" style="--card-accent: ${isHtml ? 'var(--accent-html)' : 'var(--accent-css)'};">
          <div class="card-icon" style="font-size: 2rem;">📌</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <div class="action-row" style="margin-top: auto; padding-top: 1rem; justify-content: flex-start;">
            <span class="btn btn-secondary" style="pointer-events: none;">Acessar <img src="${arrowIcon}" alt="Arrow"></span>
          </div>
        </a>`).join('');

  const newHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Área de Estudos</title>
  <link rel="stylesheet" href="${cssPath}">
</head>
<body>
  <!-- Efeitos de Fundo Modernos -->
  <div class="ambient-background">
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
  </div>

  <main class="container">
    <header class="header" style="margin-bottom: 3rem;">
      <h1 class="welcome-text">${h1}</h1>
      <p class="subtitle">${pDesc}</p>
    </header>

    <div class="action-row" style="margin-top: 0; margin-bottom: 3rem; justify-content: flex-start;">
      <a href="${backLink}" class="btn btn-outline">← Voltar para Guias</a>
    </div>

    <section class="section">
      <div class="grid cards-grid">
${cardsHtml}
      </div>
    </section>
  </main>
</body>
</html>`;

  fs.writeFileSync(filePath, newHtml, 'utf-8');
  console.log(`Processed: ${filePath} (${cards.length} cards)`);
}

for (const dir of dirsToProcess) {
  const isHtml = dir.includes('HTML');
  const indexFile = path.join(__dirname, dir, 'index.html');
  processFile(indexFile, isHtml);
}
