const points = [
  {
    id: 'cassimiro-facesp',
    name: 'Ecoponto Cassimiro Circular — FACESP',
    address: 'Rua Matias de Albuquerque, 123 — Gercino Coelho',
    lat: -9.3905756,
    lng: -40.5114057,
    categories: ['electronics', 'mobile'],
    accepts: 'Cabos e carregadores, periféricos e pequenos equipamentos eletrônicos.',
    hours: 'Implantação prevista para outubro de 2026; horários serão divulgados pela escola',
    status: 'Ecoponto escolar em implantação',
    featured: true,
    source: 'Endereço oficial da FACESP e projeto TCF do 9º Ano B',
    sourceUrl: 'https://facespe.edu.br/contatos/'
  },
  {
    id: 'josepha',
    name: 'Parque Municipal Josepha Coelho',
    address: 'Rua Adelina Santana, 2 — Maria Auxiliadora',
    lat: -9.3883844,
    lng: -40.4980859,
    categories: ['electronics', 'mobile', 'batteries'],
    accepts: 'Eletroeletrônicos, celulares, pilhas, baterias, lâmpadas e vidro.',
    hours: 'Todos os dias, 5h às 22h',
    status: 'Ponto público fixo',
    source: 'MPPE e Prefeitura de Petrolina',
    sourceUrl: 'https://portal.mppe.mp.br/w/mppe-e-prefeitura-celebram-inauguracao-de-pontos-de-entrega-voluntaria-para-coleta-de-residuos-solidos'
  },
  {
    id: 'facape',
    name: 'FACAPE — Laboratório RECOM',
    address: 'Campus Universitário, s/n — Vila Eduardo',
    lat: -9.39416,
    lng: -40.5096,
    categories: ['electronics', 'mobile', 'reuse'],
    accepts: 'Computadores, notebooks, smartphones, HDs, placas, teclados e componentes para triagem e recondicionamento.',
    hours: 'Confirme pelo telefone (87) 3866-3236',
    status: 'Recondicionamento e destinação',
    source: 'Projeto de extensão da FACAPE',
    sourceUrl: 'https://facape.otimizeit.com.br/graduacao-pos/graduacao/ciencia-da-computacao/'
  },
  {
    id: 'casas-bahia-centro',
    name: 'Casas Bahia — Centro',
    address: 'Rua Dom Vital, 533 — Centro',
    lat: -9.39575,
    lng: -40.5043,
    categories: ['electronics', 'batteries'],
    accepts: 'Ponto registrado em sistema de logística reversa. Confirme previamente o tipo e o porte do produto.',
    hours: 'Horário comercial da loja',
    status: 'Logística reversa',
    source: 'Green Eletron / Ambipar',
    sourceUrl: 'https://greeneletron.org.br/onde-descartar/'
  },
  {
    id: 'vivo-river',
    name: 'Vivo — River Shopping',
    address: 'Av. Monsenhor Ângelo Sampaio, 100 — Centro',
    lat: -9.38692,
    lng: -40.48865,
    categories: ['mobile', 'batteries'],
    accepts: 'Celulares, carregadores, fones, acessórios de telefonia, pilhas e baterias portáteis.',
    hours: 'Conforme funcionamento do shopping',
    status: 'Telefonia e acessórios',
    source: 'MPPE / River Shopping',
    sourceUrl: 'https://www.rivershopping.com.br/lojas/v/vivo/'
  },
  {
    id: 'vivo-eco-center',
    name: 'Vivo — Galeria Eco Center',
    address: 'Av. Souza Filho, 516 — Centro',
    lat: -9.39448,
    lng: -40.5025,
    categories: ['mobile', 'batteries'],
    accepts: 'Celulares, carregadores, fones, acessórios de telefonia, pilhas e baterias portáteis.',
    hours: 'Confirme com a loja antes da visita',
    status: 'Telefonia e acessórios',
    source: 'Relação pública de PEVs de Petrolina',
    sourceUrl: 'https://portal.mppe.mp.br/w/mppe-e-prefeitura-celebram-inauguracao-de-pontos-de-entrega-voluntaria-para-coleta-de-residuos-solidos'
  },
  {
    id: 'assai',
    name: 'Assaí Petrolina',
    address: 'Av. Sete de Setembro, s/n — Antônio Cassimiro',
    lat: -9.3812351,
    lng: -40.5126744,
    categories: ['batteries'],
    accepts: 'Coletor específico para pilhas e baterias portáteis.',
    hours: 'Conforme funcionamento da loja',
    status: 'Somente pilhas e baterias',
    source: 'Assaí Atacadista',
    sourceUrl: 'https://www.assai.com.br/loja/assai-petrolina'
  },
  {
    id: 'atacadao',
    name: 'Atacadão Petrolina',
    address: 'Av. Dr. Ulisses Guimarães, s/n — Jardim Amazonas',
    lat: -9.38114,
    lng: -40.53359,
    categories: ['batteries'],
    accepts: 'Pilhas, baterias portáteis e materiais indicados no coletor da unidade.',
    hours: 'Conforme funcionamento da loja',
    status: 'Coleta específica',
    source: 'Ambipar / relação de PEVs de Petrolina',
    sourceUrl: 'https://sistema.gmclog.com.br/info/green?search_state=PE'
  }
];

const categoryLabels = {
  electronics: 'Eletrônicos',
  mobile: 'Celulares e acessórios',
  batteries: 'Pilhas e baterias',
  reuse: 'Recondicionamento'
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
const markers = new Map();

if (hasLeaflet) {
  map = L.map('map', { zoomControl: false }).setView([-9.3915, -40.5050], 13);
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const markerIcon = L.divIcon({ className: 'custom-pin', html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 6.5 10 2l2 3.5M10 2l-5.3.2M16.5 7l5 .3-2.5 4.5m2.5-4.5-2.8-4.5M16 17.5 13.5 22l-2-3.5m2 3.5 5.3-.2M7 16H2l2.5-4.5M2 16l2.8 4.5"/></svg>', iconSize: [36, 36] });
  const featuredMarkerIcon = L.divIcon({ className: 'custom-pin featured-pin', html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 6.5 10 2l2 3.5M10 2l-5.3.2M16.5 7l5 .3-2.5 4.5m2.5-4.5-2.8-4.5M16 17.5 13.5 22l-2-3.5m2 3.5 5.3-.2M7 16H2l2.5-4.5M2 16l2.8 4.5"/></svg>', iconSize: [42, 42] });
  points.forEach(point => {
    const marker = L.marker([point.lat, point.lng], { icon: point.featured ? featuredMarkerIcon : markerIcon })
      .addTo(map)
      .bindPopup(`<strong>${point.name}</strong><br>${point.address}<br><small>${point.accepts}</small>`);
    marker.on('click', () => focusCard(point.id));
    markers.set(point.id, marker);
  });
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
      <div class="tags">${point.categories.map(cat => `<span class="tag">${categoryLabels[cat]}</span>`).join('')}</div>
      <p><strong>Recebe:</strong> ${point.accepts}</p>
      <p><strong>Funcionamento:</strong> ${point.hours}</p>
      <div class="card-actions">
        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(point.address + ', Petrolina, PE')}" target="_blank" rel="noopener"><svg class="icon"><use href="#i-route"></use></svg>Como chegar</a>
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
  if (nextRoute === 'mapa' && hasLeaflet) requestAnimationFrame(() => map.invalidateSize());
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

if (!matchMedia('(display-mode: standalone)').matches) {
  installButton.hidden = false;
}

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));

render();
setRoute(location.hash.slice(1) || 'inicio', false);
