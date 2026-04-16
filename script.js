    const newGames = [
        { title: "Royal Easter", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1774547337625_Royal%20Easter.png", provider: "BGaming" },
        { title: "Sugar Merge Up", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1774956329210_Sugar%20Merge%20Up.png", provider: "BGaming" },
        { title: "CULT.", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1774380352197_CULT..png", provider: "PragmaticPlay" },
        { title: "Rice & Riches", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/provider-images/40b80ddb44da4b56f6c1b8bc773290e2a2d885d0.png", provider: "Mascot" },
        { title: "Mummyland Treasures", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1773146257298_mummyland%20treasures.png", provider: "Belatra" },
        { title: "Mummy Mines", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1773145823707_Mummy%20Mines.png", provider: "Belatra" },
        { title: "Olympus Rivals", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772619649399_Olympus%20Rivals.png", provider: "AmigoGaming" },
        { title: "Sloteus Gold", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772787068294_Sloteus%20Gold.png", provider: "Endorphina" },
        { title: "Fruit Invaders", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772786751790_Fruit%20Invaders.png", provider: "AmigoGaming" },
        { title: "Crown Coins", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772787121807_Crown%20Coins.png", provider: "Endorphina" },
        { title: "Mummy's Jewels 100", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772618423154_Mummy%27s%20Jewels%20100.png", provider: "PragmaticPlay" },
        { title: "Sultans Fortune", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772469618158_Sultans%20Fortune.png", provider: "KAGaming" },
        { title: "Gold Canyon", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772197713078_Gold%20Canyon.png", provider: "Betsoft" },
        { title: "Burning Hell 3000", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1776331271139_Prerelease%20Burning%20Hell%203000%20Degrees%20-%20Endorphina%20%28Kush%29_Cover.png", provider: "Endorphina" },
        { title: "Jewel Boost Reels", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1776330309133_Jewel%20Boost%20Reels.png", provider: "Mascot" },
    ];

    const topGames = [
        { title: "Striking Diamond 3", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1773224174735_STRIKING%20DIAMOND%203_%20RUNNING%20WINS%E2%84%A2.png", provider: "Fugaso" },
        { title: "Mega Thunder", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772469217665_MEGA%20THUNDER_%20RUNNING%20WINS%E2%84%A2%20X-SERIES.png", provider: "Fugaso" },
        { title: "Atomic Coins 2", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1773652542163_Atomic%20Coins%202_%20Running%20Wins.png", provider: "Fugaso" },
        { title: "Bonanza Billion Xtreme", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1773304000730_Bonanza%20Billion%20Xtreme.png", provider: "BGaming" },
        { title: "Merge Up 2", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1773139236882_Merge%20Up%202.png", provider: "BGaming" },
        { title: "Mystery Heist", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772625264502_Mystery%20Heist.png", provider: "BGaming" },
        { title: "Starlight Princess 1000", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1775227276744_Starlight%20Princess%201000.png", provider: "PragmaticPlay" },
        { title: "Sweet Rush Bonanza", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1775227415737_Sweet%20Rush%20Bonanza.png", provider: "PragmaticPlay" },
        { title: "Haunted Crypt", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1775227483630_Haunted%20Crypt.png", provider: "PragmaticPlay" },
        { title: "Knights vs Barbarians", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1775227565797_Knights%20vs%20Barbarians.png", provider: "PragmaticPlay" },
        { title: "Fortune Bags", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772629280571_Fortune%20Bags.png", provider: "AmigoGaming" },
        { title: "Friar Tuck's INN", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772787663882_Friar%20Tuck%27s%20INN.png", provider: "Mascot" },
    ];

    const liveGames = [
        { title: "VIP Blackjack 1", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772617568209_vip%20blackjack%201.png", provider: "PragmaticPlayLive" },
        { title: "Mega Baccarat", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772617501175_mega%20baccarat.png", provider: "PragmaticPlayLive" },
        { title: "Crazy Time A", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772617217055_Crazy%20Time%20A.png", provider: "Evolution" },
        { title: "Super Sic Bo", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772620057114_Super%20Sic%20Bo.png", provider: "Evolution" },
        { title: "Lightning Baccarat", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772620702667_Lightning%20Baccarat.png", provider: "Evolution" },
        { title: "Infinite Blackjack", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772621156727_Infinite%20Blackjack.png", provider: "Evolution" },
        { title: "Speed Baccarat 1", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772620801179_Speed%20Baccarat%201.png", provider: "PragmaticPlayLive" },
        { title: "Craps", img: "https://backend-eva-client-bucket.s3.eu-central-1.amazonaws.com/image/1772620120004_Craps.png", provider: "Evolution" },
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
