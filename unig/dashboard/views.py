from django.shortcuts import render
from django.http import JsonResponse

# View principal do dashboard
def dashboard_view(request):
	return render(request, 'dashboard.html')

# API que retorna dados para os gráficos
def api_data(request):
	# Exemplo de dados estáticos, substitua pelo seu modelo
	dados = {
		'grafico1': [10, 20, 30, 40],
		'grafico2': [5, 15, 25, 35],
		'tabela': [
			{'nome': 'João', 'valor': 100},
			{'nome': 'Maria', 'valor': 200},
			{'nome': 'Pedro', 'valor': 150},
		]
	}
	return JsonResponse(dados)

# Create your views here.
