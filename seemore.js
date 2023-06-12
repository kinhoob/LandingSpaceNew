const botaoLerMais = document.querySelector('.ler-mais');
        const botaoLerMenos = document.querySelector('.ler-menos');
        const conteudoEscondido = document.querySelector('.conteudo-escondido');
        
  
        botaoLerMais.addEventListener('click', function () {
          conteudoEscondido.style.display = 'block';
          botaoLerMais.style.display = 'none';
          botaoLerMenos.style.display = 'block';
        });
        botaoLerMenos.addEventListener('click', function () {
          conteudoEscondido.style.display = 'none';
          botaoLerMais.style.display = 'block';
          botaoLerMenos.style.display = 'none';
        });