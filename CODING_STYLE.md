## Criação de branch:

feature/nomeDaFeature

commit:
pra cada criação de uma funcionalidade:
-> "feat: criei um nova função"

pra correção de bugs:
-> "fix: corrigi esse bug"

-> git clone -b develop git@gitlab.com:emanuel-jose/kenziehub.git

## Padronização do código:

-> arrow functions
-> import/export
-> no-var, usar let ou const
-> sem ponto e virgula no final da linha
-> criação de nome de pastas = camel case, os nomes inglês
-> as variações e funções tbm em inglês, camel case
-> componentes com a primeira letra maiuscula
-> nas requisições usar async await
-> usar um arquivo actionType para deixar default os types da action
-> reducer: nome da função é nome da pasta + reducer
-> action > type: @ + nome do modulo + / + nome da ação
-> action: nome da função coerente.
-> thunk: pegar o nome da action + thunk
-> comentantario na função sobre o que ela faz e oq ue retorna.
