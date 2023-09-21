document.getElementById("page-title").innerText = "O menu"

document.getElementById("first-paragraph").innerText = "Um jovem casal visita um restaurante exclusivo em uma ilha remota onde o aclamado chef prepara um delicioso menu e algumas surpresas chocantes."

document.getElementById("subtitle").innerText = "Principais informações"

const paragraphs = document.getElementsByClassName('paragraph-style');
const firstParagraph = paragraphs[0];

firstParagraph.style.fontStyle = 'italic';

document.getElementsByClassName('paragraph-style')[1].innerText = "Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro"

const subtitleElement = document.getElementsByTagName('h2')[0];

subtitleElement.style.color = 'red';