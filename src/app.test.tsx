import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ListItem from './components/ListItem/ListItem';
import ItemDetails from './pages/ItemDetail/ItemDetail';

const mockItems = {
  author: {
    name: 'Lorena',
    lastname: 'Rojas',
  },
  categories: [
    {
      id: 'MLA412445',
      name: 'Libros Físicos',
    },
    {
      id: 'MLA1648',
      name: 'Computación',
    },
    {
      id: 'MLA1368',
      name: 'Arte, Librería y Mercería',
    },
    {
      id: 'MLA1168',
      name: 'Música, Películas y Series',
    },
    {
      id: 'MLA1144',
      name: 'Consolas y Videojuegos',
    },
    {
      id: 'MLA1430',
      name: 'Ropa y Accesorios',
    },
    {
      id: 'MLA1000',
      name: 'Electrónica, Audio y Video',
    },
    {
      id: 'MLA1955',
      name: 'Revistas',
    },
    {
      id: 'MLA1227',
      name: 'Otros',
    },
    {
      id: 'MLA1499',
      name: 'Industrias y Oficinas',
    },
    {
      id: 'MLA5725',
      name: 'Accesorios para Vehículos',
    },
    {
      id: 'MLA1276',
      name: 'Deportes y Fitness',
    },
    {
      id: 'MLA1132',
      name: 'Juegos y Juguetes',
    },
    {
      id: 'MLA1574',
      name: 'Hogar, Muebles y Jardín',
    },
    {
      id: 'MLA1367',
      name: 'Antigüedades y Colecciones',
    },
    {
      id: 'MLA1182',
      name: 'Instrumentos Musicales',
    },
    {
      id: 'MLA1953',
      name: 'Otras categorías',
    },
    {
      id: 'MLA1039',
      name: 'Cámaras y Accesorios',
    },
    {
      id: 'MLA1384',
      name: 'Bebés',
    },
    {
      id: 'MLA1051',
      name: 'Celulares y Teléfonos',
    },
    {
      id: 'MLA3937',
      name: 'Joyas y Relojes',
    },
    {
      id: 'MLA407134',
      name: 'Herramientas',
    },
  ],
  items: [
    {
      id: 'MLA872735482',
      title: 'Funda Antipolvo De Vinilo Para Cpu Antiestatica 8w X14h X19d',
      price: {
        currency: 'ARS',
        amount: 18399,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_608227-MLA43130567371_082020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 0,
      city: 'C.A.B.A.',
    },
    {
      id: 'MLA1129311931',
      title: 'Memoria Ram Valueram Color Verde  8gb 1 Kingston Kvr26n19s8/8',
      price: {
        currency: 'ARS',
        amount: 15915,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_641762-MLA52222907113_102022-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 25,
      city: 'San Justo',
    },
    {
      id: 'MLA811197785',
      title: 'Cambridge International As & A Level Computer Science  - Cou',
      price: {
        currency: 'ARS',
        amount: 12231,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_781132-MLA52393000790_112022-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 3,
      city: 'Belgrano R',
    },
    {
      id: 'MLA686827025',
      title: 'Toner Alternativo Para Q2612a 12a 2612a 1020 1018 1010 American Computers',
      price: {
        currency: 'ARS',
        amount: 3790,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_701863-MLA50320309169_062022-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5000,
      city: 'Villa Luro',
    },
    {
      id: 'MLA635041160',
      title: 'Papel Fotografico Glossy Bifaz A4 220 Gr 100 H Fotolibro',
      price: {
        currency: 'ARS',
        amount: 5223,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_636410-MLA29552064450_032019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA872722335',
      title: 'Funda Para Cubierta De Computadora Color Azul Y Blanco',
      price: {
        currency: 'ARS',
        amount: 15599,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_922163-MLA43128920806_082020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 0,
      city: 'C.A.B.A.',
    },
    {
      id: 'MLA1170685666',
      title: 'Parlantes Genius Sp-q180 Usb Rojo',
      price: {
        currency: 'ARS',
        amount: 2699,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_982098-MLA51839759891_102022-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 4,
      city: 'Núñez',
    },
    {
      id: 'MLA1109940350',
      title: 'Papel Ilustracion Brillante A3 250 Grs 125 H Oferta Laser',
      price: {
        currency: 'ARS',
        amount: 12689,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_732401-MLA20315767175_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 1,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1339116965',
      title: 'Cable Usb 2.0 Apple Lightning Blanco Con Entrada Usb Salida Lightning',
      price: {
        currency: 'ARS',
        amount: 796.89,
        decimals: 89,
      },
      picture: 'http://http2.mlstatic.com/D_918400-MLA52464082860_112022-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 4,
      city: 'Belgrano',
    },
    {
      id: 'MLA657220052',
      title: 'Papel Ilustracion Brillante A4 115 Grs 250 H Laser',
      price: {
        currency: 'ARS',
        amount: 5237,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_488301-MLA20315776505_062015-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA626893896',
      title: 'Papel Ilustracion Brillante A3 200 Grs 125 H Laser Oferta',
      price: {
        currency: 'ARS',
        amount: 9108,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_731536-MLA41455836303_042020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1128989422',
      title: 'Cambridge Igcse And O Level Computer Science (2nd.edition)',
      price: {
        currency: 'ARS',
        amount: 9715,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_928792-MLA49450417099_032022-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 2,
      city: 'Barracas',
    },
    {
      id: 'MLA895908010',
      title: 'Mouse Optico Brb Usb, Pc, Notebook, Black, 800dpi.',
      price: {
        currency: 'ARS',
        amount: 880,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_855794-MLA44000210224_112020-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 2,
      city: 'Balvanera',
    },
    {
      id: 'MLA686922463',
      title: 'Toner Alternativo Para 217a 17a American Computers Sin Chip',
      price: {
        currency: 'ARS',
        amount: 3290,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_717867-MLA43595317111_092020-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 500,
      city: 'Villa Luro',
    },
    {
      id: 'MLA605788754',
      title: 'Papel Ilustracion Mate A4 225 Grs 125 H',
      price: {
        currency: 'ARS',
        amount: 5710,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_994950-MLA41455854045_042020-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA837873143',
      title: 'Papel Fotográfico Glossy Texturado Foca A4 200 Grs 20 H Ofer',
      price: {
        currency: 'ARS',
        amount: 1200,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_724465-MLA47697499001_092021-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1133819482',
      title: 'Auriculares In-ear Inalámbricos Apple Beats Studio Buds Negro',
      price: {
        currency: 'ARS',
        amount: 47176.48,
        decimals: 48,
      },
      picture: 'http://http2.mlstatic.com/D_963504-MLA48024047136_102021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 100,
      city: 'Parque Chas',
    },
    {
      id: 'MLA690033065',
      title: 'Cartucho Alternativo Para 662 Negro 662xl American Computers',
      price: {
        currency: 'ARS',
        amount: 5490,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_811562-MLA46419673099_062021-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 150,
      city: 'Villa Luro',
    },
    {
      id: 'MLA611241964',
      title: 'Papel Kraft Puro A3 200 Grs 50 H Tarjeta Etiqueta Artesania',
      price: {
        currency: 'ARS',
        amount: 2961,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_757445-MLA31035544694_062019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA613810964',
      title: 'Papel Ilustracion Brillante A4 115 Grs 500 H',
      price: {
        currency: 'ARS',
        amount: 10474,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_272401-MLA20315775162_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA822573164',
      title: 'The Magic Computer Mouse - Earlyreads 4 + Audio Cd',
      price: {
        currency: 'ARS',
        amount: 2189,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_908189-MLA32711409995_102019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Barracas',
    },
    {
      id: 'MLA767084287',
      title: 'Papel Ilustracion Mate A3 275 Grs 100 H',
      price: {
        currency: 'ARS',
        amount: 11166,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_732401-MLA20315767175_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA635236227',
      title: 'Papel Fotografico Mate A4 Autoadhesivo 100 H Etiqueta Candy',
      price: {
        currency: 'ARS',
        amount: 4786,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_850005-MLA31215697700_062019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA607109622',
      title: 'Papel Kraft Puro A3 200 Grs 100 H Tarjeta Etiqueta Artesania',
      price: {
        currency: 'ARS',
        amount: 5396,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_955280-MLA31100843063_062019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA607939008',
      title: 'Espiral De Alambre Encuadernacion Anillado 25 Mm 20 U',
      price: {
        currency: 'ARS',
        amount: 3779,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_937552-MLA31012068172_062019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 150,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA607565128',
      title: 'Papel Kraft Puro A3 200 Grs 250 H Tarjeta Etiqueta Artesania',
      price: {
        currency: 'ARS',
        amount: 12413,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_652850-MLA31040961037_062019-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1114609215',
      title: 'Papel Fotográfico Glossy A4 260 Grs 100 H Calidad Premium',
      price: {
        currency: 'ARS',
        amount: 4950,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_888975-MLA29626906087_032019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 2,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA744693460',
      title: 'Papel Fotográfico Mate A4 110 Grs 50 H Sublimacion Premium ',
      price: {
        currency: 'ARS',
        amount: 1028,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_814403-MLA29627371991_032019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 3,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA604432350',
      title: 'Bobina Laminado Brillante Plastificado 32 Mic 330 Mm 150 Mt',
      price: {
        currency: 'ARS',
        amount: 10878,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_971584-MLA48958726031_012022-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA605071899',
      title: 'Papel Ilustracion Brillante A3 200 Grs 250 H',
      price: {
        currency: 'ARS',
        amount: 18216,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_732401-MLA20315767175_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA916944636',
      title: 'Mouse Alambrico Str-41 Premium Brb  Optico Nuevo',
      price: {
        currency: 'ARS',
        amount: 892.12,
        decimals: 12,
      },
      picture: 'http://http2.mlstatic.com/D_736508-MLA52051139101_102022-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'San Cristóbal',
    },
    {
      id: 'MLA834534969',
      title: 'La Historia De Atari Video Computer System - Dolmen',
      price: {
        currency: 'ARS',
        amount: 5989,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_972836-MLA40448492707_012020-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 1,
      city: 'CABA',
    },
    {
      id: 'MLA868318833',
      title: 'Maletin Portanotebook 15 Pulgadas Computer Case Monel',
      price: {
        currency: 'ARS',
        amount: 14800,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_688651-MLA42686390042_072020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 100,
      city: 'Abasto',
    },
    {
      id: 'MLA611241951',
      title: 'Papel Ilustracion Brillante A4 90 Grs 500 H',
      price: {
        currency: 'ARS',
        amount: 8631,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_994619-MLA30092472315_042019-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 25,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA867252319',
      title: 'Papel Ilustracion Mate A3 170 Grs 250 H',
      price: {
        currency: 'ARS',
        amount: 15483,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_711401-MLA20315765070_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1148002031',
      title: 'Vinilos De Coleccion La Nacion Lp + Libro  - Ver Variantes',
      price: {
        currency: 'ARS',
        amount: 5980,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_956952-MLA50850331389_072022-O.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 50,
      city: 'Recoleta',
    },
    {
      id: 'MLA609229385',
      title: 'Papel Ilustracion Mate A4 170 Grs 500 H',
      price: {
        currency: 'ARS',
        amount: 13514,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_734401-MLA20315779863_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA688802046',
      title: 'Toner Alternativo Para 217a 17a American Computers Con Chip',
      price: {
        currency: 'ARS',
        amount: 5500,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_993029-MLA41546825564_042020-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 150,
      city: 'Villa Luro',
    },
    {
      id: 'MLA802695344',
      title: 'Funda Bags Para Disco/gps Simil Neoprene Negra Fsnhd-n',
      price: {
        currency: 'ARS',
        amount: 1414.42,
        decimals: 42,
      },
      picture: 'http://http2.mlstatic.com/D_628717-MLA31611878362_072019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 5,
      city: 'Boedo',
    },
    {
      id: 'MLA650325652',
      title: 'Papel Ilustracion Brillante A3 115 Grs 250 H Oferta',
      price: {
        currency: 'ARS',
        amount: 10474,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_585301-MLA20315767767_062015-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 4,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA877234497',
      title: 'Papel Fotográfico Glossy A4 230grs 100 Hojas Calidad Premium',
      price: {
        currency: 'ARS',
        amount: 4040,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_751147-MLA43400869799_092020-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 3,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1147078159',
      title: 'Kraftwerk - Computer World - Vinilo + Revista ',
      price: {
        currency: 'ARS',
        amount: 4499,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_615482-MLA50743672363_072022-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 2,
      city: 'Belgrano',
    },
    {
      id: 'MLA605788740',
      title: 'Papel Ilustracion Brillante A3 225 Grs 125 H',
      price: {
        currency: 'ARS',
        amount: 11420,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_910590-MLA41455847452_042020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 4,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1214955868',
      title: 'Pack X 10 Mouse Usb Con Cable Str41 Premium Brb Optico Nuevo',
      price: {
        currency: 'ARS',
        amount: 9520.09,
        decimals: 9,
      },
      picture: 'http://http2.mlstatic.com/D_765683-MLA52161715625_102022-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 2,
      city: 'San Cristóbal',
    },
    {
      id: 'MLA610339144',
      title: 'Papel Fotográfico Glossy A4 130 Grs 100 H Calidad Premium',
      price: {
        currency: 'ARS',
        amount: 3204,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_888975-MLA29626906087_032019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 25,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA725684862',
      title: 'Espiral De Alambre Encuadernacion Anillado 29 Mm 20 U',
      price: {
        currency: 'ARS',
        amount: 4448,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_777976-MLA31027784867_062019-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 100,
      city: 'Lomas del Mirador',
    },
    {
      id: 'MLA1147296551',
      title: 'Tarjeta De Sonido Externa V9x Pro Computer Live Broadcast',
      price: {
        currency: 'ARS',
        amount: 21830,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_998800-MLA50768428207_072022-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 1,
      city: 'Paternal',
    },
    {
      id: 'MLA913237306',
      title: 'Parlantes Genius Usb Sp Q180',
      price: {
        currency: 'ARS',
        amount: 3414.2,
        decimals: 20,
      },
      picture: 'http://http2.mlstatic.com/D_941798-MLA45308825770_032021-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 25,
      city: 'Avellaneda',
    },
    {
      id: 'MLA1144962135',
      title: 'Jack And His Computer',
      price: {
        currency: 'ARS',
        amount: 1100,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_805195-MLA50530697487_062022-I.jpg',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 1,
      city: 'San Martin',
    },
    {
      id: 'MLA686816811',
      title: 'Combo Cartucho Alternativo Para 664xl 664 American Computers',
      price: {
        currency: 'ARS',
        amount: 14890,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_818382-MLA46512811211_062021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 50,
      city: 'Villa Luro',
    },
  ],
};

describe('Header component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  test('render correctly', () => {
    const logo = screen.getByAltText('logo');
    const searchInput = screen.getByPlaceholderText(/Nunca dejes/i);
    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  test('should show results on input enter', async () => {
    const searchInput = screen.getByPlaceholderText(/Nunca dejes/i);

    await fireEvent.change(searchInput, { target: { value: 'computer' } });
    await fireEvent.keyUp(searchInput, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    });
    const loader = await screen.findByTestId('spinner');
    expect(loader).toBeInTheDocument();
    const results = await screen.findByTestId('results');
    expect(results).toBeInTheDocument();
  });
});
describe('List Item Component', () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText(/Nunca dejes/i);

    await fireEvent.change(searchInput, { target: { value: 'computer' } });
    await fireEvent.keyUp(searchInput, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    });
  });
  test('should only show 4 results', async () => {
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  test('all 4 products has to have picture, title, city and price ', async () => {
    const pictures = await screen.findAllByAltText('product-img');
    expect(pictures).toHaveLength(4);
    const titles = await screen.findAllByTestId('title');
    expect(titles).toHaveLength(4);
    const prices = await screen.findAllByTestId('price');
    expect(prices).toHaveLength(4);
    const cities = await screen.findAllByTestId('city');
    expect(cities).toHaveLength(4);
  });
  test('on product test redirect to /items/:id', async () => {
    const item = mockItems.items[0];
    const { getByTestId } = render(
      <MemoryRouter>
        <ListItem item={item} categories={mockItems.categories} />
      </MemoryRouter>
    );
    const link = getByTestId('link');

    await fireEvent.click(link);

    expect(link.getAttribute('href')).toBe(`/items/${item.id}`);
  });
});

describe('ItemDetail component', () => {
  it('renders the correct item on the /items/:id route', async () => {
    const { findByText, findByAltText } = render(
      <MemoryRouter initialEntries={['/items/MLA872722335']}>
        <Routes>
          <Route path="/items/:id" element={<ItemDetails />} />
        </Routes>
      </MemoryRouter>
    );

    const title = await findByText(/Funda Para Cubierta De Computadora/i);
    const price = await findByText('$ 15.599');
    const picture = await findByAltText('product-img');
    const description = await findByText(/ORIGINALCASE NET SOMOS MERCADOLIBRE/i);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(picture).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
