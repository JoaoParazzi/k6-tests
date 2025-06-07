# 🧪 Testes de Performance com K6

Este repositório contém diversos tipos de testes de carga desenvolvidos com o [K6](https://k6.io/), uma ferramenta de código aberto para testes de performance. A estrutura é modular e organizada para facilitar a manutenção e expansão dos testes.

## 📁 Estrutura de Pastas

K6/
├── helpers/
│ └── data_driven_test.js # Exemplo de teste orientado a dados (CSV/JSON)
├── load.js # Teste de carga padrão
├── performance.js # Teste focado em performance de APIs
├── smoke.js # Teste rápido para validar estabilidade inicial
├── soak.js # Teste de longa duração (soak test)
├── spike.js # Teste de picos de carga
├── stress.js # Teste de estresse com aumento progressivo de usuários
├── utilizando_helper.js # Exemplo de uso de helpers externos



## 🚀 Executando um teste

Você pode rodar qualquer script com o seguinte comando:

```bash
k6 run nome-do-arquivo.js
Exemplo:

```bash
k6 run load.js
Certifique-se de ter o K6 instalado. Se ainda não tiver:


```bash
Copiar
Editar
brew install k6     # macOS
choco install k6    # Windows
sudo apt install k6 # Linux (Debian-based)

🧩 Helpers
O arquivo helpers/data_driven_test.js serve como utilitário para realizar testes orientados a dados, e pode ser reutilizado em diferentes cenários. Já o utilizando_helper.js mostra na prática como importar e usar os helpers nos scripts principais.

📌 Tipos de Testes Inclusos
Smoke Test: Validação rápida da saúde do sistema.

Load Test: Mede o desempenho sob carga esperada.

Stress Test: Avalia o limite do sistema aumentando a carga progressivamente.

Spike Test: Verifica como o sistema lida com aumentos repentinos de carga.

Soak Test: Mede a estabilidade ao longo do tempo com carga constante.

Performance Test: Avalia o tempo de resposta sob condições normais.

Data Driven Test: Executa testes baseados em conjuntos de dados externos.