---
id: batch
title: batch
sidebar_label: batch()
hide_title: true
---

# `batch()`

```js
batch((fn: Function))
```

A API `unstable_batchedUpdates ()` do React permite que qualquer atualização do React em um tick de loop de evento seja agrupada em uma única passagem de renderização. O React já usa isso internamente para seus próprios retornos de chamada do manipulador de eventos. Essa API é, na verdade, parte dos pacotes de renderização como ReactDOM e React Native, não o núcleo do React em si.

Como o React-Redux precisa funcionar nos ambientes ReactDOM e React Native, cuidamos da importação dessa API do renderizador correto no momento da construção para nosso próprio uso. Agora também reexportamos esta função publicamente, renomeada para `batch ()`. Você pode usá-la para garantir que várias actions despachadas fora do React resultem apenas em uma única atualização de renderização, como esta:

```js
import { batch } from 'react-redux'

function myThunk() {
  return (dispatch, getState) => {
// só deve resultar em uma re-renderização combinada, não duas
    batch(() => {
      dispatch(increment())
      dispatch(increment())
    })
  }
}
```

## Referências

- [`unstable_batchedUpdates()` API do React](https://github.com/facebook/react/commit/b41883fc708cd24d77dcaa767cde814b50b457fe)
