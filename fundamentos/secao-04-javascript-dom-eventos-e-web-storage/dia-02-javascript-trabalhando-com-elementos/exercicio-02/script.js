const pai = document.getElementById('pai'); // Recupere o elemento com o id pai
    const irmaoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`
    // Crie um filho para `elementoOndeVoceEsta`.
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); // Recupere o elemento com o id elementoOndeVoceEsta
    const filhoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento 
    filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
    elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento `elementoOndeVoceEsta`
    // Crie um filho para `primeiroFilhoDoFilho`.
    const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
    const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento 
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // Adicione o elemento criado como filho do elemento `primeiroFilhoDoFilho`
    // A partir desse filho criado, acesse `terceiroFilho`.
    const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);