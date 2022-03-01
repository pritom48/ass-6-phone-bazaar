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

    //get all information from api
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');

        //creat dynamic card
        div.innerHTML = `
        <div class="card h-100 rounded border-0 shadow">
                    <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
             <div class="card-body">
                    <h5 class="card-title text-center">Phone Model : ${phone.phone_name}</h5>
                    <h6 class="text-center">Phone Brand : ${phone.brand}</h6>
            </div>
            <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-secondary w-50 mx-auto">Phone Details</button>
        </div>    
        `;

        searchResult.appendChild(div);
    });
}



const loadPhoneDetails = slugId => {
    const url = `https://openapi.programming-hero.com/api/phone/${slugId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
};

const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="row g-0 w-50 mx-auto">
        <div class="col-md-4">
            <img src="${phone.image}" class="img-fluid  rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h3 class="card-title">${phone.name}</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    `;

    phoneDetails.appendChild(div)
}