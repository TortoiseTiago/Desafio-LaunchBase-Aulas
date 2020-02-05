Observações importantes para a configuração do projeto


ctrl+shift+p => settings.json e adiciona o codigo a baixo

para configurar o emmet dentro do nunjucks
"emmet.includeLanguages": {
    "njk":"html"
}
para reconhecer as extensoes html dentro do njk





quando textos HTML dentro do nunjucks nao forem reconhecidos como tag
adicionar ao arquivo server.js

nunjucks.configure("views", {
    autoescape: false
})