export function getProduct(productId){
    let matchingProduct = products.find(product => product.id === productId);
    if (!matchingProduct) {
        throw new Error(`Product with ID ${productId} not found.`);
    } else {
        return {
            ...matchingProduct
            
        };
    }
}

export const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: '/Images/athletic-cotton-socks-6-pairs.jpg',
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: '/Images/intermediate-composite-basketball.jpg',
        name: 'Intermediate Size Basketball',
        rating: {
            stars: 4,
            count: 127
        },
        priceCents: 2095
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: '/Images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-Shirt - 2 Pack',
        rating: {
            stars: 4.5,
            count: 56
        },
        priceCents: 799
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: '/Images/black-2-slot-toaster.jpg',
        name: '2 Slot Toaster - Black',
        rating: {
            stars: 5,
            count: 2197
        },
        priceCents: 1899
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image: "/Images/6-piece-white-dinner-plate-set.jpg",
        name: "6 Piece White Dinner Plate Set",
        rating: {
          stars: 4,
          count: 37
        },
        priceCents: 2067 
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "/Images/men-navigator-sunglasses-brown.jpg",
        name: "Men's Navigator Sunglasses Pilot",
        rating: {
          stars: 3.5,
          count: 42
        },
        priceCents: 1690
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        image: "/Images/plain-hooded-fleece-sweatshirt-yellow.jpg",
        name: "Plain Hooded Fleece Sweatshirt",
        rating: {
          stars: 4.5,
          count: 317
        },
        priceCents: 2400
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        image: "/Images/luxury-tower-set-6-piece.jpg",
        name: "Luxury Towel Set - Graphite Gray",
        rating: {
          stars: 4.5,
          count: 144
        },
        priceCents: 3599
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        image: "/Images/liquid-laundry-detergent-plain.jpg",
        name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
        rating: {
          stars: 4.5,
          count: 305
        },
        priceCents: 2899
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        image: "/Images/knit-athletic-sneakers-gray.jpg",
        name: "Waterproof Knit Athletic Sneakers - Gray",
        rating: {
          stars: 4,
          count: 89
        },
        priceCents: 3390
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        image: "/Images/women-chiffon-beachwear-coverup-black.jpg",
        name: "Women's Chiffon Beachwear Cover Up - Black",
        rating: {
          stars: 4.5,
          count: 235
        },
        priceCents: 2070
    },{
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        image: "/Images/round-sunglasses-black.jpg",
        name: "Round Sunglasses",
        rating: {
          stars: 4.5,
          count: 30
        },
        priceCents: 1560
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        image: "/Images/blackout-curtain-set-beige.webp",
        name: "Blackout Curtains Set 4-Pack - Beige",
        rating: {
          stars: 4.5,
          count: 232
        },
        priceCents: 4599
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        image: "/Images/facial-tissue-2-ply-18-boxes.jpg",
        name: "Ultra Soft Tissue 2-Ply - 18 Box",
        rating: {
          stars: 4,
          count: 99
        },
        priceCents: 2374
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        image: "/Images/straw-sunhat.webp",
        name: "Straw Lifeguard Sun Hat",
        rating: {
          stars: 4,
          count: 215
        },
        priceCents: 2200
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        image: "/Images/sky-flower-stud-earrings.webp",
        name: "Sterling Silver Sky Flower Stud Earrings",
        rating: {
          stars: 4.5,
          count: 52
        },
        priceCents: 1799
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        image: "/Images/women-stretch-popover-hoodie-black.jpg",
        name: "Women's Stretch Popover Hoodie",
        rating: {
          stars: 4.5,
          count: 2465
        },
        priceCents: 1374
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        image: "/Images/women-knit-ballet-flat-black.jpg",
        name: "Women's Knit Ballet Flat",
        rating: {
          stars: 4,
          count: 326
        },
        priceCents: 2640
    },{
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        image: "/Images/men-golf-polo-t-shirt-blue.jpg",
        name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
        rating: {
          stars: 4.5,
          count: 2556
        },
        priceCents: 1599
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        image: "/Images/trash-can-with-foot-pedal-50-liter.jpg",
        name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
        rating: {
          stars: 4.5,
          count: 2286
        },
        priceCents: 8300 
    },{
        id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
        image: "/Images/duvet-cover-set-blue-twin.jpg",
        name: "Duvet Cover Set with Zipper Closure",
        rating: {
          stars: 4,
          count: 456
        },
        priceCents: 2399
    },
    {
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        image: "/Images/women-chunky-beanie-gray.webp",
        name: "Women's Chunky Cable Beanie - Gray",
        rating: {
          stars: 5,
          count: 83
        },
        priceCents: 1250
    },{
        id: "1c079479-8586-494f-ab53-219325432536",
        image: "/Images/men-athletic-shoes-green.jpg",
        name: "Men's Athletic Sneaker",
        rating: {
          stars: 4,
          count: 229
        },
        priceCents: 3890
    }
];