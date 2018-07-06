console.log('main!');
// VAMOS VER AQUI UM RECURSO CONHECIDO COMO AJAX
// TEMOS MUITO PARA VER DE AJAX, A MAIOR PARTE NO PRÓXIMO SEMESTRE
// NESTE, VAMOS NOS CONCENTRAR NO fetch
// fetch FAZ UMA REQUISIÇÃO DE DADOS QUE É TRATADA POR JS
// fetch FAZ USO DE "Promisses JavaScript"
// TAMBÉM NÃO VOU ENTRAR NOS DETALHES DAS PROMISSES, MAS
// CREIO EU, VAMOS CONSEGUIR FAZER UM EXEMPLO COM ALGUMAS POUCAS LINHAS
// LÁ VAI:

// primeiro, qual é a url? não se esqueça do proxy https://cors.io/?url
const url = 'https://cors.io/?http://dados.fee.tche.br/ckan-download/fee-2013-mun-taxa-de-abandono-total-102596.csv';

// segundo, fetch!
fetch(url).then(getText).then(process).catch(console.error);

// explicando: fetch solicita um carregamento que, quando concluído, pega o texto da resposta e então processa. Caso dê algum problema, imprime no console (catch). Deve-se entender a "natureza" ASSÍCRONA do processo. Quero dizer, quando se usa fetch, não se sabe quando vem a resposta (talvez nem venha), por isso os callbacks `getText` e `process`, que são funções nossas. Poderia ser batata e cebola, o nome é irrelevante. Vamos implementar!

function getText(response) {
    return response.text(); // só isso
}

function process(text) { // todo o miolo fica aqui!
    console.log(text); // vamos ver se funciona! OK, pegamos o texto!
    // MAS, não é suficiente, para trabalhar com os dados precisamos convertê-los, primeiro em linhas, depois em colunas, para então registros e objetos!
    // primeiro, linhas!
    const rows = text.split('\n'); // \n é para splitar (quebrar) na nova linha
    console.log(rows); // aqui teremos um vetor!
    // é bem ruim de ver com console.log, então vamos para o console.table!
    // console.table(rows); // essa tu não conhecias não é mesmo?!
    // não deu certo :( errei o split, o símbolo de nova linha é \n
    // as linhas 0 e 1 devem ser ignoradas para criar os registros
    const records = [];
    // ignorar a linha 0 e 1! e ignorar a última linha (em branco)
    for (let i = 2; i < rows.length - 1; i++) {
        // segunda parte, dividir em colunas!
        const columns = rows[i].split(','); // split na vírgula!
        // objetivo, guardar as colunas num objeto literal! JSON!
        const record = { // isso é um JSON
            municipio: columns[0],
            ibge: columns[1],
            lat: columns[2],
            long: columns[3],
            taxa: columns[4]
        };
        records.push(record); // FEITO: guardando cada registro no vetor de registros!
    }
    console.table(records);
    // chegando aqui, tendo os registros, podem ser feitas as estatíticas
    stat(records);
}

function stat(records) { // ONDE records É UM VETOR DE JSON's!
    // PERGUNTA: Qual município teve a maior taxa de desistência no ensino médio no ano de 2013???
    // RESPONDENDO:
    let maiorTaxa = {taxa: 0}; // para comparação
    let menorTaxa = {taxa: 100}; // extrapolando a taxa
    // vou deixar a média para vocês!
    // DEVE-SE REMOVER AS ASPAS E CONVERTER EM NUMBER!
    for (const r of records) {
        // IMPORTANTE! ISSO PODERIA (DEVERIA!) SER FEITO DURANTE O PROCESSAMENTO (função PROCESS)
        r.taxa = parseFloat(r.taxa.replace(/"/g, '')); // /"/g é uma REGEX que diz TODAS AS ASPAS
        if (r.taxa > maiorTaxa.taxa) maiorTaxa = r;
        if (r.taxa < menorTaxa.taxa) menorTaxa = r;
    }

    console.log(menorTaxa); // constantina (na verdade é 0.3, mas não está convertendo corretamente)
    console.log(maiorTaxa); // pinhal
}
