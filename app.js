 
async function getData(url){
    let response = await fetch(url)
    .then((response) => {
         return response.json();
    })
    
    return  response;
}

function renderDiv(data){
    if(gifSection.firstChild){
        while (gifSection.firstChild) {
            gifSection.removeChild(gifSection.firstChild);
          }
    }
    data.results.forEach(element => {
        let div = document.createElement('div')
        div.className ="gifs-section_item"
        div.innerHTML =`<img src=${element.media[0].gif.url} alt="" class="gifs-section_gif skeleton">`
        gifSection.append(div)
        
    });
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let key = input.value
    let url = `https://g.tenor.com/v1/search?q=${key}&key=ZB54HEPT8K95`

    getData(url)
    .then((response)=>{
        renderDiv(response)
        animBlock()
    })
    
    

})


