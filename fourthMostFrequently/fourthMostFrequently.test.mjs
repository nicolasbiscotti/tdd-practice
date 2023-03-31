import {expect} from "chai";
import {fourthMostFrequently} from "./fourthMostFrequently.mjs";

/*  Armar una funcion que reciba un String por parametro y encuentre el cuarto caracter que mas se repite.
    Caso que sea mas de uno retornar cualquiera. En caso de que no haya 4 caracteres distintos o mas retornar null
    Ejemplo:
      ATBBBBBBBBBBAADERTTTDDWWEMTAAAA -> D //Con 3 apariciones, queda atras de B (#1), A (#2) y T (#3)
      AAAACCAAYY -> null
*/
describe("most frequently test", function () {
  it('should return null for 0 length string', function() {
    function numberOfDifferentCharacters(stringToAnalyze) {
      if (stringToAnalyze === '') {
        return 0;
      }
    }
    expect(fourthMostFrequently('', numberOfDifferentCharacters)).to.equal(null);
  });

  it('should return null for 3 different character string', function() {
    function numberOfDifferentCharacters(stringToAnalyze) {
      if (stringToAnalyze === 'abc') {
        return 3;
      }
    }
    expect(fourthMostFrequently('abc', numberOfDifferentCharacters)).to.equal(null);
  });

  it('should return not null for 4 different character string', function() {
    function numberOfDifferentCharacters(stringToAnalyze) {
      if (stringToAnalyze === 'abcd') {
        return 4;
      }
    }
    expect(fourthMostFrequently('abcd', numberOfDifferentCharacters, () => ['A'])).to.not.equal(null);
  });

  it('should return D for ABCD', function() {
    function diffCharacters() {
      return 4;
    }
    function orderByOccurrence(inputString, order) {
      if (inputString === 'ABCD' && order === 'desc') {
        return ['A', 'B', 'C', 'D'];
      }
    }

    expect(fourthMostFrequently('ABCD', diffCharacters, orderByOccurrence)).to.equal('D');
  });


});
