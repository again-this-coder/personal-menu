import { ImageSourcePropType } from "react-native";
import { images } from "src/assets/images";

export type MealType = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  price?: number;
  id: number;
  category: string;
};

export const mealsData = [
  {
    title: "Суші",
    description:
      'Cмачненькі суші, найтоповішій сет від якудзи це "багато лосося" і якісь теплі суші',
    image: images.sushi,
    price: 800,
    id: 0,
    category: "Доставка",
    time: 4,
  },
  {
    title: "Гречка + омлет",
    description:
      "Легка на шлунок гречка + смажене яйце з овочами до омлету + курочка",
    image: images.grechkaAndEgg,
    id: 1,
    category: "Вдома",
    time: 4,
  },
  {
    title: "Макарунс",
    description: "Солодкий, солоденький Макарунсик",
    image: images.makaroons,
    price: 80,
    id: 2,
    category: "Солодке",
    time: 4,
  },
  {
    title: "Паста з Песто та куркою",
    description:
      "Дуже смачна паста з песто та куркою, але дуже важко потім на шлунок від неї",
    image: images.pesto,
    id: 3,
    category: "Вдома",
    time: 4,
  },
  {
    title: "Млинець з сиром",
    description: "Вівсяний млинець (на смак фе)",
    image: images.pancakeWithCheese,
    id: 4,
    category: "Вдома",
    time: 4,
  },
  {
    title: "Картопля з шампіньйонами",
    description: "Дуже смачно, смак зелені топ",
    image: images.potatoShrooms,
    id: 5,
    category: "Вдома",
    time: 4,
  },
];
