function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
console.log(section);

let campoPesquisa = document.getElementById
("campo-pesquisa").value;

console.log(campoPesquisa);

if(campoPesquisa == ""){
    section.innerHTML = "<p>Nenhuma pesquisa foi realizada</p>";
    return 
}

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let nome = "";
let descricao = "";
let genero = "";
let tags = "";


for (let dado of dados){
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    genero = dado.genero.toLowerCase();
    tags = dado.tags.toLowerCase();

    if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += 
        `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }else if(!resultados){
        resultados = "<p>nada foi encontrado</p>";
    }
        
   
    
}




section.innerHTML = resultados;
}

