// DENTRO DE script.js

/**
 * Função para alternar a visualização entre as telas do SPA (Dashboard, Teste, Config, Alertas)
 */
function switchView(viewId) {
    // 1. Esconde todas as views (toda div que termina com "-view")
    document.querySelectorAll('[id$="-view"]').forEach(view => {
        view.classList.add('view-hidden');
        view.classList.remove('view-active');
    });

    // 2. Mostra a view solicitada
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.remove('view-hidden');
        targetView.classList.add('view-active');
    }
}

/**
 * Simula a função de logout e redireciona para a tela de login (index.html).
 */
function logout() {
    console.log('Usuário deslogado. Redirecionando para a tela de login.');
    window.location.href = 'index.html'; 
}

// Inicializa no dashboard-view ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Garante que a tela principal esteja ativa ao carregar o dashboard
    switchView('dashboard-view');
    
    // Simula a função de envio de dados de teste (Apenas para feedback visual)
    const form = document.getElementById('manual-data-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Dados de teste enviados com sucesso (Simulado)!');
        });
    }
    
    // Simula o carregamento de cenários (Apenas para feedback visual)
    document.querySelectorAll('.scenario-card .btn').forEach(button => {
        button.addEventListener('click', function() {
            const scenarioName = this.closest('.scenario-card').querySelector('h5').textContent;
            alert(`Cenário "${scenarioName}" carregado (Simulado).`);
        });
    });
    
    // Simula o salvamento de configurações
    const configForm = document.getElementById('config-view').querySelector('.d-grid .btn-lg');
    if (configForm) {
        configForm.addEventListener('click', function(e) {
             e.preventDefault();
             alert('Configurações salvas com sucesso (Simulado)!');
        });
    }
});