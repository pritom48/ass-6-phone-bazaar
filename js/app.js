const searchPhone = () => {
    //get search field result
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';

    //load information from api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => DisplaySearchResult(data.data))
}


const DisplaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top" alt="...">
             <div class="card-body">
                    <h5 class="card-title">Phone Model : ${phone.phone_name}</h5>
                    <h6>Phone Brand : ${phone.brand}</h6>
            </div>
        </div>    
        `;

        searchResult.appendChild(div);
    });
}