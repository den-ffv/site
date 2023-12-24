import icon1 from '../assets/svg/icon/icon.svg';
import icon2 from '../assets/svg/icon/icon2.svg';
import icon3 from '../assets/svg/icon/icon3.svg';
import icon4 from '../assets/svg/icon/icon4.svg';


import telegram from '../assets/svg/telegram.svg';
import instagram from '../assets/svg/instagram.svg';
import tiktok from '../assets/svg/tiktok.svg';
import facebook from '../assets/svg/facebook.svg';

import telegram_red from '../assets/svg/telegram-red.svg';
import instagram_red from '../assets/svg/instagram-red.svg';
import tiktok_red from '../assets/svg/tik-tok-red.svg';
import facebook_red from '../assets/svg/facebook-red.svg';

export const images = [
    '../src/assets/png/foto/IMG_5.png',
    '../src/assets/png/foto/IMG_2.png',
    '../src/assets/png/foto/IMG_3.png',
    '../src/assets/png/foto/IMG_4.png',
    '../src/assets/png/foto/IMG_1.png',
];

export const dataAboutSectionFunc = (translations) => {
    
    return [
        {
            id: 1,
            revers: false,
            mainCard: true,
            numOfCompon: 1,
            text: translations.aboutText1,
            icon: icon1,
            image: [{ id: 1, img: '../src/assets/png/foto/foto_1.png' }],
        },
        {
            id: 2,
            revers: true,
            mainCard: false,
            numOfCompon: 3,
            text: translations.aboutText2,
            icon: icon2,
            image: [
                { id: 2, img: '../src/assets/png/foto/foto_4.png' },
                { id: 3, img: '../src/assets/png/foto/foto_5.png' },
                { id: 4, img: '../src/assets/png/foto/foto_2.png' },
            ],
        },
        {
            id: 3,
            revers: false,
            mainCard: false,
            numOfCompon: 1,
            text: translations.aboutText3,
            icon: icon3,
            image: [{ id: 5, img: '../src/assets/png/foto/foto_3.png' }],
        },
        {
            id: 4,
            revers: true,
            mainCard: false,
            numOfCompon: 1,
            text: translations.aboutText4,
            icon: icon4,
            image: [{ id: 6, img: '../src/assets/png/foto/foto_6.png' }],
        },
    ]
} 

export const itemsSocialNetworks_Footer = [
    {
      id: 1,
      icon: telegram,
      alt: 'telegram',
      href: 'https://t.me/Polit_Molod2023',
    },
    {
      id: 2,
      icon: instagram,
      alt: 'instagram',
      href: 'https://instagram.com/polit_molod?igshid=MzRlODBiNWFlZA==',
    },
    {
      id: 3,
      icon: tiktok,
      alt: 'tiktok',
      href: 'https://www.tiktok.com/@polit_molod?_t=8gRdrufMjRe&_r=1',
    },
    { id: 4, icon: facebook, alt: 'facebook', href: '/' },
  ];

export const itemsSocialNetworks_ContactPage = [
  {
    id: 1,
    icon: telegram_red,
    alt: 'telegram',
    href: 'https://t.me/Polit_Molod2023',
  },
  {
    id: 2,
    icon: instagram_red,
    alt: 'instagram',
    href: 'https://instagram.com/polit_molod?igshid=MzRlODBiNWFlZA==',
  },
  {
    id: 3,
    icon: tiktok_red,
    alt: 'tiktok',
    href: 'https://www.tiktok.com/@polit_molod?_t=8gRdrufMjRe&_r=1',
  },
  { id: 4, icon: facebook_red, alt: 'facebook', href: '/' },
];
