// Função para gerar a frase criativa utilizando a API do ChatGPT
document.getElementById('generate-button').addEventListener('click', async () => {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // Substitua 'YOUR_API_KEY' pela sua chave da API do OpenAI
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: 'Crie uma história aleatória e sem sentido que seja um desafio criativo para resolver. Exemplo: "Um astronauta encontra uma pizza flutuando no espaço. O que ele faz?"',
            max_tokens: 150
        })
    });

    const data = await response.json();
    const story = data.choices[0].text.trim();
    document.getElementById('story').innerText = story;
});
