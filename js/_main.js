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
        else if (world.need_resource_pack == "recommended") {
            const cardHtml = `
                <div class="card">
                    <div class="card-image-container">
                        <img class="card-image" src="${world.image}" alt="${world.name}">
                    </div>
                    <div class="content">
                        <h2>${world.name}</h2>
                        <p>対応バージョン：${world.version}</p>
                        <p>プレイ人数：${world.players}</p>
                        <p class="text-color-orange">リソースパック：推奨</p>
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
        name: "Zombie Curling",
        version: "26.3",
        players: "2人～4人",
        need_resource_pack: "needless",
        description: [
            "モンスターを氷の上で弾いて",
            "得点を競おう！",
            "モンスターごとの個性を使い分けよう！"
        ],
        image: "https://placehold.co/600x400/202020/ffffff?text=Zombie+Curling",
        download_path: {
            world_data: "https://github.com/mikan-mc/myworlds/releases/latest/download/baka.zip",
            resource_pack: "NONE"
        }
    },
    {
        id: 1,
        name: "重力あべこべアドベンチャー",
        version: "26.3",
        players: "1人",
        need_resource_pack: "needless",
        description: [
            "重力の向きを操作して",
            "",
            ""
        ],
        image: "https://placehold.co/600x400/2c8bea/ffffff?text=重力あべこべアドベンチャー",
        download_path: {
            world_data: "https://github.com/mikan-mc/myworlds/releases/latest/download/baka.zip",
            resource_pack: "NONE"
        }
    },
    {
        id: 2,
        name: "DaD in Minecraft",
        version: "26.3",
        players: "1人～（大人数推奨）",
        need_resource_pack: "required",
        description: [
            "ランダム生成のダンジョンを探索し、",
            "敵やチェストからアイテムを手に入れよう！",
            "他のプレイヤーを倒して持ち物を奪い取れ！"
        ],
        image: "https://placehold.co/600x400/202020/ffffff?text=DaD+in+Minecraft",
        download_path: {
            world_data: "https://github.com/mikan-mc/myworlds/releases/latest/download/baka.zip",
            resource_pack: "https://github.com/mikan-mc/myworlds/releases/latest/download/baka.zip"
        }
    },
    {
        id: 3,
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
            world_data: "https://github.com/mikan-mc/myworlds/releases/latest/download/baka.zip",
            resource_pack: "NONE"
        }
    }
];
