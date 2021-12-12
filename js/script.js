
// TEMPLATE DI ESEMPIO

/*
<div class="post">
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">Phil Mangione</div>
                <div class="post-meta__time">4 mesi fa</div>
            </div>
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="https://unsplash.it/600/300?image=171" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div>
    </div>
</div>
*/  

//lo strutturerei molto similmente alla repo precedente, eccezion fatta per
//il button like, quindi:
//array di immagini 300x300 scelte
//incollo il template in un inner html
//like button increment

let user = [
    {
        image:'https://i.picsum.photos/id/935/300/300.jpg?hmac=SI-cPsF2QtUvJgIv9MnwqwV333FrXse4MfoGwnex0d4',
        nome: 'Alfredo Blasi',
        time: '8 mesi fa',
        like: '90',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png',
        nome: 'Gino Alongi',
        time: '2 anni fa',
        like: '23 ',
    },
    {
        image:'https://www.fivechanges.com/wp-content/uploads/2014/09/astronaut-300x300.jpg',
        nome: 'Luca Pellegrino',
        time: '3 giorni fa',
        like: '61 ',
    },
    {
        image: 'https://i.pinimg.com/474x/88/31/c6/8831c6628b6a3fb79db75b39d8ef98d6.jpg',
        nome: 'Laura Ebbasta',
        time: 'Ieri',
        like: '1 ',
    },
]


const container = document.querySelector('.posts-list');
//container.innerHTML = '';

for (let index = 0; index < user.length; index++) {
    const element = user[index];
    const template = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${element.image} alt="${element.nome}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.nome}</div>
                    <div class="post-meta__time">${element.time}</div>
                </div>
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src=${element.image} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">${element.like}</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.like}</b> persone
                </div>
            </div>
        </div>
    </div>
    `;
    container.innerHTML += template;
}



//  LIKE BUTTON

function like() {
    let element = document.getElementById('like-counter-1');
    parseInt(element);
    let value = element.innerHTML += 1;
    document.getElementById('.like-counter-1').innerHTML = value;
    console.log(value); 
}

