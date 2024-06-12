import { useEffect, useState } from "react"
import { Product } from "../model"

export const useProducts = (search:string = '', brands: string[] = [], categories: string[] = []) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchProducts(search, brands, categories);
            setProducts(data);
            setLoading(false);
        };
        fetchData();
    }, [JSON.stringify({ search, brands, categories })])

    return { products, isLoading }
}

function fetchProducts(search: string = '', brands: string[] = [], categories: string[] = []): Promise<Product[]> {
    return new Promise((resolve) => setTimeout(() => resolve(getProducts(search, brands, categories)), 500));
}

export function getProducts(
    search: string = '',
    brands: string[] = [],
    categories: string[] = []
): Product[] {
    let filteredProducts = allProducts;

    const regex = new RegExp(search, 'i');

    filteredProducts = allProducts.filter(product => {
        const titleMatched = search !== '' 
            ? product.title.match(regex) !== null
            : true;

        const brandMatched = brands.length !== 0
            ? brands.includes(product.brand)
            : true;
        
        const categoryMatched = categories.length !== 0
            ? categories.includes(product.category)
            : true;

        return titleMatched && brandMatched && categoryMatched;
    })

    return filteredProducts;
}

export const allProducts: Product[] = [
    {
        "id": "bag00",
        "title": "Basic Bag",
        "image": "/public/products/bag00.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag01",
        "title": "Premium Bag",
        "image": "/public/products/bag01.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag02",
        "title": "Travel Bag",
        "image": "/public/products/bag02.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag03",
        "title": "Backpack",
        "image": "/public/products/bag03.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag04",
        "title": "Laptop Bag",
        "image": "/public/products/bag04.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag05",
        "title": "Tote Bag",
        "image": "/public/products/bag05.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag06",
        "title": "Messenger Bag",
        "image": "/public/products/bag06.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag07",
        "title": "Duffel Bag",
        "image": "/public/products/bag07.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag08",
        "title": "Shoulder Bag",
        "image": "/public/products/bag08.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag09",
        "title": "Clutch Bag",
        "image": "/public/products/bag09.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag10",
        "title": "Tote Bag with Straps",
        "image": "/public/products/bag10.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag11",
        "title": "Purse Bag",
        "image": "/public/products/bag11.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag12",
        "title": "Makeup Bag",
        "image": "/public/products/bag12.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag13",
        "title": "Beach Bag",
        "image": "/public/products/bag13.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "bag14",
        "title": "Crossbody Bag",
        "image": "/public/products/bag14.png",
        "brand": "WayneTech",
        "category": "Bag"
    },
    {
        "id": "bag15",
        "title": "Wristlet Bag",
        "image": "/public/products/bag15.png",
        "brand": "Arkham Apparel",
        "category": "Bag"
    },
    {
        "id": "batarang01",
        "title": "Premium Batarang",
        "image": "/public/products/batarang01.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang02",
        "title": "Stealthy Batarang",
        "image": "/public/products/batarang02.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang03",
        "title": "Advanced Batarang",
        "image": "/public/products/batarang03.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang04",
        "title": "Combat Batarang",
        "image": "/public/products/batarang04.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang05",
        "title": "Gadgets Batarang",
        "image": "/public/products/batarang05.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang06",
        "title": "Spy Batarang",
        "image": "/public/products/batarang06.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang07",
        "title": "Tactical Batarang",
        "image": "/public/products/batarang07.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang08",
        "title": "Disguise Batarang",
        "image": "/public/products/batarang08.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang09",
        "title": "Hacking Batarang",
        "image": "/public/products/batarang09.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang10",
        "title": "Invisible Batarang",
        "image": "/public/products/batarang10.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang11",
        "title": "Night Vision Batarang",
        "image": "/public/products/batarang11.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang12",
        "title": "Smoke Bomb Batarang",
        "image": "/public/products/batarang12.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang13",
        "title": "Electric Shock Batarang",
        "image": "/public/products/batarang13.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },
    {
        "id": "batarang14",
        "title": "Lockpick Batarang",
        "image": "/public/products/batarang14.png",
        "brand": "WayneTech",
        "category": "Batarang"
    },
    {
        "id": "batarang15",
        "title": "GPS Tracker Batarang",
        "image": "/public/products/batarang15.png",
        "brand": "Arkham Apparel",
        "category": "Batarang"
    },

    {
        "id": "belt00",
        "title": "Velvet Vortex Belt",
        "image": "/public/products/belt00.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt01",
        "title": "Starlight Straps",
        "image": "/public/products/belt01.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt02",
        "title": "Midnight Marvel Belt",
        "image": "/public/products/belt02.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt03",
        "title": "Cosmic Cruiser Straps",
        "image": "/public/products/belt03.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt04",
        "title": "Luminous Loop Belt",
        "image": "/public/products/belt04.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt05",
        "title": "Aurora Accelerator Straps",
        "image": "/public/products/belt05.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt06",
        "title": "Nova Nexus Belt",
        "image": "/public/products/belt06.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt07",
        "title": "Solar Sling Straps",
        "image": "/public/products/belt07.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt08",
        "title": "Galactic Grip Belt",
        "image": "/public/products/belt08.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt09",
        "title": "Stellar Straps",
        "image": "/public/products/belt09.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt10",
        "title": "Orbital Oscillator Belt",
        "image": "/public/products/belt10.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt11",
        "title": "Celestial Cord Straps",
        "image": "/public/products/belt11.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt12",
        "title": "Darkstar Dynamo Belt",
        "image": "/public/products/belt12.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt13",
        "title": "Astral Anchor Straps",
        "image": "/public/products/belt13.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt14",
        "title": "Quantum Quasar Belt",
        "image": "/public/products/belt14.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt15",
        "title": "Gravitational Grip Straps",
        "image": "/public/products/belt15.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "belt16",
        "title": "Chrono Chronograph Belt",
        "image": "/public/products/belt16.png",
        "brand": "WayneTech",
        "category": "Belt"
    },
    {
        "id": "belt17",
        "title": "Nebula Nexus Straps",
        "image": "/public/products/belt17.png",
        "brand": "Arkham Apparel",
        "category": "Belt"
    },
    {
        "id": "gel00",
        "title": "Glowing Gelatinous Serum",
        "image": "/public/products/gel00.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel01",
        "title": "Rainbow Radiance Refresher",
        "image": "/public/products/gel01.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel02",
        "title": "Midnight Miracle Moisturizer",
        "image": "/public/products/gel02.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel03",
        "title": "Solar Splash Serum",
        "image": "/public/products/gel03.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel04",
        "title": "Luminous Lotion Luxe",
        "image": "/public/products/gel04.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel05",
        "title": "Aurora Awakening Gel",
        "image": "/public/products/gel05.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel06",
        "title": "Nova Nourishing Night Cream",
        "image": "/public/products/gel06.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel07",
        "title": "Stellar Skin Soother",
        "image": "/public/products/gel07.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel08",
        "title": "Galactic Glow Enhancer",
        "image": "/public/products/gel08.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel09",
        "title": "Celestial Complexion Corrector",
        "image": "/public/products/gel09.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel10",
        "title": "Orbital Oil Absorber",
        "image": "/public/products/gel10.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel11",
        "title": "Darkstar Deep Cleanser",
        "image": "/public/products/gel11.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel12",
        "title": "Astral Anti-Aging Serum",
        "image": "/public/products/gel12.png",
        "brand": "WayneTech",
        "category": "Gel"
    },
    {
        "id": "gel13",
        "title": "Quantum Quenching Cream",
        "image": "/public/products/gel13.png",
        "brand": "Arkham Chemicals",
        "category": "Gel"
    },
    {
        "id": "gel14",
        "title": "Gravitational Glow Formula",
        "image": "/public/products/gel14.png",
        "brand": "WayneTech",
        "category": "Gel"
    },

    {
        "id": "hook00",
        "title": "Gravity Defier Gauntlets",
        "image": "/public/products/hook00.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook01",
        "title": "Skyhook Boots",
        "image": "/public/products/hook01.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook02",
        "title": "Cape Catcher Cowl",
        "image": "/public/products/hook02.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook03",
        "title": "Lasso of Truth Gloves",
        "image": "/public/products/hook03.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook04",
        "title": "Rope-a-Dope Vests",
        "image": "/public/products/hook04.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook05",
        "title": "Net Ninja Mask",
        "image": "/public/products/hook05.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook06",
        "title": "Web Slinger Wraps",
        "image": "/public/products/hook06.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook07",
        "title": "Pike and Chain Gauntlets",
        "image": "/public/products/hook07.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook08",
        "title": "Fishing Line Fins",
        "image": "/public/products/hook08.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook09",
        "title": "Tethering Tethers",
        "image": "/public/products/hook09.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook10",
        "title": "Lasso of Truth Harness",
        "image": "/public/products/hook10.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook11",
        "title": "Safety Net Sling",
        "image": "/public/products/hook11.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook12",
        "title": "Fishing Rod Fins",
        "image": "/public/products/hook12.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "hook13",
        "title": "Climbing Gear Choker",
        "image": "/public/products/hook13.png",
        "brand": "Arkham Apparel",
        "category": "Hook"
    },
    {
        "id": "hook14",
        "title": "Web Swinging Hook",
        "image": "/public/products/hook14.png",
        "brand": "WayneTech",
        "category": "Hook"
    },
    {
        "id": "sequencer00",
        "title": "Chrono Counter Cuffs",
        "image": "/public/products/sequencer00.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer01",
        "title": "Timekeeper's Torso",
        "image": "/public/products/sequencer01.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer02",
        "title": "Pulse Pacer Gauntlets",
        "image": "/public/products/sequencer02.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer03",
        "title": "Rhythmic Rider Gloves",
        "image": "/public/products/sequencer03.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer04",
        "title": "Beat Blaster Boots",
        "image": "/public/products/sequencer04.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer05",
        "title": "Melodic Mauler Mask",
        "image": "/public/products/sequencer05.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer06",
        "title": "Metronome Master Vests",
        "image": "/public/products/sequencer06.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer07",
        "title": "Syncopated Sling",
        "image": "/public/products/sequencer07.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer08",
        "title": "Pulse Pumping Pants",
        "image": "/public/products/sequencer08.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer09",
        "title": "Harmonic Harness",
        "image": "/public/products/sequencer09.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer10",
        "title": "Crescendo Cuffs",
        "image": "/public/products/sequencer10.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer11",
        "title": "Tempo Tamer Gauntlets",
        "image": "/public/products/sequencer11.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer12",
        "title": "Rhythmic Ramparts",
        "image": "/public/products/sequencer12.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
    {
        "id": "sequencer13",
        "title": "Maelstrom Mask",
        "image": "/public/products/sequencer13.png",
        "brand": "Arkham Apparel",
        "category": "Sequencer"
    },
    {
        "id": "sequencer14",
        "title": "Sonic Sling",
        "image": "/public/products/sequencer14.png",
        "brand": "WayneTech",
        "category": "Sequencer"
    },
];

