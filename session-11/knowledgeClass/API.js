// Classe ApiClient
class ApiClient {
    // Método fetchData que retorna uma Promise
    fetchData() {
        return new Promise((resolve, reject) => {
            // Simula uma chamada API com um atraso de 2 segundos
            setTimeout(() => {
                const sucesso = true; // Simula se a chamada foi bem-sucedida
                if (sucesso) {
                    resolve("Dados recebidos com sucesso!");
                } else {
                    reject("Erro ao buscar dados.");
                }
            }, 2000); // 2 segundos de atraso
        });
    }
}

// Função assíncrona para consumir o método fetchData
async function consumirApi() {
    const client = new ApiClient(); // Cria uma instância de ApiClient
    try {
        console.log("Buscando dados...");
        const dados = await client.fetchData(); // Aguarda a resolução da Promise
        console.log(dados); // Exibe os dados recebidos
    } catch (erro) {
        console.error(erro); // Captura erros, se houver
    }
}

// Chamando a função para testar
consumirApi();