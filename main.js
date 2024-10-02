const url = "https://servicodados.ibge.gov.br/api/v3/agregados/1023/periodos/2008/variaveis/2602?localidades=N1[all]&classificacao=12966[120951]"

async function visualizarDados(){
  const res = await fetch(url)
  const dados = await res.json()
  regiao = 0
    tipo_dados = (dados[0]['variavel'])
  console.log(tipo_dados)

   resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
  resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])
  console.log(resultado_dados, resultado_regiao)
}
visualizarDados()


[
    {
      "id": "2602",
      "variavel": "Municípios que possuem instrumento legal regulador do serviço de esgotamento sanitário",
      "unidade": "Unidades",
      "resultados": [
        {
          "classificacoes": [
            {
              "id": "12966",
              "nome": "Tipo de instrumento legal regulador",
              "categoria": {
                "120951": "Total"
              }
            }
          ],
          "series": [
            {
              "localidade": {
                "id": "1",
                "nivel": {
                  "id": "N1",
                  "nome": "Brasil"
                },
                "nome": "Brasil"
              },
              "serie": {
                "2008": "1024"
              }
            }
          ]
        }
      ]
    }
  ]