const points = [
  {
    id: 'cassimiro-facesp',
    name: 'Ecoponto Cassimiro Circular — FACESP',
    address: 'Rua Matias de Albuquerque, 123 — Gercino Coelho — CEP 56306-220',
    lat: -9.390237,
    lng: -40.511263,
    categories: ['electronics', 'mobile'],
    accepts: 'Cabos e carregadores, periféricos e pequenos equipamentos eletrônicos.',
    hours: 'Atendimento conforme organização da escola',
    status: 'Projeto escolar — confirme antes da entrega',
    verification: 'Projeto escolar em implantação no endereço atual da escola',
    confidence: 'project',
    precision: 'building',
    featured: true,
    source: 'FACESP — página oficial de contatos',
    sourceUrl: 'https://facespe.edu.br/contatos/',
    routeQuery: 'FACESP Faculdade de Educação Superior de Pernambuco, Rua Matias de Albuquerque 123, Gercino Coelho, Petrolina PE 56306-220',
    note: 'Este é o ecoponto do TCF. A entrega será liberada conforme a organização da escola.'
  },
  {
    id: 'josepha',
    name: 'Parque Municipal Josepha Coelho',
    address: 'Acesso pela Rua Adelina Santana — Maria Auxiliadora',
    lat: -9.3857722,
    lng: -40.4993842,
    categories: ['electronics', 'mobile', 'batteries', 'lamps'],
    accepts: 'Eletroeletrônicos, celulares, pilhas, baterias, lâmpadas e vidro.',
    hours: 'Todos os dias, 5h às 22h',
    status: 'Ponto público fixo — coletor dentro do parque',
    verification: 'Ponto fixo reafirmado pela Prefeitura em outubro de 2025',
    confidence: 'recent',
    precision: 'entrance',
    source: 'Prefeitura de Petrolina — ponto público fixo',
    sourceUrl: 'https://edenevaldoalves.com.br/petrolina-pe-confira-os-pontos-para-descarte-correto-de-aparelhos-celulares-e-lixo-eletronico/',
    routeQuery: 'Portão principal do Parque Municipal Josepha Coelho, Petrolina PE',
    note: 'O coletor fica logo na entrada do parque. A publicação de 2025 informa o lado esquerdo do portão principal.'
  },
  {
    id: 'correios-centro',
    name: 'Correios — AC Petrolina',
    address: 'Praça Dom Malan, 63 — Centro — CEP 56302-970',
    lat: -9.398941,
    lng: -40.5016829,
    categories: ['electronics', 'mobile'],
    accepts: 'Celulares, notebooks, tablets, fones, cabos e pequenos eletroeletrônicos em caixa aberta, até 30 kg.',
    hours: 'Segunda a sexta, 8h às 17h; confirme em feriados',
    status: 'Serviço nacional dos Correios — disponível desde outubro de 2026',
    verification: 'Serviço oficial dos Correios e endereço da agência conferido',
    confidence: 'verified',
    precision: 'building',
    source: 'Correios — Sala de Imprensa',
    sourceUrl: 'https://saladeimprensa.correios.com.br/arquivos/14573',
    routeQuery: 'Agência dos Correios AC Petrolina, Praça Dom Malan 63, Centro, Petrolina PE 56302-970',
    note: 'Não recebe pilhas, baterias ou lâmpadas.'
  },
  {
    id: 'assai',
    name: 'Assaí Atacadista — Petrolina',
    address: 'Av. Sete de Setembro, s/n — Antônio Cassimiro — CEP 56330-900',
    lat: -9.3798658,
    lng: -40.5139508,
    categories: ['batteries', 'lamps'],
    accepts: 'Pilhas, baterias portáteis e lâmpadas nos coletores específicos da unidade.',
    hours: 'Segunda a sábado, 7h às 22h; domingo, 7h às 20h',
    status: 'Coleta específica da loja',
    verification: 'Serviços sustentáveis informados na página oficial da unidade',
    confidence: 'verified',
    precision: 'building',
    source: 'Assaí Atacadista — unidade Petrolina',
    sourceUrl: 'https://www.assai.com.br/loja/assai-petrolina',
    routeQuery: 'Assaí Atacadista Petrolina, Avenida Sete de Setembro, Antônio Cassimiro, Petrolina PE 56330-900'
  },
  {
    id: 'atacadao',
    name: 'Atacadão — Petrolina',
    address: 'Av. Dr. Ulisses Guimarães, 423 — Jardim Amazonas — CEP 56328-075',
    lat: -9.3842064,
    lng: -40.5269931,
    categories: ['batteries', 'lamps'],
    accepts: 'Pilhas, baterias portáteis, baterias de eletrônicos e lâmpadas conforme identificação do coletor.',
    hours: 'Conforme funcionamento da unidade; confirme antes da visita',
    status: 'Ponto listado em sistema ativo de logística reversa',
    verification: 'Ponto atual no localizador ambiental; loja conferida no site do Atacadão',
    confidence: 'verified',
    precision: 'building',
    source: 'Green Eletron / Ambipar — localizador de PEVs',
    sourceUrl: 'https://sistema.gmclog.com.br/info/green?search_state=PE',
    routeQuery: 'Atacadão Petrolina, Avenida Doutor Ulisses Guimarães 423, Jardim Amazonas, Petrolina PE 56328-075',
    note: 'O localizador ambiental ainda apresenta o número como “s/n”; a página oficial da loja informa o nº 423.'
  },
  {
    id: 'river-shopping',
    name: 'River Shopping — Estação de Resíduos',
    address: 'Av. Monsenhor Ângelo Sampaio, 100 — Centro — CEP 56304-920',
    lat: -9.3944062,
    lng: -40.4926064,
    categories: ['electronics', 'mobile', 'batteries', 'lamps'],
    accepts: 'Eletrônicos, eletroeletrônicos, eletrodomésticos, monitores, computadores, pilhas, baterias e lâmpadas.',
    hours: 'Confirme o horário da Estação de Resíduos pelo telefone (87) 2101-3737',
    status: 'Ponto de coleta de resíduos especiais no estacionamento',
    verification: 'Serviço continua listado na página oficial atual do shopping',
    confidence: 'verified',
    precision: 'building',
    source: 'River Shopping — página oficial de serviços',
    sourceUrl: 'https://www.rivershopping.com.br/o-shopping/servi%C3%A7os/',
    routeQuery: 'River Shopping Petrolina, Avenida Monsenhor Ângelo Sampaio 100, Petrolina PE 56304-920',
    note: 'A lista detalhada de materiais foi divulgada na inauguração da Estação, em 2024. Confirme itens volumosos antes da visita.'
  },
  {
    id: 'facape',
    name: 'FACAPE — Faculdade de Petrolina',
    address: 'Campus Universitário, s/n — Vila Eduardo — CEP 56328-903',
    lat: -9.3960286,
    lng: -40.4795076,
    categories: ['electronics', 'mobile'],
    accepts: 'Celulares, computadores, HDs, placas eletrônicas, teclados, televisores e outros equipamentos informados pelo projeto.',
    hours: 'Confirme o recebimento pelo telefone (87) 3866-3200 antes de ir',
    status: 'Laboratório de recondicionamento dentro do campus',
    verification: 'Campus e marcador conferidos em 17/11/2026; coleta com registro institucional de 2023',
    confidence: 'confirm',
    precision: 'campus',
    source: 'MPPE — relação institucional de PEVs de Petrolina',
    sourceUrl: 'https://portal.mppe.mp.br/w/mppe-e-prefeitura-celebram-inauguracao-de-pontos-de-entrega-voluntaria-para-coleta-de-residuos-solidos',
    routeQuery: 'FACAPE Faculdade de Petrolina, Campus Universitário, Vila Eduardo, Petrolina PE 56328-903',
    note: 'A FACAPE não fica na FACESP nem no centro. O marcador foi conferido no cadastro oficial do endereço e no ponto exato do campus no Google Maps. A confirmação pública mais recente localizada para a coleta é de 2023.'
  }
];

function routeUrl(point) {
  if (point.routeQuery) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.routeQuery)}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}&travelmode=driving`;
}

function appleMapsUrl(point) {
  const destination = point.routeQuery || `${point.lat},${point.lng}`;
  return `https://maps.apple.com/?q=${encodeURIComponent(point.name)}&daddr=${encodeURIComponent(destination)}`;
}

const categoryLabels = {
  electronics: 'Eletrônicos',
  mobile: 'Celulares e acessórios',
  batteries: 'Pilhas e baterias',
  lamps: 'Lâmpadas'
};

let activeFilter = 'all';
let query = '';
let userPosition = null;
let deferredInstallPrompt = null;

const resultsEl = document.querySelector('#results');
const searchInput = document.querySelector('#searchInput');
const locationMessage = document.querySelector('#locationMessage');
const installButton = document.querySelector('#installButton');
const hasLeaflet = typeof window.L !== 'undefined';
let map = null;
let mapBounds = null;
const markers = new Map();

const visitorCounter = {
  key: 'cassimiro_circular_erefemac_tcf_2026_v1_9b',
  registeredKey: 'cassimiro-visitor-registered-v1',
  cachedKey: 'cassimiro-visitor-count-v1',
  baseUrl: 'https://countapi.mileshilliard.com/api/v1'
};

function readLocalValue(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function writeLocalValue(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Navegador sem armazenamento local. */ }
}

function renderVisitorCount(value) {
  const element = document.querySelector('#visitorCount');
  if (!element || !Number.isFinite(value)) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const formatter = new Intl.NumberFormat('pt-BR');
  const target = Math.max(0, Math.floor(value));
  element.setAttribute('aria-label', `${formatter.format(target)} pessoas já visitaram nosso aplicativo`);
  if (reducedMotion || target === 0) {
    element.textContent = formatter.format(target);
    return;
  }
  const duration = 850;
  const startAt = performance.now();
  const startValue = Math.max(0, target - Math.min(target, 48));
  const step = now => {
    const progress = Math.min(1, (now - startAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = formatter.format(Math.round(startValue + (target - startValue) * eased));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

async function updateVisitorCounter() {
  const countElement = document.querySelector('#visitorCount');
  const statusElement = document.querySelector('#visitorStatus');
  if (!countElement || !statusElement) return;

  const isPreview = ['localhost', '127.0.0.1'].includes(location.hostname);
  const alreadyRegistered = readLocalValue(visitorCounter.registeredKey) === 'yes';
  const cachedCount = Number(readLocalValue(visitorCounter.cachedKey));

  if (isPreview) {
    renderVisitorCount(Number.isFinite(cachedCount) ? cachedCount : 0);
    statusElement.textContent = 'Prévia local • contagem pausada';
    return;
  }

  const action = alreadyRegistered ? 'get' : 'hit';
  try {
    const response = await fetch(`${visitorCounter.baseUrl}/${action}/${visitorCounter.key}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Contador indisponível');
    const data = await response.json();
    const value = Number(data.value);
    if (!Number.isFinite(value)) throw new Error('Resposta inválida');
    if (!alreadyRegistered) writeLocalValue(visitorCounter.registeredKey, 'yes');
    writeLocalValue(visitorCounter.cachedKey, String(value));
    renderVisitorCount(value);
    statusElement.textContent = alreadyRegistered ? 'Contagem pública • uma vez por navegador' : 'Visita registrada • uma vez por navegador';
  } catch {
    if (Number.isFinite(cachedCount)) renderVisitorCount(cachedCount);
    else countElement.textContent = '—';
    statusElement.textContent = 'Contagem temporariamente indisponível';
  }
}

if (hasLeaflet) {
  map = L.map('map', { zoomControl: false }).setView([-9.3905, -40.5090], 13);
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const pinSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 6.5 10 2l2 3.5M10 2l-5.3.2M16.5 7l5 .3-2.5 4.5m2.5-4.5-2.8-4.5M16 17.5 13.5 22l-2-3.5m2 3.5 5.3-.2M7 16H2l2.5-4.5M2 16l2.8 4.5"/></svg>';
  const markerIconFor = point => L.divIcon({
    className: `custom-pin marker-${point.confidence}${point.featured ? ' featured-pin' : ''}`,
    html: pinSvg,
    iconSize: point.featured ? [42, 42] : [36, 36]
  });
  points.forEach(point => {
    const marker = L.marker([point.lat, point.lng], { icon: markerIconFor(point) })
      .addTo(map)
      .bindPopup(`<strong>${point.name}</strong><br>${point.address}<br><small>${point.verification}</small><br><a href="${routeUrl(point)}" target="_blank" rel="noopener">Abrir localização correta</a>`);
    marker.on('click', () => focusCard(point.id));
    markers.set(point.id, marker);
  });
  mapBounds = L.latLngBounds(points.map(point => [point.lat, point.lng]));
  map.fitBounds(mapBounds.pad(0.16), { maxZoom: 14 });
} else {
  document.querySelector('#map').innerHTML = '<div class="map-fallback"><strong>O mapa não pôde ser carregado.</strong><span>A lista de locais continua disponível. Use “Como chegar” para abrir a rota.</span></div>';
}

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function distanceKm(a, b) {
  const radius = 6371;
  const toRad = value => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}

function filteredPoints() {
  const normalizedQuery = normalize(query);
  return points
    .filter(point => activeFilter === 'all' || point.categories.includes(activeFilter))
    .filter(point => !normalizedQuery || normalize(`${point.name} ${point.address} ${point.accepts} ${point.status}`).includes(normalizedQuery))
    .map(point => ({ ...point, distance: userPosition ? distanceKm(userPosition, point) : null }))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return userPosition ? a.distance - b.distance : a.name.localeCompare(b.name, 'pt-BR');
    });
}

function render() {
  const filtered = filteredPoints();
  const resultsTitle = document.querySelector('.results-head strong');
  if (resultsTitle) resultsTitle.textContent = `${filtered.length} ${filtered.length === 1 ? 'local encontrado' : 'locais encontrados'}`;
  resultsEl.innerHTML = filtered.length ? filtered.map(point => `
    <article class="result-card${point.featured ? ' school-point' : ''}" id="card-${point.id}">
      <div class="result-top">
        <div><h3>${point.name}</h3><p>${point.address}</p></div>
        ${point.distance !== null ? `<span class="distance">${point.distance.toFixed(1)} km</span>` : ''}
      </div>
      ${point.featured ? '<span class="school-badge">Nosso ecoponto</span>' : ''}
      <span class="verification-badge ${point.confidence}">${point.confidence === 'confirm' ? '!' : '✓'} ${point.verification}</span>
      <div class="tags">${point.categories.map(cat => `<span class="tag">${categoryLabels[cat]}</span>`).join('')}</div>
      <p><strong>Recebe:</strong> ${point.accepts}</p>
      <p><strong>Funcionamento:</strong> ${point.hours}</p>
      ${point.note ? `<p class="point-note"><strong>Atenção:</strong> ${point.note}</p>` : ''}
      <div class="card-actions">
        <a href="${routeUrl(point)}" target="_blank" rel="noopener"><svg class="icon"><use href="#i-route"></use></svg>Google Maps</a>
        <a href="${appleMapsUrl(point)}" target="_blank" rel="noopener"><svg class="icon"><use href="#i-route"></use></svg>Mapas no iPhone</a>
        ${hasLeaflet ? `<button type="button" data-point="${point.id}"><svg class="icon"><use href="#i-map"></use></svg>Ver no mapa</button>` : ''}
        <a href="${point.sourceUrl}" target="_blank" rel="noopener" title="${point.source}">Fonte ↗</a>
      </div>
    </article>
  `).join('') : '<p>Nenhum ponto encontrado para este filtro.</p>';

  if (hasLeaflet) {
    const visibleIds = new Set(filtered.map(point => point.id));
    points.forEach(point => {
      const marker = markers.get(point.id);
      if (visibleIds.has(point.id)) marker.addTo(map);
      else marker.removeFrom(map);
    });
  }

  document.querySelectorAll('[data-point]').forEach(button => button.addEventListener('click', () => showOnMap(button.dataset.point)));
}

function showOnMap(id) {
  if (!hasLeaflet) return;
  setRoute('mapa');
  const point = points.find(item => item.id === id);
  if (!point) return;
  map.setView([point.lat, point.lng], 16, { animate: true });
  markers.get(id).openPopup();
}

function focusCard(id) {
  const card = document.querySelector(`#card-${id}`);
  card?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    render();
  });
});

searchInput.addEventListener('input', event => {
  query = event.target.value;
  render();
});

document.querySelector('#nearMe').addEventListener('click', () => {
  if (!navigator.geolocation) {
    locationMessage.hidden = false;
    locationMessage.textContent = 'Este navegador não oferece acesso à localização.';
    return;
  }
  locationMessage.hidden = false;
  locationMessage.textContent = 'Buscando sua localização…';
  navigator.geolocation.getCurrentPosition(position => {
    userPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
    if (hasLeaflet) {
      L.circleMarker([userPosition.lat, userPosition.lng], { radius: 8, color: '#071a3b', fillColor: '#06a7b5', fillOpacity: 1 }).addTo(map).bindPopup('Você está aqui');
      map.setView([userPosition.lat, userPosition.lng], 14);
    }
    locationMessage.textContent = 'Pontos organizados do mais próximo ao mais distante.';
    render();
  }, () => {
    locationMessage.textContent = 'Não foi possível acessar sua localização. Verifique a permissão do navegador.';
  }, { enableHighAccuracy: true, timeout: 10000 });
});

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener('click', async () => {
  if (!deferredInstallPrompt) {
    showToast('No iPhone, use Compartilhar → Adicionar à Tela de Início. No Android, abra o menu do navegador → Instalar app.');
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

window.addEventListener('appinstalled', () => { installButton.hidden = true; });

const validRoutes = ['inicio', 'mapa', 'ecoponto', 'aprenda', 'sobre'];
const navLinks = document.querySelectorAll('[data-route]');
const views = document.querySelectorAll('[data-view]');
const toast = document.querySelector('#toast');
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
}

function setRoute(route, updateHash = true) {
  const nextRoute = validRoutes.includes(route) ? route : 'inicio';
  views.forEach(view => {
    const active = view.dataset.view === nextRoute;
    view.hidden = !active;
    view.classList.toggle('active', active);
  });
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.route === nextRoute));
  if (updateHash && location.hash !== `#${nextRoute}`) history.pushState(null, '', `#${nextRoute}`);
  document.querySelector('.app-stage')?.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo({ top: 0, behavior: 'auto' });
  if (nextRoute === 'mapa' && hasLeaflet) requestAnimationFrame(() => {
    map.invalidateSize();
    if (mapBounds) map.fitBounds(mapBounds.pad(0.16), { maxZoom: 14 });
  });
}

navLinks.forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  setRoute(link.dataset.route);
}));

window.addEventListener('hashchange', () => setRoute(location.hash.slice(1), false));

const themeToggle = document.querySelector('#themeToggle');
const savedTheme = localStorage.getItem('cassimiro-theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) document.body.classList.add('dark');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('cassimiro-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

document.querySelector('#shareButton').addEventListener('click', async () => {
  const shareData = { title: 'Cassimiro Circular', text: 'Conheça o projeto de descarte responsável da EREFEM Antônio Cassimiro.', url: location.href.split('#')[0] };
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(shareData.url);
      showToast('Link copiado para a área de transferência.');
    }
  } catch (error) {
    if (error.name !== 'AbortError') showToast('Não foi possível compartilhar agora.');
  }
});

const cassiLessons = {
  preparar: {
    number: '01',
    eyebrow: 'ANTES DE DESCARTAR',
    title: 'Prepare o aparelho',
    intro: 'Alguns cuidados simples tornam a entrega mais segura e facilitam a triagem.',
    items: [
      'Desligue o aparelho e retire-o da tomada.',
      'Remova chips, cartões de memória e acessórios soltos.',
      'Separe cabos e carregadores para facilitar a triagem.',
      'Não abra, quebre ou retire peças por conta própria.'
    ],
    note: 'Entregue os itens limpos e secos sempre que possível.',
    tip: 'Se o equipamento ainda funciona, consertar ou doar pode ser melhor do que reciclar.'
  },
  dados: {
    number: '02',
    eyebrow: 'PRIVACIDADE',
    title: 'Proteja seus dados',
    intro: 'Antes de entregar celulares, tablets ou computadores, proteja suas informações pessoais.',
    items: [
      'Faça backup de fotos, documentos e contatos.',
      'Saia das contas e desative bloqueios vinculados ao aparelho.',
      'Restaure as configurações de fábrica sempre que for possível.',
      'Retire chips e cartões de memória antes da entrega.'
    ],
    note: 'Se o aparelho não ligar, informe essa condição ao responsável pelo recebimento.',
    tip: 'Apagar arquivos não é o mesmo que restaurar o aparelho. Use a opção de restauração de fábrica.'
  },
  baterias: {
    number: '03',
    eyebrow: 'SEGURANÇA',
    title: 'Pilhas e baterias',
    intro: 'Esses materiais precisam de cuidado porque podem vazar, aquecer ou provocar incêndios.',
    items: [
      'Não perfure, aperte, dobre ou tente desmontar.',
      'Mantenha longe de calor, água e objetos metálicos.',
      'Não coloque baterias estufadas no ecoponto escolar.',
      'Confirme no mapa um ponto que receba esse tipo de material.'
    ],
    note: 'Baterias danificadas exigem orientação especializada antes do transporte.',
    tip: 'O coletor correto protege pessoas, evita incêndios e permite a recuperação dos materiais.'
  },
  ecoponto: {
    number: '04',
    eyebrow: 'NOSSO PROJETO',
    title: 'O que recebemos',
    intro: 'O Cassimiro Circular foi pensado para itens pequenos, comuns na rotina da escola e da comunidade.',
    items: [
      'Cabos, carregadores e pequenos acessórios.',
      'Teclados, mouses e outros periféricos.',
      'Celulares e pequenos equipamentos eletrônicos.',
      'Itens limpos, secos e sem vazamento.'
    ],
    note: 'Pilhas, lâmpadas, baterias danificadas e aparelhos grandes devem seguir para pontos específicos do mapa.',
    tip: 'O ecoponto escolar está em implantação. Confirme a liberação antes de levar qualquer material.'
  }
};

const lessonTabs = [...document.querySelectorAll('.lesson-tab')];
const lessonKeys = Object.keys(cassiLessons);

function renderLesson(key) {
  const lesson = cassiLessons[key];
  if (!lesson) return;
  const lessonIndex = lessonKeys.indexOf(key);
  document.querySelector('#lessonNumber').textContent = lesson.number;
  document.querySelector('#lessonEyebrow').textContent = lesson.eyebrow;
  document.querySelector('#lessonTitle').textContent = lesson.title;
  document.querySelector('#lessonIntro').textContent = lesson.intro;
  document.querySelector('#lessonChecklist').innerHTML = lesson.items.map(item => `<li><span aria-hidden="true">✓</span><p>${item}</p></li>`).join('');
  document.querySelector('#lessonNote').textContent = lesson.note;
  document.querySelector('#cassiTip').textContent = lesson.tip;
  document.querySelector('#lessonProgress').textContent = `Guia ${lessonIndex + 1} de ${lessonKeys.length}`;
  document.querySelector('#lessonProgressBar').style.width = `${((lessonIndex + 1) / lessonKeys.length) * 100}%`;
  lessonTabs.forEach(tab => {
    const active = tab.dataset.lesson === key;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
}

lessonTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => renderLesson(tab.dataset.lesson));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let targetIndex = index;
    if (event.key === 'ArrowRight') targetIndex = (index + 1) % lessonTabs.length;
    if (event.key === 'ArrowLeft') targetIndex = (index - 1 + lessonTabs.length) % lessonTabs.length;
    if (event.key === 'Home') targetIndex = 0;
    if (event.key === 'End') targetIndex = lessonTabs.length - 1;
    lessonTabs[targetIndex].focus();
    renderLesson(lessonTabs[targetIndex].dataset.lesson);
  });
});

document.querySelector('#startLearning')?.addEventListener('click', () => {
  document.querySelector('#learnTopics')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('.cassi-faq-list details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.cassi-faq-list details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});

const cassiQuiz = [
  {
    question: 'Se um celular não liga, ele pode ser jogado no lixo comum.',
    answer: false,
    explanation: 'Mesmo quebrado, o aparelho possui materiais reaproveitáveis e componentes que exigem destinação adequada.'
  },
  {
    question: 'Antes de descartar um celular, é importante retirar chips e apagar os dados.',
    answer: true,
    explanation: 'Chips e cartões devem ser retirados. Sempre que possível, faça backup e restaure as configurações de fábrica.'
  },
  {
    question: 'Uma bateria estufada pode ser colocada no ecoponto escolar.',
    answer: false,
    explanation: 'Baterias estufadas ou danificadas precisam de orientação especializada e não devem ir para o coletor escolar.'
  },
  {
    question: 'Se um aparelho ainda funciona, reparar ou doar pode ser melhor que reciclar.',
    answer: true,
    explanation: 'Prolongar a vida útil evita um descarte precoce. A reciclagem é importante quando reutilizar já não é possível.'
  }
];

const quizQuestion = document.querySelector('#quizQuestion');
const quizCounter = document.querySelector('#quizCounter');
const quizBar = document.querySelector('#quizBar');
const quizScore = document.querySelector('#quizScore');
const quizFeedback = document.querySelector('#quizFeedback');
const quizNext = document.querySelector('#quizNext');
const quizOptions = document.querySelector('.quiz-options');
const quizButtons = [...document.querySelectorAll('[data-quiz-answer]')];
let quizIndex = 0;
let quizScoreValue = 0;
let quizLocked = false;
let quizFinished = false;

function renderQuiz() {
  const item = cassiQuiz[quizIndex];
  quizFinished = false;
  quizLocked = false;
  quizOptions.hidden = false;
  quizQuestion.textContent = item.question;
  quizCounter.textContent = `Pergunta ${quizIndex + 1} de ${cassiQuiz.length}`;
  quizBar.style.width = `${((quizIndex + 1) / cassiQuiz.length) * 100}%`;
  quizScore.textContent = String(quizScoreValue);
  quizFeedback.hidden = true;
  quizFeedback.className = 'quiz-feedback';
  quizNext.hidden = true;
  quizNext.innerHTML = `${quizIndex === cassiQuiz.length - 1 ? 'Ver resultado' : 'Próxima pergunta'} <svg><use href="#i-arrow"></use></svg>`;
  quizButtons.forEach(button => {
    button.disabled = false;
    button.classList.remove('correct', 'wrong');
    button.removeAttribute('aria-pressed');
  });
}

quizButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (quizLocked || quizFinished) return;
    quizLocked = true;
    const selectedAnswer = button.dataset.quizAnswer === 'true';
    const item = cassiQuiz[quizIndex];
    const correct = selectedAnswer === item.answer;
    if (correct) quizScoreValue += 1;
    quizScore.textContent = String(quizScoreValue);
    quizButtons.forEach(option => {
      const optionAnswer = option.dataset.quizAnswer === 'true';
      option.disabled = true;
      option.setAttribute('aria-pressed', String(option === button));
      if (optionAnswer === item.answer) option.classList.add('correct');
    });
    if (!correct) button.classList.add('wrong');
    quizFeedback.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
    quizFeedback.innerHTML = `<strong>${correct ? 'Acertou!' : 'Quase!'}</strong><span>${item.explanation}</span>`;
    quizFeedback.hidden = false;
    quizNext.hidden = false;
  });
});

function finishQuiz() {
  quizFinished = true;
  quizOptions.hidden = true;
  quizCounter.textContent = 'Quiz concluído';
  quizBar.style.width = '100%';
  quizQuestion.textContent = `Você acertou ${quizScoreValue} de ${cassiQuiz.length}.`;
  const message = quizScoreValue === cassiQuiz.length
    ? 'Excelente! Você já sabe como tornar o descarte eletrônico mais seguro.'
    : quizScoreValue >= 2
      ? 'Muito bem! Revise os guias e você estará pronto para orientar outras pessoas.'
      : 'Bom começo! Releia os guias rápidos e tente outra vez.';
  quizFeedback.className = 'quiz-feedback result';
  quizFeedback.innerHTML = `<strong>${message}</strong><span>Conhecimento também entra em circulação.</span>`;
  quizFeedback.hidden = false;
  quizNext.innerHTML = 'Refazer quiz <svg><use href="#i-recycle"></use></svg>';
  quizNext.hidden = false;
}

quizNext?.addEventListener('click', () => {
  if (quizFinished) {
    quizIndex = 0;
    quizScoreValue = 0;
    renderQuiz();
    return;
  }
  if (quizIndex === cassiQuiz.length - 1) {
    finishQuiz();
    return;
  }
  quizIndex += 1;
  renderQuiz();
});

renderLesson('preparar');
renderQuiz();

if (!matchMedia('(display-mode: standalone)').matches) {
  installButton.hidden = false;
}

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));

render();
setRoute(location.hash.slice(1) || 'inicio', false);
updateVisitorCounter();
