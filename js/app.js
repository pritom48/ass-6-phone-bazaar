const searchPhone = () => {
    //get search field result
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    //load information from api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}