
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetID);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
// JavaScript to open a modal window displaying extra content when each "Ver mais" button is clicked

document.addEventListener('DOMContentLoaded', () => {
    // Create and add modal elements to the body
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    modalOverlay.style.display = 'none';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.zIndex = '1000';
  
    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f1f8e9';
    modal.style.color = '#1b5e20';
    modal.style.padding = '1.5rem 2rem';
    modal.style.borderRadius = '12px';
    modal.style.maxWidth = '90vw';
    modal.style.maxHeight = '80vh';
    modal.style.overflowY = 'auto';
    modal.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
    modal.style.position = 'relative';
  
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fechar';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '0.75rem';
    closeBtn.style.right = '1rem';
    closeBtn.style.background = '#81c784';
    closeBtn.style.border = 'none';
    closeBtn.style.padding = '0.3rem 0.75rem';
    closeBtn.style.color = '#1b5e20';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.borderRadius = '5px';
    closeBtn.style.fontWeight = '600';
    closeBtn.style.fontSize = '0.9rem';
  
    modal.appendChild(closeBtn);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
  
    closeBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });
  
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  
    // Content mapping for each card
    const contentData = {
      'Escolhas Conscientes': `O Guia Alimentar fortalece a autonomia das pessoas ao oferecer informações confiáveis e acessíveis sobre alimentação. Ele ensina como ler rótulos, entender a influência da publicidade e identificar alimentos realmente saudáveis, promovendo o direito de fazer escolhas melhores — para o corpo, a mente e a sociedade.`,
      'Princípios Básicos': `O guia é baseado em cinco princípios fundamentais:
  </br></br>
  • Alimentação é mais do que ingerir nutrientes — envolve cultura, prazer e modo de vida.
  </br></br>
  • As orientações devem estar atualizadas com a realidade alimentar e os desafios da saúde.
  </br></br>
  • Alimentação saudável depende de sistemas justos, sustentáveis e respeitosos ao meio ambiente.
  </br></br>
  • Conhecimentos científicos e tradicionais contribuem juntos para escolhas mais conscientes.
  </br></br>
  • Guias alimentares ajudam pessoas e comunidades a fazer escolhas saudáveis e exigir seus direitos.`,
      'Consumo Ideal': `O guia organiza os alimentos em quatro grupos, conforme o grau de processamento:
  </br></br>
  • In natura ou minimamente processados: base da alimentação. Exemplos: frutas, legumes, arroz, feijão, carnes, ovos.
  </br></br>
  • Óleos, sal e açúcar: devem ser usados com moderação, apenas para temperar ou cozinhar.
  </br></br>
  • Processados: alimentos com adição de sal ou açúcar (como queijos e pães). Devem ser consumidos com moderação.
  </br></br>
  • Ultraprocessados: são produtos industrializados (refrigerantes, salgadinhos, biscoitos). Devem ser evitados, pois prejudicam a saúde.`,
      'Dicas Práticas': `Para uma alimentação mais saudável, o guia recomenda:
  </br></br>
  • Planejar as refeições e dar preferência a alimentos in natura ou minimamente processados.
  </br></br>
  • Comer com atenção e, sempre que possível, em companhia.
  </br></br>
  • Comprar alimentos em feiras e produtores locais, respeitando a sazonalidade.
  </br></br>
  • Cozinhar mais em casa e envolver a família nas preparações.
  </br></br>
  • Evitar alimentos ultraprocessados, mesmo os que pareçam “saudáveis” por rótulo.
  </br></br>
  • Ser crítico à publicidade de alimentos e valorizar sua cultura alimentar.`,
      'Guia Completo': `Baixe o guia oficial para consultas offline e estudo aprofundado.`,
      'Vídeos Educativos': `Assista a palestras e vídeos sobre hábitos alimentares saudáveis.</br><button class="btn"><a href="https://www.youtube.com/watch?v=thUMk4coJfo&list=PLaS1ddLFkyk-ObbBv4eWkHIhc5B49a9Sw">Assistir</a>`,
      'Guias Alimentares': `Acesse plataformas e apps para acompanhamento nutricional.`,
    };
  
    // Get all "Ver mais" anchors in features and pricing sections
    const verMaisButtons = document.querySelectorAll('.features .cardvm a, .cardvm button a');
  
    verMaisButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
  
        
        // Determine the card title to find content
        const card = button.closest('.card');
        if (!card) return;
  
        const titleElem = card.querySelector('h4');
        if (!titleElem) return;
  
        const title = titleElem.textContent.trim();
  
        const textToShow = contentData[title];
        if (!textToShow) {
          modal.innerHTML = '<p>Conteúdo não disponível.</p>';
          modal.appendChild(closeBtn);
        } else {
          modal.innerHTML = `<h3 style="margin-bottom:1rem; font-weight:700;">${title}</h3><p style="line-height:1.5; font-size:1rem;">${textToShow}</p>`;
          modal.appendChild(closeBtn);
        }
        modalOverlay.style.display = 'flex';
        closeBtn.focus();
      });
    });
  });
  
  const modal = document.getElementById("modal");
  const btn = document.querySelector(".btn");
  const closeBtn = document.querySelector(".close-btn");

  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });