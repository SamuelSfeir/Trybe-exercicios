// Exercício 01
const songs = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui
  const findSongById = songs.find((song) => song.id === '31031685')
//   console.log(findSongById);


// Exercício 02
const searchContact = (contacts, name) => {
    const foundContact = contacts.find(contact => contact.name === name);
  
    if (foundContact) {
      return { ...foundContact };
    }
    return "Contato não encontrado";
  };
    
  console.log(searchContact(contacts, 'Ana'));