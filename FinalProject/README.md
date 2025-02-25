Un30 Recipes 

API(TastyAPI) = https://rapidapi.com/apidojo/api/tasty

CLI para passsar como argumento um igrediente e va buscar a API receitas com esse argumento.

utilizei o code Snippet da propria API para testar e perceber como funciona.

atualizei o codigo para ECMASCRIPT 6.

depois de perceber como mostrar as receitas, devolvia me 20 receitas

mas decidi que não seria necessario muitas receitas,

dentro da API consigo alterar os query Params, então alterei o size para 5

mostrar apenas 5 receitas, com tags de UNDER 30 MIN.

precisará da biblioteca axios para fazer as requisições HTTP.

agora pensei em salvar as receitas quando o argumento --save for passado, em escrevelas em um ficheiro .MD

