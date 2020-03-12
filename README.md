# SeniorxUiStarter

Este projeto tem o objetivo de fornecer uma versão inicial já configurada para realizar as extensões de front-end da SeniorX Platform, seguindo com o mesmo padrão visual da SeniorX.

- Utiliza as bibliotecas da Senior, assim como os componentes do PrimeNG

## Instruções de instalação
- Realizar um **clone** deste projeto
```
git clone https://github.com/trentinrossi/seniorx-ui-starter.git nome-do-meu-projeto
```

- Abrir a pasta do projeto pelo VSCode e digitar o comando na pasta raiz
```
npm install
```
Esse comando vai instalar todas as dependências necessárias para execução do projeto

- Por ultimo basta iniciar a aplicação usando o comando
```
npm start
```

- Será então iniciado o servidor node.js respondendo na porta padrão 4200 https://localhost:4200

- Para que seja possível trocar informações com a plataforma, uma configuração deve ser realizada para que o CORS não bloqueie as chamadas nas API's da SeniorX

### Alterando o arquivo hosts
- Abrir o arquivo C:\Windows\System32\drivers\etc em modo administrador e adicionar a seguinte linha
```
127.0.0.1 localhost.senior.com.br
```

### Acessando sua aplicação integrada com a Senior-X
- Realizar o login na plataforma
- Em uma nova aba, digitar o endereço https://localhost.senior.com.br:4200
- Agora sua aplicação está preparada para trocar informações com a SeniorX

