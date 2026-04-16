window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                gray: { 850: '#1a1a2e', 900: '#111827', 1000: '#0B0B0B' },
                eva: { green: '#017D63', teal: '#BDD9D4', gold: '#FFD679' }
            },
            fontFamily: { unbounded: ['Unbounded', 'sans-serif'], inter: ['Inter', 'sans-serif'] }
        }
    }
};
const newGames = [
        { title: "Royal Easter", img: "image/001.jpg", provider: "BGaming" },
        { title: "Sugar Merge Up", img: "image/002.jpg", provider: "BGaming" },
        { title: "CULT.", img: "image/003.jpg", provider: "PragmaticPlay" },
        { title: "Rice & Riches", img: "image/004.jpg", provider: "Mascot" },
        { title: "Mummyland Treasures", img: "image/005.jpg", provider: "Belatra" },
        { title: "Mummy Mines", img: "image/006.jpg", provider: "Belatra" },
        { title: "Olympus Rivals", img: "image/007.jpg", provider: "AmigoGaming" },
        { title: "Sloteus Gold", img: "image/008.jpg", provider: "Endorphina" },
        { title: "Fruit Invaders", img: "image/009.jpg", provider: "AmigoGaming" },
        { title: "Crown Coins", img: "image/010.jpg", provider: "Endorphina" },
        { title: "Mummy's Jewels 100", img: "image/011.jpg", provider: "PragmaticPlay" },
        { title: "Sultans Fortune", img: "image/012.jpg", provider: "KAGaming" },
        { title: "Gold Canyon", img: "image/013.jpg", provider: "Betsoft" },
        { title: "Burning Hell 3000", img: "image/014.jpg", provider: "Endorphina" },
        { title: "Jewel Boost Reels", img: "image/015.jpg", provider: "Mascot" },
    ];

    const topGames = [
        { title: "Striking Diamond 3", img: "image/016.jpg", provider: "Fugaso" },
        { title: "Mega Thunder", img: "image/017.jpg", provider: "Fugaso" },
        { title: "Atomic Coins 2", img: "image/010d6409210740aa3f2748721d44408b.png", provider: "Fugaso" },
        { title: "Bonanza Billion Xtreme", img: "image/100extracrown.webp", provider: "BGaming" },
        { title: "Merge Up 2", img: "image/10burningheart.webp", provider: "BGaming" },
        { title: "Mystery Heist", img: "image/15_coins_grand_platinum_edition.jpg", provider: "BGaming" },
        { title: "Starlight Princess 1000", img: "image/1aacfea064ab96655570ace48a52c850.png", provider: "PragmaticPlay" },
        { title: "Sweet Rush Bonanza", img: "image/2034d8e5fda33b28beaf7cc9d6b2c916.png", provider: "PragmaticPlay" },
        { title: "Haunted Crypt", img: "image/3_hot_chillies.webp", provider: "PragmaticPlay" },
        { title: "Knights vs Barbarians", img: "image/3buzzingwilds.webp", provider: "PragmaticPlay" },
        { title: "Fortune Bags", img: "image/40powerhotdiceeditiongoldencoinslink.webp", provider: "AmigoGaming" },
        { title: "Friar Tuck's INN", img: "image/46df9329ff3f8b9b3766bb6561c03de8.png", provider: "Mascot" },
    ];

    const liveGames = [
        { title: "VIP Blackjack 1", img: "image/58a009ad18e46228614efbaff418c7f1.png", provider: "PragmaticPlayLive" },
        { title: "Mega Baccarat", img: "image/777_fruity_coins.webp", provider: "PragmaticPlayLive" },
        { title: "Crazy Time A", img: "image/7ef93054ff2108e4cb61f62168ea2d20.png", provider: "Evolution" },
        { title: "Super Sic Bo", img: "image/931bb982bf8d8f4b6c32b1249b3fa943.png", provider: "Evolution" },
        { title: "Lightning Baccarat", img: "image/a_night_in_paris_jp.webp", provider: "Evolution" },
        { title: "Infinite Blackjack", img: "image/afaf009cfe87f2f7a3de08fdea5d05db.png", provider: "Evolution" },
        { title: "Speed Baccarat 1", img: "image/aviamasters.webp", provider: "PragmaticPlayLive" },
        { title: "Craps", img: "image/banana_farm.jpg", provider: "Evolution" },
    ];
        if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    function createGameCard(game) {
        return `
            <div class="group relative mb-2 cursor-pointer overflow-hidden rounded-2xl border-2 border-gray-600 bg-gray-1000 game-card-shadow transition-all duration-300 hover:border-yellow-300">
                <div class="aspect-[0.85] overflow-hidden">
                    <img src="${game.img}" alt="${game.title}" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" onerror="this.src='http://static.photos/gaming/320x240/1'"/>
                </div>
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 pt-8">
                    <p class="text-xs font-bold text-white truncate">${game.title}</p>
                    <p class="text-[10px] text-gray-400">${game.provider}</p>
                </div>
                <div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="btn-gold px-4 py-2 text-xs rounded-xl">Играть</button>
                </div>
            </div>
        `;
    }
    function renderGames(containerId, games) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = games.map(createGameCard).join('');
        }
    }
    renderGames('newGamesGrid', newGames);
    renderGames('topGamesGrid', topGames);
    renderGames('liveGamesGrid', liveGames);
    const liveWinsContainer = document.getElementById('liveWinsContainer');
    const gameNames = ['Sweet Bonanza', 'Gates of Olympus', 'Big Bass Bonanza', 'Starlight Princess', 'Sugar Rush', 'Book of Dead', 'Reactoonz', 'Fire Joker', 'Dog House', 'Money Train', 'Fruit Party', 'Gems Bonanza'];
    const players = ['Игрок***23', 'Игрок***77', 'Игрок***41', 'Игрок***99', 'Игрок***12', 'Игрок***55', 'Игрок***88', 'Игрок***64'];
    function generateLiveWin() {
        const game = gameNames[Math.floor(Math.random() * gameNames.length)];
        const player = players[Math.floor(Math.random() * players.length)];
        const amount = (Math.floor(Math.random() * 50000) + 500).toLocaleString('ru-RU');
        return `
            <div class="live-win-pulse flex items-center gap-2 rounded-full bg-gray-800 border border-gray-700 px-3 py-1.5 text-xs whitespace-nowrap">
                <span class="text-green-400 font-bold">${amount} ₽</span>
                <span class="text-gray-400">${player}</span>
                <span class="text-gray-500">•</span>
                <span class="text-yellow-300">${game}</span>
            </div>
        `;
    }
    function refreshLiveWins() {
        if (liveWinsContainer) {
            let html = '';
            for (let i = 0; i < 8; i++) {
                html += generateLiveWin();
            }
            liveWinsContainer.innerHTML = html;
        }
    }
    refreshLiveWins();
    setInterval(refreshLiveWins, 5000);
    const seoToggle = document.getElementById('seoToggle');
    const seoContent = document.getElementById('seoContent');
    const seoOverlay = document.getElementById('seoOverlay');
    const seoArrow = document.getElementById('seoArrow');
    let seoExpanded = false;
    seoToggle.addEventListener('click', () => {
        seoExpanded = !seoExpanded;
        if (seoExpanded) {
            seoContent.classList.remove('seo-collapsed');
            seoContent.classList.add('seo-expanded');
            seoOverlay.style.background = 'none';
            seoToggle.innerHTML = `Свернуть <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="transition-all duration-300 [&_path]:fill-gray-50 rotate-180"><path d="M17.92 8.17969H11.69H6.07999C5.11999 8.17969 4.63999 9.33969 5.31999 10.0197L10.5 15.1997C11.33 16.0297 12.68 16.0297 13.51 15.1997L15.48 13.2297L18.69 10.0197C19.36 9.33969 18.88 8.17969 17.92 8.17969Z" fill="#BDD9D4"/></svg>`;
        } else {
            seoContent.classList.add('seo-collapsed');
            seoContent.classList.remove('seo-expanded');
            seoOverlay.style.background = 'linear-gradient(360deg, #0B0B0B 25%, transparent 85%)';
            seoToggle.innerHTML = `Развернуть <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="transition-all duration-300 [&_path]:fill-gray-50"><path d="M17.92 8.17969H11.69H6.07999C5.11999 8.17969 4.63999 9.33969 5.31999 10.0197L10.5 15.1997C11.33 16.0297 12.68 16.0297 13.51 15.1997L15.48 13.2297L18.69 10.0197C19.36 9.33969 18.88 8.17969 17.92 8.17969Z" fill="#BDD9D4"/></svg>`;
        }
    });
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const mobileSidebarPanel = document.getElementById('mobileSidebarPanel');
    const closeSidebar = document.getElementById('closeSidebar');
    function openMobileSidebar() {
        mobileSidebar.classList.remove('invisible', 'opacity-0');
        mobileSidebar.classList.add('visible', 'opacity-100');
        setTimeout(() => {
            mobileSidebarPanel.style.right = '0';
        }, 10);
    }
    function closeMobileSidebar() {
        mobileSidebarPanel.style.right = '-100%';
        setTimeout(() => {
            mobileSidebar.classList.add('invisible', 'opacity-0');
            mobileSidebar.classList.remove('visible', 'opacity-100');
        }, 300);
    }
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileSidebar);
    if (closeSidebar) closeSidebar.addEventListener('click', closeMobileSidebar);
    if (mobileSidebar) mobileSidebar.addEventListener('click', (e) => {
        if (e.target === mobileSidebar) closeMobileSidebar();
    });
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => {
                t.classList.remove('border-yellow-300', 'bg-gray-700');
                t.classList.add('border-gray-600', 'bg-gray-800');
            });
            tab.classList.add('border-yellow-300', 'bg-gray-700');
            tab.classList.remove('border-gray-600', 'bg-gray-800');
        });
    });
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
