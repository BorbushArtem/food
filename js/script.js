document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

tabsParent.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item,i)=>{
            if (event.target === item) {
                
                
                hideTabContent()
                showTabContent(i)
            }
            
        })
    }

})
    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.style.display='none';
        })
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')

        })
    }
    function showTabContent(i) {
        tabsContent[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active')

    }
    hideTabContent() 
    



const timeBlock = document.querySelectorAll('.timer__block');
const deadline = '2023-03-08';


function soon(lasted) {
    const t = Date.parse(lasted) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
}





// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//     days = timer.querySelector("#days"),
//     hours = timer.querySelector('#hours'),
//     minutes = timer.querySelector('#minutes'),
//     seconds = timer.querySelector('#seconds'),
//     timeInterval = setInterval(updateClock, 1000)
    
//     function updateClock() {
//         const t = soon(endtime);
//         days.textContent = t.days;
//         hours.textContent = t.hours;
//         minutes.textContent = t.minutes;
//         seconds.textContent = t.seconds;

//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//         }


//     }
// }
// setClock('.timer', deadline)


// })


const mol = document.querySelectorAll('.timer__block')
function reloadTomer(selector, f1) {
    const ttt = setInterval(almat, 1000)
    almat()
    function almat() {
    const know = f1(deadline);    
    selector.forEach(i => {
        for (let j in know) {
            if (i.querySelector('span').id == j) {
                i.querySelector('span').textContent = know[j]
            }
        }
    })
}
}
reloadTomer(mol, soon)

const modalViev = document.querySelector('.modal'),
    bttn = document.querySelectorAll('[data-modal]'),
    close = document.querySelectorAll('[data-close]');


modalViev.addEventListener('click', (e) => {
    if (e.target.matches('[data-close]')) {
        modalViev.style.display = 'none'
        document.body.style.overflow = 'visible'
    }
})    
bttn.forEach((item)=> {
    item.addEventListener('click', (e)=> {
        modalViev.style.display = 'block'
        document.body.style.overflow = 'hidden'
    })
})

document.addEventListener('keydown', (e)=> {
    
    
    if (e.code === 'Escape') {
        
        modalViev.style.display = 'none'
        document.body.style.overflow = 'visible'
    }
    
})
const menuItem = document.querySelectorAll('.menu__item');

class NewMenu {
    constructor(src, alt, title, descr, price, parentselctor, ...c) {
        this.menuItem = document.querySelectorAll('.menu__field .container');
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.classes = c;
        this.price = price;
        this.transfer = 3;
        this.parent = document.querySelector(parentselctor);
        this.changeToEUR();
        
        

    }
    delete() {
        this.menuItem.forEach((i)=>
        {i.innerHTML = ''})
    }
    changeToEUR() {
        this.price = this.price / 3 
    }
    render() {
        if (this.classes.length === 0) {
            this.classes.push('menu__item')
        } 
        const element = document.createElement('div');
        this.classes.forEach((item) =>{
            element.classList.add(item)
            
        })
        element.innerHTML = `
                
                    <img src=${this.src} ${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `
        this.parent.append(element)
        

    }


  
    
}
const ps = new NewMenu(

    ).delete();
const p = new NewMenu(
    "img/tabs/vegy.jpg",
    'vegy',
    'Меню "Фитнес"',
    'ssssssssssssssssssssый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    229,
    '.menu .container',
    'menu__item'
).render();


const pp = new NewMenu(
    "img/tabs/elite.jpg",
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    400,
    '.menu .container',
    'menu__item'
).render();

const ppp = new NewMenu(
    "img/tabs/post.jpg",
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    401110,
    '.menu .container',
    'menu__item'
).render();


})

const message = {
    load: 'Закгрузка',
    success: 'Красава',
    gg: 'ГГ ВП'
}

const forms = document.querySelectorAll('form')

forms.forEach((item) => {
    postData(item)
})
function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const hhh = document.createElement('div');
        hhh.classList.add('bla')
        hhh.textContent=message.load
        document.body.prepend(hhh)
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php')
       
        const formData = new FormData(form);
        request.send(formData)
        request.addEventListener('load', ()=> {
            if (request.status === 200) {
                console.log('success')
                console.log(request.response)
                hhh.textContent=message.success
                showThanksModal()
                form.reset()
            }
            else {
                hhh.textContent=message.gg
            }
        })
    })
}

function showThanksModal() {
    const byeForm = document.querySelectorAll('.modal__content')
    byeForm[0].classList.add('hide')
    const newElement = document.createElement('div')
    newElement.classList.add('modal__content')
    newElement.innerHTML = `<form action="#">
    <div data-close class="modal__close">&times;</div>
    <div class="modal__title">Спасибо пожалуйста</div>
    <button class="btn btn_dark btn_min">Спасибо пожалуйста</button>
</form>
    `
    
    newElement.style.cssText = 'margin: 0 auto; width: 500px;'
    
    document.querySelector('.modal').append(newElement)
    setTimeout(() => {
        newElement.remove()
        byeForm[0].classList.add('show')
        byeForm[0].classList.remove('hide')
        let modalViev = document.querySelector('.modal')
        modalViev.style.display = 'none'
       
    }, 2000)
    
}

  



