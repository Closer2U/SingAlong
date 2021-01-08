async function getLyrics(artist, songTitle){
    try {
        let res = await fetch(`${API_URL}/v1/${artist}/${songTitle}`); // Here is the most tricky part
        let data = await res.json()
            
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br/>'); // This will replace all the lyrics at the same time
 
        if(data.lyrics == undefined){
            alert('No lyrics fount !!!')
        } 
 
        result.innerHTML = `
 
        <div class="single-lyrics text-center">
 
        <h2 class="text-success mb-4">${artist} - ${songTitle}</h2>
 
        <pre class="lyric text-white">${lyrics}</pre>
 
        </div>