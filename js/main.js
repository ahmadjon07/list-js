var arr = [
    {
        name: 'Cristiano Ronaldo',
        age: 'age: 39',
        about: 'Криштиа́ну Рона́лду душ Са́нтуш Аве́йру — португальский футболист, нападающий, капитан саудовского клуба «Ан-Наср» и сборной Португалии. Чемпион Европы',
        img: 'https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-manchester-united-1636635187-74572.jpg?lm=1636635200'
    },
    {
        name: 'Neymar Junior',
        age: 'age: 32',
        about: 'Нейма́р да Си́лва Са́нтос Жу́ниор, или же просто Нейма́р — бразильский футболист, нападающий, вингер и атакующий полузащитник саудовского клуба «Аль-Хиляль» и национальной сборной Бразилии',
        img: 'https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/3b/93/5cfd2807b581d5170ab7c60a260c10b9651d15f818639840035438.jpg'
    },
    {
        name: 'Kylian Mbappe',
        age: 'age: 25',
        about: 'Килиа́н Мбаппе́ Лотте́н — французский футболист, нападающий клуба «Пари Сен-Жермен» и капитан сборной Франции. Признаётся одним из лучших игроков мира. Чемпион мира и лучший молодой игрок чемпионата мира 2018',
        img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8a61c9bc550bfd80/6595f3c89123ba0407bb1649/1863295425_2.jpg?auto=webp&format=pjpg&width=3840&quality=60'
    },
    {
        name: 'Lionel Messi',
        age: 'age: 36',
        about: 'Лионе́ль Андре́с Ме́сси Куччитти́ни — аргентинский футболист, нападающий и капитан клуба MLS «Интер Майами», капитан сборной Аргентины. Чемпион мира, чемпион Южной Америки, победитель Финалиссимы, олимпийский чемпион',
        img: 'https://www.investopedia.com/thmb/ckPwC5ARwco1nOSCKVGE57se8MI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg'
    },

]
var elList = document.querySelector('.list')

for (var item of arr) {
    var newLi = document.createElement('li')
    newLi.classList.add('list__item')
    newLi.innerHTML = `
         <img src=${item.img} alt="">
         <h2>${item.name}</h2>
         <p>${item.age}</p>
         <p>${item.about}</p>
    `
    elList.appendChild(newLi)
}


var arr2 = [
    {
        name: 'Sergio Ramos',
        age: 'age: 37',
        about: 'Се́рхио Ра́мос Гарси́я — испанский футболист, защитник испанского клуба «Севилья». Бывший игрок сборной Испании. В течение 16 сезонов он играл на позиции центрального защитника в мадридском «Реале»',
        img: 'https://i.eurosport.com/2023/09/04/3778333-76856588-2560-1440.jpg?w=1300'
    },
    {
        name: 'Luka Modric',
        age: 'age: 38',
        about: 'Лу́ка Мо́дрич — хорватский футболист, центральный полузащитник испанского клуба «Реал Мадрид», капитан национальной сборной Хорватии. Признаётся одним из лучших полузащитников современности.',
        img: 'https://prod-media.beinsports.com/image/1687777202141_2f92c39b-ff92-4e37-a41b-8290ba10c361.jpg'
    },
    {
        name: 'Zlatan Ibragimovic',
        age: 'age: 42',
        about: 'Зла́тан Ибраги́мович — шведский футболист, игравший на позиции нападающего. Бывший капитан сборной Швеции. Считается одним из самых непредсказуемых и мастеровитых нападающих своего поколения',
        img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbda47d5eac1be0b3/654b3e0bbd423a040ad38e19/Zlatan_Ibrahimovic_Milan.jpg?auto=webp&format=pjpg&width=3840&quality=60'
    },
    {
        name: 'Toni Kroos',
        age: 'age: 34',
        about: 'То́ни Кро́ос — немецкий футболист, полузащитник клуба «Реал Мадрид». Выступал за национальную сборную Германии в течение 11 лет. Первый немецкий игрок в истории, ставший пятикратным победителем Лиги чемпионов УЕФА.',
        img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt04721c2afbfade7c/659fb7892d31ff040a4e31de/GOAL_-_Blank_WEB_-_Facebook_-_2024-01-11T093950.567.png?auto=webp&format=pjpg&width=3840&quality=60'
    },

]
var elList2 = document.querySelector('.list2')

for (var item2 of arr2) {
    var newLi2 = document.createElement('li')
    newLi2.classList.add('list__item2')
    newLi2.innerHTML = `
         <img src=${item2.img} alt="">
         <h2>${item2.name}</h2>
         <p>${item2.age}</p>
         <p>${item2.about}</p>
    `
    elList2.appendChild(newLi2)
}