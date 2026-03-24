export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;

  address: string;
  rating: string;
}

export const products = [
  {
    id: 1,
    name: 'Детское пюре Агуша Яблоко-клубника-малина 90 г',
    price: 1109,
    description: ' Теперь пюре можно брать с собой \n'+ 
    'на прогулку или на отдых, чтобы \n'+
    'перекусить в любой момент.',
    image: 'https://img.razrisyika.ru/kart/49/1200/195274-agusha-12.jpg',
    address: 'https://kaspi.kz/shop/p/ostin-dzh-gordost-i-predubezhdenie-100326806/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'
  },
  {
    id: 2,
    name: 'Детское пюре ФрутоНяня Яблоко-банан-творог 6 мес+ 90 г',
    price: 1198,
    description: ' ФрутоНяня пюре яблочно-банановое с\n'+
    'творогом для питания детей раннего \n'+
    'возраста. Фруктовое пюре в мягкой упаковке\n'+
    'ФрутоНяня - это вкусный и полезный перекус.',
    image: 'https://afina-market.ru/upload/iblock/e2f/l7epftjb7x1g65xawraofixtkl5l2ige.jpg',
    address: 'https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'
  },
  
  {
    id: 3,
    name: 'Детское пюре ФрутоНяня Яблоко-Банан-Клубника',
    price: 1247,
    description: ' Теперь пюре можно брать с собой на\n'+
    'прогулку или на отдых, чтобы \n'+
    'перекусить в любой момент.\n'+
    'Малышу надо всего лишь надавливать\n'+
    'на пакетик и кушать',
    image: 'https://palladi.ru/upload/iblock/47b/47b1de1bff2455393887d14a8d20c350.jpg',
    address: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'
  },

  {
    id: 4,
    name: 'Детское пюре ФрутоНяня Яблоко-малина-творог 90 г',
    price: 790,
    description: 'ФрутоНяня пюре фруктовое яблоко-малина с\n'+
    'творогом для питания детей раннего\n'+
    'возраста. Фруктовое пюре с \n'+
    'натуральным творогом',
    image: 'https://main-cdn.sbermegamarket.ru/hlr-system/148014382/600000385001b0.jpeg',
    address: 'https://kaspi.kz/shop/p/-uezov-m-abai-zholy-1-4-tom-26016813/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'
  },
  {
    id: 5,
    name: 'Детское пюре Агуша Яблоко-малина-шиповник 90 г',
    price: 899,
    description: ' Пюре Агуша фруктово-ягодное\n'+
    'Яблоко-Малина-Шиповник для\n'+
    'детей с 6 месяцев. Пастеризованный\n'+
    ' продукт.',
    image: 'https://dobraya-apteka.kz/backend/web/images/products/37044741/origin/pure_fryktovoe_agysha_yabloko_malina_shipovnik_90gr-3704474163abfc3d18e401.28505033.jpg',
    address: 'https://kaspi.kz/shop/p/braun-d-kod-da-vinchi-26007967/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'

  },
  {
    id: 6,
    name: 'Детское пюре Агуша Яблоко-ежевика-малина 90 г',
    price: 789,
    description: 'Пастеризованный продукт в удобной\n'+
    'мягкой упаковке.Особенности: без сахара\n'+
    'и крахмала, без консервантов,\n'+
    ' красителей.',
    image: 'https://puddostavka.ru/upload/iblock/25c/sitjouvk4vih0oh0oyhjnnfl7miglemf.jpg',
    address: 'https://kaspi.kz/shop/p/braun-d-tsifrovaja-krepost--26002626/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'
  },
  {
    id: 7,
    name: 'Детское пюре ФрутоНяня Говядина-гречка 100 г',
    price: 823,
    description:' ФрутоНяня пюре из говядины с гречкой \n'+
    ' для питания детей раннего возраста.\n'+
    'водорастворимые витамины (C, B1,\n'+
    ' B2, B3 (PP), B4, B5, B6 и B9)\n'+
    'Консервы мясорастительные.', 
    image: 'https://static.price.ru/images/models/-/detskoe-pitanie/frutonyanya-govyadina-s-grechkoy-100-g-detskoe-pyure-/5c691cc3c9ab5a249caffa69416759bb.JPEG',
    address: 'https://kaspi.kz/shop/p/kiz-d-tainstvennaja-istorija-billi-milligana-101187476/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'

  },
  {
    id: 8,
    name: 'Детское пюре Gerber овощное Только цветная капуста первая ступень 80 г',
    price: 986,
    description: ' Без добавления крахмала,  \n'+
    'соли и сахара. Изготовлено без \n'+
    'использования генетически модифицированных\n'+
    ' красителей и ароматизаторов.\n'+
    ' ингредиентов. искусственных консервантов,',
    image: 'https://avatars.mds.yandex.net/get-mpic/7179065/img_id245330522508750808.jpeg/orig',
    address: 'https://kaspi.kz/shop/p/kristi-a-zagadka-endhauza-101430368/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'

  },
  {
    id: 9,
    name: 'Детские влажные салфетки Yokosun Детские Eco 100 шт',
    price: 959,
    description:' Детские влажные салфетки YokoSun Eco \n'+
    'Подходят для чувствительной кожи новорожденных.\n'+
    'Делают ежедневную гигиену в любых  \n'+
    'условиях значительно комфортнее. ',
    image: 'https://images.satu.kz/184953771_w640_h640_vlazhnye-salfetki-dlya.jpg',
    address: 'https://kaspi.kz/shop/p/uail-d-o-portret-doriana-greja-100996924/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'

  },
  {
    id: 10,
    name: 'Детские влажные салфетки Yokosun Extra Soft 120 шт',
    price: 959,
    description: 'Влажные салфетки YokoSun 120 шт.\n'+
    'YokoSun Eco специально разработаны\n'+
    'для нежного очищения кожи малыша\n'+
    'и одновременного эффективного ухода.',
    image: 'https://www.kokos.ru/images/lots/66/7a/667afc3fc35cb54ba25b7d849e6b6e4b.jpeg',
    address: 'https://kaspi.kz/shop/p/king-s-zelenaja-milja-101800501/?c=750000000',
    rating: 'https://static.tildacdn.com/tild3464-6265-4133-b863-653134353938/___31.png'

  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/