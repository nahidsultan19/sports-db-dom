const allPlayers = () => {
    document.getElementById('player-container').innerHTML = '';
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
    console.log('Hello');
}

const showPlayerDetails = players => {
    console.log(players)
    const parent = document.getElementById('player-container');
    for (const player of players) {
        console.log(player)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card border">
                <div class="pro-pic">
                    <img class="w-25" src="${player.strThumb}" alt="">
                </div>
                    <h2>Name:${player.strPlayer}</h2>
                    <h5>Country:${player.strNationality}</h5>
                    <p></p>
                <div class="allbutton">
                    <button class="btn btn-danger">Delete</button>
                    <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                </div>
            </div>
        `;
        parent.appendChild(div);
    }

}

const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => setDetail(data.players[0]))
    console.log('okaye', id)
}

const setDetail = info => {
    document.getElementById('details-container').innerHTML = `
    <div>
    <img src="" alt="">
    <h1>Name: ${info.strPlayer}</h1>
    </div>
    `
    console.log(info)
}