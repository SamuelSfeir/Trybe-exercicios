const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Aland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

  // -------- Exercício 01 ---------- 
  function getPopulation(countries) {
    const totalPopulation = countries.reduce((accumulator, currentCountry) => accumulator + currentCountry.population, 0);
    return totalPopulation;
  }
  
  const totalPopulation = getPopulation(countries);
  console.log(`A população total de todos os países é: ${totalPopulation}`);

  // -------- Exercício 02 ---------- 
  function longestName(countries) {
    if (countries.length === 0) {
      return null;
    }
  
    const countryWithLongestName = countries.reduce((prev, current) =>
      prev.name.length > current.name.length ? prev : current
    );
  
    return countryWithLongestName;
  }
  
  const country = longestName(countries);
  console.log(`O país com o nome mais longo é: ${country.name}`);

// -------- Exercício 03 ---------- 
function totalAreaByRegion(countries, region = 'Europe') {
    const areaTotal = countries
      .filter(country => country.region === region)
      .reduce((accumulator, currentCountry) => accumulator + currentCountry.area, 0);
  
    return areaTotal;
  }
  
  const totalAreaEurope = totalAreaByRegion(countries, 'Europe');
  console.log(`Área total da região 'Europe': ${totalAreaEurope} km²`);
  
  const totalAreaAsia = totalAreaByRegion(countries, 'Asia');
  console.log(`Área total da região 'Asia': ${totalAreaAsia} km²`);


  // -------- Exercício 04 ------
  function getLargestCountriesByRegion(countries) {
    const largestCountriesByRegion = {};
  
    for (const country of countries) {
      if (!largestCountriesByRegion[country.region] || country.area > largestCountriesByRegion[country.region].area) {
        largestCountriesByRegion[country.region] = {
          name: country.name,
          area: country.area
        };
      }
    }
  
    return largestCountriesByRegion;
  }
  
  const largestCountries = getLargestCountriesByRegion(countries);
  console.log(largestCountries);
  