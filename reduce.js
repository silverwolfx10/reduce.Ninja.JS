/**
 * $reduce
 * 
 * Aplica uma função de contra um acumulador e cada valor da
 * matriz (a partir da esquerda para a direita) para a reduzir a um
 * único valor a funcao curry
 * 
 * @module $reduce
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $reduce([1, 2, 3], 0, $add);
 * 
 */
this.Ninja.module('$reduce', ['$curry'], function ($curry) {
  
  /**
   * Aplica uma função de contra um acumulador e cada valor da
   * matriz (a partir da esquerda para a direita) para a reduzir a um único valor
   * 
   * @public
   * @method reduce
   * @param {Array} a Array que sera reduzido
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} b Valor inicial
   * @param {Function} c Funcao predicado
   * @return {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} Valor reduzido
   * @example
   * 
   *        $reduce([1, 2, 3], 0, $add);
   * 
   */
  function reduce(a, b, c) {
    return a.reduce(c, b);
  }
  
  /**
   * Revelacao do servico $memoize, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(reduce);
  
});
