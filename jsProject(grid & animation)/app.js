

function searchFilter() {
    const inputValue = document.querySelector('.myInput').value.toUpperCase()
    const products = document.querySelectorAll('.product')
    const imageName = document.getElementsByTagName('h2')

    for(var i = 0; i < products.length; i++) {
        let matchingName = products[i].getElementsByTagName('h2')[0]

        if(matchingName) {
            let textValue = matchingName.innerHTML || matchingName.textContent 

            if(textValue.toUpperCase().indexOf(inputValue) > -1) {
                products[i].style.display = ''
            } else {
                products[i].style.display = 'none'
            }
        }
    }
}

