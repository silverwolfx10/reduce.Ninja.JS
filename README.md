### $reduce

Aplica uma função de contra um acumulador e cada valor da matriz (a partir da esquerda para a direita) para a reduzir a um único valor

```javascript
this.Ninja(['$add', '$reduce'], function ($add, $reduce) {
  console.log($reduce([1, 2, 3], 0, $add));
});
```
