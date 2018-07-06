# DBO-2018-WORKSPACE

Para desenvolver neste _workspace_ é necessário ter instalado o [NodeJS](https://nodejs.org/en/download/) e o [Visual Studio Code](https://code.visualstudio.com/). Tendo essas ferramentas instaladas faça os seguintes procedimentos:

## Extensões necessárias no Visual Studio Code

Extensões essenciais:

- ESLint
- vscode-icons
- HTML Snippets
- HTMLHint
- EditorConfig for VS Code
- Sublime ou Atom Keymap
- Path Intellisense
- TODO Highlight
- REST Client
- IntelliSense for CSS class names
- Beautify
- lit-html
- Quokka

Para ajudar na formatação do código:

- Bracket Pair Colorizer
- Indent Rainbow

Só estéticos (dispensáveis):

- Material Theme
- One Dark Pro
- Power Mode

Referência: <https://code.visualstudio.com/docs/editor/extension-gallery>

## Configurações do Visual Studio Code

As configurações que uso no Visual Studio Code estão no arquivo `vscode-user-settings.json`, sintam-se a vontade para usá-las total ou parcialmente no seu vscode. Eu recomendo pelo menos o `wrap` e as _exclusions_ que melhora a performance nos projetos Node.js.

## Node

A partir da linha de comando, execute `npm install`, isso vai gerar o diretório *node_modules*, que nunca deve ser copiado ou transferido por e-mail por exemplo, já que só depende do arquivo `package.json` para gerar novamente com o comando citado.

## Rodando

Para _rodar_ um projeto execute o comando `npm start diretorio`, por exemplo, para executar o template o comando é `npm start template`. O comando abre o _browser_ padrão, mas podes abrir o projeto em qualquer _browser_ com a URL `http://127.0.0.1:8080`.

Obs.: alternativamente podes usar a extensão Web Server do Chrome em <https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb>, mas é fortemente sugerido usar o `npm start` para levantar um `live-server`.
