/**
 * Função para pesquisar e exibir os resultados na página.
 *
 * Percorre o array 'dados' e para cada item, cria um elemento HTML
 * com as informações do item e o adiciona à seção 'resultados-pesquisa'.
 *
 * 
 */
function pesquisar() {
    // Busca a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa === ''){
      return;
    }

    // Inicializa uma string para armazenar os resultados HTML
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let info = '';
    let tag = '';
  

    // Itera sobre cada item no array 'dados'
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      info = dado.info.toLowerCase();
      tag = dado.tag.toLowerCase();


      // Verifica se o título do item contém o texto de pesquisa
      if (dado.titulo.includes(campoPesquisa)
      || dado.descricao.includes(campoPesquisa)
      || dado.info.includes(campoPesquisa)
      || dado.tag.includes(campoPesquisa)){

      // Cria o HTML para cada item, formatando o título como um link
    resultados += `
    <div class="item-resultado">
      <a href="https://titaniumfix.gcloudlabs.com/mge/login.jsp?expired=true" target="_blank">${dado.titulo}</a>
      <p class="descricao-meta">${dado.descricao}</p>
      <p class="descricao-meta">${dado.info}</p>
     </div>
  `;
      }
    }
    if (!resultados) {
      resultados = '<p>Nenhum resultado encontrado.</p>';
    }
  
    // Adiciona os resultados à seção HTML
    section.innerHTML += resultados;
  }





