
import horror from "./../../assets/images/books/horror.jpg";
import horror1 from "./../../assets/images/books/horror1.jpeg";
import horror2 from "./../../assets/images/books/horror2.jpg";
import action1 from "./../../assets/images/books/action1.jpg";
import action2 from "./../../assets/images/books/action2.jpg"; 
import fivtiv from "./../../assets/images/books/fivtiv.webp";
import fict2 from "./../../assets/images/books/fict2.jpg";
import fict3 from "./../../assets/images/books/fict3.jpg";
import fict4 from "./../../assets/images/books/fict4.jpg";
import fict5 from "./../../assets/images/books/fict5.jpg";
import fict6 from "./../../assets/images/books/fict6.jpg";
import faaa from "./../../assets/images/books/faaa.jpg";
import Stare from "./../../assets/images/books/Stare.jpg";
import avent from "./../../assets/images/books/avent.jpg";
import loup from "./../../assets/images/books/loup.jpg";
import cobayes from "./../../assets/images/books/cobayes.jpg";
import lf5 from "./../../assets/images/books/lf5.webp";
import hor2 from "./../../assets/images/books/hor2.jpg";
import hor3 from "./../../assets/images/books/hor3.jpg";
import aven from "./../../assets/images/books/aven.jpg";
import aven1 from "./../../assets/images/books/aven1.gif"








const initState = {
  products: [
    {
      id: 1,
      name: "the hunger",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
      offers: {
        price: 11,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: horror,
      link: "/details/1",
      category: "cat1",
    },
    {
      id: 2,
      name: "zombies,death",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
      offers: {
        price: 20,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: action2,
      link: "/details/2",
      category: "cat2",
    },
    {
      id: 3,
      name: "the little green boat",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
      offers: {
        price: 101,
        availability: "OutOfStock",
        currency: "$",
      },
      author: "me hh",
      image: action1,
      link: "/details/3",
      category: "cat2",
    },
    {
      id: 4,
      name: "the skittering",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
      offers: {
        price: 23,
        availability: "OutOfStock",
        currency: "$",
      },
      author: "me hh",
      image: horror1,
      link: "/details/4",
      category: "cat1",
    },
    {
      id: 5,
      name: " the horror",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 11,
        availability: "OutOfStock",
        currency: "$",
      },
      author: "mee",
      image: horror2,
      link: "/details/5",
      category: "cat1",
    },
    {
      id: 6,
      name: "la planète interdite",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 10,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: fivtiv,
      link: "/details/6",
      category: "cat3",
    },
    {
      id: 7,
      name: "le dernier loup ",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 9,
        availability: "OutOfStock",
        currency: "$",
      },
      author: "me hh",
      image: loup,
      link: "/details/7",
      category: "cat2",
    },
    {
      id: 8,
      name: "cobayes",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 11,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: cobayes,
      link: "/details/8",
      category: "cat1",
    },
    {
      id: 9,
      name: "le chevalier du monde perdu",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 34,
        availability: "OutOfStock",
        currency: "$",
      },
      author: "me hh",
      image: fict2,
      link: "/details/9",
      category: "cat3",
    },
    {
      id: 10,
      name: "les indiens",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: avent ,
      link: "/details/10",
      category: "cat2",
    },
    {
      id: 11,
      name: "la machine à explorer le temps",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: fict3,
      link: "/details/11",
      category: "cat3",
    },
    {
      id: 12,
      name: "le chemin des étoiles",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: fict4,
      link: "/details/12",
      category: "cat3",
    },
    {
      id: 13,
      name: "destination mars",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: fict5,
      link: "/details/13",
      category: "cat3",
    },
    {
      id: 14,
      name: "gibson",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: fict6,
      link: "/details/14",
      category: "cat3",
    },
    {
      id: 15,
      name: "charle de poule",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: faaa,
      link: "/details/15",
      category: "cat3",
    },
    {
      id: 16,
      name: "l'empire des tenebres",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: Stare,
      link: "/details/16",
      category: "cat3",
    },
    {
      id: 17,
      name: "the babel",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: lf5,
      link: "/details/17",
      category: "cat1",
    },
    {
      id: 18,
      name: "la famlle nilsen",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: hor2,
      link: "/details/18",
      category: "cat1",
    },
    {
      id: 19,
      name: "derniers jours",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: hor3,
      link: "/details/19",
      category: "cat1",
    },
    {
      id: 20,
      name: "la bonne aventure",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: aven,
      link: "/details/20",
      category: "cat2",
    },
    {
      id: 21,
      name: "le monde perdu",
      releaseYear: 1990,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",

      offers: {
        price: 36,
        availability: "InStock",
        currency: "$",
      },
      author: "me hh",
      image: aven1,
      link: "/details/21",
      category: "cat2",
    },
    
    
    
    
  ],
  product: null,
  loaded: false,
};


const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_TO_NULL":
      return { ...initState, loaded: false };
    case "GET_PRODUCTS":
      return {
        ...initState,
        products: initState.products,
        loaded: true,
      };
    case "GET_PRODUCTS_BY_CAT":
      return {
        ...initState,
        products: initState.products.filter(
          (product) => product.category == action.category
        ),
        loaded: true,
      };
    case "GET_PRODUCT":
      return {
        ...initState,
        product: initState.products.find((product) => product.id == action._id),
        loaded: true,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
