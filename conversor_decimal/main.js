function convert(){
    const binary = document.getElementById('x-input').value;

    if(binary === '') return alert('Por favor, insira um numero binario');
    binary.split('').map((char) => {

        if(char !== '0' && char !== '1')return alert('Por favor, insira um numero binario');

    });

    const decimal = parseInt(binary , 2);
    document.getElementById('y-input').value = decimal;
    return true;

}