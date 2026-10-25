window.onload = function() {
    renderWorlds();
    setupHelpButtons();
};

function renderWorlds() {
    const container = document.getElementsByClassName('worlds-container')[0];
    worlds.forEach(world => {
        if (world.need_resource_pack == "required") {
            const cardHtml = `
                <div class="card">
                    <div class="card-image-container">
                        <img class="card-image" src="${world.image}" alt="${world.name}">
                    </div>
                    <div class="content">
                        <h2>${world.name}</h2>
                        <p>対応バージョン：${world.version}</p>
                        <p>プレイ人数：${world.players}</p>
                        <p class="text-color-red">リソースパック：必須</p>
                        <div class="space"></div>
                        <p>${world.description[0]}</p>
                        <p>${world.description[1]}</p>
                        <p>${world.description[2]}</p>
                        <div class="download-container">
                            <p>↓ ダウンロード ↓</p>
                            <div class="download-container-has_2_buttons">
                                <a class="download-button" href="${world.download_path.world_data}" download>ワールドデータ</a>
                                <a class="download-button" href="${world.download_path.resource_pack}" download>リソースパック</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cardHtml;
        }
        else if (world.need_resource_pack == "included") {
            const cardHtml = `
                <div class="card">
                    <div class="card-image-container">
                        <img class="card-image" src="${world.image}" alt="${world.name}">
                    </div>
                    <div class="content">
                        <h2>${world.name}</h2>
                        <p>対応バージョン：${world.version}</p>
                        <p>プレイ人数：${world.players}</p>
                        <p>リソースパック：同梱済み</p>
                        <div class="space"></div>
                        <p>${world.description[0]}</p>
                        <p>${world.description[1]}</p>
                        <p>${world.description[2]}</p>
                        <div class="download-container">
                            <p>↓ ダウンロード ↓</p>
                            <div class="download-container-has_1_button">
                                <a class="download-button" href="${world.download_path.world_data}" download>ワールドデータ</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cardHtml;
        }
        else {
            const cardHtml = `
                <div class="card">
                    <div class="card-image-container">
                        <img class="card-image" src="${world.image}" alt="${world.name}">
                    </div>
                    <div class="content">
                        <h2>${world.name}</h2>
                        <p>対応バージョン：${world.version}</p>
                        <p>プレイ人数：${world.players}</p>
                        <p>リソースパック：なし</p>
                        <div class="space"></div>
                        <p>${world.description[0]}</p>
                        <p>${world.description[1]}</p>
                        <p>${world.description[2]}</p>
                        <div class="download-container">
                            <p>↓ ダウンロード ↓</p>
                            <div class="download-container-has_1_button">
                                <a class="download-button" href="${world.download_path.world_data}" download>ワールドデータ</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cardHtml;
        }
    });
}

function setupHelpButtons() {
    const container1 = document.getElementsByClassName('header-help-button')[0];
    container1.addEventListener('click', (event) => {
        event.preventDefault();
        showHelpBox();
    });
    const container2 = document.getElementsByClassName('helpbox-close')[0];
    container2.addEventListener('click', (event) => {
        event.preventDefault();
        closeHelpBox();
    });
}

function showHelpBox() {
    const helpBox = document.getElementsByClassName('helpbox-container')[0];
    helpBox.style.display = 'flex';
}

function closeHelpBox() {
    const helpBox = document.getElementsByClassName('helpbox-container')[0];
    helpBox.style.display = 'none';
}

const worlds = [
    {
        id: 0,
        name: "DaD in Minecraft",
        version: "1.21.8",
        players: "1人～（大人数推奨）",
        need_resource_pack: "included",
        description: [
            "ランダム生成のダンジョンを探索し、",
            "敵やチェストからアイテムを手に入れよう！",
            "他のプレイヤーを倒して持ち物を奪い取れ！"
        ],
        image: "https://placehold.co/600x400/202020/ffffff?text=DaD+in+Minecraft",
        download_path: {
            world_data: "./files/wow.zip",
            resource_pack: "./files/wow.zip"
        }
    },
    {
        id: 1,
        name: "Zombie Streak",
        version: "1.21.8",
        players: "1人",
        need_resource_pack: "needless",
        description: [
            "ゾンビを強化して戦わせよう！",
            "装備や能力の組み合わせを考えろ！",
            "育てたゾンビで友達とバトルも"
        ],
        image: "https://placehold.co/600x400/2c8bea/ffffff?text=Zombie+Streak",
        download_path: {
            world_data: "./files/wow.zip",
            resource_pack: "NULL"
        }
    },
    {
        id: 2,
        name: "Minigame Forest",
        version: "1.21.8",
        players: "2人～",
        need_resource_pack: "needless",
        description: [
            "ミニゲームがたくさん入ったワールド",
            "頭脳系からアクションまで好きなものを選んで",
            "みんなで暇つぶしに遊んでみよう！"
        ],
        image: "https://placehold.co/600x400/76f478/ffffff?text=Minigame+Forest",
        download_path: {
            world_data: "./files/wow.zip",
            resource_pack: "NULL"
        }
    },
    {
        id: 3,
        name: "DaD in Minecraft",
        version: "1.21.8",
        players: "1人～（大人数推奨）",
        need_resource_pack: "required",
        description: [
            "ランダム生成のダンジョンを探索し、",
            "敵やチェストからアイテムを手に入れよう！",
            "他のプレイヤーを倒して持ち物を奪い取れ！"
        ],
        image: "https://placehold.co/600x400/202020/ffffff?text=DaD+in+Minecraft",
        download_path: {
            world_data: "./files/wow.zip",
            resource_pack: "./files/wow.zip"
        }
    }
];
