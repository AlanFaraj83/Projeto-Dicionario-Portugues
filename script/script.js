let url = 'https://dicio-api-ten.vercel.app/v2/';

let inputTxt = document.querySelector('#container_inputtxt');
let btnTxt = document.querySelector('#container_btn');
let resultado = document.querySelector('#container_result');

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    if (palavra === '') {
        alert('Nada foi escrito');
    } else {
        fetch(`${url}${palavra}`)
            .then((resposta) => resposta.json())
            .then((data) => {
                console.log(data)
                resultado.innerHTML = 
                `<h3 id="container_palavra">${palavra}</h3>
                <p id="container-significa"><span>1°</span>${data[0].meanings[0]}</p>
                <p id="container-significa"><span>2°</span>${data[0].meanings[1]}</p>
                <p id="container-significa"><span>3°</span>${data[0].meanings[2]}</p>`

            }

            )
    }
})