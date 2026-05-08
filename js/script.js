// Product Data - Original restored (no override)
const products = [
    // Existing products 1-6 unchanged...
    {
        id: 1,
        name: "Shampoo 500ml",
        price: 4.99,
        originalPrice: 6.99,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        icon: "🧴",
        description: "Luxury hotel guest shampoo, pleasant scent",
        category: "amenities",
        onSale: true,
        stock: 15,
        details: {
            brand: " Bradethy Pro",
            sku: "SH-500ML",
            weight: "500ml",
            ingredients: "Aqua, Sodium Lauryl Sulfate, Cocamide DEA, Glycerin, Fragrance, Citric Acid",
            features: ["pH balanced", "Paraben-free", "Luxury scent", "Large format for bulk use"],
            usage: "Apply to damp hair, massage gently and rinse thoroughly. For external use only.",
            warnings: "Avoid eye contact. If irritation occurs, discontinue use."
        }
    },
    {
        id: 2,
        name: "Hand Soap Refill",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&h=400&fit=crop",
        icon: "🧼",
        description: "Antibacterial hand soap for guest rooms",
        category: "amenities",
        onSale: false,
        stock: 50,
        details: {
            brand: " Bradethy Pro",
            sku: "HS-REFILL",
            weight: "500ml",
            ingredients: "Aqua, Triclosan, Sodium Laureth Sulfate, Aloe Vera, Vitamin E",
            features: ["Antibacterial", "Moisturizing formula", "Refillable bottle", "Hotel-grade quality"],
            usage: "Pump onto hands, lather and rinse with water.",
            warnings: "For external use only. Keep out of reach of children."
        }
    },
    {
        id: 3,
        name: "All-Purpose Cleaner",
        price: 6.99,
        originalPrice: 9.99,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
        icon: "🧽",
        description: "Professional multi-surface cleaning spray",
        category: "cleaning",
        onSale: true,
        stock: 8,
        details: {
            brand: " Bradethy Pro",
            sku: "APC-750ML",
            weight: "750ml",
            ingredients: "Water, Isopropyl Alcohol, Surfactants, Degreaser Agents",
            features: ["Multi-surface", "Streak-free", "Industrial strength", "Citrus scent"],
            usage: "Spray directly on surface, wipe with clean cloth. No rinsing required.",
            warnings: "Wear gloves. Do not mix with bleach or ammonia."
        }
    },
    {
        id: 4,
        name: "Coffee Pods Box (20ct)",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
        icon: "☕",
        description: "Premium ground coffee pods for in-room service",
        category: "beverages",
        onSale: false,
        stock: 35,
        details: {
            brand: "Premium Roast Co.",
            sku: "CP-20CT",
            weight: "200g",
            ingredients: "100% Arabica Coffee",
            features: ["Medium roast", "Compatible with major pod machines", "Freshly roasted", "Fair trade certified"],
            usage: "Insert pod into compatible coffee machine and brew as directed.",
            warnings: "Contains caffeine. Not for persons with coffee allergies."
        }
    },
    {
        id: 5,
        name: "Bath Towel Set",
        price: 19.99,
        originalPrice: 24.99,
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400&h=400&fit=crop",
        icon: "🛁",
        description: "Soft 100% cotton bath towels, bulk pack",
        category: "bedding",
        onSale: true,
        stock: 22,
        details: {
            brand: " Bradethy Pro",
            sku: "BT-SET-2",
            weight: "600g per towel",
            material: "100% Egyptian Cotton",
            features: ["600 GSM", "Machine washable", "Quick dry", "Hotel quality"],
            usage: "Wash before first use. Machine wash cold with similar colors.",
            warnings: "Do not use bleach. Tumble dry low."
        }
    },
    {
        id: 6,
        name: "Disinfectant Wipes",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1584712968850-eac9260b1f84?w=400&h=400&fit=crop",
        icon: "🧻",
        description: "Individually wrapped surface cleaning wipes",
        category: "cleaning",
        onSale: false,
        stock: 0,
        details: {
            brand: " Bradethy Pro",
            sku: "DW-80CT",
            weight: "80 wipes",
            ingredients: "Isopropyl Alcohol (70%), Aloe Vera, Vitamin E",
            features: ["Kills 99.9% of bacteria", "Individually wrapped", "Moisture-lock packaging", "Hospital grade"],
            usage: "Wipe surface and allow to dry. No rinsing needed.",
            warnings: "Flammable. Keep away from heat sources. For external use only."
        }
    },
    {
        id: 7,
        name: "Tomato Sauce Sachets (100pk)",
        price: 2.50,
        image: "https://images.unsplash.com/photo-1541599468178-7b7d8eb1ae0b?w=400&h=400&fit=crop",
        icon: "🍅",
        description: "Convenient single-serve tomato sauce sachets for restaurants",
        category: "condiments",
        onSale: false,
        stock: 45,
        details: {
            brand: "Bradethy Supplies",
            sku: "TSS-100",
            weight: "100 sachets",
            features: ["Perfect portion size", "Leak-proof packaging", "High quality tomatoes", "Restaurant grade"],
            usage: "Tear top and squeeze onto food.",
            warnings: "Keep in cool dry place."
        }
    },
    {
        id: 8,
        name: "Vinegar Sachets (100pk)",
        price: 2.00,
        image: "https://images.unsplash.com/photo-1585414754515-1c2bccf749cd?w=400&h=400&fit=crop",
        icon: "🍇",
        description: "Malt vinegar sachets for fish & chips",
        category: "condiments",
        onSale: true,
        originalPrice: 2.50,
        stock: 60,
        details: {
            brand: "Bradethy Supplies",
            sku: "VS-100",
            weight: "100 sachets",
            features: ["Classic malt vinegar", "Single serve", "No mess", "Authentic taste"],
            usage: "Tear and pour over chips or salad.",
            warnings: "Acidic - avoid eye contact."
        }
    },
    {
        id: 9,
        name: "Salt Sachets (200pk)",
        price: 1.50,
        image: "https://images.unsplash.com/photo-1591117900482-c275f677c0d0?w=400&h=400&fit=crop",
        icon: "🧂",
        description: "Fine table salt in convenient sachets",
        category: "condiments",
        onSale: false,
        stock: 80,
        details: {
            brand: "Bradethy Supplies",
            sku: "SS-200",
            weight: "200 sachets",
            features: ["Iodized salt", "Fine grain", "Portion controlled", "Bulk pack"],
            usage: "Tear open and sprinkle.",
            warnings: "Use in moderation."
        }
    },
    {
        id: 10,
        name: "Serviettes (1000pk)",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1581637685570-0c420523f640?w=400&h=400&fit=crop",
        icon: "🧻",
        description: "2-ply white serviettes for table service",
        category: "disposables",
        onSale: false,
        stock: 30,
        details: {
            brand: "Bradethy Supplies",
            sku: "SERV-1000",
            weight: "1000 sheets",
            material: "Recycled paper",
            features: ["2-ply strength", "Absorbent", "White color", "Standard size"],
            usage: "Place on tables for guests.",
            warnings: "Keep dry."
        }
    },
    {
        id: 11,
        name: "Hair Nets (100pk)",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1578662996441-03b7d4d5e6ea?w=400&h=400&fit=crop",
        icon: "🎭",
        description: "Disposable hair nets for kitchen staff",
        category: "disposables",
        onSale: false,
        stock: 55,
        details: {
            brand: "Bradethy Supplies",
            sku: "HN-100",
            weight: "100 nets",
            material: "Nylon mesh",
            features: ["One size fits most", "Comfortable", "Effective coverage", "Food safe"],
            usage: "Place over hair before food prep.",
            warnings: "Single use only."
        }
    },
    {
        id: 12,
        name: "Bin Liners (100pk)",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1580910362090-8e3354e94f35?w=400&h=400&fit=crop",
        icon: "🗑️",
        description: "Heavy duty black bin bags 30L",
        category: "disposables",
        onSale: true,
        originalPrice: 15.00,
        stock: 25,
        details: {
            brand: "Bradethy Supplies",
            sku: "BL-30L100",
            weight: "100 bags",
            material: "LDPE plastic",
            features: ["30L capacity", "Heavy duty", "Black color", "Leak resistant"],
            usage: "Line kitchen/restaurant bins.",
            warnings: "Dispose responsibly."
        }
    },
    {
        id: 13,
        name: "Khakhi Bags (500pk)",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1587014611678-6fc3eb7ab5e3?w=400&h=400&fit=crop",
        icon: "👜",
        description: "Durable brown paper bags for takeaways",
        category: "packaging",
        onSale: false,
        stock: 40,
        details: {
            brand: "Bradethy Supplies",
            sku: "KB-500",
            weight: "500 bags",
            material: "Kraft paper",
            features: ["Medium size", "Food safe", "Eco-friendly", "Strong handles"],
            usage: "Pack takeaways and groceries.",
            warnings: "Keep dry."
        }
    },
    {   
        id: 14, 
        name: "kaylites", 
        price: 4.99, 
        image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop", 
        icon: "🕯️", 
        description: "Kaylites candles pack",
        category: "packaging", 
        stock: 35, 
        details: {
            brand: "Bradethy Supplies", 
            sku: "KAYLITE", 
            weight: "1000pk", 
            features: ["Bulk", "White"], 
            usage: "Tables", 
            warnings: "Fire safety" 
        } 
    },
    { 
        id: 15, 
        name: "plastic spoons", 
        price: 5.50, 
        image: "https://images.unsplash.com/photo-1622299606544-6b1051c2e41c?w=400&h=400&fit=crop", 
        icon: "🥄", 
        description: "Disposable plastic spoons bulk",
        category: "disposables", 
        stock: 70, 
        details: { 
            brand: "Bradethy Supplies", 
            sku: "SPOON", 
            weight: "1000pk", 
            features: ["Food safe"], 
            usage: "Serving", 
            warnings: "Single use" 
        } 
    },
    { 
        id: 16, 
        name: "plastic forks", 
        price: 6.00, 
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3133?w=400&h=400&fit=crop", 
        icon: "🍴", 
        description: "Disposable plastic forks bulk",
        category: "disposables", 
        stock: 65, 
        details: { 
            brand: "Bradethy Supplies", 
            sku: "FORK", 
            weight: "1000pk", 
            features: ["Strong"], 
            usage: "Meals", 
            warnings: "Single use" 
        } 
    },
    { 
        id: 17, 
        name: "plasticknives", 
        price: 6.25, 
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop", 
        icon: "🔪", 
        description: "Disposable plastic knives bulk",
        category: "disposables", 
        stock: 60, 
        details: { 
            brand: "Bradethy Supplies", 
            sku: "KNIFE", 
            weight: "1000pk", 
            features: ["Serrated"], 
            usage: "Cutting", 
            warnings: "Careful"
        } 
    },
    {  
        id: 18,  
        name: "clear cups",  
        price: 4.99,  
        image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=400&h=400&fit=crop",  
        icon: "🥤",  
        description: "Disposable clear plastic cups bulk",  
        category: "disposables",  
        stock: 100,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "CUPCLEAR",  
            weight: "200pk",  
            features: ["Transparent", "BPA-Free"],  
            usage: "Cold drinks",  
            warnings: "Not microwave safe"  
        }  
    },  
    {  
        id: 19,  
        name: "coffee cups",  
        price: 5.49,  
        image: "https://images.unsplash.com/photo-1558857563-c0c3710a6a8b?w=400&h=400&fit=crop",  
        icon: "☕",  
        description: "Disposable hot beverage cups with lids",  
        category: "disposables",  
        stock: 90,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "CUPCOFF",  
            weight: "150pk",  
            features: ["Insulated", "Leak-resistant"],  
            usage: "Hot beverages",  
            warnings: "Fill below rim"  
        }  
    },  
    {  
        id: 20,  
        name: "toilet rolls",  
        price: 8.99,  
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=400&fit=crop",  
        icon: "🧻",  
        description: "Soft 2-ply toilet paper bulk pack",  
        category: "paper products",  
        stock: 75,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "TISSUE",  
            weight: "24 rolls",  
            features: ["2-Ply", "Septic-safe"],  
            usage: "Bathroom",  
            warnings: "Keep dry"  
        }  
    },  
    {  
        id: 21,  
        name: "soft brooms",  
        price: 3.99,  
        image: "https://images.unsplash.com/photo-1585683642052-8c6c07c02222?w=400&h=400&fit=crop",  
        icon: "🧹",  
        description: "Soft bristle household brooms",  
        category: "cleaning",  
        stock: 50,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "BROOMSF",  
            weight: "1 piece",  
            features: ["Soft bristles", "Ergonomic handle"],  
            usage: "Indoor sweeping",  
            warnings: "Store upright"  
        }  
    },  
    {  
        id: 22,  
        name: "mops",  
        price: 5.99,  
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",  
        icon: "🪣",  
        description: "Absorbent cotton mop with handle",  
        category: "cleaning",  
        stock: 45,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "MOPC",  
            weight: "1 piece",  
            features: ["Absorbent", "Machine washable"],  
            usage: "Floor cleaning",  
            warnings: "Wring before use"  
        }  
    },
    {  
        id: 23,  
        name: "hard brooms",  
        price: 4.49,  
        image: "https://images.unsplash.com/photo-1585683642052-8c6c07c02222?w=400&h=400&fit=crop",  
        icon: "🧹",  
        description: "Stiff bristle outdoor brooms",  
        category: "cleaning",  
        stock: 50,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "BROOMH",  
            weight: "1 piece",  
            features: ["Stiff bristles", "Heavy duty"],  
            usage: "Outdoor sweeping",  
            warnings: "Not for indoor use"  
        }  
    },  
    {  
        id: 24,  
        name: "cling wraps",  
        price: 3.49,  
        image: "https://images.unsplash.com/photo-1612966872813-f01d7b3de5a2?w=400&h=400&fit=crop",  
        icon: "🫙",  
        description: "Transparent plastic cling wrap rolls",  
        category: "kitchen",  
        stock: 80,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "CLING",  
            weight: "2 rolls",  
            features: ["Self-adhesive", "Microwave safe"],  
            usage: "Food wrapping",  
            warnings: "Keep away from heat"  
        }  
    },  
    {  
        id: 25,  
        name: "paper towels",  
        price: 6.99,  
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",  
        icon: "🧻",  
        description: "Strong absorbent paper towel rolls",  
        category: "paper products",  
        stock: 70,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "PAPERT",  
            weight: "6 rolls",  
            features: ["High absorbency", "Rip-perforated"],  
            usage: "Cleaning spills",  
            warnings: "Do not flush"  
        }  
    },  
    {  
        id: 26,  
        name: "kebab sticks",  
        price: 2.99,  
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=400&fit=crop",  
        icon: "🥓",  
        description: "Bamboo skewers for grilling",  
        category: "disposables",  
        stock: 100,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "KEBAB",  
            weight: "300pk",  
            features: ["Bamboo", "Splinter-free"],  
            usage: "Grilling & catering",  
            warnings: "Soak before grilling"  
        }  
    },  
    {  
        id: 27,  
        name: "mutton cloths",  
        price: 4.49,  
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",  
        icon: "🧶",  
        description: "Unbleached cotton mutton cloth bulk",  
        category: "kitchen",  
        stock: 65,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "MUTTON",  
            weight: "10pk",  
            features: ["Natural cotton", "Lint-free"],  
            usage: "Straining & polishing",  
            warnings: "Wash before first use"  
        }  
    },
    {  
        id: 28,  
        name: "plastic carrier bags",  
        price: 5.99,  
        image: "https://images.unsplash.com/photo-1607083206869-4c7672e72d8a?w=400&h=400&fit=crop",  
        icon: "🛍️",  
        description: "Durable plastic shopping carrier bags",  
        category: "disposables",  
        stock: 200,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "CARRIER",  
            weight: "200pk",  
            features: ["Heavy duty", "Handle cutouts"],  
            usage: "Shopping & packaging",  
            warnings: "Keep away from children"  
        }  
    },  
    {  
        id: 29,  
        name: "paper plates",  
        price: 3.99,  
        image: "https://images.unsplash.com/photo-1610831903946-c8c5c6d4f287?w=400&h=400&fit=crop",  
        icon: "🍽️",  
        description: "Disposable paper plates bulk pack",  
        category: "disposables",  
        stock: 120,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "PPLATE",  
            weight: "100pk",  
            features: ["Soak-proof", "Microwave safe"],  
            usage: "Serving food",  
            warnings: "Not for heavy meals"  
        }  
    },  
    {  
        id: 30,  
        name: "scouring powder",  
        price: 2.49,  
        image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",  
        icon: "🧼",  
        description: "Multi-purpose scouring cleaning powder",  
        category: "cleaning",  
        stock: 85,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "SCOUR",  
            weight: "500g",  
            features: ["Abrasive", "Degreasing"],  
            usage: "Surface scrubbing",  
            warnings: "Wear gloves"  
        }  
    },  
    {  
        id: 31,  
        name: "toothpicks",  
        price: 1.49,  
        image: "https://images.unsplash.com/photo-1612966872813-f01d7b3de5a2?w=400&h=400&fit=crop",  
        icon: "🪥",  
        description: "Wooden toothpicks box pack",  
        category: "disposables",  
        stock: 150,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "PICKS",  
            weight: "500pk",  
            features: ["Wooden", "Double-pointed"],  
            usage: "Dental & catering",  
            warnings: "Keep out of reach of children"  
        }  
    },  
    {  
        id: 32,  
        name: "cremora satchets",  
        price: 0.99,  
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",  
        icon: "🥛",  
        description: "Non-dairy creamer single serve satchets",  
        category: "food & beverages",  
        stock: 300,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "CREMORA",  
            weight: "100pk",  
            features: ["Non-dairy", "Single serve"],  
            usage: "Coffee & tea",  
            warnings: "Store in cool dry place"  
        }  
    },
    {  
        id: 33,  
        name: "sugar sachets",  
        price: 0.99,  
        image: "https://images.unsplash.com/photo-1581791538309-1552a5c5cbd1?w=400&h=400&fit=crop",  
        icon: "🍚",  
        description: "White sugar single serve satchets",  
        category: "food & beverages",  
        stock: 300,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "SUGAR",  
            weight: "100pk",  
            features: ["Fine grain", "Single serve"],  
            usage: "Sweetening beverages",  
            warnings: "Store in cool dry place"  
        }  
    },  
    {  
        id: 34,  
        name: "pepper sachets",  
        price: 0.99,  
        image: "https://images.unsplash.com/photo-1596097635026-3c0c3c8b0b8b?w=400&h=400&fit=crop",  
        icon: "🌶️",  
        description: "Black pepper single serve satchets",  
        category: "food & beverages",  
        stock: 280,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "PEPPER",  
            weight: "100pk",  
            features: ["Fine ground", "Single serve"],  
            usage: "Seasoning",  
            warnings: "Store in cool dry place"  
        }  
    },  
    {  
        id: 35,  
        name: "oil sachets",  
        price: 1.49,  
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",  
        icon: "🫒",  
        description: "Cooking oil single serve satchets",  
        category: "food & beverages",  
        stock: 250,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "OIL",  
            weight: "50pk",  
            features: ["Vegetable oil", "Single serve"],  
            usage: "Cooking & frying",  
            warnings: "Keep away from heat"  
        }  
    },  
    {  
        id: 36,  
        name: "butter",  
        price: 3.99,  
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",  
        icon: "🧈",  
        description: "Salted dairy butter block",  
        category: "food & beverages",  
        stock: 60,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "BUTTER",  
            weight: "500g",  
            features: ["Salted", "Creamy"],  
            usage: "Spreading & baking",  
            warnings: "Refrigerate after opening"  
        }  
    },  
    {  
        id: 37,  
        name: "jam",  
        price: 2.99,  
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",  
        icon: "🍓",  
        description: "Mixed fruit jam jar",  
        category: "food & beverages",  
        stock: 55,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "JAM",  
            weight: "400g",  
            features: ["Mixed fruit", "No artificial colors"],  
            usage: "Spreading on bread",  
            warnings: "Refrigerate after opening"  
        }  
    },
    {  
        id: 38,  
        name: "honey",  
        price: 4.49,  
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",  
        icon: "🍯",  
        description: "Pure natural honey jar",  
        category: "food & beverages",  
        stock: 50,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "HONEY",  
            weight: "500g",  
            features: ["Natural", "No additives"],  
            usage: "Spreading & sweetening",  
            warnings: "Not suitable for infants under 12 months"  
        }  
    },  
    {  
        id: 39,  
        name: "peanut butter",  
        price: 3.49,  
        image: "https://images.unsplash.com/photo-1590075891028-5a5d2f5c9b2e?w=400&h=400&fit=crop",  
        icon: "🥜",  
        description: "Smooth peanut butter jar",  
        category: "food & beverages",  
        stock: 55,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "PNTBUT",  
            weight: "400g",  
            features: ["Smooth", "High protein"],  
            usage: "Spreading & baking",  
            warnings: "Contains nuts"  
        }  
    },  
    {  
        id: 40,  
        name: "cereal packets",  
        price: 5.99,  
        image: "https://images.unsplash.com/photo-1530634924474-0e3295409a53?w=400&h=400&fit=crop",  
        icon: "🥣",  
        description: "Breakfast cereal family pack",  
        category: "food & beverages",  
        stock: 40,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "CEREAL",  
            weight: "750g",  
            features: ["Fortified", "Whole grain"],  
            usage: "Breakfast",  
            warnings: "Store in airtight container"  
        }  
    },  
    {  
        id: 41,  
        name: "milk sachets",  
        price: 1.29,  
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",  
        icon: "🥛",  
        description: "Long-life milk single serve satchets",  
        category: "food & beverages",  
        stock: 200,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "MILK",  
            weight: "50pk",  
            features: ["UHT treated", "Single serve"],  
            usage: "Beverages & cereal",  
            warnings: "Refrigerate after opening"  
        }  
    },  
    {  
        id: 42,  
        name: "tea bags",  
        price: 3.99,  
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",  
        icon: "🫖",  
        description: "Premium black tea bags bulk pack",  
        category: "food & beverages",  
        stock: 90,  
        details: {  
            brand: "Bradethy Supplies",  
            sku: "TEA",  
            weight: "100pk",  
            features: ["Black tea", "Individual wrapped"],  
            usage: "Hot tea brewing",  
            warnings: "Store in cool dry place"  
        }  
    },
    {
        id: 43,
        name: "glass cleaner",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
        icon: "🧴",
        description: "Streak-free ammonia glass cleaner spray",
        category: "cleaning supplies",
        stock: 120,
        details: {
            brand: "Bradethy Supplies",
            sku: "GLS-CLN",
            weight: "32 fl oz",
            features: ["Streak-free", "Ammonia-based", "Spray bottle"],
            usage: "Spray on glass surfaces and wipe clean",
            warnings: "Avoid contact with eyes. Use in well-ventilated area."
        }
    },
    {
        id: 44,
        name: "air freshener",
        price: 3.29,
        image: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
        icon: "🌸",
        description: "Continuous aerosol air freshener, lavender scent",
        category: "cleaning supplies",
        stock: 200,
        details: {
            brand: "Bradethy Supplies",
            sku: "AIR-FRSH",
            weight: "8 oz",
            features: ["Continuous spray", "Lavender scent", "Long-lasting"],
            usage: "Place in room for continuous freshness",
            warnings: "Flammable. Do not puncture. Keep away from heat."
        }
    },
    {
        id: 45,
        name: "tissue boxes",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
        icon: "📦",
        description: "Premium 3-ply facial tissues, 100-count box",
        category: "paper products",
        stock: 300,
        details: {
            brand: "Bradethy Supplies",
            sku: "TISS-BOX",
            weight: "100 tissues per box",
            features: ["3-ply", "Hypoallergenic", "Lotion-infused"],
            usage: "Facial tissue for everyday use",
            warnings: "Do not flush. Dispose in trash."
        }
    },
    {
        id: 46,
        name: "face towels",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop",
        icon: "🧻",
        description: "Soft microfiber face towels, set of 6",
        category: "bath & linens",
        stock: 80,
        details: {
            brand: "Bradethy Supplies",
            sku: "FACE-TWL",
            weight: "12 oz (set)",
            features: ["Microfiber", "Quick-dry", "Set of 6"],
            usage: "Gentle facial cleansing and drying",
            warnings: "Machine wash cold. Do not use fabric softener."
        }
    },
    {
        id: 47,
        name: "hand towels",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400&h=400&fit=crop",
        icon: "🧣",
        description: "Premium cotton hand towels, set of 4",
        category: "bath & linens",
        stock: 60,
        details: {
            brand: "Bradethy Supplies",
            sku: "HAND-TWL",
            weight: "16 oz (set)",
            features: ["100% Cotton", "Absorbent", "Set of 4", "Ring-spun"],
            usage: "Hand drying in bathroom or kitchen",
            warnings: "Machine wash warm. Tumble dry low."
        }
    },
    {
        id: 48,
        name: "bed sheets",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
        icon: "🛏️",
        description: "Queen-size microfiber bed sheet set, 4-piece",
        category: "bath & linens",
        stock: 45,
        details: {
            brand: "Bradethy Supplies",
            sku: "BED-SHT",
            weight: "2.5 lbs",
            features: ["Microfiber", "Queen size", "4-piece set", "Wrinkle-resistant"],
            usage: "Bedding for queen-size mattress",
            warnings: "Machine wash cold. Do not bleach."
        }
    },
    {
        id: 49,
        name: "pillow cases",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop",
        icon: "🛌",
        description: "Soft cotton pillow cases, standard size, pack of 2",
        category: "bath & linens",
        stock: 110,
        details: {
            brand: "Bradethy Supplies",
            sku: "PILLOW-CS",
            weight: "8 oz (pack)",
            features: ["100% Cotton", "Standard size", "Pack of 2", "Envelope closure"],
            usage: "Pillow covering for standard pillows",
            warnings: "Machine wash warm. Iron on medium if needed."
        }
    },
    {
        id: 50,
        name: "mattress protectors",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
        icon: "🛡️",
        description: "Waterproof queen-size mattress protector",
        category: "bath & linens",
        stock: 35,
        details: {
            brand: "Bradethy Supplies",
            sku: "MATTR-PRT",
            weight: "1.2 lbs",
            features: ["Waterproof", "Breathable", "Queen size", "Deep pocket"],
            usage: "Place over mattress for protection",
            warnings: "Machine wash cold. Do not iron. Do not dry clean."
        }
    },
    {
        id: 51,
        name: "ice bags",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1563865436914-44f18c8015e6?w=400&h=400&fit=crop",
        icon: "🧊",
        description: "Heavy-duty ice cube bags, pack of 50",
        category: "kitchen & dining",
        stock: 250,
        details: {
            brand: "Bradethy Supplies",
            sku: "ICE-BAG",
            weight: "10 oz (pack)",
            features: ["Heavy-duty", "Self-sealing", "Pack of 50"],
            usage: "Fill with water, seal, and freeze for ice cubes",
            warnings: "For food use only. Do not reuse for hot liquids."
        }
    },
    {
        id: 52,
        name: "cooler boxes",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1609342129163-f58f9c3eb0b8?w=400&h=400&fit=crop",
        icon: "🧳",
        description: "Insulated hard-shell cooler box, 25-liter capacity",
        category: "kitchen & dining",
        stock: 25,
        details: {
            brand: "Bradethy Supplies",
            sku: "COOL-BOX",
            weight: "4.5 lbs",
            features: ["Insulated", "Hard-shell", "25L capacity", "Carry handle"],
            usage: "Keeps food and drinks cold during transport",
            warnings: "Hand wash only. Do not microwave. Not dishwasher safe."
        }
    },
    {
        id: 53,
        name: "serving trays",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1603888611513-0b829337de30?w=400&h=400&fit=crop",
        icon: "🍽️",
        description: "Plastic serving trays, set of 4, assorted colors",
        category: "kitchen & dining",
        stock: 70,
        details: {
            brand: "Bradethy Supplies",
            sku: "SERV-TRAY",
            weight: "1.5 lbs (set)",
            features: ["BPA-free", "Lightweight", "Set of 4", "Dishwasher safe"],
            usage: "Serving food and drinks to guests",
            warnings: "Microwave safe in 30-second intervals only."
        }
    },
    {
        id: 54,
        name: "cutlery trays",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
        icon: "🔪",
        description: "Expandable bamboo cutlery organizer tray",
        category: "kitchen & dining",
        stock: 40,
        details: {
            brand: "Bradethy Supplies",
            sku: "CUTL-TRAY",
            weight: "1 lb",
            features: ["Bamboo", "Expandable design", "Multiple compartments", "Non-slip base"],
            usage: "Organize forks, knives, spoons, and utensils in drawers",
            warnings: "Wipe clean with damp cloth. Do not submerge in water."
        }
    }
];

// Cart State
let cart = [];

// Wishlist State
let wishlist = [];

// All products for filtering
let filteredProducts = [...products];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const contactForm = document.getElementById('contactForm');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const nav = document.querySelector('.nav');
const productSearch = document.getElementById('productSearch');
const categoryFilter = document.getElementById('categoryFilter');
const priceSort = document.getElementById('priceSort');
const searchBtn = document.getElementById('searchBtn');
const wishlistToggle = document.getElementById('wishlistToggle');
const wishlistModal = document.getElementById('wishlistModal');
const wishlistItems = document.getElementById('wishlistItems');
const closeWishlist = document.getElementById('closeWishlist');
const wishlistCount = document.getElementById('wishlistCount');
const darkModeToggle = document.getElementById('darkModeToggle');
const promoBanner = document.getElementById('promoBanner');
const promoClose = document.getElementById('promoClose');
const backToTop = document.getElementById('backToTop');
const newsletterForm = document.getElementById('newsletterForm');
const floatingCart = document.getElementById('floatingCart');
const floatingCartCount = document.getElementById('floatingCartCount');
const floatingWishlist = document.getElementById('floatingWishlist');
const floatingWishlistCount = document.getElementById('floatingWishlistCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showLoading();
    setTimeout(() => {

        if (typeof initProducts === 'function') {
            initProducts();
        } else {
            renderProducts();
        }

        hideLoading();
        loadCart();
        loadWishlist();
        loadDarkMode();
        checkPromoBanner();
        if (typeof loadFilters === 'function') loadFilters();
        setupEventListeners();
        initScrollAnimations();
        registerSW();
        
    }, 800);
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('PWA SW registered:', registration.scope);
      
      // Update available
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              showNotification('New update available! Refresh to get latest features.');
            }
          }
        });
      });
    } catch (error) {
      console.error('PWA SW registration failed:', error);
    }
  }
}

// Render Products
function renderProducts() {
    const isHomePage = location.pathname.endsWith('index.html') || location.pathname === '/';
    const limit = isHomePage ? 6 : filteredProducts.length;
    const productsToRender = filteredProducts.slice(0, limit);

    productGrid.innerHTML = productsToRender.map(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
        
        // Stock status
        let stockStatus = 'in-stock';
        let stockText = 'In Stock';
        if (product.stock === 0) {
            stockStatus = 'out-of-stock';
            stockText = 'Out of Stock';
        } else if (product.stock <= 10) {
            stockStatus = 'low-stock';
            stockText = `Only ${product.stock} left`;
        }
        
return `
        <div class="product-card" role="listitem">
            ${product.onSale ? `<span class="sale-badge">-${discount}%</span>` : ''}
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Add ${product.name} to wishlist">
                <i class="fas fa-heart"></i>
            </button>
            <div class="product-image" aria-label="${product.name} image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none';this.parentNode.textContent='${product.icon}'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="stock-status ${stockStatus}">
                    <span class="stock-dot"></span>
                    <span>${stockText}</span>
                </div>
                <div class="price" aria-label="Price">
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    $${product.price.toFixed(2)}
                </div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}" aria-label="View details for ${product.name}">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <button class="add-to-cart" data-id="${product.id}" aria-label="Add ${product.name} to cart">Add to Cart</button>
                </div>
            </div>
        </div>
    `}).join('');

// Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });

    // Add wishlist button listeners
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.wishlist-btn').dataset.id);
            toggleWishlist(productId);
        });
    });
    
// View Details button listeners
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.view-details').dataset.id);
            openProductDetails(productId);
        });
    });
}

// Open Product Details Modal
function openProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.details) return;
    
    // Create modal if not exists
    let modal = document.getElementById('productDetailsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productDetailsModal';
        modal.className = 'product-details-modal';
        document.body.appendChild(modal);
    }
    
    // Stock status
    let stockStatus = 'in-stock';
    let stockText = 'In Stock';
    if (product.stock === 0) {
        stockStatus = 'out-of-stock';
        stockText = 'Out of Stock';
    } else if (product.stock <= 10) {
        stockStatus = 'low-stock';
        stockText = `Only ${product.stock} left`;
    }
    
    // Build features list
    const featuresList = product.details.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
    
modal.innerHTML = `
        <div class="details-modal-content">
            <button class="details-close" aria-label="Close"><i class="fas fa-times"></i></button>
            <div class="details-image">
                <img src="${product.image}" alt="${product.name}" style="width:100%;max-width:200px;border-radius:8px;" onerror="this.style.display='none';this.parentNode.innerHTML='${product.icon}'">
            </div>
            <div class="details-info">
                <span class="details-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="stock-status ${stockStatus}">
                    <span class="stock-dot"></span>
                    <span>${stockText}</span>
                </div>
                <div class="details-price">
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    $${product.price.toFixed(2)}
                </div>
                <p class="details-description">${product.description}</p>
                
                <div class="details-specs">
                    <h4><i class="fas fa-box"></i> Product Details</h4>
                    <ul>
                        <li><strong>Brand:</strong> ${product.details.brand}</li>
                        <li><strong>SKU:</strong> ${product.details.sku}</li>
                        <li><strong>Weight:</strong> ${product.details.weight}</li>
                        ${product.details.material ? `<li><strong>Material:</strong> ${product.details.material}</li>` : ''}
                    </ul>
                </div>
                
                <div class="details-specs">
                    <h4><i class="fas fa-list"></i> Features</h4>
                    <ul class="features-list">${featuresList}</ul>
                </div>
                
                <div class="details-specs">
                    <h4><i class="fas fa-flask"></i> Ingredients</h4>
                    <p class="ingredients">${product.details.ingredients}</p>
                </div>
                
                <div class="details-specs">
                    <h4><i class="fas fa-directions"></i> Usage</h4>
                    <p>${product.details.usage}</p>
                </div>
                
                <div class="details-warnings">
                    <h4><i class="fas fa-exclamation-triangle"></i> Warnings</h4>
                    <p>${product.details.warnings}</p>
                </div>
                
                <div class="details-actions">
                    <button class="add-to-cart details-add-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close button
    modal.querySelector('.details-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Add to cart from modal
    modal.querySelector('.details-add-cart')?.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        addToCart(productId);
        modal.classList.remove('active');
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

// Update Cart UI
function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    // Update floating cart button count
    if (floatingCartCount) {
        floatingCartCount.textContent = totalItems;
    }

    cartItems.innerHTML = cart.length === 0
        ? '<p class="empty-cart">Your cart is empty</p>'
        : cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)}</span>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Add quantity control listeners
    document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            decreaseQuantity(productId);
        });
    });

    document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            increaseQuantity(productId);
        });
    });

    // Add remove listeners
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        });
    });
}

// Increase Quantity
function increaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity++;
        updateCart();
        saveCart();
    }
}

// Decrease Quantity
function decreaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
        saveCart();
    } else if (item && item.quantity === 1) {
        removeFromCart(productId);
    }
}

// Save Cart to localStorage
function saveCart() {
    try {
        localStorage.setItem(' bradethyCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart:', e);
        showNotification('Warning: Cart not saved locally');
    }
}

// Load Cart from localStorage
function loadCart() {
    try {
        const saved = localStorage.getItem(' bradethyCart');
        if (saved) {
            cart = JSON.parse(saved);
            updateCart();
        }
    } catch (e) {
        console.error('Failed to load cart:', e);
    }
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const exists = wishlist.find(item => item.id === productId);
    
    if (exists) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`);
    }
    
    updateWishlistDisplay();
    saveWishlist();
    renderProducts();
}

function updateWishlistDisplay() {
    wishlistCount.textContent = wishlist.length;
    // Update floating wishlist button count
    if (floatingWishlistCount) {
        floatingWishlistCount.textContent = wishlist.length;
    }
    
    wishlistItems.innerHTML = wishlist.length === 0
        ? '<p class="empty-wishlist">Your wishlist is empty</p>'
        : wishlist.map(item => `
            <div class="wishlist-item">
                <div class="wishlist-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
                <div>
                    <button class="btn-add-to-cart" data-id="${item.id}">Add to Cart</button>
                    <button class="remove-wishlist" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `).join('');
    
    // Add add to cart listeners
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            toggleWishlist(productId);
        });
    });
    
    // Add remove listeners
    document.querySelectorAll('.remove-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            toggleWishlist(productId);
        });
    });
}

function saveWishlist() {
    try {
        localStorage.setItem(' bradethyWishlist', JSON.stringify(wishlist));
    } catch (e) {
        console.error('Failed to save wishlist:', e);
    }
}

function loadWishlist() {
    try {
        const saved = localStorage.getItem(' bradethyWishlist');
        if (saved) {
            wishlist = JSON.parse(saved);
            updateWishlistDisplay();
        }
    } catch (e) {
        console.error('Failed to load wishlist:', e);
    }
}

// Search and Filter Functions
function filterProducts() {
    const searchTerm = productSearch.value.toLowerCase();
    const category = categoryFilter.value;
    const sort = priceSort.value;
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    // Sort
    if (sort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    renderProducts();
}

function saveFilters() {
    try {
        localStorage.setItem(' bradethyFilters', JSON.stringify({
            search: productSearch.value,
            category: categoryFilter.value,
            sort: priceSort.value
        }));
    } catch (e) {
        console.error('Failed to save filters:', e);
    }
}

function loadFilters() {
    try {
        const saved = localStorage.getItem(' bradethyFilters');
        if (saved) {
            const filters = JSON.parse(saved);
            productSearch.value = filters.search || '';
            categoryFilter.value = filters.category || '';
            priceSort.value = filters.sort || '';
            filterProducts();
        }
    } catch (e) {
        console.error('Failed to load filters:', e);
    }
}

// Dark Mode Functions
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    const icon = darkModeToggle.querySelector('i');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    saveDarkMode();
}

function saveDarkMode() {
    try {
        localStorage.setItem(' bradethyDarkMode', document.body.classList.contains('dark-mode'));
    } catch (e) {
        console.error('Failed to save dark mode:', e);
    }
}

function loadDarkMode() {
    try {
        const saved = localStorage.getItem(' bradethyDarkMode');
        if (saved === 'true') {
            document.body.classList.add('dark-mode');
            const icon = darkModeToggle.querySelector('i');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    } catch (e) {
        console.error('Failed to load dark mode:', e);
    }
}

// Promotional Banner Functions
function closePromoBanner() {
    promoBanner.style.display = 'none';
    try {
        localStorage.setItem(' bradethyPromoDismissed', 'true');
    } catch (e) {
        console.error('Failed to save promo dismissal:', e);
    }
}

function checkPromoBanner() {
    try {
        const dismissed = localStorage.getItem(' bradethyPromoDismissed');
        if (dismissed === 'true') {
            promoBanner.style.display = 'none';
        }
    } catch (e) {
        console.error('Failed to check promo:', e);
    }
}

// Back to Top Functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Newsletter Functions
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification('Thank you for subscribing!');
        document.getElementById('newsletterEmail').value = '';
    } else {
        showNotification('Please enter a valid email address');
    }
}

// FAQ Accordion Functions
function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Generate Cart Summary for WhatsApp
function generateCartSummary(name, phone, address) {
    let summary = `*Bradethy Order*\n\n`;
    summary += `Customer: ${name}\n`;
    if (phone) summary += `Phone: ${phone}\n`;
    if (address) summary += `Shipping: ${address}\n\n`;
    summary += `*Cart Summary:*\n`;

    cart.forEach(item => {
        summary += `${item.icon} ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summary += `\n*Total: $${total.toFixed(2)}*\n\n`;
    summary += `Thank you for shopping at Bradethy! 🚀`;

    return summary;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Event Listeners
function setupEventListeners() {
    // Keyboard support for cart icon and hamburger
    const toggleCart = () => {
        cartModal.classList.toggle('active');
        cartModal.setAttribute('aria-hidden', !cartModal.classList.contains('active'));
        if (cartModal.classList.contains('active')) {
            trapFocus(cartModal);
        }
    };

    cartIcon.addEventListener('click', toggleCart);
    cartIcon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCart();
        }
    });

    const toggleMobileNav = () => {
        nav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', nav.classList.contains('active'));
    };

    hamburgerBtn.addEventListener('click', toggleMobileNav);
    hamburgerBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileNav();
        }
    });

// Close cart
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Wishlist modal
    wishlistToggle.addEventListener('click', () => {
        wishlistModal.classList.toggle('active');
        wishlistModal.setAttribute('aria-hidden', !wishlistModal.classList.contains('active'));
    });

    wishlistToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            wishlistModal.classList.toggle('active');
        }
    });

    closeWishlist.addEventListener('click', () => {
        wishlistModal.classList.remove('active');
    });

    // Floating buttons - Cart
    if (floatingCart) {
        floatingCart.addEventListener('click', () => {
            cartModal.classList.toggle('active');
            cartModal.setAttribute('aria-hidden', !cartModal.classList.contains('active'));
            if (cartModal.classList.contains('active')) {
                trapFocus(cartModal);
            }
        });
    }

    // Floating buttons - Wishlist
    if (floatingWishlist) {
        floatingWishlist.addEventListener('click', () => {
            wishlistModal.classList.toggle('active');
            wishlistModal.setAttribute('aria-hidden', !wishlistModal.classList.contains('active'));
        });
    }

    // Search and filter
    productSearch.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceSort.addEventListener('change', filterProducts);
    searchBtn.addEventListener('click', filterProducts);

    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Promo banner close
    promoClose.addEventListener('click', closePromoBanner);

    // Back to top button
    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', scrollToTop);

    // Newsletter form
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // FAQ accordion
    setupFAQAccordion();

// Checkout - Send cart summary to WhatsApp
    checkoutBtn.addEventListener('click', async () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }

        // Set loading state
        const originalText = checkoutBtn.textContent;
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Processing...';
        showNotification('Preparing your order...');

        // Simulate brief processing
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            // Prompt for customer details
            const customerName = prompt('Please enter your name:') || 'Customer';
            const customerPhone = prompt('Please enter your phone number (optional):') || '';
            const shippingAddress = prompt('Please enter your shipping address (optional):') || '';

            // Generate cart summary
            const summary = generateCartSummary(customerName, customerPhone, shippingAddress);

            // WhatsApp URL
            const whatsappNumber = '260760678894';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary)}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Clear cart after sending
            cart = [];
            updateCart();
            saveCart();
            cartModal.classList.remove('active');
            showNotification('Order sent to WhatsApp! Check your phone for confirmation.');
        } catch (e) {
            showNotification('Checkout interrupted. Please try again.');
        } finally {
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = originalText;
        }
    });

    // Contact form with validation
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateContactForm()) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            contactForm.querySelectorAll('.error').forEach(el => el.remove());
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Add notification styles dynamically
const style = document.createElement('style');
style.textContent = '.notification {' +
    'position: fixed;' +
    'bottom: 20px;' +
    'left: 50%;' +
    'transform: translateX(-50%) translateY(100px);' +
    'background: linear-gradient(135deg, var(--primary), var(--secondary));' +
    'color: white;' +
    'padding: 1rem 2rem;' +
    'border-radius: 50px;' +
    'box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);' +
    'z-index: 2000;' +
    'transition: transform 0.3s ease;' +
'}' +
'.notification.show {' +
    'transform: translateX(-50%) translateY(0);' +
'}' +
'.empty-cart {' +
    'text-align: center;' +
    'color: var(--gray);' +
    'padding: 2rem;' +
'}' +
'.error {' +
    'color: #ef4444;' +
    'font-size: 0.875rem;' +
    'margin-top: 0.25rem;' +
'}';
document.head.appendChild(style);

// Utility functions for validation and accessibility
function validateContactForm() {
    // Add name, email, message fields to form if not exist
    let nameField = contactForm.querySelector('input[type="text"]');
    let emailField = contactForm.querySelector('input[type="email"]');
    let messageField = contactForm.querySelector('textarea');

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    let isValid = true;

    // Name validation
    if (!name || name.length < 2) {
        showFieldError(nameField, 'Name must be at least 2 characters');
        isValid = false;
    }

    // Email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFieldError(emailField, 'Please enter a valid email');
        isValid = false;
    }

    // Message validation
    if (!message || message.length < 10) {
        showFieldError(messageField, 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

function showFieldError(field, message) {
    let error = field.parentNode.querySelector('.error');
    if (error) error.remove();
    error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

function trapFocus(element) {
    const focusable = element.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first) return;

    element.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === first) {
                last.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === last) {
                first.focus();
                e.preventDefault();
            }
        }
    });
}

// Global event listeners for closing modals/nav
document.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
        cartModal.setAttribute('aria-hidden', 'true');
    }
    if (e.target === wishlistModal) {
        wishlistModal.classList.remove('active');
        wishlistModal.setAttribute('aria-hidden', 'true');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cartModal.classList.remove('active');
        cartModal.setAttribute('aria-hidden', 'true');
        wishlistModal.classList.remove('active');
        wishlistModal.setAttribute('aria-hidden', 'true');
        nav.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
});

function showLoading() {
    if (loadingSpinner) loadingSpinner.classList.add('active');
}

function hideLoading() {
    if (loadingSpinner) loadingSpinner.classList.remove('active');
}

// Dynamic current year
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Order Tracking (Demo without backend)
const orderInput = document.getElementById('orderInput');
const trackBtn = document.getElementById('trackBtn');
const trackingResult = document.getElementById('trackingResult');

if (trackBtn && orderInput) {
    trackBtn.addEventListener('click', () => {
        const orderNum = orderInput.value.trim();
        if (orderNum.length < 3) {
            showNotification('Please enter a valid order number');
            return;
        }
        
        // Demo: Show tracking steps based on random progress (simulates backend)
        trackingResult.classList.add('show');
        
        // Random progress for demo (1-4)
        const currentStep = Math.floor(Math.random() * 4) + 1;
        const steps = trackingResult.querySelectorAll('.tracking-step');
        
        steps.forEach((step, index) => {
            step.classList.remove('completed', 'active');
            if (index + 1 < currentStep) {
                step.classList.add('completed');
            } else if (index + 1 === currentStep) {
                step.classList.add('active');
            }
        });
        
        // Update carrier and delivery info
        const carriers = ['UPS', 'FedEx', 'DHL', 'USPS'];
        const carrierInfo = document.getElementById('carrierInfo');
        if (carrierInfo) {
            carrierInfo.textContent = carriers[Math.floor(Math.random() * carriers.length)];
        }
        
        const deliveryDate = document.getElementById('deliveryDate');
        if (deliveryDate) {
            const days = Math.floor(Math.random() * 3) + 2;
            deliveryDate.textContent = `${days}-${days + 2} business days`;
        }
        
        showNotification(`Tracking order: ${orderNum}`);
    });
}


// ========== SCROLL ANIMATIONS ==========
    const animatedElements = document.querySelectorAll('.testimonial-card, .faq-item, .trust-badge, .recently-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });