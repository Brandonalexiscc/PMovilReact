const URL = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=ab1f9fab5b2511a79852e4dc59f2a8ef&format=json';

function getMusicData(){
    return fetch(`${URL}`,{
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid, 
            name: artist.name,
            image: artist.image[0]['#text'],
            streamable: artist.streamable,
            playcount: artist.playcount
        }
    }))
}

function getInformationArtist(artistName){
    return fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=ab1f9fab5b2511a79852e4dc59f2a8ef&format=json`,{
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        return data.artist
    })
}

export {getMusicData, getInformationArtist};