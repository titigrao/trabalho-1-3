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


const paragrafo = document.createElement('p')

paragrafo.classList.add('graficos--container__texto')

paragrafo.innerHTML = `Está é uma pesquisa do IBGE com o foco em ${tipo_dados}`


const container = document.getElementById('graficos--container')

container.appendChild(paragrafo)