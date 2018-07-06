# Fetch, JSON, Stats

Estou gravando essa vídeo aula para abordar três tópicos:

- Fetch: carregamento de dados;
- JSON: JavaScript Object Notation;
- Estatística: usando vetores de objetos carregados de sites de dados fazer algumas estatísticas.

Estou gravando essa vídeo sem áudio, o ambiente não está muito silencioso por aqui :/ vamos experimentar!

Vamos buscar dados abertos! Em vez de cadastrar dados num formulário, como estão fazendo para a Mat II, vamos buscar dados reais e usá-los no nosso webapp. Alguns sites com dados abertos ...

Neste link, por exemplo, encontra-se os investimentos do PAC:
http://dados.gov.br/dataset/obras-do-pac-programa-de-aceleracao-do-crescimento/resource/bd2cdb1a-dfad-4d79-a329-7f71aa2ae2ca

Neste link, como outro exemplo, sabemos quanto consome cada país de energia elétrica:
http://data.un.org/Data.aspx?q=energy&d=ICS&f=cmID%3a17100-0

Mas, para fechar esse semestre, vamos trabalhar com dados do estado em:
http://dados.rs.gov.br/

O governo do estado disponibiliza vários dados, que podemos _consumir_ através do JavaScript, realizar algumae estatística e apresentar, como tabela ou gráfico ("plotar"). Exemplo!

A maior parte dos dados é resultado do trabalho da FEE (Fundação de Economia e Estatística). Por exemplo, aqui estão os dados do PIB por município:
https://www.fee.rs.gov.br/indicadores/pib-rs/municipal/serie-historica/
http://www.fee.rs.gov.br/wp-content/uploads/2017/12/2018020120171214pib-municipal-sh-2002-2015-v2.xlsx

Mas vamos a outro exemplo:
Pergunta: qual é a taxa de abandono do ensino médio? Ele vem aumentando ou baixando? Vamos aos dados!
http://dados.rs.gov.br/dataset/fee-taxa-de-abandono-total-102596

Neste caso, para cada ano é oferecido um CSV, mas o que é CSV?! Isso aqui:

```
"Município","ibge","latitude","longitude","/Educação/Ens... Abandono/Total 1999 (-)"
"Água Santa","4300059","-28.167200000000","-52.030999999990","5,1"
"Agudo","4300109","-29.644700000000","-53.251500000000","17,2"
"Ajuricaba","4300208","-28.234200000000","-53.775700000000","8,2"
"Alecrim","4300307","-27.657900000000","-54.764899999990","2,3"
"Alegrete","4300406","-29.790199999990","-55.794899999990","17,6"
"Alegria","4300455","-27.834499999990","-54.055700000000","10,6"
"Alpestre","4300505","-27.250200000000","-53.034100000000","10,7"
```
CSV significa Comma Separated Values, algo como: Valores Separados por Vírgula
É uma tabela, modo de dizer, com linhas e colunas, neste exemplo, temos 5 colunas: município, código do ibge, latitude, long e taxa de abandono (%). Assim, sabemos que em 1999 Água Santa tinha 5,1% de taxa de abandono no ensino médio. Veremos em  2000!
```
"Água Santa","4300059","-28.167200000000","-52.030999999990","3,5"
```
Baixou!

Enfim, com esses dados, podemos saber se a taxa aumenta, diminui, ou até qual município tem a maior e menor taxa. Taxa média, etc.

Mas, na prática, não baixamos esses dados assim, clicando no site e download. Em vez disso, fazemos uma requisição HTTP destes dados! Basta ter a URL, por exemplo:
http://dados.fee.tche.br/ckan-download/fee-2013-mun-taxa-de-abandono-total-102596.csv

É possível testar essa requisição aqui, no Visual Studio Code. Para tal, precisa de uma extensão: REST Client, ver ali do lado --> Instale-a!

Não é difícil usá-la, vou mostrar. Primeiro, crie um arquivo novo e salve com a extensão `.http`, exemplo!

Funciona bem. Bem no início está o cabeçalho HTTP. Podemos igorá-lo, por enquanto. A partir da linha 12 começam os dados (chamamos de payload). Note que os acentos não vieram corretamente, mas não se preocupe com início, por agora. Os dados que precisamos estão a partir da linha 14 até a linha 482.

Vamos a outro exemplo, ok?

Bem, sabendo onde estão os dados e qual a URL para requisição, como trazer estes dados por JavaScript? Vamos para a prática!

Esse texto vai ficar disponível no repositório.
Os códigos também.

EXERCÍCIO:
----------

- Remover as aspas antes de atribuir as colunas ao JSON (record);
- Considerar os decimais na taxa (resolver o problema da vírgula na coluna taxa);
- Fazer a média da taxa de desistência;
- Escolher outro indicador (recurso) em <http://dados.rs.gov.br/> e fazer estatísticas;

Vou lançar uma atividade avaliada.

Venham com esses exercícios prontos ou encaminhados, pelo menos, para a aula de quarta 4!!!

Fiquem a vontade para usar meu código e adaptar!

Dúvidas,slack!

Até quarta!

Shutdown in 3, 2, 1, 