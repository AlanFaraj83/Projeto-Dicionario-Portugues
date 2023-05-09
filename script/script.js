let url = 'https://dicio-api-ten.vercel.app/v2/';

let inputTxt = document.querySelector('#container_inputtxt');
let btnTxt = document.querySelector('#container_btn');
let resultado = document.querySelector('#container_result');

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    if (palavra ==='') {
        alert('Nada foi escrito');
    } else {
        fetch(`${url}${palavra}`).then((resposta) => console.log(resposta.json()))
    }
})