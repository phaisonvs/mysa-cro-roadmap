const tasks = [
  {
    id: "CRO-001",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    tarefa: "Capturar baseline da Home, categorias e checkout",
    programa: "Teste A/B da Home Variante",
    kpi: "Cobertura de Eventos de Tracking",
    tipo: "Análise",
    prio: "Baixa",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Registrar o cenário atual antes da exposição da variante, considerando:
1. taxa de conversão global;
2. mapa de calor;
3. cliques nos banners;
4. tráfego da Home para Metais, Louças e Pisos;
5. engajamento com vitrines;
6. avanço para PDP;
7. adição ao carrinho;
8. abandono de carrinho;
9. abandono de checkout;
10. pagamentos iniciados e não finalizados.

A baseline será a referência para comparar o comportamento do grupo de controle e da variante.`,
    obs: "Base para medir o impacto da Nova Home."
  },
  {
    id: "CRO-002",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    tarefa: "Definir hipótese e objetivo do Teste A/B da Nova Home",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Conversão",
    tipo: "Teste A/B",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Reorganizar a Home com ofertas de metais, categorias principais e benefícios claros vai aumentar a navegação, guiar o cliente até as páginas de produtos e subir a conversão do e-commerce.

Definir:
1. variante A: Home atual;
2. variante B: Nova Home V1;
3. público participante;
4. divisão de tráfego;
5. dispositivos contemplados;
6. duração mínima;
7. volume mínimo esperado;
8. critérios para encerrar o teste;
9. KPI principal;
10. KPIs secundários;
11. métricas de proteção.`,
    obs: "Alinha sucesso, leitura e critério de decisão do experimento."
  },
  {
    id: "CRO-003",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    tarefa: "Criar Figma da variante B da Nova Home",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Conversão",
    tipo: "POC",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Criar o Figma da variante B em desktop e mobile, contemplando:
1. nova ordem das seções;
2. novos banners;
3. carrossel de categorias;
4. tarja de benefícios;
5. categorias prioritárias;
6. campanha do mês;
7. ofertas e vitrines comerciais;
8. retirada ou reposicionamento de conteúdos antigos;
9. destino de cada banner e componente; comportamento responsivo.

A variante A deve permanecer documentada como a experiência atual.`,
    obs: "Serve de base para peças, front e instrumentação."
  },
  {
    id: "CRO-004",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Definir conteúdo comercial da variante B",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Engajamento com Vitrines",
    tipo: "Análise",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Definir com as áreas envolvidas quais categorias, produtos, marcas, benefícios e campanhas serão apresentados na nova Home.

Contemplar:
1. prioridade para Metais;
2. campanha do mês;
3. Louças;
4. Pisos;
5. Tintas, quando aplicável;
6. descontos em percentual;
7. produtos "a partir de" determinando valor;
8. produtos "até" determinando valor;
9. parcelamento;
10. frete grátis;
11. retirada no Guide;
12. ofertas da Semana;
13. mais vendidos;
14. cupons e vitrines especiais.

Também definir quais conteúdos serão removidos, como o banner de franquia e a seção antiga "Navegue por ambientes", caso aprovados.`,
    obs: "Tema de negócio e merchandising da variante B."
  },
  {
    id: "CRO-005",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Solicitar e validar as peças da variante B",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Clique em Banners",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Criar o briefing e solicitar as novas peças necessárias para o experimento.

Validar:
1. versão desktop;
2. versão mobile;
3. textos;
4. percentual ou valor comunicado;
5. imagens;
6. CTA;
7. destino do clique;
8. legibilidade;
9. consistência com a campanha;
10. peso e formato dos arquivos.

As peças devem ser exclusivas da variante B e não substituir imediatamente os banners do grupo de controle.`,
    obs: "Fellipe entra junto na validação de banners e publicação no site."
  },
  {
    id: "CRO-006",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Criar branch e implementar a variante B da Nova Home",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Conversão",
    tipo: "Melhoria",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Criar uma branch específica para implementar a variante B sem alterar definitivamente a experiência atual.

Implementar:
1. novos banners;
2. carrossel de categorias;
3. tarja de benefícios;
4. nova ordenamento das seções;
5. ofertas da Semana ou vitrine equivalente;
6. categorias estratégicas;
7. remoção ou reposicionamento de conteúdos;
8. novos destinos de navegação;
9. comportamento desktop e mobile.

A solução deve permitir ativar e desativar a variante sem novo desenvolvimento estrutural.`,
    obs: "Entrega técnica da Nova Home com envolvimento de Fellipe."
  },
  {
    id: "CRO-007",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    tarefa: "Instrumentar o Teste A/B da Nova Home",
    programa: "Teste A/B da Home Variante",
    kpi: "Cobertura de Eventos de Tracking",
    tipo: "Melhoria",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Configurar os eventos necessários para identificar:
grupo de controle;
grupo da variante;
visualização de experiências;
clique em banner;
posição do banner;
clique no carrossel;
categoria selecionada;
interação com tarja de benefícios;
interação com vitrines;
navegação para PLP;
navegação para PDP;
adição ao carrinho;
início de checkout;
compra;
receita;
dispositivo;
origem do tráfego.

A identificação da variante precisa permanecer durante a sessão e, preferencialmente, durante o período do experimento para evitar que o usuário alterne entre experiências.`,
    obs: "Mantém a leitura estatística e a comparação entre grupos."
  },
  {
    id: "CRO-008",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Iniciar o Teste A/B da Nova Home V1",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Conversão",
    tipo: "Teste A/B",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Publicar o experimento com distribuição controlada entre:
Variante A: Home atual;
Variante B: Nova Home V1.

Durante o teste, evitar alterações de campanhas, regras ou componentes que afetem apenas um dos grupos e prejudiquem a comparação.

O experimento deve permanecer ativo pelo período mínimo definido, sem ser encerrado antecipadamente apenas porque um dos grupos apresentou vantagem nos primeiros dias.`,
    obs: "Go-live controlado com apoio de Fellipe na publicação."
  },
  {
    id: "CRO-009",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    tarefa: "Analisar resultado do Teste A/B da Nova Home",
    programa: "Teste A/B da Home Variante",
    kpi: "Taxa de Conversão",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C34",
    start: "2026-08-17",
    end: "2026-08-21",
    descricao: `Comparar as variantes considerando:
diferença na taxa de conversão;
diferença de receita;
receita por visitante;
valor médio do pedido;
navegação para categorias;
cliques nos banners;
engajamento com vitrines;
adição ao carrinho;
comportamento por dispositivo;
comportamento por origem de tráfego;
mapa de calor;
possíveis impactos negativos.

Registrar se o resultado foi:
vencedor;
perdedor;
inconclusivo;
tecnicamente inválido;
dependente de mais amostra.`,
    obs: "Fecha leitura do experimento e orienta o passo seguinte."
  },
  {
    id: "CRO-010",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Publicar a experiência vencedora ou criar nova iteração",
    programa: "Teste A/B da Home Variante",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C34",
    start: "2026-08-17",
    end: "2026-08-21",
    descricao: `Com base no resultado:
publicar a variante B para todo o tráfego;
manter a variante A;
ajustar e criar nova Home V2;
propor componentes para novos testes;
registrar aprendizados;
documentar impacto estimado;
atualizar o roadmap CRO.

A publicação definitiva só deve ocorrer após a análise do experimento.`,
    obs: "Publicação final ou nova rodada com apoio de Fellipe."
  },
  {
    id: "CRO-011",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Criar o Figma e validar a jornada",
    programa: "Regionalização de preços",
    kpi: "Receita Incremental",
    tipo: "POC",
    prio: "Alta",
    mvp: "MVP2",
    status: "Pendente",
    ciclo: "C35",
    start: "2026-08-24",
    end: "2026-08-28",
    descricao: `Criar o Figma da jornada de regionalização em desktop e mobile, contemplando:
entrada e troca de CEP;
carregamento;
região atendida ou não atendida;
atualização de preço;
estoque;
prazo;
frete;
retirada;
persistência da região durante a navegação.

Prever o comportamento na Home, PLP, PDP, minicart e carrinho.`,
    obs: "Tema de preço e jornada com dependência direta de Fellipe."
  },
  {
    id: "CRO-012",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Definir regras técnicas e comerciais",
    programa: "Regionalização de preços",
    kpi: "Receita Incremental",
    tipo: "Análise",
    prio: "Alta",
    mvp: "MVP2",
    status: "Pendente",
    ciclo: "C36",
    start: "2026-08-31",
    end: "2026-09-04",
    descricao: `Mapear regiões atendidas, origem dos preços, tabelas utilizadas, produtos elegíveis, centros de distribuição, lojas participantes, atualização dos dados, comportamento sem preço, fallback de região e dependências entre catálogo, integração, gestão de preços e front-end.`,
    obs: "Define regra de negócio para o tema de regionalização."
  },
  {
    id: "CRO-013",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Configurar gestão de preços no painel Wake",
    programa: "Regionalização de preços",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP2",
    status: "Pendente",
    ciclo: "C36",
    start: "2026-08-31",
    end: "2026-09-04",
    descricao: `Cadastrar e validar regiões, tabelas e regras de preço, garantindo que o front receba o valor correto conforme o CEP.

Validar produtos sem preço regional, regras de fallback e consistência entre preço, estoque e disponibilidade.`,
    obs: "Envolve cadastro e configuração no painel."
  },
  {
    id: "CRO-014",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Implementar no front",
    programa: "Regionalização de preços",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP2",
    status: "Pendente",
    ciclo: "C37",
    start: "2026-09-07",
    end: "2026-09-11",
    descricao: `Implementar entradas e troca de CEP e refletir regras na Home, PLP, PDP, minicart e carrinho.

Atualizar preço, estoque, disponibilidade, prazo, entrega e retirada.
Instrumentar eventos de CEP informado, CEP alterado, região não atendida, atualização de preço e avanço na jornada.`,
    obs: "Entrega de front e comportamento em navegação."
  },
  {
    id: "CRO-015",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Executar QA integrado e publicar",
    programa: "Regionalização de preços",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP2",
    status: "Pendente",
    ciclo: "C38",
    start: "2026-09-14",
    end: "2026-09-18",
    descricao: `Validar CEP válido e inválido, região atendida e não atendida, troca de CEP, carrinho preenchido, atualização de preço, estoque, prazo, frete, retirada, persistência de região, tracking, desktop e mobile.

Corrigir inconsistências antes da publicação.`,
    obs: "QA final antes da subida."
  },
  {
    id: "CRO-016",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Mapear capacidade da Wake e desenhar a jornada",
    programa: "Split Entrega / Multifrete",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP5",
    status: "Pendente",
    ciclo: "C41",
    start: "2026-10-05",
    end: "2026-10-09",
    descricao: `Mapear o funcionamento nativo e as limitações da Wake para múltiplas origens, produtos separados por entregas, diferentes prazos, diferentes custos, entrega e retirada no mesmo pedido, alteração de quantidade, remoção de produtos e recálculo do frete.

Criar e validar o Figma da experiência.`,
    obs: "Tema de frete com dependência funcional de Fellipe."
  },
  {
    id: "CRO-017",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Configurar regras na Wake",
    programa: "Split Entrega / Multifrete",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP5",
    status: "Pendente",
    ciclo: "C41",
    start: "2026-10-05",
    end: "2026-10-09",
    descricao: `Configurar as regras necessárias para agrupar produtos por origem, separar entregas, calcular custos individuais, apresentar diferentes prazos e combinar entrega com retirada.

Documentar os retornos e cenários que deverão ser tratados pelo front.`,
    obs: "Configuração técnica de regras e dependências de frete."
  },
  {
    id: "CRO-018",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Implementar e executar QA",
    programa: "Split Entrega / Multifrete",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP5",
    status: "Pendente",
    ciclo: "C42",
    start: "2026-10-12",
    end: "2026-10-16",
    descricao: `Implementar a experiência aprovada no checkout e validar agrupamento dos produtos, prazo e custo por entrega, retiradas em loja, alteração de quantidade, remoção de itens, recálculo, mensagens de indisponibilidade e conclusão do pedido.`,
    obs: "Entrega final do multifrete."
  },
  {
    id: "CRO-019",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Exibição de parcelamento nos spots de produtos",
    programa: "MVP1",
    kpi: "Receita Incremental",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Revisar a exposição de parcelamento, preço De/Por, percentual de desconto, benefício, frete grátis, retirada e prazo nos spots, vitrines, PDP e minicart.

Definir quando utilizar selo, texto ou componente, evitando excesso de informações concorrentes.`,
    obs: "Tema de exibição comercial com dependência de front e merchandising."
  },
  {
    id: "CRO-020",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Criar variante de PDP para produto indisponível",
    programa: "MVP5",
    kpi: "Taxa de Conversão de Lead",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP5",
    status: "Pendente",
    ciclo: "C38",
    start: "2026-09-14",
    end: "2026-09-18",
    descricao: `Criar uma experiência alternativa para produtos sem estoque ou indisponíveis na região, oferecendo aviso de disponibilidade, captação de lead, similares, substitutos, atendimento, retorno para as categorias e retirada em outras lojas quando aplicável.`,
    obs: "MVP orientado a lead e recuperação de navegação."
  },
  {
    id: "CRO-021",
    frente: "BC E-com",
    area: "CRO",
    resp: "Phaison",
    dependsOn: ["Fellipe Oliveira"],
    tarefa: "Evoluir o Compre Junto padrão abaixo do carrossel",
    programa: "MVP5",
    kpi: "Taxa de Conversão",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP5",
    status: "Pendente",
    ciclo: "C39",
    start: "2026-09-21",
    end: "2026-09-25",
    descricao: `Estruturar relações diretas entre produtos necessários para instalação ou uso conjunto, como vaso e assento, cuba e torneira, piso e argamassa, revestimento e rejunte.

Validar a origem da relação, disponibilidade e compatibilidade antes da exibição.`,
    obs: "Expansão de cross-sell no fluxo de compra."
  },
  {
    id: "ECOM-01",
    frente: "Ecom - ECOM",
    area: "ECOM",
    resp: "Fellipe Oliveira",
    tarefa: "Carrossel de mini banner de destaque",
    programa: "Vitrine e navegação",
    kpi: "Engajamento",
    tipo: "Melhoria",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Criar carrossel de mini banners para destacar campanhas, categorias e vitrines com melhor leitura comercial.`,
    obs: null
  },
  {
    id: "ECOM-02",
    frente: "Ecom - ECOM",
    area: "ECOM",
    resp: "Fellipe Oliveira",
    tarefa: "Parcelamento do produto visível ao lado do preço",
    programa: "PDP e card de produto",
    kpi: "Conversão",
    tipo: "Melhoria",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Exibir o parcelamento sem clique adicional, priorizando leitura rápida da condição comercial.`,
    obs: "Quick win de conversão."
  },
  {
    id: "ECOM-03",
    frente: "Ecom - ECOM",
    area: "ECOM",
    resp: "Fellipe Oliveira + Vitor",
    tarefa: "Revisitar ordenação de produtos",
    programa: "Catálogo",
    kpi: "Conversão",
    tipo: "Melhoria",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Reavaliar regras de relevância para aproximar ordenação comercial e performance.`,
    obs: null
  },
  {
    id: "SEO-01",
    frente: "Ecom - SEO",
    area: "SEO",
    resp: "Matheus Furlani",
    dependsOn: ["Lara"],
    tarefa: "Mapeamento de redirects para nova categorização",
    programa: "SEO / Aquisição",
    kpi: "Tráfego Orgânico",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Mapear redirecionamentos necessários para proteger equity orgânico durante alterações de estrutura e navegação.`,
    obs: "Lara apoia a frente de aquisição e SEO."
  },
  {
    id: "SEO-02",
    frente: "Ecom - SEO",
    area: "SEO",
    resp: "Matheus Furlani",
    dependsOn: ["Lara"],
    tarefa: "Estudo de palavras-chave e canibalização para mídia paga",
    programa: "SEO / Aquisição",
    kpi: "Tráfego Qualificado",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Em andamento",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Identificar termos, oportunidades de priorização e possíveis conflitos entre SEO e campanhas de aquisição.`,
    obs: null
  },
  {
    id: "CRM-01",
    frente: "Ecom - CRM",
    area: "CRM",
    resp: "Eduardo",
    tarefa: "Fluxo 1 - Carrinho abandonado",
    programa: "CRM",
    kpi: "Recuperação",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Construir jornada de carrinho abandonado com três mensagens escalonadas e leitura por etapa.`,
    obs: "Eduardo lidera a frente de CRM."
  },
  {
    id: "CRM-02",
    frente: "Ecom - CRM",
    area: "CRM",
    resp: "Eduardo",
    tarefa: "Fluxo recuperação de pagamentos",
    programa: "CRM",
    kpi: "Recuperação",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Reestruturar a jornada de pagamentos não finalizados com mensagens e gatilhos de retorno.`,
    obs: null
  },
  {
    id: "DES-01",
    frente: "Ecom - Design",
    area: "DESIGN",
    resp: "Design (Mysa)",
    tarefa: "Banners da nova Home",
    programa: "Design",
    kpi: "Suporte visual",
    tipo: "Evolução",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C31",
    start: "2026-07-27",
    end: "2026-07-31",
    descricao: `Produzir banners da nova Home, incluindo topo, carrossel de categorias e tarja de benefícios.`,
    obs: "Alimenta as tarefas CRO da Nova Home."
  },
  {
    id: "GRW-01",
    frente: "Ecom - Growth",
    area: "GROWTH",
    resp: "Fellipe Oliveira + Phaison",
    tarefa: "Desconto PIX no checkout para SKUs de gap médio/alto",
    programa: "Growth",
    kpi: "Receita Incremental",
    tipo: "Melhoria",
    prio: "Alta",
    mvp: "MVP1",
    status: "Pendente",
    ciclo: "C32",
    start: "2026-08-03",
    end: "2026-08-07",
    descricao: `Aplicar incentivo comercial em PIX para reduzir gap de preço percebido sem alterar o preço público.`,
    obs: null
  }
];

const areaOrder = ["CRO", "ECOM", "SEO", "CRM", "DESIGN", "GROWTH"];
const areaLabels = {
  CRO: "CRO (Phaison)",
  ECOM: "ECOM (Fellipe Oliveira)",
  SEO: "SEO / Aquisição (Matheus Furlani + Lara)",
  CRM: "CRM (Eduardo)",
  DESIGN: "Design / Peças Gráficas (Design · Mysa)",
  GROWTH: "Growth Hacks — Metais (cross-funcional)"
};

let activeFilter = "ALL";
const expandedIds = new Set();
const collapsedCycleGroups = new Set();

const timeline = buildTimeline(tasks);
const rangeStart = timeline.rangeStart;
const rangeEnd = timeline.rangeEnd;
const totalDays = diffInDays(rangeStart, rangeEnd) + 1;

function buildTimeline(items) {
  const starts = items.map((task) => new Date(task.start));
  const ends = items.map((task) => new Date(task.end));
  const cyclesMap = new Map();

  items.forEach((task) => {
    if (!cyclesMap.has(task.ciclo)) {
      cyclesMap.set(task.ciclo, { start: new Date(task.start), end: new Date(task.end) });
      return;
    }

    const entry = cyclesMap.get(task.ciclo);
    const taskStart = new Date(task.start);
    const taskEnd = new Date(task.end);

    if (taskStart < entry.start) {
      entry.start = taskStart;
    }

    if (taskEnd > entry.end) {
      entry.end = taskEnd;
    }
  });

  const cycles = [...cyclesMap.entries()]
    .sort((a, b) => parseCycleNumber(a[0]) - parseCycleNumber(b[0]))
    .map(([cycle, value]) => ({
      cycle,
      start: value.start,
      end: value.end
    }));

  return {
    cycles,
    rangeStart: new Date(Math.min(...starts)),
    rangeEnd: new Date(Math.max(...ends))
  };
}

function parseCycleNumber(cycle) {
  return Number(String(cycle).replace(/[^\d]/g, ""));
}

function diffInDays(start, end) {
  return Math.round((end - start) / 86400000);
}

function dayOffset(dateValue) {
  return diffInDays(rangeStart, new Date(dateValue));
}

function normalizeList(text) {
  return (text || "")
    .split(/\s*\+\s*|\s*,\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getResponsibles(task) {
  const list = [...normalizeList(task.resp), ...normalizeList((task.dependsOn || []).join(", "))];
  return [...new Set(list)];
}

function getTaskMeta(task) {
  return [
    task.kpi ? `KPI Alvo: ${task.kpi}` : null,
    task.tipo ? `Tipo: ${task.tipo}` : null,
    task.prio ? `Prioridade: ${task.prio}` : null
  ].filter(Boolean);
}

function getDateLabel(start, end) {
  return `${fmt(start)} a ${fmt(end)}`;
}

function getCyclesSummary() {
  const firstCycle = timeline.cycles[0]?.cycle || "";
  const lastCycle = timeline.cycles[timeline.cycles.length - 1]?.cycle || "";
  return firstCycle === lastCycle ? firstCycle : `${firstCycle}–${lastCycle}`;
}

function formatCycleRange(cycleStart, cycleEnd) {
  return `${fmtDate(cycleStart)}–${fmtDate(cycleEnd)}`;
}

function fmt(iso) {
  return fmtDate(new Date(iso));
}

function fmtDate(date) {
  return `${String(date.getUTCDate()).padStart(2, "0")}/${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

function fmtDateLong(date) {
  return `${fmtDate(date)}/${date.getUTCFullYear()}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function capitalizeLine(text) {
  return String(text).replace(/^(\s*)([a-zà-ÿ])/i, (match, spaces, letter) => `${spaces}${letter.toUpperCase()}`);
}

function formatDescription(description) {
  const lines = String(description || "")
    .split("\n")
    .map((line) => line.trimEnd());

  const blocks = [];
  let paragraphLines = [];
  let listItems = [];

  function flushParagraph() {
    if (!paragraphLines.length) {
      return;
    }

    blocks.push(`<p>${escapeHtml(capitalizeLine(paragraphLines.join(" ")))}</p>`);
    paragraphLines = [];
  }

  function flushList() {
    if (!listItems.length) {
      return;
    }

    const itemsHtml = listItems
      .map((item) => `<li>${escapeHtml(capitalizeLine(item.replace(/^\d+\.\s*/, "")))}</li>`)
      .join("");
    blocks.push(`<ol>${itemsHtml}</ol>`);
    listItems = [];
  }

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      listItems.push(trimmed);
      return;
    }

    flushList();
    paragraphLines.push(trimmed);
  });

  flushParagraph();
  flushList();

  return blocks.join("");
}

function buildMetaPills(values) {
  return values
    .map((value) => {
      return `<span class="meta-pill info-pill">${escapeHtml(value)}</span>`;
    })
    .join("");
}

function buildMvpPill(mvp) {
  const safeMvp = String(mvp || "").trim();
  const mvpKey = /^MVP\d+$/i.test(safeMvp) ? safeMvp.toUpperCase() : "default";
  const label = safeMvp || "MVP";
  return `<span class="meta-pill mvp-pill" data-mvp="${escapeHtml(mvpKey)}">${escapeHtml(label)}</span>`;
}

function sortTasksByCycle(items) {
  return [...items].sort((taskA, taskB) => {
    const cycleDiff = parseCycleNumber(taskA.ciclo) - parseCycleNumber(taskB.ciclo);
    if (cycleDiff !== 0) {
      return cycleDiff;
    }

    const startDiff = new Date(taskA.start) - new Date(taskB.start);
    if (startDiff !== 0) {
      return startDiff;
    }

    return taskA.id.localeCompare(taskB.id, "pt-BR", { numeric: true });
  });
}

function groupTasksByCycle(items) {
  const grouped = new Map();

  items.forEach((task) => {
    if (!grouped.has(task.ciclo)) {
      grouped.set(task.ciclo, []);
    }

    grouped.get(task.ciclo).push(task);
  });

  return grouped;
}

function buildHeader() {
  document.getElementById("cyclesTxt").textContent = `Ciclos ${getCyclesSummary()}`;
  document.getElementById("rangeTxt").textContent = `${fmtDateLong(rangeStart)} a ${fmtDateLong(rangeEnd)}`;
  document.getElementById("counttxt").textContent = `${tasks.length} tarefas ativas`;
}

function toggleTask(id, row, detailRow, detailInner) {
  const isExpanded = expandedIds.has(id);

  if (isExpanded) {
    expandedIds.delete(id);
  } else {
    expandedIds.add(id);
  }

  syncExpandedState(id, row, detailRow, detailInner);
}

function getCycleGroupKey(area, cycle) {
  return `${area}::${cycle}`;
}

function toggleCycleGroup(area, cycle, subgroup, body) {
  const key = getCycleGroupKey(area, cycle);
  if (collapsedCycleGroups.has(key)) {
    collapsedCycleGroups.delete(key);
  } else {
    collapsedCycleGroups.add(key);
  }

  syncCycleGroupState(area, cycle, subgroup, body);
}

function syncCycleGroupState(area, cycle, subgroup, body) {
  const key = getCycleGroupKey(area, cycle);
  const isCollapsed = collapsedCycleGroups.has(key);
  subgroup.classList.toggle("collapsed", isCollapsed);
  subgroup.setAttribute("aria-expanded", String(!isCollapsed));
  body.classList.toggle("collapsed", isCollapsed);
  body.style.maxHeight = isCollapsed ? "0px" : `${body.scrollHeight}px`;
}

function syncExpandedState(id, row, detailRow, detailInner) {
  const isExpanded = expandedIds.has(id);
  row.classList.toggle("expanded", isExpanded);
  row.setAttribute("aria-expanded", String(isExpanded));
  detailRow.classList.toggle("open", isExpanded);
  detailRow.style.maxHeight = isExpanded ? `${detailRow.scrollHeight}px` : "0px";
}

function buildDetailRow(task) {
  const detailRow = document.createElement("div");
  detailRow.className = "detail-row";

  const responsibles = getResponsibles(task);
  const dependencyNote = task.dependsOn?.length
    ? `Dependências envolvidas: ${task.dependsOn.join(", ")}.`
    : "";

  const meta = document.createElement("div");
  meta.className = "detail-meta";
  meta.innerHTML = `
    <div class="detail-meta-block">
      <div class="detail-label">Responsáveis</div>
      <div class="detail-value">${escapeHtml(responsibles.join(" + "))}</div>
    </div>
    <div class="detail-meta-block">
      <div class="detail-label">Programa</div>
      <div class="detail-value">${escapeHtml(task.programa || "Frente CRO")}</div>
    </div>
    <div class="detail-meta-block">
      <div class="detail-label">Ciclo e período</div>
      <div class="detail-value">${escapeHtml(task.ciclo)} · ${escapeHtml(getDateLabel(task.start, task.end))}</div>
    </div>
    <div class="detail-meta-block">
      <div class="detail-label">Tipo / prioridade / MVP</div>
      <div class="detail-value">${escapeHtml(task.tipo)} · ${escapeHtml(task.prio)} · ${escapeHtml(task.mvp || "-")}</div>
    </div>
  `;

  const panel = document.createElement("div");
  panel.className = "detail-panel";

  const inner = document.createElement("div");
  inner.className = "detail-card";
  inner.innerHTML = `
    <div>
      <div class="detail-label">Descrição da tarefa</div>
      <div class="detail-description">${formatDescription(task.descricao || "Sem descrição detalhada cadastrada.")}</div>
    </div>
    ${task.obs || dependencyNote ? `<div class="detail-note">${escapeHtml([task.obs, dependencyNote].filter(Boolean).join(" "))}</div>` : ""}
  `;

  panel.appendChild(inner);
  detailRow.appendChild(meta);
  detailRow.appendChild(panel);

  return { detailRow, detailInner: inner };
}

function render() {
  const chart = document.getElementById("chart");
  const cyclehead = document.getElementById("cyclehead");
  const cycleheadTrack = document.getElementById("cycleheadTrack");
  chart.innerHTML = "";
  cyclehead.innerHTML = "";
  document.documentElement.style.setProperty("--cycle-count", String(timeline.cycles.length));
  chart.style.setProperty("--cycle-count", String(timeline.cycles.length));
  cycleheadTrack.style.setProperty("--cycle-count", String(timeline.cycles.length));
  buildHeader();

  timeline.cycles.forEach((cycleInfo) => {
    const item = document.createElement("div");
    item.innerHTML = `${escapeHtml(cycleInfo.cycle)}<small>${escapeHtml(formatCycleRange(cycleInfo.start, cycleInfo.end))}</small>`;
    cyclehead.appendChild(item);
  });

  areaOrder.forEach((area) => {
    const items = sortTasksByCycle(tasks.filter(
      (task) => task.area === area && (activeFilter === "ALL" || activeFilter === area)
    ));

    if (items.length === 0) {
      return;
    }

    const itemsByCycle = groupTasksByCycle(items);

    const group = document.createElement("div");
    group.className = "group";

    const title = document.createElement("div");
    title.className = "group-title";
    title.innerHTML = `<span>${escapeHtml(areaLabels[area])}</span><span>${items.length} tarefas</span>`;
    group.appendChild(title);

    timeline.cycles.forEach((cycleInfo) => {
      const cycleItems = itemsByCycle.get(cycleInfo.cycle);
      if (!cycleItems?.length) {
        return;
      }

      const subgroup = document.createElement("div");
      subgroup.className = "cycle-subgroup";
      subgroup.setAttribute("role", "button");
      subgroup.setAttribute("tabindex", "0");
      subgroup.setAttribute("aria-expanded", "true");
      subgroup.innerHTML = `
        <div class="cycle-subgroup-main">
          <span class="cycle-subgroup-icon" aria-hidden="true"></span>
          <strong>${escapeHtml(cycleInfo.cycle)}</strong>
        </div>
        <small>${escapeHtml(formatCycleRange(cycleInfo.start, cycleInfo.end))} · ${cycleItems.length} tarefas</small>
      `;
      group.appendChild(subgroup);

      const subgroupBody = document.createElement("div");
      subgroupBody.className = "cycle-subgroup-body";

      cycleItems.forEach((task) => {
        const card = document.createElement("div");
        card.className = "task-card";

        const row = document.createElement("div");
        row.className = "row";
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");
        row.setAttribute("aria-expanded", "false");

        const label = document.createElement("div");
        label.className = "rowlabel";
        label.innerHTML = `
          <div class="rowlabel-main">
            <div class="rowlabel-top">
              ${buildMvpPill(task.mvp)}
              <div class="program-value">${escapeHtml(task.programa || "Frente CRO")}</div>
            </div>
            <div class="task-id">${escapeHtml(task.id)}</div>
            <div class="rowlabel-title">${escapeHtml(task.tarefa)}</div>
            <div class="rowlabel-meta">${buildMetaPills(getTaskMeta(task))}</div>
          </div>
          <span class="expand-icon" aria-hidden="true"></span>
        `;

        const track = document.createElement("div");
        track.className = "track";

        const cycleIndex = Math.max(
          0,
          timeline.cycles.findIndex((timelineCycle) => timelineCycle.cycle === task.ciclo)
        );
        const cycleWidth = 100 / timeline.cycles.length;
        const left = cycleIndex * cycleWidth;

        const bar = document.createElement("div");
        bar.className = `bar status-${task.status.replace(/\s+/g, "-")}`;
        bar.style.left = `calc(${left}% + var(--cycle-gap))`;
        bar.style.width = `calc(${cycleWidth}% - (var(--cycle-gap) * 2))`;
        bar.textContent = task.ciclo;

        bar.addEventListener("mousemove", (event) => {
          const tip = document.getElementById("tooltip");
          tip.style.display = "block";
          tip.style.left = `${Math.min(event.clientX + 14, window.innerWidth - 380)}px`;
          tip.style.top = `${event.clientY + 14}px`;
          tip.innerHTML =
            `<b>${escapeHtml(task.id)}</b> — ${escapeHtml(task.tarefa)}` +
            `<br>Responsáveis: ${escapeHtml(getResponsibles(task).join(" + "))}` +
            `<br>${escapeHtml(task.programa || task.area)} · ${escapeHtml(task.kpi || "Sem KPI")}` +
            `<br>Status: ${escapeHtml(task.status)} · ${escapeHtml(task.ciclo)} (${escapeHtml(getDateLabel(task.start, task.end))})` +
            "<br><i>Clique na linha para expandir a descrição completa.</i>";
        });

        bar.addEventListener("mouseleave", () => {
          document.getElementById("tooltip").style.display = "none";
        });

        track.appendChild(bar);
        row.appendChild(label);
        row.appendChild(track);

        const { detailRow, detailInner } = buildDetailRow(task);

        row.addEventListener("click", () => toggleTask(task.id, row, detailRow, detailInner));
        row.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleTask(task.id, row, detailRow, detailInner);
          }
        });

        if (expandedIds.has(task.id)) {
          row.classList.add("expanded");
          row.setAttribute("aria-expanded", "true");
          detailRow.classList.add("open");
        }

        card.appendChild(row);
        card.appendChild(detailRow);
        subgroupBody.appendChild(card);

        requestAnimationFrame(() => syncExpandedState(task.id, row, detailRow, detailInner));
      });

      subgroup.addEventListener("click", () => toggleCycleGroup(area, cycleInfo.cycle, subgroup, subgroupBody));
      subgroup.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleCycleGroup(area, cycleInfo.cycle, subgroup, subgroupBody);
        }
      });

      group.appendChild(subgroupBody);
      requestAnimationFrame(() => syncCycleGroupState(area, cycleInfo.cycle, subgroup, subgroupBody));
    });

    chart.appendChild(group);
  });

  syncCycleheadScroll();
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

  wrap.addEventListener("scroll", syncCycleheadScroll, { passive: true });
}

function syncCycleheadScroll() {
  const wrap = document.getElementById("wrap");
  const cycleheadTrack = document.getElementById("cycleheadTrack");
  if (!wrap || !cycleheadTrack) {
    return;
  }

  cycleheadTrack.style.transform = `translateX(${-wrap.scrollLeft}px)`;
}

function syncStickyOffsets() {
  const controls = document.querySelector(".controls");
  if (!controls) {
    return;
  }

  document.documentElement.style.setProperty("--controls-sticky-height", `${controls.offsetHeight}px`);
}

window.addEventListener("resize", () => {
  syncStickyOffsets();
  syncCycleheadScroll();

  document.querySelectorAll(".cycle-subgroup-body").forEach((body) => {
    if (!body.classList.contains("collapsed")) {
      body.style.maxHeight = `${body.scrollHeight}px`;
    }
  });

  document.querySelectorAll(".detail-row.open").forEach((detailRow) => {
    detailRow.style.maxHeight = `${detailRow.scrollHeight}px`;
  });
});

buildFilters();
render();
enableDragScroll();
syncStickyOffsets();

if (typeof ResizeObserver !== "undefined") {
  const controls = document.querySelector(".controls");
  if (controls) {
    new ResizeObserver(() => {
      syncStickyOffsets();
    }).observe(controls);
  }
}
