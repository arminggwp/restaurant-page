function addFood(name, price, src) {
    const food = document.createElement('div');
    food.classList.add('food');
    //
    const foodImg = document.createElement('img');
    foodImg.setAttribute('src', src);
    //
    const description = document.createElement('desc');
    description.classList.add('desc');
    //
    const foodName = document.createElement('name');
    foodName.classList.add('name');
    foodName.textContent = name;
    //
    const foodPrice = document.createElement('price');
    foodPrice.classList.add('price');
    foodPrice.textContent = price;
    //
    description.appendChild(foodName);
    description.appendChild(foodPrice);
    //
    food.appendChild(foodImg);
    food.appendChild(description);
    return food;
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    //
    const allFood = [
        addFood(
            'Veggie pizza',
            '10 KM',
            'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/s720x720/131923649_4149898528371228_3398999156200972256_o.jpg?_nc_cat=106&ccb=2&_nc_sid=2d5d41&_nc_eui2=AeG-_S7B_2dAHDmtUz0irUI5PrmJPXF-r9I-uYk9cX6v0lJZs1C9SvFWUKy0olYKWMA&_nc_ohc=rrZGahc71c4AX8IFykJ&_nc_ht=scontent-yyz1-1.xx&tp=7&oh=3d0fbcf26d4940d65f07877552644cb3&oe=602C4C54'
        ),
        addFood(
            'Donuts',
            '5 KM',
            'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/s720x720/127044546_4074186022609146_8523699301468031670_o.jpg?_nc_cat=107&ccb=2&_nc_sid=2d5d41&_nc_eui2=AeFOqI8v52A9IqhEn8njyW7X22khR6OwyVfbaSFHo7DJV-tgMBsHUk76H9ud49D1pEU&_nc_ohc=-XoNCt8yhjUAX-MTe3B&_nc_ht=scontent-yyz1-1.xx&tp=7&oh=70c518f09d28d649be714ddb178ecaac&oe=602A8604'
        ),
        addFood(
            'Torta',
            '20 KM',
            'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/s720x720/130184730_4112589938768754_8394934346806157701_o.jpg?_nc_cat=105&ccb=2&_nc_sid=2d5d41&_nc_eui2=AeHVg0C-bDLSEhY3BHPk5XM5zZJP6qYlWGvNkk_qpiVYa6oxENVZzn18NJJWRrfQZ7Q&_nc_ohc=5RBW1lkFWuIAX9lF27g&_nc_ht=scontent-yyz1-1.xx&tp=7&oh=aeb4b4d529c52453d3e046314541ff26&oe=602C40FF'
        )
    ];
    allFood.forEach((food) => {
        content.appendChild(food);
    });
}

export default loadMenu;
