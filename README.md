# Projeto

Uma SPA com Angular 17. A ideia do projeto é que o usário possa criar uma conta, logar no sistema e também poderá adicionar, excluir (somente o dono da conta), curtir, comentar fotos de outro ou até mesmo as próprias fotos. No sistema só poderá efetuar as operações listas se o usuário estiver autenticado. Também haverá validações nos formulários como limite de caracteres, username inválido, quantidade mímima e máxima de caracteres 

## Development server

Entre pelo terminal na pasta Projeto e excute `ng serve --o`. O navegador abrirá no `http://localhost:4200/`.

## API

O foco do projeto não é a API em si, no entanto, ela é necessária para o funcionamento adequado. O foco será apenas SPA desenvolvida em Angular.

Link da [API](https://github.com/MatheusCamposFreitas/API-Pictures.git)

Acesse a API pelo prompt excute:

 `npm install`.
 
 `npm start`.

Por padrão será criado:

`User:` admin 

`Password:` admin123

## Rotas


### /home

Página inicial responsável pelo login do usuário no sistema. 

### /home/signup

Página que é responsável pelo cadastro do usuário para acessar o sistema.

### /user/admin

Página quee exibirá as fotos do usuário se houver.

Trocar 'admin' pelo nome de outro usuário, se houver, acessa o perfil deste outro.

### /p/add

Rota que permitirá o usuário escolher uma foto, adicionar uma descrição e permitir que haja comentário na foto.

### /not-found

Esta rota será exibida somente quando o usuário tentar passar uma rota inválida.

