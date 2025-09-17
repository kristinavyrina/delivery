const modalFunc = () => {
  const modal = document.querySelector('.card-modal__overlay')
  const cardBtn = document.querySelector('#card-button')

  const openModal = () => {
    modal.classList.add('open')
  }

  const closeModal = () => {
    modal.classList.remove('open')
  }

  cardBtn.addEventListener('click',  () => {
    modal.classList.add('open')
  })

  modal.addEventListener('click', (event) => {
    if (
      event.target.classList.contains('card-modal__overlay') ||
      event.target.closest('.card-modal__header--close')
    ) {
      closeModal()
    }
  })
}

const restFunc = () => {
  const container = document.querySelector('#rest-container')

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizza-plus.jpg',
    },
    {
      id: 1,
      title: 'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'tanuki.jpg',
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'food-band.jpg',
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'greedy-pizza.jpg',
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'food-point.jpg',
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizza-burger.jpg',
    },
  ]

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка</p>'
  }

  const randerRests = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
       <a href="./goods.html?id=${card.id}" class="products-card">
          <div class="products-card__image">
            <img
              src="./images/rests/${card.image}"
              alt="${card.image}"
            >
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h4 class="products-card__description--title">${card.title}</h4>
              <div class="products-card__description--badge">
                ${card.time} мин
              </div>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-info">
                <div class="products-card__description-info--rating">
                  <img
                    src="./images/star.svg"
                    alt="star"
                  >
                  ${card.rating}
                </div>
                <div class="products-card__description-info--price"> От ${card.price} ₽ </div>
                <div class="products-card__description-info--group"> ${card.type} </div>
              </div>
            </div>
            </div>
        </a>`)
    })

  }

if(container) {
  loading()

  setTimeout( () => {
    randerRests(restArray)
  },1000)
}
}

const goodsFunc = () => {
  const container = document.querySelector('#goods-container')

  const goodsArray = [
    {
      id: 0,
      image: 'good-1.jpg',
      title: 'Ролл угорь стандарт',
      text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      button: 'В корзину',
      price: 250,
    },
    {
      id: 1,
      image: 'good-2.jpg',
      title: 'Калифорния лосось стандарт',
      text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      button: 'В корзину',
      price: 250,
    },
    {
      id: 2,
      image: 'good-3.jpg',
      title: 'Окинава стандарт',
      text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      button: 'В корзину',
      price: 250,
    },
    {
      id: 3,
      image: 'good-4.jpg',
      title: 'Цезарь маки хl',
      text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      button: 'В корзину',
      price: 250,
    },
    {
      id: 4,
      image: 'good-5.jpg',
      title: 'Ясай маки стандарт 185 г',
      text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      button: 'В корзину',
      price: 250,
    },
    {
      id: 5,
      image: 'good-6.jpg',
      title: 'Ролл с креветкой стандарт',
      text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      button: 'В корзину',
      price: 250,
    },
  ]

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка ... </p>'
  }

  const randerRests = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <a class="products-card">
          <div class="products-card__image">
            <img
              src="./images/goods/${card.image}"
              alt="good-1"
            >
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">${card.title}</h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">
                ${card.text}
              </p>
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary"
                        type="button"
                >
                  ${card.button}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M14.4202 11.7302H5.11549L5.58268 10.7786L13.3452 10.7646C13.6077 10.7646 13.8327 10.5771 13.8796 10.3177L14.9546 4.3005C14.9827 4.14269 14.9405 3.98019 14.8374 3.85675C14.7864 3.796 14.7228 3.74707 14.6511 3.71334C14.5793 3.67961 14.501 3.6619 14.4217 3.66144L4.54674 3.62863L4.46237 3.23175C4.40924 2.97863 4.18112 2.79425 3.92174 2.79425H1.50768C1.36139 2.79425 1.2211 2.85236 1.11766 2.9558C1.01423 3.05924 0.956116 3.19953 0.956116 3.34581C0.956116 3.4921 1.01423 3.63239 1.11766 3.73583C1.2211 3.83926 1.36139 3.89738 1.50768 3.89738H3.47487L3.84362 5.6505L4.75143 10.0458L3.58268 11.9536C3.52198 12.0355 3.48543 12.1328 3.47714 12.2344C3.46886 12.336 3.48918 12.438 3.5358 12.5286C3.62955 12.7146 3.81862 12.8318 4.02799 12.8318H5.00924C4.80005 13.1096 4.68706 13.448 4.68737 13.7958C4.68737 14.6802 5.40612 15.3989 6.29049 15.3989C7.17487 15.3989 7.89362 14.6802 7.89362 13.7958C7.89362 13.4474 7.77799 13.1083 7.57174 12.8318H10.0889C9.87974 13.1096 9.76675 13.448 9.76705 13.7958C9.76705 14.6802 10.4858 15.3989 11.3702 15.3989C12.2546 15.3989 12.9733 14.6802 12.9733 13.7958C12.9733 13.4474 12.8577 13.1083 12.6514 12.8318H14.4217C14.7249 12.8318 14.9733 12.5849 14.9733 12.2802C14.9724 12.1341 14.9137 11.9942 14.8101 11.8912C14.7065 11.7881 14.5663 11.7303 14.4202 11.7302V11.7302ZM4.77643 4.71613L13.7733 4.74581L12.8921 9.68019L5.82487 9.69269L4.77643 4.71613ZM6.29049 14.2896C6.01862 14.2896 5.79674 14.0677 5.79674 13.7958C5.79674 13.5239 6.01862 13.3021 6.29049 13.3021C6.56237 13.3021 6.78424 13.5239 6.78424 13.7958C6.78424 13.9268 6.73222 14.0524 6.63962 14.1449C6.54703 14.2375 6.42144 14.2896 6.29049 14.2896V14.2896ZM11.3702 14.2896C11.0983 14.2896 10.8764 14.0677 10.8764 13.7958C10.8764 13.5239 11.0983 13.3021 11.3702 13.3021C11.6421 13.3021 11.8639 13.5239 11.8639 13.7958C11.8639 13.9268 11.8119 14.0524 11.7193 14.1449C11.6267 14.2375 11.5011 14.2896 11.3702 14.2896V14.2896Z" fill="white"/>
                  </svg>
                </button>
                <span class="products-card__description-controls--price">${card.price} ₽</span>
              </div>
            </div>
          </div>
        </a>`)
    })

  }

  if(container) {
    loading()

    setTimeout( () => {
      randerRests(goodsArray)
    },1000)
  }

}

modalFunc()
restFunc()
goodsFunc()