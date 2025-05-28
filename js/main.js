async function Login() {
  // 1Captura o nome do país digitado
  const input = document.getElementById("pais");
  const nomeDoPais = input.value.trim();

  // Verifica se está vazio
  if (!nomeDoPais) {
    alert("Por favor, digite o nome de um país.");
    return;
  }

  // URl
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(nomeDoPais)}?fullText=true`;

  try {
    // Faz a requisição para a API
    const resposta = await fetch(url);
    
    if (!resposta.ok) {
      throw new Error("País não encontrado");
    }

    const dados = await resposta.json();
    const pais = dados[0]; //pegando o primeiro resultado

    // Atualiza os campos do HTML com os dados recebidos
    document.getElementById("nome").textContent = pais.name.common;
    document.getElementById("oficial").textContent = pais.name.official;
    document.getElementById("capital").textContent = pais.capital?.[0] || "N/A";
    document.getElementById("regiao").textContent = pais.region;
    document.getElementById("sub_regiao").textContent = pais.subregion;
    document.getElementById("populacao").textContent = pais.population.toLocaleString();
    document.getElementById("area").textContent = pais.area.toLocaleString();
    document.getElementById("idioma").textContent = Object.values(pais.languages || {}).join(", ");
    document.getElementById("fuso_horario").textContent = pais.timezones?.[0] || "N/A";
    document.getElementById("moeda").textContent = Object.values(pais.currencies || {})
      .map(m => `${m.name} (${m.symbol})`)
      .join(", ");
    document.getElementById("bandeira").src = pais.flags.svg;
  } catch (erro) {
    alert("Erro: " + erro.message);
  }
}
