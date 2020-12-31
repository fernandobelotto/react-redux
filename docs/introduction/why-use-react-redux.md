---
id: why-use-react-redux
title: Por que usar React Redux?
hide_title: true
sidebar_label: Por que usar React Redux?
---

# Por que usar React Redux?

O próprio Redux é uma biblioteca independente que pode ser usada com qualquer estrutura ou camada de UI, incluindo React, Angular, Vue, Ember e vanilla JS. Embora Redux e React sejam comumente usados ​​juntos, eles são independentes um do outro.

Se você estiver usando Redux com qualquer tipo de estrutura de UI, normalmente usará uma biblioteca de "ligação de UI" para amarrar Redux com sua estrutura de UI, em vez de interagir diretamente com a loja a partir de seu código de UI.

**React Redux é a biblioteca oficial de ligação do React com o Redux**. Se estiver usando Redux e React juntos, você também deve usar React Redux para conectar essas duas bibliotecas.

Para entender por que você deve usar o React Redux, pode ser útil entender o que uma "biblioteca de vinculação de interface do usuário" faz.

> **Nota**: Se você tiver dúvidas sobre se deve usar Redux em geral, consulte estes artigos para uma discussão de quando e por que você pode querer usar Redux, e como ele deve ser usado:
>
> - [Redux docs: Motivation](https://redux.js.org/introduction/motivation)
> - [Redux docs: Perguntas Frequentes - Quando devo usar Redux?](https://redux.js.org/faq/general#when-should-i-use-redux)
> - [Você pode não precisar de redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
> - [Redux idiomático: o Tao do Redux, Part 1 - Implementação e Intenção](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)

## Integrando Redux com uma UI

Usar Redux com _qualquer_ camada de IU requer [o mesmo conjunto consistente de etapas](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html#/4):

1. Crie uma Redux store
2. Subscribe para atualizações
3. Dentro da callback de subscription:
   1. Obtenha o estado atual da store
   2. Extraia os dados necessários para esta parte da UI
   3. Atualize a UI com os dados
4. Se necessário, renderize a UI com o estado inicial
5. Respond to UI inputs by dispatching Redux actions

Embora seja possível escrever essa lógica à mão, isso se tornaria muito repetitivo. Além disso, otimizar o desempenho da IU exigiria uma lógica complicada.

O processo de assinatura da loja, verificação de dados atualizados e ativação de uma nova renderização pode ser mais genérico e reutilizável. **Uma biblioteca de ligação de IU como a React Redux lida com a lógica de interação coma a store, então você não precisa escrever esse código sozinho.**

> **Nota**: Para uma visão mais aprofundada de como React Redux funciona internamente e como ele lida com a interação com a loja para você, consulte **[Redux idiomático: a história e a implementação do React Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)**.

## Razões para usar o React Redux

### É a a biblioteca oficial de ligação do Redux para o React

Embora o Redux possa ser usado com qualquer camada da UI, ele foi originalmente projetado e destinado para ser usado com o React. Existem [camadas de ligação de UI para muitos outros frameworks](https://redux.js.org/introduction/ecosystem#library-integration-and-bindings), mas React Redux é mantido diretamente pela equipe do Redux.

Como é a biblioteca oficial do Redux para React, o React Redux é mantido atualizado com quaisquer alterações de API de qualquer uma das bibliotecas, para garantir que seus componentes do React se comportem conforme o esperado. O uso pretendido adota os princípios de design do React - escrevendo componentes declarativos.

### Ela incentiva a boa arquitetura React

Os componentes do React são muito parecidos com funções. Embora seja possível escrever todo o seu código em uma única função, geralmente é melhor dividir essa lógica em funções menores, cada uma com uma tarefa específica, tornando-as mais fáceis de entender.

Da mesma forma, embora você possa escrever grandes componentes React que lidam com muitas tarefas diferentes, geralmente é melhor dividir os componentes com base nas responsabilidades. Em particular, é comum ter componentes de "contêiner" que são responsáveis ​​por coletar e gerenciar algum tipo de dados e componentes de "apresentação" que simplesmente exibem a interface do usuário com base em quaisquer dados que receberam por props.

**The React Redux `connect` function generates "container" wrapper components that handle the process of interacting with the store for you**. That way, your own components can focus on other tasks, whether it be collecting other data, or just displaying a piece of the UI. In addition, **`connect` abstracts away the question of _which_ store is being used, making your own components more reusable**.

Como um princípio geral de arquitetura, **queremos manter nossos próprios componentes "inconscientes" do Redux**. Eles devem simplesmente receber dados e funções como parâmetros, assim como qualquer outro componente do React. Em última análise, isso torna mais fácil testar e reutilizar seus próprios componentes.

### Ela implementa otimizações de desempenho para você

O React é geralmente rápido, mas por padrão qualquer atualização de um componente fará com que o React renderize novamente todos os componentes dentro daquela parte da árvore de componentes. Isso exige trabalho e, se os dados de um determinado componente não foram alterados, provavelmente a nova renderização é um esforço desperdiçado porque a saída da IU solicitada seria a mesma.

Se o desempenho for uma preocupação, a melhor maneira de melhorar o desempenho é pular as novas renderizações desnecessárias, para que os componentes só sejam renderizados novamente quando seus dados forem realmente alterados. **A React Redux implementa muitas otimizações de desempenho internamente, de modo que seu próprio componente só é renderizado novamente quando realmente precisa.**

Além disso, ao conectar vários componentes em sua árvore de componentes React, você pode garantir que cada componente conectado extraia apenas as partes específicas de dados do estado de armazenamento que são necessárias para aquele componente. Isso significa que seu próprio componente precisará ser renderizado novamente com menos frequência, porque na maioria das vezes esses dados específicos não mudaram.

### Suporte da comunidade

Como a biblioteca de ligação oficial para React e Redux, React Redux tem uma grande comunidade de usuários. Isso torna mais fácil pedir ajuda, aprender sobre as melhores práticas, usar bibliotecas que se baseiam no React Redux e reutilizar seu conhecimento em diferentes aplicativos.

## Links e referências

### Compreendendo o React Redux

- [Redux idiomático: a história e a implementação do React Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)
- [`connect.js` Explicado](https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e)
- [slides do workshop Redux Fundamentals](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/)
  - [Integração de camada de UI](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html)
  - [Usando React Redux](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html)

### Recursos da comunidade

- Canal no Discord: [#redux no Reactiflux](https://discord.gg/0ZcbPKXt5bZ6au5t) ([Reactiflux link de convite](https://reactiflux.com))
- Stack Overflow tópicos: [Redux](https://stackoverflow.com/questions/tagged/redux), [React Redux](https://stackoverflow.com/questions/tagged/redux)
- Reddit: [/r/reactjs](https://www.reddit.com/r/reactjs/), [/r/reduxjs](https://www.reddit.com/r/reduxjs/)
- GitHub issues (relatórios de bugs e solicitações de recursos): https://github.com/reduxjs/react-redux/issues
- Tutoriais, artigos e outros recursos: [React/Redux Links](https://github.com/markerikson/react-redux-links)
