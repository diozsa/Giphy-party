console.log("Let's get this party started!");
let gifArea = document.getElementById('gif');
let form = document.getElementById('form');
let searchText = "";
form.addEventListener ('click', async function (e) {
    e.preventDefault();
    searchText = document.getElementById('word').value;
    let res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchText,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    })
    
    form.reset();
    //console.log(res.data);

    addGif(res.data);

})

function addGif(response) {
    
    let resultsCount = response.data.length;
    if (resultsCount >0) {
        let random = Math.floor(Math.random() * resultsCount);
        let newGif = document.createElement("img");
        newGif.src = response.data[random].images.original.url;
        let newDiv = document.createElement("div");
        newDiv.append(newGif);
        gifArea.append(newDiv);
    }
    }


//remove with jQuery
 $("#remove").on("click", function() {
    $("#gif").empty()
 })
