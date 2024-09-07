function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");


  let campoPesquisa = document.getElementById ("campo-pesquisa").value


  // se campoPesquisa for uma string sem nada:

  if (!campoPesquisa){section.innerHTML = "<p>Nada foi encontrado</p>"
    return};

    campoPesquisa = campoPesquisa.toLowerCase()
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags ="";

  // Itera sobre cada dado na lista de dados e constrói o HTML para cada item
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes pesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) )
    // cria um novo elemento
    {resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.link1}" target="_blank">${dado.titulo}</a>
          ${dado.vida} </h2>
        <p class="discricao-meta">${dado.descricao}</p>
        <a href="${dado.link2}" target="_blank">mais informações</a>
      </div>
    `;}
  }

  if(!resultados) {resultados="<p>nada encontrado</p>"}

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}


