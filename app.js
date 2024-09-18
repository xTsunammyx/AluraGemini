function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
  
    // Obtém o termo de pesquisa inserido pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
  
    // Verifica se o usuário inseriu algum termo
    if (campoPesquisa === "") {
      // Se não, exibe uma mensagem informando que nenhuma pesquisa foi realizada
      section.innerHTML = "<p>Nenhuma pesquisa foi realizada</p>";
      return;
    }
  
    // Normaliza o termo de pesquisa e os dados para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa a string que armazenará os resultados da pesquisa
    let resultados = "";
  
    //  recebe cada item dos dados
    for (let dado of dados) {
      // Normaliza os campos do item para minúsculas
      let nome = dado.nome.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let genero = dado.genero.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente em algum dos campos
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, cria um novo elemento HTML para exibir o resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      } else if (!resultados) {
        // Se nenhum resultado foi encontrado até o momento, adiciona uma mensagem
        resultados = "<p>nada foi encontrado</p>";
      }
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }