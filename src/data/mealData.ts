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
    id: 1,
    category: "Доставка",
  },
  {
    title: "Гречка + омлет",
    description:
      "Легка на шлунок гречка + смажене яйце з овочами до омлету + курочка",
    image: images.grechkaAndEgg,
    id: 2,
    category: "Вдома",
  },
  {
    title: "Макарунс",
    description: "Солодкий, солоденький Макарунсик",
    image: images.makaroons,
    price: 80,
    id: 3,
    category: "Солодке",
  },
  {
    title: "Паста з Песто та куркою",
    description:
      "Дуже смачна паста з песто та куркою, але дуже важко потім на шлунок від неї",
    image: images.pesto,
    id: 4,
    category: "Вдома",
  },
  {
    title: "Млинець з сиром",
    description: "Вівсяний млинець (на смак фе)",
    image: images.pancakeWithCheese,
    id: 5,
    category: "Вдома",
  },
  {
    title: "Картопля з шампіньйонами",
    description: "Дуже смачно, смак зелені топ",
    image: images.potatoShrooms,
    id: 6,
    category: "Вдома",
  },
];
