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
    verification: 'Endereço oficial; posição refinada com cadastro eleitoral de 2026',
    precision: 'building',
    featured: true,
    source: 'FACESP — página oficial de contatos',
    sourceUrl: 'https://facespe.edu.br/contatos/',
    routeQuery: 'FACESP Faculdade de Educação Superior de Pernambuco, Rua Matias de Albuquerque 123, Gercino Coelho, Petrolina PE 56306-220'
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
    verification: 'Ponto reafirmado como fixo em publicação municipal recente',
    precision: 'entrance',
    source: 'MPPE — relação oficial de PEVs de Petrolina',
    sourceUrl: 'https://portal.mppe.mp.br/w/mppe-e-prefeitura-celebram-inauguracao-de-pontos-de-entrega-voluntaria-para-coleta-de-residuos-solidos',
    routeQuery: 'Parque Municipal Josepha Coelho, Rua Adelina Santana, Petrolina PE'
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
    precision: 'building',
    source: 'Correios — Sala de Imprensa',
    sourceUrl: 'https://saladeimprensa.correios.com.br/arquivos/14573',
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
    precision: 'building',
    source: 'Assaí Atacadista — unidade Petrolina',
    sourceUrl: 'https://www.assai.com.br/loja/assai-petrolina'
  },
  {
    id: 'atacadao',
    name: 'Atacadão — Petrolina',
    address: 'Av. Dr. Ulisses Guimarães, s/n — Jardim Amazonas — CEP 56318-525',
    lat: -9.3842064,
    lng: -40.5269931,
    categories: ['batteries', 'lamps'],
    accepts: 'Pilhas, baterias portáteis, baterias de eletrônicos e lâmpadas conforme identificação do coletor.',
    hours: 'Conforme funcionamento da unidade; confirme antes da visita',
    status: 'Ponto listado em sistema ativo de logística reversa',
    verification: 'Endereço no localizador atual da Green Eletron/Ambipar',
    precision: 'building',
    source: 'Green Eletron / Ambipar — localizador de PEVs',
    sourceUrl: 'https://sistema.gmclog.com.br/info/green?search_state=PE'
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

if (hasLeaflet) {
  map = L.map('map', { zoomControl: false }).setView([-9.3905, -40.5090], 13);
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
      .bindPopup(`<strong>${point.name}</strong><br>${point.address}<br><small>${point.status}</small><br><a href="${routeUrl(point)}" target="_blank" rel="noopener">Abrir localização</a>`);
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
      <span class="verification-badge">✓ ${point.verification}</span>
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

if (!matchMedia('(display-mode: standalone)').matches) {
  installButton.hidden = false;
}

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));

render();
setRoute(location.hash.slice(1) || 'inicio', false);
