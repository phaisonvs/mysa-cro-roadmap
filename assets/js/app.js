const tasks = [{"id": "CRO-001", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison", "tarefa": "Capturar baseline (conversão, mapa de calor, tráfego Home Metais/Louças/Pisos, vitrines)", "tipo": "Correção", "prio": "Alta", "status": "Backlog", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Pré-requisito para medir ganho das mudanças"}, {"id": "CRO-002", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Criar branch da nova Home (banners, carrossel categorias, tarja benefícios, ordenamento)", "tipo": "Evolução", "prio": "Alta", "status": "Backlog", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Base do Capítulo 2 — depende das peças do Design (DES-01)"}, {"id": "CRO-003", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison", "tarefa": "Tracking - continuidade da baseline", "tipo": "Correção", "prio": "Alta", "status": "Backlog", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": null}, {"id": "CRO-004", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Revisão fluxo de carrinho abandonado (3 mensagens) - dev/tech", "tipo": "Evolução", "prio": "Alta", "status": "Backlog", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Integra com CRM-Fluxo1"}, {"id": "CRO-005", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Roda", "tarefa": "Recuperação de pagamentos não finalizados - dev/tech", "tipo": "Evolução", "prio": "Alta", "status": "Backlog", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Integra com CRM-Rec.Pagamentos"}, {"id": "CRO-006", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison", "tarefa": "Revisão captação de lead (PDP sem estoque, 1ª compra, Local Pages, Newsletter)", "tipo": "Melhoria", "prio": "Alta", "status": "Backlog", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": null}, {"id": "CRO-007", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Variante de PDP para produto indisponível", "tipo": "Melhoria", "prio": "Alta", "status": "Backlog", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": null}, {"id": "CRO-008", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Recomendação de similares, complementares e substitutos", "tipo": "Evolução", "prio": "Alta", "status": "Backlog", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Chave p/ ruptura de metais"}, {"id": "CRO-009", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Vitor", "tarefa": "Regionalização de preços", "tipo": "Evolução", "prio": "Alta", "status": "Backlog", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": null}, {"id": "CRO-010", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Roda", "tarefa": "Split / multi-frete no checkout", "tipo": "Evolução", "prio": "Alta", "status": "Backlog", "ciclo": "C34", "start": "2026-08-17", "end": "2026-08-21", "obs": "Crítico p/ metais (peça leve) x pesados"}, {"id": "ECOM-01", "frente": "Ecom - ECOM", "area": "ECOM", "resp": "Fellipe Oliveira", "tarefa": "Carrossel de mini banner de destaque", "tipo": "Melhoria", "prio": "Alta", "status": "Em andamento", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": null}, {"id": "ECOM-02", "frente": "Ecom - ECOM", "area": "ECOM", "resp": "Fellipe Oliveira", "tarefa": "Parcelamento do produto visível ao lado do preço (sem clique)", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Quick win de conversão"}, {"id": "ECOM-03", "frente": "Ecom - ECOM", "area": "ECOM", "resp": "Fellipe Oliveira + Vitor", "tarefa": "Revisitar ordenação de produtos (relevância)", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": null}, {"id": "ECOM-04", "frente": "Ecom - ECOM", "area": "ECOM", "resp": "Fellipe Oliveira", "tarefa": "Revisitar tags de produto", "tipo": "Melhoria", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": null}, {"id": "ECOM-05", "frente": "Ecom - ECOM", "area": "ECOM", "resp": "Fellipe Oliveira + Matheus Furlani", "tarefa": "Landing pages com cupons especiais", "tipo": "Melhoria", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Peças gráficas: DES-07"}, {"id": "ECOM-06", "frente": "Ecom - ECOM", "area": "ECOM", "resp": "Fellipe Oliveira", "tarefa": "Imagens de produto (projeto com Matheus Guilherme)", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": null}, {"id": "CRO-I01", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Evoluir vitrine de fabricantes de Metais (Docol Preços Imperdíveis / Leroy Merlin)", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Vitrine-chave da estratégia de Metais — peças: DES-03"}, {"id": "CRO-I02", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Vitor", "tarefa": "Estudar viabilidade de frete grátis acima de R$X", "tipo": "Ideia", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Pré-requisito da vitrine de frete grátis"}, {"id": "CRO-I03", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Vitrine de frete grátis", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Depende de CRO-I02 e DES-04"}, {"id": "CRO-I04", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison", "tarefa": "Página de cupons (repaginar e destacar na Home)", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Peças: DES-06"}, {"id": "CRO-I05", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Tarja de benefícios abaixo do banner principal", "tipo": "Ideia", "prio": "Alta", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Quick win - baixa complexidade — peças: DES-01"}, {"id": "CRO-I06", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Eduardo", "tarefa": "Cupom primeira compra: avaliar mudança para 10%", "tipo": "Ideia", "prio": "Alta", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Coordenar com CRM"}, {"id": "CRO-I07", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Banner com ofertas da semana / retirar Móveis do menu suspenso", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Peças: DES-05"}, {"id": "CRO-I08", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Evoluir categoria de Metais (submenus tipo pisos/revestimentos)", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C34", "start": "2026-08-17", "end": "2026-08-21", "obs": null}, {"id": "CRO-I09", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Outlet ABC (alto estoque x sem saída x preço por volume)", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C35", "start": "2026-08-24", "end": "2026-08-28", "obs": "Conecta com curva C/estoque parado — peças: DES-08"}, {"id": "CRO-I10", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "Parcelamento explícito na PDP + tag de promoção (De/Por)", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Peças: DES-09"}, {"id": "CRO-I11", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Eduardo", "tarefa": "Cashback / gatilho de retorno (CRM sem compra 90 dias)", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C36", "start": "2026-08-31", "end": "2026-09-04", "obs": "Junto com CRM Fluxo 4"}, {"id": "CRO-I12", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Eduardo", "tarefa": "CRM de novidades / alinhar pré-lançamento com comercial", "tipo": "Ideia", "prio": "Baixa", "status": "Pendente", "ciclo": "C36", "start": "2026-08-31", "end": "2026-09-04", "obs": null}, {"id": "CRO-I13", "frente": "Ecom - CRO", "area": "CRO", "resp": "Phaison + Wicomm", "tarefa": "POC Compra Rápida", "tipo": "Melhoria", "prio": "Alta", "status": "Em andamento", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": null}, {"id": "SEO-01", "frente": "Ecom - SEO", "area": "SEO", "resp": "Matheus Furlani", "tarefa": "Mapeamento de redirects para nova categorização", "tipo": "Evolução", "prio": "Alta", "status": "Em andamento", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Crítico - Wake Casa Dexco já perdeu SEO nisso"}, {"id": "SEO-02", "frente": "Ecom - SEO", "area": "SEO", "resp": "Matheus Furlani", "tarefa": "Estudo de palavras-chave e canibalização para mídia paga", "tipo": "Evolução", "prio": "Alta", "status": "Em andamento", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Input direto p/ Capítulo 3 (Shopping/PMax)"}, {"id": "SEO-03", "frente": "Ecom - SEO", "area": "SEO", "resp": "Matheus Furlani", "tarefa": "Elaboração de relatório", "tipo": "Evolução", "prio": "Média", "status": "Em andamento", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": null}, {"id": "SEO-04", "frente": "Ecom - SEO", "area": "SEO", "resp": "Matheus Furlani", "tarefa": "Análise de tráfego", "tipo": "Evolução", "prio": "Média", "status": "Em andamento", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": null}, {"id": "SEO-05", "frente": "Ecom - SEO", "area": "SEO", "resp": "Matheus Furlani", "tarefa": "Inclusão de conteúdo", "tipo": "Evolução", "prio": "Média", "status": "Em andamento", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": null}, {"id": "CRM-01", "frente": "Ecom - CRM", "area": "CRM", "resp": "Eduardo", "tarefa": "Fluxo 1 - Carrinho Abandonado (3 mensagens escalonadas)", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Integra com CRO-004"}, {"id": "CRM-02", "frente": "Ecom - CRM", "area": "CRM", "resp": "Eduardo", "tarefa": "Fluxo Recuperação de Pagamentos - nova jornada", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Integra com CRO-005"}, {"id": "CRM-03", "frente": "Ecom - CRM", "area": "CRM", "resp": "Eduardo", "tarefa": "Fluxo 2 - Pós-Compra / Cross-sell de projeto", "tipo": "Evolução", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": null}, {"id": "CRM-04", "frente": "Ecom - CRM", "area": "CRM", "resp": "Eduardo", "tarefa": "Fluxo 3 - Onboarding 1ª compra", "tipo": "Evolução", "prio": "Média", "status": "Pendente", "ciclo": "C34", "start": "2026-08-17", "end": "2026-08-21", "obs": null}, {"id": "CRM-05", "frente": "Ecom - CRM", "area": "CRM", "resp": "Eduardo", "tarefa": "Fluxo 4 - Reativação 90+ dias", "tipo": "Evolução", "prio": "Média", "status": "Pendente", "ciclo": "C35", "start": "2026-08-24", "end": "2026-08-28", "obs": "Integra com CRO-I11"}, {"id": "CRM-06", "frente": "Ecom - CRM", "area": "CRM", "resp": "Eduardo", "tarefa": "Fluxo 5 - Régua de Entrega + NPS", "tipo": "Evolução", "prio": "Baixa", "status": "Pendente", "ciclo": "C36", "start": "2026-08-31", "end": "2026-09-04", "obs": null}, {"id": "DES-01", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Banners da nova Home (topo, carrossel de categorias, tarja de benefícios)", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Alimenta CRO-002 e CRO-I05 — entregar em até 2 dias p/ não travar dev"}, {"id": "DES-02", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Mini banners N2 Metais — Acabamentos, Duchas Higiênicas, Ralos e Grelhas, Registros e Bases", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Hoje só 'Torneiras' tem mini banner (achado do mapeamento de navegação)"}, {"id": "DES-03", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Banner da vitrine de fabricantes de Metais (Docol Preços Imperdíveis / Leroy Merlin)", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Alimenta CRO-I01 (C32)"}, {"id": "DES-04", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa) + Phaison", "tarefa": "Banner/selo da vitrine de frete grátis", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Alimenta CRO-I03 (C33) — depende do resultado do estudo CRO-I02"}, {"id": "DES-05", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Banner de ofertas da semana", "tipo": "Melhoria", "prio": "Média", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Alimenta CRO-I07 (C32)"}, {"id": "DES-06", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Arte da página de cupons repaginada", "tipo": "Melhoria", "prio": "Média", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Alimenta CRO-I04 (C33)"}, {"id": "DES-07", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Peças gráficas das landing pages promocionais", "tipo": "Evolução", "prio": "Média", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Alimenta ECOM-05 (C33)"}, {"id": "DES-08", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Selo 'Últimas Unidades' / desconto progressivo (Outlet ABC)", "tipo": "Melhoria", "prio": "Média", "status": "Pendente", "ciclo": "C34", "start": "2026-08-17", "end": "2026-08-21", "obs": "Alimenta CRO-I09 (C35)"}, {"id": "DES-09", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Tag de promoção (De/Por) para PDP com parcelamento explícito", "tipo": "Melhoria", "prio": "Baixa", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Alimenta CRO-I10 (C33)"}, {"id": "DES-10", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Peças de posicionamento 'especialista em Metais' (banners institucionais)", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C31", "start": "2026-07-27", "end": "2026-07-31", "obs": "Ancoragem visual do Capítulo 1 — frete leve/rápido em Metais"}, {"id": "DES-11", "frente": "Ecom - Design", "area": "DESIGN", "resp": "Design (Mysa)", "tarefa": "Peças gráficas dos kits/bundles de Metais (arte de vitrine e PDP)", "tipo": "Evolução", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Alimenta GRW-02"}, {"id": "GRW-01", "frente": "Ecom - Growth", "area": "GROWTH", "resp": "Fellipe Oliveira + Phaison", "tarefa": "Desconto PIX (5–8%) no checkout para SKUs de gap médio/alto", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Reduz preço efetivo sem mudar preço público/comparador"}, {"id": "GRW-02", "frente": "Ecom - Growth", "area": "GROWTH", "resp": "Fellipe Oliveira + Design (Mysa)", "tarefa": "Kits/bundles de Metais (torneira+arejador, registro+acabamento, ducha+kit instalação)", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Sai do comparador 1:1 do Shopping — peças: DES-11"}, {"id": "GRW-03", "frente": "Ecom - Growth", "area": "GROWTH", "resp": "Vitor + Phaison", "tarefa": "Realocar mídia dos SKUs de gap alto para fora do Shopping/PMax (Search de marca, Display remarketing)", "tipo": "Melhoria", "prio": "Alta", "status": "Pendente", "ciclo": "C32", "start": "2026-08-03", "end": "2026-08-07", "obs": "Evita comparação direta de preço nos SKUs sem condição de competir hoje"}, {"id": "GRW-04", "frente": "Ecom - Growth", "area": "GROWTH", "resp": "Phaison + Comercial", "tarefa": "Diferenciação de SKU/variante para reduzir exact-match no comparador de preço", "tipo": "Ideia", "prio": "Média", "status": "Pendente", "ciclo": "C34", "start": "2026-08-17", "end": "2026-08-21", "obs": "Depende de alinhamento com fornecedor"}, {"id": "GRW-05", "frente": "Ecom - Growth", "area": "GROWTH", "resp": "Eduardo + Phaison", "tarefa": "Programa Trade/Pro fechado — cadastro de profissional com desconto/cashback via CRM", "tipo": "Evolução", "prio": "Alta", "status": "Pendente", "ciclo": "C34", "start": "2026-08-17", "end": "2026-08-21", "obs": "Preserva preço público; desconto só aparece após login"}, {"id": "GRW-06", "frente": "Ecom - Growth", "area": "GROWTH", "resp": "Matheus Furlani", "tarefa": "Conteúdo de intenção pré-comparação ('qual torneira/registro escolher')", "tipo": "Melhoria", "prio": "Média", "status": "Pendente", "ciclo": "C33", "start": "2026-08-10", "end": "2026-08-14", "obs": "Captura decisão antes do cliente abrir o comparador de preço"}];

const rangeStart = new Date("2026-07-27");
const rangeEnd = new Date("2026-09-04");
const totalDays = (rangeEnd - rangeStart) / 86400000 + 1;

const areaOrder = ["CRO", "ECOM", "SEO", "CRM", "DESIGN", "GROWTH"];
const areaLabels = {
  CRO: "CRO (Phaison / Wicomm)",
  ECOM: "ECOM (Fellipe Oliveira)",
  SEO: "SEO (Matheus Furlani)",
  CRM: "CRM (Eduardo)",
  DESIGN: "Design / Peças Gráficas (Design · Mysa)",
  GROWTH: "Growth Hacks — Metais (cross-funcional)"
};

let activeFilter = "ALL";
const expandedIds = new Set();

function dayOffset(dateValue) {
  return (new Date(dateValue) - rangeStart) / 86400000;
}

function toggleExpand(id) {
  if (expandedIds.has(id)) {
    expandedIds.delete(id);
  } else {
    expandedIds.add(id);
  }

  render();
}

function render() {
  document.getElementById("counttxt").textContent =
    `${tasks.length} tarefas ativas (CRO, ECOM, SEO, CRM, Design, Growth)`;

  const chart = document.getElementById("chart");
  chart.innerHTML = "";

  const cycles = [31, 32, 33, 34, 35, 36];
  const cyclehead = document.createElement("div");
  cyclehead.className = "cyclehead";

  cycles.forEach((cycle) => {
    const item = document.createElement("div");
    item.innerHTML = `C${cycle}<small>${cycleDateLabel(cycle)}</small>`;
    cyclehead.appendChild(item);
  });

  chart.appendChild(cyclehead);

  areaOrder.forEach((area) => {
    const items = tasks.filter(
      (task) => task.area === area && (activeFilter === "ALL" || activeFilter === area)
    );

    if (items.length === 0) {
      return;
    }

    const group = document.createElement("div");
    group.className = "group";

    const title = document.createElement("div");
    title.className = "group-title";
    title.innerHTML = `<span>${areaLabels[area]}</span><span>${items.length} tarefas</span>`;
    group.appendChild(title);

    items.forEach((task) => {
      const row = document.createElement("div");
      row.className = "row";

      const isExpanded = expandedIds.has(task.id);

      const label = document.createElement("div");
      label.className = `rowlabel${isExpanded ? " expanded" : ""}`;
      label.innerHTML =
        `<b>${task.id}</b> · ${task.tarefa}<span class="expand-icon">${isExpanded ? "▲" : "▼"}</span>` +
        `<div class="obs">Responsável: ${task.resp} · Tipo: ${task.tipo} · Prioridade: ${task.prio}` +
        `${task.obs ? `<br>Obs: ${task.obs}` : ""}</div>`;
      label.addEventListener("click", () => toggleExpand(task.id));
      row.appendChild(label);

      const track = document.createElement("div");
      track.className = "track";

      const left = (dayOffset(task.start) / totalDays) * 100;
      const width = Math.max(((dayOffset(task.end) - dayOffset(task.start) + 1) / totalDays) * 100, 3);

      const bar = document.createElement("div");
      bar.className = `bar status-${task.status.replace(" ", "-")}`;
      bar.style.left = `${left}%`;
      bar.style.width = `${width}%`;
      bar.textContent = task.ciclo;
      bar.addEventListener("click", () => toggleExpand(task.id));

      bar.addEventListener("mousemove", (event) => {
        const tip = document.getElementById("tooltip");
        tip.style.display = "block";
        tip.style.left = `${Math.min(event.clientX + 14, window.innerWidth - 360)}px`;
        tip.style.top = `${event.clientY + 14}px`;
        tip.innerHTML =
          `<b>${task.id}</b> — ${task.tarefa}` +
          `<br>Responsável: ${task.resp}` +
          `<br>Tipo: ${task.tipo} · Prioridade: ${task.prio}` +
          `<br>Status: ${task.status} · ${task.ciclo} (${fmt(task.start)} a ${fmt(task.end)})` +
          `${task.obs ? `<br>Obs: ${task.obs}` : ""}` +
          "<br><i>(clique para fixar a leitura completa)</i>";
      });

      bar.addEventListener("mouseleave", () => {
        document.getElementById("tooltip").style.display = "none";
      });

      track.appendChild(bar);
      row.appendChild(track);
      group.appendChild(row);
    });

    chart.appendChild(group);
  });
}

function fmt(iso) {
  const date = new Date(iso);
  return `${String(date.getUTCDate()).padStart(2, "0")}/${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

function cycleDateLabel(cycle) {
  const map = {
    31: "27/07–31/07",
    32: "03/08–07/08",
    33: "10/08–14/08",
    34: "17/08–21/08",
    35: "24/08–28/08",
    36: "31/08–04/09"
  };

  return map[cycle];
}

function buildFilters() {
  const filters = document.getElementById("filters");
  const options = [
    ["ALL", "Todas as frentes"],
    ["CRO", "CRO"],
    ["ECOM", "ECOM"],
    ["SEO", "SEO"],
    ["CRM", "CRM"],
    ["DESIGN", "Design"],
    ["GROWTH", "Growth"]
  ];

  options.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.className = `chip${value === activeFilter ? " active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      activeFilter = value;
      document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      render();
    });
    filters.appendChild(button);
  });
}

function enableDragScroll() {
  const wrap = document.getElementById("wrap");
  let isDown = false;
  let startX;
  let scrollLeft;

  wrap.addEventListener("mousedown", (event) => {
    isDown = true;
    wrap.classList.add("dragging");
    startX = event.pageX - wrap.offsetLeft;
    scrollLeft = wrap.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    wrap.classList.remove("dragging");
  });

  wrap.addEventListener("mouseleave", () => {
    isDown = false;
    wrap.classList.remove("dragging");
  });

  wrap.addEventListener("mousemove", (event) => {
    if (!isDown) {
      return;
    }

    event.preventDefault();
    const x = event.pageX - wrap.offsetLeft;
    const walk = x - startX;
    wrap.scrollLeft = scrollLeft - walk;
  });

  wrap.addEventListener(
    "touchstart",
    (event) => {
      isDown = true;
      startX = event.touches[0].pageX - wrap.offsetLeft;
      scrollLeft = wrap.scrollLeft;
    },
    { passive: true }
  );

  wrap.addEventListener("touchend", () => {
    isDown = false;
  });

  wrap.addEventListener(
    "touchmove",
    (event) => {
      if (!isDown) {
        return;
      }

      const x = event.touches[0].pageX - wrap.offsetLeft;
      const walk = x - startX;
      wrap.scrollLeft = scrollLeft - walk;
    },
    { passive: true }
  );
}

buildFilters();
render();
enableDragScroll();
