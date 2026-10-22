// 這個檔案控制六個頁面的內容、手機選單，以及簡單的企業採購試算。
const pages = {
  "index.html": `
    <section class="hero"><div class="container hero-inner">
      <div><p class="eyebrow">SUSTAINABLE FOOD BOX</p><h1>讓格外品，成為餐桌上的永續美味。</h1>
        <p class="lead">串聯在地農民、食品加工廠、企業與消費者，讓外觀不完美、品質仍良好的農產品重新創造價值。</p>
        <div class="actions"><a class="btn" href="products.html">探索惜食箱 →</a><a class="btn secondary" href="business.html">了解企業合作</a></div>
      </div><div class="visual" role="img" aria-label="惜食箱概念插畫"><div><span class="big-emoji">🥕🍅🥬</span><p>珍惜食物 · 創造循環</p><span class="small-tag">每箱企劃定價 NT$499</span></div></div>
    </div></section>
    <section class="block"><div class="container"><div class="section-head"><p class="eyebrow">WHY WE START</p><h2>好食物，不該因外觀而被忽略</h2><p>從產地格外品出發，透過妥善篩選與專業食品加工，讓農產品以不同形式回到日常餐桌。</p></div>
      <div class="grid"><article class="card"><span class="icon">🌱</span><h3>支持在地農業</h3><p>增加格外品利用機會，探索小農合作與新的銷售管道。</p></article><article class="card"><span class="icon">🍲</span><h3>延長食材價值</h3><p>規劃加工成調理包、湯底、果乾等方便保存與使用的食品。</p></article><article class="card"><span class="icon">🏢</span><h3>企業永續採購</h3><p>結合員工福利與企業贈禮需求，提供可追蹤的惜食相關紀錄。</p></article></div></div></section>
    <section class="block tinted"><div class="container"><div class="section-head"><p class="eyebrow">HOW IT WORKS</p><h2>從產地到餐桌，形成循環</h2></div>
      <div class="process"><div class="step"><div class="num">01</div><h3>在地農民</h3><p>供應可安全食用的格外品</p></div><div class="step"><div class="num">02</div><h3>食品加工</h3><p>依食品安全規範製成產品</p></div><div class="step"><div class="num">03</div><h3>永續福利箱</h3><p>組合成便利的惜食商品</p></div><div class="step"><div class="num">04</div><h3>消費者與企業</h3><p>以日常採購參與惜食</p></div></div></div></section>
    <section class="block"><div class="container"><div class="section-head"><p class="eyebrow">PREORDER TO PRODUCTION</p><h2>先預購，再排產：減少不必要的庫存</h2><p>首批預計以企業與校園教職員團購進行 100 箱 MVP 驗證。下方為互動示範，尚非實際預購量。</p></div>
      <div class="demo-panel"><div class="demo-head"><strong>第一批示範預購進度</strong><span class="pill">模擬數據</span></div><div class="progress-value"><strong id="preorder-count">36</strong> / 100 箱</div><div class="progress-track"><div id="preorder-bar" class="progress-fill" style="width:36%"></div></div><label for="preorder-slider">調整示範預購量（僅本機互動）</label><input id="preorder-slider" type="range" min="0" max="100" value="36"><p id="preorder-remaining" aria-live="polite">距離 100 箱目標還差 64 箱。</p><div class="actions"><a class="btn" href="order.html">體驗預購流程 →</a><a class="btn secondary" href="business.html">企業團購方案</a></div></div>
    </div></section>
    <section class="block"><div class="container"><div class="highlight"><div><p class="eyebrow" style="color:#e9f0e8">OUR IMPACT</p><h2>永續，不只有理念，也需要數據。</h2><p>查看格外品攔截、產品推廣與合作夥伴的第一年企劃目標。</p></div><a class="btn" href="esg.html">查看 ESG 儀表板 →</a></div></div></section>`,
  "products.html": `
    <section class="page-hero"><div class="container"><p class="eyebrow">SUBSCRIPTION BOX</p><h1>產品訂閱</h1><p>規劃以容易料理與保存的惜食食品，讓永續生活更容易開始。</p></div></section>
    <section class="block"><div class="container"><div class="grid"><article class="card"><span class="icon">📦</span><h2>永續福利訂閱箱</h2><div class="price">NT$499 <small style="font-size:1rem">／箱</small></div><p>企劃規劃每箱包含 4～6 樣產品，包括主餐調理包、濃縮湯底、果乾與選配商品。</p><p>未來規劃每週與每月配送方案。</p><a class="btn" href="order.html">前往訂購專區 →</a></article><article class="card"><span class="icon">🍛</span><h3>主餐調理包</h3><p>規劃高纖咖哩燉蔬菜等料理，方便簡單加熱。</p></article><article class="card"><span class="icon">🍊</span><h3>湯底與果乾</h3><p>規劃高湯底、南瓜濃湯底與宜蘭特色果乾等產品。</p></article></div><p class="note">此頁為專題示範，NT$499 為企劃定價，尚未開放實際下單或收款；實際產品、食安資訊及配送條件需營運前確認。</p></div></section>`,
  "business.html": `
    <section class="page-hero"><div class="container"><p class="eyebrow">CORPORATE PARTNERSHIP</p><h1>企業永續採購</h1><p>將員工福利、節慶贈禮與惜食理念結合，為企業提供具永續價值的採購選擇。</p></div></section>
    <section class="block"><div class="container"><div class="grid"><article class="card"><span class="icon">🎁</span><h3>員工福利與贈禮</h3><p>以既有福利或商務贈禮需求導入惜食商品。</p></article><article class="card"><span class="icon">🚚</span><h3>集中配送規劃</h3><p>依企業需求評估集中採購與配送方式。</p></article><article class="card"><span class="icon">📊</span><h3>採購紀錄</h3><p>規劃提供商品來源、採購量與惜食績效資料。</p></article></div>
      <div class="demo-panel" style="margin-top:25px"><p class="eyebrow">B2B2HUB</p><h2>企業預購 → 集中排產 → Hub 集中取貨</h2><div class="process"><div class="step"><div class="num">01</div><h3>彙整需求</h3><p>企業或教職員團購登記箱數</p></div><div class="step"><div class="num">02</div><h3>批次排產</h3><p>依預購需求評估試製與批次加工</p></div><div class="step"><div class="num">03</div><h3>集中交付</h3><p>送達預先確認的企業／校園據點</p></div></div><p class="note">據點、批次及合作對象仍在規劃，沒有正式開放取貨。</p></div>
      <div class="card" style="margin-top:25px"><h2>企業採購金額試算</h2><p>以企劃零售價每箱 NT$499 試算，不代表正式企業報價。</p><div class="form-grid"><div class="field"><label for="box-count">預計採購箱數</label><input id="box-count" type="number" min="1" max="100000" step="1" value="100"></div></div><p id="estimate" class="result" aria-live="polite">預估金額：NT$49,900</p><a class="btn" href="order.html?type=business">體驗企業團購預購 →</a></div></div></section>`,
  "esg.html": `
    <section class="page-hero"><div class="container"><p class="eyebrow">SUSTAINABILITY DASHBOARD</p><h1>ESG 永續成效儀表板</h1><p>讓惜食與合作成果可視化。以下為企劃第一年目標，非實際達成成效。</p></div></section>
    <section class="block"><div class="container"><div class="kpis"><div class="kpi"><span>首批 MVP 預購目標</span><strong>100 箱</strong></div><div class="kpi"><span>第一年試行銷售目標</span><strong>1,000 箱</strong></div><div class="kpi"><span>企劃單箱貢獻利益</span><strong>NT$179</strong></div><div class="kpi"><span>企劃每月固定費用</span><strong>NT$35,000</strong></div></div>
    <div class="demo-panel"><div class="demo-head"><h2>成本敏感度比較</h2><span class="pill">企劃試算・非營運成果</span></div><p>依最新版企劃書第 13～14 頁，當單箱變動成本增加，達損益平衡所需的每月銷量也會上升。</p><div class="bars"><div class="bar-row"><span>基準成本 NT$320</span><div class="bar-track"><div class="bar" style="width:66.4%"></div></div><strong>196 箱/月</strong></div><div class="bar-row"><span>成本增加 NT$30</span><div class="bar-track"><div class="bar" style="width:79.7%"></div></div><strong>235 箱/月</strong></div><div class="bar-row"><span>成本增加 NT$60</span><div class="bar-track"><div class="bar" style="width:100%"></div></div><strong>295 箱/月</strong></div></div><p class="note">圖表為企劃情境，並非實際銷售；減碳量未經排放係數與盤查驗證，故不顯示虛構數值。</p></div>
    <div class="note">此頁目前只展示企劃目標。實際減碳數據需要建立盤查邊界、基準情境、排放係數與計算方法，不能以格外品重量直接換算成經認證減排量。</div>
    <div class="grid"><article class="card"><span class="icon">🌍</span><h3>E｜環境</h3><p>規劃追蹤格外品利用量與具有方法依據的環境影響估計。</p></article><article class="card"><span class="icon">🤝</span><h3>S｜社會</h3><p>規劃追蹤在地合作夥伴、惜食箱及待用箱相關紀錄。</p></article><article class="card"><span class="icon">🧾</span><h3>G｜治理</h3><p>逐步建立採購、來源、計算方式與資料更新紀錄。</p></article></div></div></section>`,
  "stories.html": `
    <section class="page-hero"><div class="container"><p class="eyebrow">FROM FARM TO TABLE</p><h1>產地故事</h1><p>認識被外觀標準忽略的好食材，以及它們如何轉化成新的產品可能。</p></div></section>
    <section class="block"><div class="container"><div class="grid"><article class="card"><span class="icon">🧅</span><h3>宜蘭三星蔥</h3><p>探索規格差異農產品的加工可能。</p></article><article class="card"><span class="icon">🐉</span><h3>員山紅龍果</h3><p>將外觀瑕疵但適合食用的原料，規劃加工成特色商品。</p></article><article class="card"><span class="icon">🍊</span><h3>枕山金棗</h3><p>規劃運用宜蘭特色金棗開發果乾等商品。</p></article></div><div class="demo-panel"><div class="demo-head"><h2>食品批次履歷示範</h2><span class="pill">假資料示範</span></div><p>展示未來每批產品可公開的追溯資訊；以下內容均為欄位範例，不代表真實已檢驗或已出貨的商品。</p><div class="trace-grid"><div><span>批次編號</span><strong>DEMO-001</strong></div><div><span>農產品</span><strong>宜蘭金棗（候選品）</strong></div><div><span>來源農戶</span><strong>合作資訊待確認</strong></div><div><span>加工廠／認證</span><strong>正式合作與文件待確認</strong></div><div><span>檢驗結果</span><strong>尚無可公開檢驗紀錄</strong></div><div><span>保存與過敏原</span><strong>依實際商品標示</strong></div></div><p class="note">未來取得真實批次資料後，可建立獨立履歷網址，再印製 QR Code 供消費者掃描。</p></div><p class="note">以上為企劃中的候選農產與應用方向，不代表已與農民簽約或已有上市產品。</p></div></section>`,
  "contact.html": `
    <section class="page-hero"><div class="container"><p class="eyebrow">GET IN TOUCH</p><h1>聯絡我們</h1><p>對惜食訂閱、企業採購、在地農民或加工合作有興趣嗎？歡迎關注計畫進展。</p></div></section>
    <section class="block"><div class="container"><div class="card"><h2>合作洽詢</h2><p>這是專題展示原型，目前尚未啟用表單或公開聯絡信箱。</p><p>下一階段可以建立 Google 表單，蒐集一般消費者、企業、農民與加工廠的合作意願。</p><p class="note">正式蒐集個人資料前，應準備隱私告知與資料用途說明。</p><a class="btn secondary" href="index.html">← 返回首頁</a></div></div></section>`
};

const current = location.pathname.split("/").pop() || "index.html";
if (current !== "order.html") if (pages[current]) document.getElementById("app").innerHTML = pages[current];
for (const link of document.querySelectorAll(".site-nav a")) {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
}
const menu = document.querySelector(".menu-toggle");
menu.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
  document.getElementById("site-nav").classList.toggle("open", !expanded);
});
const countInput = document.getElementById("box-count");
if (countInput) {
  const output = document.getElementById("estimate");
  const updateEstimate = () => {
    const value = Number(countInput.value);
    output.textContent = Number.isInteger(value) && value >= 1 && value <= 100000
      ? `預估金額：NT$${(value * 499).toLocaleString("zh-TW")}`
      : "請輸入 1～100,000 的整數箱數";
  };
  countInput.addEventListener("input", updateEstimate);
}
document.getElementById("year").textContent = new Date().getFullYear();

const preorderSlider=document.getElementById('preorder-slider');
if(preorderSlider){const update=()=>{const n=Number(preorderSlider.value);document.getElementById('preorder-count').textContent=n;document.getElementById('preorder-bar').style.width=n+'%';document.getElementById('preorder-remaining').textContent=n===100?'示範目標已達成（非真實預購）':`距離 100 箱目標還差 ${100-n} 箱。`;};preorderSlider.addEventListener('input',update);update();}
