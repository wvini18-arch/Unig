// Funções JS globais para inicializar gráficos e tabela
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/data/')
        .then(response => response.json())
        .then(data => {
            // Inicializa Gráfico 1
            new Chart(document.getElementById('grafico1'), {
                type: 'bar',
                data: {
                    labels: ['A', 'B', 'C', 'D'],
                    datasets: [{
                        label: 'Valores',
                        data: data.grafico1,
                        backgroundColor: '#1e90ff',
                    }]
                }
            });
            // Inicializa Gráfico 2
            new Chart(document.getElementById('grafico2'), {
                type: 'line',
                data: {
                    labels: ['A', 'B', 'C', 'D'],
                    datasets: [{
                        label: 'Valores',
                        data: data.grafico2,
                        borderColor: '#ff9800',
                        fill: false,
                    }]
                }
            });
            // Preenche tabela dinâmica
            const tbody = document.querySelector('#tabela tbody');
            tbody.innerHTML = '';
            data.tabela.forEach(item => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${item.nome}</td><td>${item.valor}</td>`;
                tbody.appendChild(tr);
            });
        });
});
