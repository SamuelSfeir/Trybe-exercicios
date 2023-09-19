const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  // Criação da função
  const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
      object[key] = value;
    }
  };
  
  // Chamada da função passando os valores dos parâmetros
  addProperty(customer, 'email', 'samuel1808@hotmail.com');
  addProperty(customer, 'fone', '119999999');
  addProperty(customer, 'user github', 'github/samuel');
  addProperty(customer, 'linkedin', 'samuelsfeir');
  
  // Exibe o objeto transformado
  console.log(customer);