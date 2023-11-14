import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// Lógica para pegar as informações das pessoas usuárias e preencher o select aqui
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    fillUsersSelect(data.users);
  })
  .catch((err) => console.log(err.menssage));

usersSelect.addEventListener('change', () => {
  clearPageData();
  const UserID = usersSelect.value;

  // Lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  fetch(`https://dummyjson.com/posts/user/${UserID}`)
    .then((response) => response.json())
    .then((data) => {
      const firstPostId = data.posts[0].id;

      fillPosts(data.posts);

      fetch(`https://dummyjson.com/posts/${firstPostId}/comments`)
        .then((response) => response.json())
        .then((data) => {
          fillFeaturedPostComments(data.comments);
        });
    })
    .catch((err) => fillErrorMessage(err));
});
