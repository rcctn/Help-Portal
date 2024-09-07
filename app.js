/**
 * Função para pesquisar e exibir os resultados na página.
 *
 * Percorre o array 'dados' e para cada item, cria um elemento HTML
 * com as informações do item e o adiciona à seção 'resultados-pesquisa'.
 *
 * 
 */
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

      // Verifica se o título do item contém o texto de pesquisa
      if (dado.titulo.includes(campoPesquisa)
      || dado.descricao.includes(campoPesquisa)
      || dado.info.includes(campoPesquisa)
      || dado.tags.includes(campoPesquisa)){

      // Cria o HTML para cada item(novo elemento) 
      resultados += `
        <div class="item-resultado">
          <a href="https://titaniumfix.gcloudlabs.com/mge/login.jsp?expired=true" target="_blank">${dado.titulo}</a>
          <p class="descricao-meta">${dado.descricao}</p>
          <p class="descricao-meta">${dado.info}</p>
        </div>
      `;
    }
  }
  
    // Verifica se há resultados
    if (!resultados) {
      resultados = '<p>Nenhum resultado encontrado.</p>';
    }
  
    // Adiciona os resultados à seção HTML
    section.innerHTML = resultados;
  }