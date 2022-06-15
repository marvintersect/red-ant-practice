const comicsService = {
  fetchComics () {
    return fetch(`https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288&limit=6&offset=0`)
    .then(response => response.json())
  }
}

export default comicsService