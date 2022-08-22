let input = document.getElementById('input');
let searchBtn = document.querySelector('.search-btn');
let removeBtn = document.querySelector('.remove-btn');
let output = document.querySelector('.output');
let key = '';
let apiKey = 'xxwSFW2klxQMmflKSLqqUw8TrN90UkaO';
let html = '';
searchBtn.onclick = function(){
    var key = input.value;
    let result = axios.get(`http://api.giphy.com/v1/gifs/search?q=${key}&api_key=${apiKey}`);
    result
        .then(response => {
            console.log(response.data.data[0].images.preview_gif.url);
            let random = Math.floor(Math.random()*50);
            var url = response.data.data[random].images.preview_gif.url;
            html += `<img src=${url} height="300px" width:"300px"/>`;
            output.innerHTML = html;
        })
}
removeBtn.onclick = function(){
    output.innerHTML = '';
}