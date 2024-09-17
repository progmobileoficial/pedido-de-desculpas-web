let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
    currentStep = step;
}

function showMensagem() {
    const nome = document.getElementById('nome').value.trim();
    const nomeMulher = document.getElementById('nomeMulher').value.trim();
    const motivo = document.getElementById('motivo').value.trim();
    const sentimentos = document.getElementById('sentimentos').value.trim();
    const mensagemDiv = document.getElementById('mensagem');

    if (nome && nomeMulher && motivo && sentimentos) {
        const mensagem = `Querida ${nomeMulher},\n\nEu quero te pedir desculpas do fundo do meu coração. Sei que ${motivo}, e isso me faz sentir ${sentimentos}. Não era a minha intenção te magoar. Prometo que vou me esforçar para melhorar e fazer o possível para que isso não se repita.\n\nEu te amo muito e espero que possamos superar isso juntos.\n\nCom carinho, ${nome}`;
        
        mensagemDiv.innerText = mensagem;
        document.getElementById('step4').classList.remove('active');
        document.getElementById('step5').classList.add('active');
        
        // Adiciona o botão "Aperte aqui" dinamicamente
        const step5 = document.getElementById('step5');
        const button = document.createElement('button');
        button.innerText = 'Aperte aqui';
        button.onclick = showToWoman;
        step5.appendChild(button);
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function showToWoman() {
    const container = document.querySelector('.container');
    const heartsContainer = document.querySelector('.hearts-container');

    // Remover corações existentes
    document.querySelectorAll('.heart').forEach(heart => heart.remove());

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = `${Math.random() * 90}%`;
        heartsContainer.appendChild(heart);
    }

    // Remove o botão "Aperte aqui"
    document.getElementById('step5').querySelector('button').style.display = 'none';

    document.getElementById('result').classList.add('active');
}

function restart() {
    // Remover corações existentes
    document.querySelectorAll('.heart').forEach(heart => heart.remove());

    // Limpar o conteúdo do step5 e garantir que o botão "Aperte aqui" seja removido
    const step5 = document.getElementById('step5');
    step5.innerHTML = ''; // Limpa o conteúdo

    document.getElementById('result').classList.remove('active');
    document.getElementById('step1').classList.add('active');
    document.getElementById('nome').value = '';
    document.getElementById('nomeMulher').value = '';
    document.getElementById('motivo').value = '';
    document.getElementById('sentimentos').value = '';
    currentStep = 1;
}

// Inicializa o passo 1
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('step1').classList.add('active');
});
