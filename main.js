const homeLink = document.querySelector('#homeLink');
const aboutLink = document.querySelector('#aboutLink');
const speakersCards = document.querySelector('.speakers-elt');

document.querySelector('#menu-icon').addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'flex';
  document.querySelector('.closeicon').style.display = 'block';
  document.querySelector('main').style.filter = ' blur(6px)';
});

document.querySelector('.closeicon').addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('header').style.filter = ' blur(0)';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('headeline').style.filter = ' blur(0)';
  document.querySelector('footer').style.filter = ' blur(0)';
});

aboutLink.addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('header').style.filter = ' blur(0)';
  document.querySelector('.headeline').style.filter = ' blur(0)';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('footer').style.filter = ' blur(0)';
});

homeLink.addEventListener('click', () => {
  document.querySelector('.menuformobile').style.display = 'none';
  document.querySelector('header').style.filter = ' blur(0)';
  document.querySelector('.headeline').style.filter = ' blur(0)';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('footer').style.filter = ' blur(0)';
});

/* eslint-enabled */
const ArtistsList = [
  {
    artistname: 'Charli Puth',
    imagelink: './img/Charlie Puth.jpg',
    desc1: 'American Singer',
    desc2: 'Charles Otto Puth Jr. (born in December 2, 1991) is an american singer, songwriter, and recor producer.',
  },
  {
    artistname: 'Simmy',
    imagelink: './img/Simmy.png',
    desc1: 'South African Singer',
    desc2: 'Simmy is a south African Music Award for Best Music Video of the year, Born in KwaZulu-Natal, South African',
  },
  {
    artistname: 'Anselmo Ralph',
    imagelink: './img/Anselmo Ralph.jpg',
    desc1: 'Angolian Singer',
    desc2: 'Anselmo Ralf Andrade Cordeiro, better known as Aselmo Ralph, is an Angolan singer. He is one of the better internationally known Angolan singers.',
  },
  {
    artistname: 'Demi Lovato',
    imagelink: './img/Demi Lovato.jpg',
    desc1: 'American Singer',
    desc2: 'Demetria Devonne Lovato, better known as Demi Lovato, is an American singer, songwriter, and actress.',
  },
  {
    artistname: 'Fally Ipupa',
    imagelink: './img/Fally Ipupa.jpg',
    desc1: 'Congolese Singer',
    desc2: 'Fally Ipupa Nsimba, known by his stage name Fally Ipupa, is a Congolese singer-songwriter, dancer, philanthropist, guitarist and producer.',
  },
  {
    artistname: 'Ed Sheeran',
    imagelink: './img/Ed Sheeran.jpg',
    desc1: 'English Singer',
    desc2: 'Edward Christopher Sheeran MBE is an English singer-songwriter. Born in Halifax, West Yorkshire and raised in Framlingham, Suffolk.',
  },
];

for (let i = 0; i < ArtistsList.length; i += 1) {
  speakersCards.innerHTML += `
  <div class="speaker-wrap">
  <img src="${ArtistsList[i].imagelink}" alt="">
  <div class="presentation">
    <h4>${ArtistsList[i].artistname}</h4>
    <p class="desc">${ArtistsList[i].desc1}</p>
    <hr>
    <p>${ArtistsList[i].desc2}</p>
  </div>
</div>
  `;
}