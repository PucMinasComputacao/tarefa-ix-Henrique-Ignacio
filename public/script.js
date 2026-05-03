const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15 Pro Max",
      preco: 9499.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
      descricao: "O iPhone 15 Pro Max traz chip A17 Pro, câmera de 48MP com zoom óptico 5x, titanium design e USB-C com velocidades ProRes. Uma experiência premium sem igual.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24 Ultra",
      preco: 8299.00,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1706430942079-e25ee1a97a09?w=400&q=80",
      descricao: "Galaxy S24 Ultra com S Pen integrada, câmera de 200MP, processador Snapdragon 8 Gen 3 e tela Dynamic AMOLED 2X de 6.8 polegadas.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "MacBook Pro 14\" M3 Pro",
      preco: 16999.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
      descricao: "MacBook Pro com chip M3 Pro, tela Liquid Retina XDR de 14 polegadas, até 18h de bateria e desempenho imbatível para profissionais criativos.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Dell XPS 15 OLED",
      preco: 12499.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
      descricao: "Dell XPS 15 com display OLED 3.5K, Intel Core i9, NVIDIA RTX 4070 e 32GB RAM DDR5. O notebook Windows mais elegante para criação e produtividade.",
      emEstoque: false
    },
    {
      id: 5,
      nome: "Sony WH-1000XM5",
      preco: 1899.00,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
      descricao: "Fone over-ear com cancelamento de ruído líder da indústria, até 30h de bateria, áudio LDAC Hi-Res e design ultraleve de apenas 250g.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "PlayStation 5 Slim",
      preco: 3999.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80",
      descricao: "PS5 Slim com SSD ultra-rápido de 1TB, Ray Tracing, 4K 120fps e controle DualSense com feedback háptico. A nova geração de jogos na palma da sua mão.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "Xbox Series X",
      preco: 4299.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&q=80",
      descricao: "Xbox Series X com 12 teraflops de poder, SSD NVMe de 1TB, Quick Resume e suporte nativo a 4K 60fps e 8K. O console mais poderoso já feito.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "iPad Pro 12.9\" M2",
      preco: 9799.00,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
      descricao: "iPad Pro com chip M2, tela mini-LED Liquid Retina XDR, conectividade Thunderbolt e suporte a Apple Pencil 2. O tablet mais avançado do mundo.",
      emEstoque: false
    },
    {
      id: 9,
      nome: "Logitech MX Master 3S",
      preco: 599.90,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
      descricao: "Mouse premium com scroll MagSpeed ultrasilencioso, sensor de 8000 DPI, bateria recarregável de 70 dias e conectividade em até 3 dispositivos.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Nintendo Switch OLED",
      preco: 2199.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&q=80",
      descricao: "Nintendo Switch com tela OLED de 7 polegadas, 64GB de armazenamento interno, dock ajustável com porta LAN integrada e Joy-Cons em branco.",
      emEstoque: true
    }
  ]
};


const productList    = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const productCount   = document.getElementById("product-count");


const searchInput    = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender      = document.querySelector("#btnRender");


function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function createProductCard(produto) {
  const card = document.createElement("div");
  card.setAttribute("data-id", produto.id);
  card.setAttribute("data-category", produto.categoria);
  card.classList.add("card");

  card.style.animationDelay = `${(produto.id % 8) * 0.04}s`;

  const imgWrap = document.createElement("div");
  imgWrap.classList.add("card-image-wrap");

  const img = document.createElement("img");
  img.setAttribute("src", produto.imagem);
  img.setAttribute("alt", produto.nome);
  img.setAttribute("loading", "lazy");

  const catBadge = document.createElement("span");
  catBadge.classList.add("card-category-badge");
  catBadge.textContent = produto.categoria;

  const stockBadge = document.createElement("span");
  stockBadge.classList.add("stock-badge");
  if (produto.emEstoque) {
    stockBadge.classList.add("in-stock");
    stockBadge.textContent = "Em estoque";
  } else {
    stockBadge.classList.add("out-stock");
    stockBadge.textContent = "Esgotado";
  }

  imgWrap.appendChild(img);
  imgWrap.appendChild(catBadge);
  imgWrap.appendChild(stockBadge);

  const body = document.createElement("div");
  body.classList.add("card-body");

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = produto.nome;

  const price = document.createElement("p");
  price.classList.add("card-price");
  price.textContent = formatPrice(produto.preco);

  body.appendChild(title);
  body.appendChild(price);

  const actions = document.createElement("div");
  actions.classList.add("card-actions");

  const btnDetails = document.createElement("button");
  btnDetails.classList.add("btn-details");
  btnDetails.textContent = "Ver detalhes";

  const btnHighlight = document.createElement("button");
  btnHighlight.classList.add("btn-highlight");
  btnHighlight.setAttribute("title", "Destacar produto");
  btnHighlight.textContent = "★";

  btnDetails.addEventListener("click", function () {
    showProductDetails(produto);
    productDetails.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  btnHighlight.addEventListener("click", function () {
    card.classList.toggle("highlight");
    const isHighlighted = card.classList.contains("highlight");
    console.log(
      `[Destacar] Produto id=${produto.id} – "${produto.nome}" ${isHighlighted ? "DESTACADO ★" : "destaque removido"}`
    );
  });

  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);

  card.appendChild(imgWrap);
  card.appendChild(body);
  card.appendChild(actions);

  return card;
}

function renderProducts(produtos) {
  productList.innerHTML = "";

  if (produtos.length === 0) {
    const empty = document.createElement("div");
    empty.classList.add("empty-state");
    empty.innerHTML = `
      <span class="empty-icon">🔭</span>
      <p>Nenhum produto encontrado com esses filtros.</p>
    `;
    productList.appendChild(empty);
    updateCount(0);
    return;
  }

  produtos.forEach(function (produto) {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  updateCount(produtos.length);

  const allCards = document.querySelectorAll(".card");
  console.log(`\n📦 querySelectorAll(".card") – ${allCards.length} card(s) renderizado(s):`);
  allCards.forEach(function (card) {
    const id   = card.getAttribute("data-id");
    const cat  = card.getAttribute("data-category");
    const name = card.querySelector(".card-title").textContent;
    console.log(`  → data-id=${id} | categoria="${cat}" | produto="${name}"`);
  });
}

function renderCategories() {
  categorySelect.innerHTML = '<option value="">Todas</option>';

  const categorias = [...new Set(data.produtos.map(p => p.categoria))].sort();

  categorias.forEach(function (cat) {
    const option = document.createElement("option");
    option.setAttribute("value", cat);
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  console.log("🏷️  Categorias carregadas:", categorias);
}

function showProductDetails(produto) {
  const stockClass  = produto.emEstoque ? "status-em-estoque"    : "status-fora-de-estoque";
  const stockLabel  = produto.emEstoque ? "✓ Em Estoque"         : "✕ Fora de Estoque";

  productDetails.innerHTML = `
    <div class="detail-card">
      <img
        class="detail-img"
        src="${produto.imagem}"
        alt="${produto.nome}"
      />
      <div class="detail-info">
        <h3 class="detail-name">${produto.nome}</h3>
        <p class="detail-price">${formatPrice(produto.preco)}</p>
        <div class="detail-meta">
          <span class="detail-tag">🗂 ${produto.categoria}</span>
          <span class="detail-tag ${stockClass}">${stockLabel}</span>
          <span class="detail-tag">ID #${produto.id}</span>
        </div>
        <p class="detail-desc-label">Descrição</p>
        <p class="detail-desc">${produto.descricao}</p>
      </div>
    </div>
  `;

  console.log(`\n🔍 Detalhes exibidos → id=${produto.id} | "${produto.nome}" | ${formatPrice(produto.preco)}`);
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCat = categorySelect.value;

  return data.produtos.filter(function (produto) {
    const matchSearch = produto.nome.toLowerCase().includes(searchTerm) ||
                        produto.descricao.toLowerCase().includes(searchTerm);
    const matchCat    = selectedCat === "" || produto.categoria === selectedCat;
    return matchSearch && matchCat;
  });
}

function updateCount(n) {
  productCount.textContent = `${n} produto${n !== 1 ? "s" : ""}`;
}

searchInput.addEventListener("input", function () {
  const filtrados = filterProducts();
  renderProducts(filtrados);
});

categorySelect.addEventListener("change", function () {
  const filtrados = filterProducts();
  renderProducts(filtrados);
});

btnRender.addEventListener("click", function () {
  searchInput.value = "";
  categorySelect.value = "";
  renderProducts(data.produtos);
  console.log("↻ Catálogo recarregado com todos os produtos.");
});

console.log("🚀 NEXUSSHOP inicializado – Matrícula: 1638573");
renderCategories();
renderProducts(data.produtos);
