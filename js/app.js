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
    searchResult.innerHTML = '';
    if (phones.length == 0) {
        const error = document.getElementById('error-msg');
        const div = document.createElement('div')
        div.innerHTML = `
            <h3 class="text-center text-danger">!!! NO RESULT FOUND</h3>
            <p class="text-center text-danger">Search again</p>
        `;
        error.appendChild(div);
    }

    else {

    }

    //get all information from api
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');

        //creat dynamic card
        div.innerHTML = `
        <div class="card h-100 rounded border-0 shadow mt-5">
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
    <div class="row g-0 w-50 mx-auto mt-5 mb-5">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
            <img src="${phone.image}" class="img-fluid  rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title">${phone.name}</h2>
                <h6>Releas Date :${phone.releaseDate}</h6>
                <h3>Main Features</h3>
                <p><b>ChipSet</b> : ${phone.mainFeatures.chipSet}</p>
                <p><b>Display </b>: ${phone.mainFeatures.displaySize}</p>
                <p><b>Stroage</b> : ${phone.mainFeatures.memory}</p>
                <h3>Other Features</h3>
                <p><b>Bluetooth</b> : ${phone.others.Bluetooth}</p>
                <p><b>GPS</b> : ${phone.others.GPS}</p>
                <p><b>NFC</b> : ${phone.others.NFC}</p>
                <p><b>Radio</b> : ${phone.others.Radio}</p>
                <p><b>USB</b> : ${phone.others.USB}</p>
                <p><b>WLAN</b> : ${phone.others.WLAN}</p>
            </div>
        </div>
    </div>
    `;

    phoneDetails.appendChild(div)
}