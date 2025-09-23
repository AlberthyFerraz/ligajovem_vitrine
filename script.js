// Dados dos itens
const portfolioItems = {

  projeto2: {
    image: 'images/dashboard.jpg',
    title: 'Dashboard do Sistema',
    description: ' 🔩 Sobre o Projeto – Canhão Usinado  Este projeto apresenta a reprodução em miniatura de um canhão histórico, desenvolvida no setor de usinagem mecânica como parte de uma atividade prática voltada ao aprendizado de técnicas de fabricação.  A proposta tem como objetivo unir história e engenharia, demonstrando na prática o processo de usinagem de peças cilíndricas, encaixes de precisão, roscas e acabamento superficial. Todas as partes do canhão foram confeccionadas com o uso de máquinas-ferramenta, como torno mecânico, fresadora e furadeira de bancada.  Durante o desenvolvimento, os alunos trabalharam conceitos como:  Leitura e interpretação de desenho técnico;  Medição e controle dimensional com instrumentos de precisão;  Segurança na operação de máquinas;  Montagem e testes funcionais do protótipo.  Além do aspecto técnico, o projeto também visa estimular a criatividade, o trabalho em equipe e a valorização do conhecimento histórico, promovendo uma aprendizagem completa, conectada ao mundo real.',
    views: 17,
    projectUrl: 'external/canhao/canhao.html'
  },
  projeto3: {
    image: 'images/reports.jpg',
    title: 'Módulo de Relatórios',
    description: 'Gere análises detalhadas com filtros avançados e exportação para múltiplos formatos. Integração com Excel e PDF.',
    views: 12,
    projectUrl: 'external/silo/silo.html'
  },
  projeto4: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto5: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto6: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto7: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto8: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto9: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  }
};
document.addEventListener('DOMContentLoaded', function() {
            const popupOverlay = document.getElementById('popupOverlay');
            const openPopupBtn = document.getElementById('openPopup');
            const closePopupBtn = document.getElementById('closePopup');
            const popupIframe = document.getElementById('popupIframe');
            const mainContainer = document.getElementById('mainContainer');
            const popupContent2 = document.getElementById('popupContent2');
            const popupHeader = document.getElementById('popupHeader');
            const toggleResizeBtn = document.getElementById('toggleResize');
            const resetPopupBtn = document.getElementById('resetPopup');
            
            // Variável para controlar o redimensionamento
            let isResizable = true;
            
            // Abrir o popup
            openPopupBtn.addEventListener('click', function() {
                // Carregar o conteúdo externo (substitua pelo caminho do seu arquivo HTML)
                popupIframe.src = 'external/dashboard.html';
                  document.addEventListener('keydown', function(e) {
               if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
              closePopupBtn.click();
                      }
                      });
                // Exibir o popup
                popupOverlay.classList.add('active');
                document.body.classList.add('popup-open');
                document.body.style.overflow = 'hidden'; // Impede a rolagem da página principal
                
                // Esconder o botão e container principal
                openPopupBtn.style.display = 'none';
                mainContainer.classList.add('hidden');
            });
            
            // Fechar o popup
            closePopupBtn.addEventListener('click', function() {
                popupOverlay.classList.remove('active');
                document.body.classList.remove('popup-open');
                document.body.style.overflow = 'auto'; // Restaura a rolagem
                
                // Mostrar o botão e container principal novamente
                openPopupBtn.style.display = 'block';
                mainContainer.classList.remove('hidden');
                
                // Parar de carregar o iframe para economizar recursos
                setTimeout(function() {
                    popupIframe.src = 'about:blank';
                }, 300);
            });
            
            // Fechar o popup clicando fora do conteúdo
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) {
                    closePopupBtn.click();
                }
            });
            
            // Fechar com a tecla ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
                    closePopupBtn.click();
                }
            });
            
            // Ativar/desativar redimensionamento
            toggleResizeBtn.addEventListener('click', function() {
                isResizable = !isResizable;
                if (isResizable) {
                    popupContent2.style.resize = 'both';
                    toggleResizeBtn.textContent = 'Desativar Redimensionamento';
                } else {
                    popupContent2.style.resize = 'none';
                    toggleResizeBtn.textContent = 'Ativar Redimensionamento';
                }
            });
            
            // Redefinir tamanho do popup
            resetPopupBtn.addEventListener('click', function() {
                popupContent2.style.width = '90%';
                popupContent2.style.height = '80vh';
            });
            
            // Tornar o popup arrastável pelo cabeçalho
            let isDragging = false;
            let currentX;
            let currentY;
            let initialX;
            let initialY;
            let xOffset = 0;
            let yOffset = 0;
            
            popupHeader.addEventListener('mousedown', dragStart);
            document.addEventListener('mouseup', dragEnd);
            document.addEventListener('mousemove', drag);
            
            function dragStart(e) {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
                
                if (e.target === popupHeader) {
                    isDragging = true;
                }
            }
            
            function dragEnd(e) {
                initialX = currentX;
                initialY = currentY;
                
                isDragging = false;
            }
            
            function drag(e) {
                if (isDragging) {
                    e.preventDefault();
                    
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                    
                    xOffset = currentX;
                    yOffset = currentY;
                    
                    setTranslate(currentX, currentY, popupContent2);
                }
            }
            
            function setTranslate(xPos, yPos, el) {
                el.style.transform = `translate(${xPos}px, ${yPos}px) scale(1)`;
            }
        });
// Abre o pop-up
function openContentPopup(itemId) {
  const item = portfolioItems[itemId];
  if (!item) return;

  // Atualiza o conteúdo
  document.getElementById('popupTitle').textContent = item.title;
  document.getElementById('popupImage').src = item.image;
  document.getElementById('popupImage').alt = item.title;
  document.getElementById('itemDescription').textContent = item.description;
  document.getElementById('itemViews').textContent = `${item.views} visualizações`;
  document.getElementById('projectFrame').src = item.projectUrl;
  document.getElementById('shareLink').value = `${window.location.origin}${window.location.pathname}#?item=${itemId}`;

  // Mostra o pop-up
  document.getElementById('contentPopup').style.display = 'block';
}

// Fecha o pop-up
function closePopup() {
  document.getElementById('contentPopup').style.display = 'none';
}

// Alterna entre conteúdos
document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Ativa o botão clicado
    document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Mostra o conteúdo correspondente
    const contentId = `${this.dataset.content}-content`;
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
  });
});

// Copia o link
function copyLink() {
  const linkInput = document.getElementById('shareLink');
  linkInput.select();
  document.execCommand('copy');
  
  // Feedback visual
  const copyBtn = linkInput.nextElementSibling;
  const originalHTML = copyBtn.innerHTML;
  copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
  setTimeout(() => {
    copyBtn.innerHTML = originalHTML;
  }, 2000);
}

// Configura eventos das miniaturas
document.querySelectorAll('.screenshot').forEach(item => {
  item.addEventListener('click', function() {
    const itemId = this.getAttribute('data-item');
    openContentPopup(itemId);
  });
});

// Fecha ao clicar fora
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('contentPopup')) {
    closePopup();
  }
});
// Função para recarregar o iframe
function reloadProject() {
  const iframe = document.getElementById('projectFrame');
  iframe.src = iframe.src; // Recarrega o iframe
}

// Função para abrir em tela cheia
function openProjectFullscreen() {
  const iframe = document.getElementById('projectFrame');
  
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { /* Safari */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { /* IE11 */
    iframe.msRequestFullscreen();
  }
}

// Ajusta dinamicamente a altura do popup-body
function adjustPopupHeight() {
  const popupBody = document.querySelector('.popup-body');
  const windowHeight = window.innerHeight;
  
  // Calcula 70% da altura da janela, menos o espaço dos outros elementos
  const calculatedHeight = Math.min(Math.max(windowHeight * 0.7, 400), 700);
  popupBody.style.height = `${calculatedHeight}px`;
}

// Chamar na abertura do popup e no redimensionamento
window.addEventListener('resize', adjustPopupHeight);

// No seu openContentPopup(), adicione:
adjustPopupHeight();
// Variável para controlar se o projeto já foi carregado
let projectLoaded = false;
let currentProjectUrl = '';

// Modifique a função de alternância de conteúdo
document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const contentType = this.dataset.content;
    
    // Ativa o botão clicado
    document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Oculta todos os conteúdos
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    // Mostra o conteúdo correspondente
    document.getElementById(`${contentType}-content`).classList.add('active');
    
    // Se for projeto e ainda não foi carregado
    if (contentType === 'project' && !projectLoaded && currentProjectUrl) {
      loadProject(currentProjectUrl);
    }
  });
});

// Função para carregar o projeto
function loadProject(url) {
  const loadingElement = document.querySelector('.project-loading');
  const viewerElement = document.querySelector('.project-viewer');
  const iframe = document.getElementById('projectFrame');
  
  loadingElement.style.display = 'flex';
  viewerElement.style.display = 'none';
  
  iframe.src = url;
  
  // Quando o iframe carregar
  iframe.onload = function() {
    loadingElement.style.display = 'none';
    viewerElement.style.display = 'block';
    projectLoaded = true;
  };
}

// Modifique a função openContentPopup
function openContentPopup(itemId) {
  const item = portfolioItems[itemId];
  if (!item) return;

  // Reseta o estado do projeto
  projectLoaded = false;
  currentProjectUrl = item.projectUrl;

  // Mostra a imagem por padrão
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById('image-content').classList.add('active');
  document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-content="image"]').classList.add('active');
  
  // Exibe o pop-up
  document.getElementById('contentPopup').style.display = 'block';
}

// Funções auxiliares permanecem as mesmas
function reloadProject() {
  const iframe = document.getElementById('projectFrame');
  iframe.src = iframe.src;
  document.querySelector('.project-loading').style.display = 'flex';
  document.querySelector('.project-viewer').style.display = 'none';
}

function openProjectFullscreen() {
  const iframe = document.getElementById('projectFrame');
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}
// Função para ajustar responsividade
function handleResponsive() {
  const popupBody = document.querySelector('.popup-body');
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Ajustes específicos para mobile
    popupBody.style.maxHeight = '60vh';
    document.querySelectorAll('.switch-btn').forEach(btn => {
      btn.style.flex = '1 1 30%';
    });
  } else {
    // Ajustes para desktop/tablet
    popupBody.style.maxHeight = '70vh';
  }
  
  // Ajuste especial para iframe em telas pequenas
  const projectContent = document.getElementById('project-content');
  if (projectContent.classList.contains('active')) {
    adjustProjectViewer();
  }
}

// Função para ajustar o visualizador de projeto
function adjustProjectViewer() {
  const isMobile = window.innerWidth <= 768;
  const viewer = document.querySelector('.project-viewer');
  
  if (isMobile) {
    viewer.style.paddingBottom = '75%'; // Proporção 4:3 para mobile
  } else {
    viewer.style.paddingBottom = '56.25%'; // Proporção 16:9 para desktop
  }
}

// Modifique a função initialize() para incluir:
function initialize() {
  // ... outros event listeners ...
  
  // Evento para redimensionamento
  window.addEventListener('resize', () => {
    handleResponsive();
    adjustPopupHeight();
  });
  
  // Chamada inicial
  handleResponsive();
}
// Função para alternar o menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('active');
  
  // Animação do ícone
  const btn = document.querySelector('.mobile-menu-btn');
  if (menu.classList.contains('active')) {
    btn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    btn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Fechar menu ao clicar em um item (opcional)
document.querySelectorAll('.navbar-menu a').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      toggleMobileMenu();
    }
  });
});

// Fechar menu ao redimensionar para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    const menu = document.getElementById('navbarMenu');
    menu.classList.remove('active');
    document.querySelector('.mobile-menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
  }
});



// NYCOLLE MEXEU AQUI
//efeito de scroll suave
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a, .menu-tab');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verificar se é um link interno (começa com #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Calcular a posição considerando a navbar fixa
                    const navbarHeight = document.querySelector('.portfolio-navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    // Scroll suave
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Fechar menu mobile se estiver aberto
                    const navMenu = document.querySelector('.nav-menu');
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Também adicionar para o botão de contato se ele tiver um link âncora
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const targetElement = document.getElementById('contato');
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.portfolio-navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

const smoothScrollStyle = `
    html {
        scroll-behavior: smooth;
    }
    
    /* Melhorar a aparência durante o scroll */
    * {
        scroll-margin-top: 80px; /* Altura aproximada da navbar */
    }
    
    /* Indicador visual durante o scroll */
    @keyframes smoothScrollHighlight {
        0% { background-color: transparent; }
        50% { background-color: rgba(110, 142, 251, 0.1); }
        100% { background-color: transparent; }
    }
    
    .smooth-scroll-highlight {
        animation: smoothScrollHighlight 2s ease;
    }
`;


const styleSheet = document.createElement('style');
styleSheet.textContent = smoothScrollStyle;
document.head.appendChild(styleSheet);


        // Controle do Menu Lateral
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuItems = document.querySelectorAll('.menu-item');

    function toggleMenu() {
        sideMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    // Só adicionar event listeners se os elementos existirem (em mobile)
    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);

        // Fechar menu ao clicar em um item (em dispositivos móveis)
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                toggleMenu();
                
                // Scroll suave para a seção
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        // Em mobile, não precisa subtrair a altura da navbar
                        const targetPosition = targetElement.offsetTop;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Tecla ESC para fechar o menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // Efeito de scroll suave para links da navbar (apenas em desktop)
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Só aplicar scroll suave se a navbar estiver visível (desktop)
            if (window.innerWidth > 868) {
                const href = this.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const navbarHeight = document.querySelector('.portfolio-navbar').offsetHeight;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });

    // Botão de contato
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Entre em contato conosco: contato@vitrinetecnica.com');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a, .menu-tab');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = window.innerWidth > 868 ? 
                        document.querySelector('.portfolio-navbar').offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


// Efeito de aparecimento suave dos cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 150 * index);
            });
        });


        
        // Forçar visibilidade dos ícones
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.footer-social i, .footer-section i');
    icons.forEach(icon => {
        icon.style.color = '#ffffff';
        icon.style.opacity = '1';
        icon.style.visibility = 'visible';
    });
    
    // Verificar se o Font Awesome carregou
    if (!document.querySelector('link[href*="font-awesome"]')) {
        // Carregar Font Awesome dinamicamente se não estiver carregado
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }
});




   // Funções para controle do popup
        function openPopup(item) {
            document.getElementById('contentPopup').style.display = 'block';
            
            // Atualizar conteúdo baseado no projeto selecionado
            const projectTitles = {
                'projeto1': 'Dashboard Analytics',
                'projeto2': 'E-commerce Platform', 
                'projeto3': 'Canhão 3D',
                'projeto4': 'Corporate Website',
                'projeto5': 'Sistema 3D Interativo',
                'projeto6': 'Projeto 3D Arquitetônico',
                'projeto7': 'Mobile App',
                'projeto8': 'Animação 3D',
                'projeto9': 'Experiência VR'
            };
            
            const projectImages = {
                'projeto1': './imagens/thumb_dashboard.jpg',
                'projeto2': './imagens/thumb_dashboard.jpg',
                'projeto3': './imagens/thumb_2.jpg',
                'projeto4': './imagens/thumb_dashboard.jpg',
                'projeto5': './imagens/thumb_dashboard.jpg',
                'projeto6': './imagens/thumb_dashboard.jpg',
                'projeto7': './imagens/thumb_dashboard.jpg',
                'projeto8': './imagens/thumb_dashboard.jpg',
                'projeto9': './imagens/thumb_dashboard.jpg'
            };
            
            const projectDescriptions = {
                'projeto1': 'Dashboard Analytics é uma solução completa para visualização e análise de dados em tempo real. Desenvolvido com React no frontend e Node.js no backend, oferece relatórios personalizáveis, gráficos interativos e painéis configuráveis.',
                'projeto2': 'Plataforma de e-commerce completa com sistema de pagamentos integrado, gestão de inventário, carrinho de compras e painel administrativo. Desenvolvida com as melhores práticas de UX e segurança.',
                'projeto3': 'Modelagem 3D realista de um canhão histórico com animações detalhadas e texturas de alta qualidade. Desenvolvido com Blender e renderizado com Cycles para máxima fidelidade.',
                'projeto4': 'Site institucional responsivo com design moderno, otimizado para SEO e integrado com redes sociais. Desenvolvido com foco na experiência do usuário e performance.',
                'projeto5': 'Simulação 3D interativa de sistema mecânico complexo, com controles em tempo real e visualização de dados de performance. Desenvolvido com Three.js e WebGL.',
                'projeto6': 'Renderização 3D de projeto arquitetônico com visualização em 360 graus, materiais realistas e iluminação natural. Ideal para apresentação de projetos aos clientes.',
                'projeto7': 'Aplicativo mobile para gestão de tarefas com sincronização em nuvem, notificações push e interface intuitiva. Desenvolvido com Flutter para multiplataforma.',
                'projeto8': 'Animação 3D de personagem com rigging completo, expressões faciais detalhadas e movimentos realistas. Projeto desenvolvido para demonstração de habilidades em animação.',
                'projeto9': 'Experiência em realidade virtual com interação imersiva, ambientes 3D detalhados e controles intuitivos. Desenvolvido para headsets de VR modernos.'
            };
            
            document.getElementById('popupTitle').textContent = projectTitles[item] || 'Projeto';
            document.getElementById('popupImage').src = projectImages[item] || '';
            document.getElementById('itemDescription').textContent = projectDescriptions[item] || 'Descrição do projeto.';
        }
        
        function closePopup() {
            document.getElementById('contentPopup').style.display = 'none';
        }
        
        function reloadProject() {
            console.log("Recarregar projeto");
        }
        
        function openProjectFullscreen() {
            console.log("Abrir em tela cheia");
        }
        
        // Fechar o popup ao clicar fora dele
        window.onclick = function(event) {
            const popup = document.getElementById('contentPopup');
            if (event.target === popup) {
                closePopup();
            }
        };
        
        // Adicionar event listeners para os botões de conteúdo
        document.querySelectorAll('.switch-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.switch-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                this.classList.add('active');
                
                document.querySelectorAll('.content').forEach(content => {
                    content.classList.remove('active');
                });
                
                const contentType = this.getAttribute('data-content');
                document.getElementById(`${contentType}-content`).classList.add('active');
            });
        });
        
        // Adicionar event listeners para os cards de projeto
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                const item = this.getAttribute('data-item');
                openPopup(item);
            });
        });
        
        // Adicionar event listener para o botão de visualização
        document.querySelectorAll('.view-project-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.project-card');
                const item = card.getAttribute('data-item');
                openPopup(item);
            });
        });




         // Atualizar o tamanho da tela
        function updateSize() {
            document.getElementById('width').textContent = window.innerWidth;
            document.getElementById('height').textContent = window.innerHeight;
        }
        
        window.addEventListener('resize', updateSize);
        updateSize();
        
        // Controle do menu mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const sideMenu = document.querySelector('.side-menu');
        const menuOverlay = document.querySelector('.menu-overlay');
        const closeMenu = document.querySelector('.close-menu');
        
        menuToggle.addEventListener('click', function() {
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        function closeMenuFunction() {
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        closeMenu.addEventListener('click', closeMenuFunction);
        menuOverlay.addEventListener('click', closeMenuFunction);
        
        // Fechar o menu ao clicar em um item
        const menuItems = document.querySelectorAll('.mobile-menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', closeMenuFunction);
        });
        
        document.querySelector('.mobile-contact').addEventListener('click', closeMenuFunction);


        // para os botões funcionarem no vitrine
        document.querySelectorAll('.view-project-btn').forEach(button => {
            button.addEventListener('click', function() {
                alert('Visualização do projeto em breve!');
            });
        });

        function scrollToContact() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        