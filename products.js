// ===== Product Data =====
const products = [
    //--one--
    {
        id: 1,
        name: 'Luxury Soap Packaging',
        category: 'amenities',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Elegant packaging for premium hotel soaps. Combines functionality with sophisticated design.',
        stock: true,
        features: ['Waterproof materials', 'Luxury finish', 'Easy dispensing', 'Brand customizable']
    },
    //--two--
    {
        id: 2,
        name: 'Shampoo & Conditioner Bottles',
        category: 'amenities',
        price: 65.50,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Travel-size bottles for hotel toiletries with tamper-proof seals and branding options.',
        stock: true,
        features: ['Leak-proof caps', 'Eco-friendly plastic', 'Custom labeling', 'Compact design']
    },
    //--three-- 
    {
        id: 3,
        name: 'Mini Water Bottle Packaging',
        category: 'hospitality',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1589873940921-3b3b3b3b3b3b?w=400&h=300&fit=crop',
        description: 'Branded water bottles for hotels, lodges, and events. Perfect for guest rooms and conferences.',
        stock: true,
        features: ['PET recyclable material', 'Custom logo printing', 'Tamper-proof seal', 'Portable size']
    },
    //--four--
    {
        id: 4,
        name: 'Condiment Sachets',
        category: 'food-service',
        price: 15.75,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Single-serve sachets for sugar, salt, pepper, ketchup, and sauces in hotels and restaurants.',
        stock: true,
        features: ['Hygienic single-use', 'Custom branding', 'Eco-friendly film', 'Easy tear design']
    },
    //--five--
    {
        id: 5,
        name: 'Coffee & Tea Sachet Packaging',
        category: 'hospitality',
        price: 30.99,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop',
        description: 'Branded sachets for coffee, tea, and sugar, ideal for hotel rooms and conference setups.',
        stock: true,
        features: ['Moisture-resistant', 'Custom branding', 'Eco-friendly paper', 'Compact size']
    },
    //--six--
    {
        id: 6,
        name: 'Room Service Packaging',
        category: 'hospitality',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Elegant takeaway boxes and trays for hotel room service and catering.',
        stock: true,
        features: ['Heat-resistant', 'Luxury finish', 'Stackable design', 'Custom branding']
    },
    //--seven--
    {
        id: 7,
        name: 'Guest Welcome Kit Packaging',
        category: 'amenities',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Branded packaging for slippers, robes, and small gifts in hotels and resorts.',
        stock: true,
        features: ['Premium materials', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //--eight--
    {
        id: 8,
        name: 'Event & Banquet Packaging',
        category: 'hospitality',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Packaging solutions for cutlery packs, napkin wraps, and wine bottle bags at events.',
        stock: true,
        features: ['Durable materials', 'Custom branding', 'Elegant design', 'Eco-friendly options']
    },
    //--nine--
    {
        id: 9,
        name: 'Eco-Friendly Toiletry Sachets',
        category: 'amenities',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Biodegradable sachets for shampoo, lotion, and shower gel in hotels and lodges.',
        stock: true,
        features: ['Compostable film', 'Leak-proof', 'Custom branding', 'Travel-size']
    },
    //--ten--
    {
        id: 10,
        name: 'Branded Napkin & Cutlery Wraps',
        category: 'food-service',
        price: 20.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Stylish wraps for napkins and cutlery used in restaurants, hotels, and catering services.',
        stock: true,
        features: ['Custom branding', 'Eco-friendly paper', 'Elegant finish', 'Easy to use']
    },
    //--eleven--
    {
        id: 11,
        name: 'Spa Product Packaging',
        category: 'amenities',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Luxury packaging for oils, scrubs, and spa essentials in resorts and wellness centers.',
        stock: true,
        features: ['Glass or eco-plastic', 'Custom branding', 'Leak-proof', 'Premium finish']
    },
    //--twelve--
    {
        id: 12,
        name: 'Housekeeping Supply Packaging',
        category: 'hospitality',
        price: 50.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Branded packaging for laundry bags, cleaning kits, and guest service items.',
        stock: true,
        features: ['Durable materials', 'Custom printing', 'Eco-friendly options', 'Functional design']
    },
    //--thirteen--
    {
        id: 13,
        name: 'Mini Bar Snack Packaging',
        category: 'hospitality',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Compact packaging for chocolates, nuts, and chips in hotel mini bars.',
        stock: true,
        features: ['Moisture-proof', 'Custom branding', 'Eco-friendly film', 'Portable size']
    },
    //--fourteen--
    {
        id: 14,
        name: 'Wine & Beverage Gift Boxes',
        category: 'hospitality',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Elegant packaging for wine bottles and premium beverages for events and hotel gifting.',
        stock: true,
        features: ['Luxury finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //--fifteen--
    {
        id: 15,
        name: 'Conference Kit Packaging',
        category: 'hospitality',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Branded packaging for pens, notepads, and stationery in hotel conferences and events.',
        stock: true,
        features: ['Durable materials', 'Custom branding', 'Compact design', 'Eco-friendly options']
    },
    //sixteen--
    {
        id: 16,
        name: 'Disposable Slipper Packaging',
        category: 'amenities',
        price: 60.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Protective packaging for hotel slippers, ensuring hygiene and presentation.',
        stock: true,
        features: ['Eco-friendly wrap', 'Custom branding', 'Compact design', 'Hygienic sealing']
    },
    //--seventeen--
    {
        id: 17,
        name: 'Branded Tissue Box Packaging',
        category: 'hospitality',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Custom-designed tissue box covers for hotel rooms, lobbies, and conference halls.',
        stock: true,
        features: ['Durable cardboard', 'Custom branding', 'Eco-friendly options', 'Elegant finish']
    },
    //--eighteen--
    {
        id: 18,
        name: 'Toothbrush & Dental Kit Packaging',
        category: 'amenities',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Compact packaging for hotel dental kits including toothbrush, toothpaste, and floss.',
        stock: true,
        features: ['Hygienic sealing', 'Custom branding', 'Eco-friendly wrap', 'Travel-size design']
    },
    //--nineteen--
    {
        id: 19,
        name: 'Shaving Kit Packaging',
        category: 'amenities',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Protective packaging for razors and shaving cream in hotel guest rooms.',
        stock: true,
        features: ['Waterproof film', 'Compact design', 'Custom branding', 'Hygienic sealing']
    },
    //--twenty--
    {
        id: 20,
        name: 'Branded Key Card Sleeves',
        category: 'hospitality',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Custom-printed sleeves for hotel room key cards with branding and guest information.',
        stock: true,
        features: ['Durable paper', 'Custom printing', 'Eco-friendly options', 'Compact design']
    },
    //--twenty-one--
    {
        id: 21,
        name: 'Laundry Bag Packaging',
        category: 'hospitality',
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Branded laundry bags for guest clothing services in hotels and resorts.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Functional design']
    },
    //--twenty-two--
    {
        id: 22,
        name: 'Slippers & Robe Packaging',
        category: 'amenities',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Protective packaging for hotel slippers and robes, ensuring hygiene and presentation.',
        stock: true,
        features: ['Eco-friendly wrap', 'Custom branding', 'Compact design', 'Hygienic sealing']
    },
    //--twenty-three--
    {
        id: 23,
        name: 'Banquet Cutlery Packs',
        category: 'food-service',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Pre-packed cutlery sets for hotel banquets, conferences, and catering services.',
        stock: true,
        features: ['Durable wrap', 'Custom branding', 'Eco-friendly paper', 'Elegant finish']
    },
    //--twenty-four--
    {
        id: 24,
        name: 'Branded Coaster Packaging',
        category: 'hospitality',
        price: 18.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Custom-printed coasters for hotel bars, restaurants, and guest rooms.',
        stock: true,
        features: ['Waterproof material', 'Custom branding', 'Eco-friendly options', 'Elegant design']
    },
    //--twenty-five--
    {
        id: 25,
        name: 'Conference Folder Packaging',
        category: 'hospitality',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Branded folders for hotel conferences and events, holding notepads, pens, and brochures.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Professional finish']
    },
    //--twenty-six--
    {
        id: 26,
        name: 'Branded Soap Wrapper',
        category: 'amenities',
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Eco-friendly wrappers for hotel soaps with custom branding and luxury finish.',
        stock: true,
        features: ['Biodegradable paper', 'Custom branding', 'Compact design', 'Elegant finish']
    },
    //twenty-seven--
    {
        id: 27,
        name: 'Hospitality Gift Bag Packaging',
        category: 'hospitality',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Luxury gift bags for hotel guests, events, and corporate hospitality.',
        stock: true,
        features: ['Premium materials', 'Custom branding', 'Eco-friendly options', 'Elegant design']
    },
    //twenty-eight--
    {
        id: 28,
        name: 'Branded Amenity Box',
        category: 'amenities',
        price: 80.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Compact boxes for toiletries, vanity kits, and guest amenities in hotels.',
        stock: true,
        features: ['Durable cardboard', 'Custom branding', 'Eco-friendly options', 'Luxury finish']
    },
    //twenty-nine--
    {
        id: 29,
        name: 'Hospitality Event Tote Bags',
        category: 'hospitality',
        price: 70.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Reusable tote bags for hotel events, conferences, and guest gifting.',
        stock: true,
        features: ['Durable fabric', 'Custom branding', 'Eco-friendly material', 'Reusable design']
    },
    //thirty--
    {
        id: 30,
        name: 'Branded Coffee Cup Packaging',
        category: 'food-service',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Custom-printed coffee cups and lids for hotel cafés and restaurants.',
        stock: true,
        features: ['Heat-resistant', 'Custom branding', 'Eco-friendly options', 'Leak-proof design']
    },
    //thirty-one--
    {
        id: 31,
        name: 'Branded Water Glass Covers',
        category: 'hospitality',
        price: 18.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Protective covers for guest room water glasses, ensuring hygiene and presentation.',
        stock: true,
        features: ['Eco-friendly paper', 'Custom branding', 'Hygienic sealing', 'Compact design']
    },
    //thirty-two--
    {
        id: 32,
        name: 'Hotel Vanity Kit Packaging',
        category: 'amenities',
        price: 42.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Compact packaging for cotton buds, nail files, and other vanity essentials.',
        stock: true,
        features: ['Hygienic sealing', 'Custom branding', 'Eco-friendly wrap', 'Travel-size design']
    },
    //thirty-three--
    {
        id: 33,
        name: 'Hospitality Shoe Shine Kit Packaging',
        category: 'amenities',
        price: 38.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Branded packaging for shoe polish and brushes in hotel guest rooms.',
        stock: true,
        features: ['Compact design', 'Custom branding', 'Eco-friendly options', 'Luxury finish']
    },
    //thirty-four--
    {
        id: 34,
        name: 'Branded Buffet Food Covers',
        category: 'food-service',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Protective covers for buffet trays and dishes in hotel restaurants.',
        stock: true,
        features: ['Heat-resistant', 'Custom branding', 'Eco-friendly material', 'Elegant finish']
    },
    //thirty-five--
    {
        id: 35,
        name: 'Hospitality Amenity Tray Packaging',
        category: 'hospitality',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Luxury trays for organizing toiletries and amenities in guest bathrooms.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Elegant design']
    },
    //thirty-six--
    {
        id: 36,
        name: 'Branded Ice Bucket Liners',
        category: 'hospitality',
        price: 20.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Disposable liners for hotel ice buckets, ensuring hygiene and convenience.',
        stock: true,
        features: ['Waterproof material', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //thirty-seven--
    {
        id: 37,
        name: 'Hospitality Bathrobe Packaging',
        category: 'amenities',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Protective and elegant packaging for hotel bathrobes in guest rooms and spas.',
        stock: true,
        features: ['Eco-friendly wrap', 'Custom branding', 'Luxury finish', 'Hygienic sealing']
    },
    //thirty-eight--
    {
        id: 38,
        name: 'Branded Hospitality Tray Liners',
        category: 'hospitality',
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Custom-printed liners for room service trays and banquet setups.',
        stock: true,
        features: ['Durable paper', 'Custom branding', 'Eco-friendly options', 'Elegant finish']
    },
    //thirty-nine--
    {
        id: 39,
        name: 'Hotel Sewing Kit Packaging',
        category: 'amenities',
        price: 32.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Compact packaging for sewing kits including needles, thread, and buttons.',
        stock: true,
        features: ['Hygienic sealing', 'Custom branding', 'Eco-friendly wrap', 'Travel-size design']
    },
    //forty--
    {
        id: 40,
        name: 'Hospitality Event Gift Box',
        category: 'hospitality',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Luxury gift boxes for hotel events, weddings, and corporate hospitality.',
        stock: true,
        features: ['Premium materials', 'Custom branding', 'Eco-friendly options', 'Elegant design']
    },
    //forty-one--
    {
        id: 41,
        name: 'Medical Apron Packaging',
        category: 'healthcare',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Protective packaging for disposable medical aprons used in hospitals and clinics.',
        stock: true,
        features: ['Sterile wrap', 'Eco-friendly material', 'Custom branding', 'Compact design']
    },
    //forty-two--
    {
        id: 42,
        name: 'Surgical Mask Packaging',
        category: 'healthcare',
        price: 30.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Hygienic packaging for surgical masks in healthcare facilities and pharmacies.',
        stock: true,
        features: ['Moisture-proof film', 'Sterile sealing', 'Custom branding', 'Eco-friendly options']
    },
    //forty-three--
    {
        id: 43,
        name: 'Pharmaceutical Blister Packs',
        category: 'healthcare',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Secure blister packaging for tablets and capsules in hospitals and pharmacies.',
        stock: true,
        features: ['Tamper-proof design', 'Custom branding', 'Eco-friendly options', 'Durable material']
    },
    //forty-four--
    {
        id: 44,
        name: 'Retail Apparel Packaging',
        category: 'retail',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Branded packaging for clothing items such as shirts, aprons, and uniforms.',
        stock: true,
        features: ['Durable wrap', 'Custom branding', 'Eco-friendly material', 'Elegant finish']
    },
    //forty-five--
    {
        id: 45,
        name: 'Industrial Safety Glove Packaging',
        category: 'manufacturing',
        price: 50.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Protective packaging for industrial gloves used in construction and manufacturing.',
        stock: true,
        features: ['Durable film', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //forty-six--
    {
        id: 46,
        name: 'Retail Electronics Packaging',
        category: 'retail',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Secure packaging for small electronics such as headphones, chargers, and accessories.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Tamper-proof design']
    },
    //forty-seven--
    {
        id: 47,
        name: 'Healthcare Disposable Glove Packaging',
        category: 'healthcare',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Sterile packaging for disposable gloves used in hospitals, clinics, and labs.',
        stock: true,
        features: ['Sterile sealing', 'Custom branding', 'Eco-friendly film', 'Compact design']
    },
    //forty-eight--
    {
        id: 48,
        name: 'Retail Cosmetic Packaging',
        category: 'retail',
        price: 70.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Luxury packaging for cosmetics such as lipsticks, creams, and perfumes.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //forty-nine--  
    {
        id: 49,
        name: 'Food Industry Apron Packaging',
        category: 'food-service',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Protective packaging for disposable aprons used in food processing and catering.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly wrap', 'Hygienic sealing']
    },
    //fifty--           
    {
        id: 50,
        name: 'Retail Gift Box Packaging',
        category: 'retail',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Elegant gift boxes for retail stores, suitable for jewelry, accessories, and premium items.',
        stock: true,
        features: ['Luxury finish', 'Custom branding', 'Eco-friendly options', 'Durable design']
    },
    //fifty-one--
    {
        id: 51,
        name: 'Hospital Gown Packaging',
        category: 'healthcare',
        price: 60.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Sterile packaging for disposable hospital gowns used in surgical and patient care settings.',
        stock: true,
        features: ['Sterile sealing', 'Eco-friendly wrap', 'Custom branding', 'Compact design']
    },
    //fifty-two--   
    {
        id: 52,
        name: 'Face Shield Packaging',
        category: 'healthcare',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Protective packaging for face shields used in healthcare and industrial environments.',
        stock: true,
        features: ['Scratch-resistant film', 'Custom branding', 'Eco-friendly options', 'Hygienic sealing']
    },
    //fifty-three--
    {
        id: 53,
        name: 'Retail Shoe Box Packaging',
        category: 'retail',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Durable and stylish shoe boxes for retail stores with branding options.',
        stock: true,
        features: ['Durable cardboard', 'Custom branding', 'Eco-friendly options', 'Luxury finish']
    },
    //fifty-four--
    {
        id: 54,
        name: 'Bakery Packaging Boxes',
        category: 'food-service',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Eco-friendly boxes for cakes, pastries, and bread in bakeries and cafés.',
        stock: true,
        features: ['Moisture-resistant', 'Custom branding', 'Eco-friendly paper', 'Compact design']
    },
    //fifty-five--
    {
        id: 55,
        name: 'Retail Jewelry Packaging',
        category: 'retail',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Luxury boxes and pouches for jewelry items in retail stores.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //fifty-six--
    {
        id: 56,
        name: 'Pharmacy Prescription Bag Packaging',
        category: 'healthcare',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Branded paper and plastic bags for pharmacies to package prescriptions securely.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Tamper-proof design']
    },
    //fifty-seven--
    {
        id: 57,
        name: 'School Lunch Packaging',
        category: 'education',
        price: 20.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Eco-friendly packaging for school lunches, snacks, and beverages.',
        stock: true,
        features: ['Biodegradable material', 'Custom branding', 'Compact design', 'Safe for children']
    },
    //fifty-eight--
    {
        id: 58,
        name: 'Industrial Tool Packaging',
        category: 'manufacturing',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Protective packaging for small tools and parts in manufacturing and construction.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Durable design']
    },
    //fifty-nine--
    {
        id: 59,
        name: 'Retail Perfume Packaging',
        category: 'retail',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Luxury packaging for perfumes and colognes in retail and hospitality gift shops.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //sixty--
    {
        id: 60,
        name: 'Food Delivery Packaging',
        category: 'food-service',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Durable and eco-friendly packaging for food delivery services and restaurants.',
        stock: true,
        features: ['Heat-resistant', 'Custom branding', 'Eco-friendly material', 'Leak-proof design']
    },
    //sixty-one--
    {
        id: 61,
        name: 'Hospitality Spa Oil Bottles',
        category: 'amenities',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Luxury packaging for spa oils and massage essentials in hotels and resorts.',
        stock: true,
        features: ['Leak-proof design', 'Custom branding', 'Eco-friendly options', 'Premium finish']
    },
    //sixty-two--
    {
        id: 62,
        name: 'Retail Book Packaging',
        category: 'retail',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Protective and branded packaging for books and stationery in retail stores.',
        stock: true,
        features: ['Durable cardboard', 'Custom branding', 'Eco-friendly material', 'Compact design']
    },
    //sixty-three--
    {
        id: 63,
        name: 'Hospitality Wine Glass Sleeves',
        category: 'hospitality',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Disposable sleeves for wine glasses in hotel bars and banquet halls.',
        stock: true,
        features: ['Eco-friendly paper', 'Custom branding', 'Hygienic sealing', 'Compact design']
    },
    //sixty-four--
    {
        id: 64,
        name: 'Retail Grocery Bag Packaging',
        category: 'retail',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Durable and eco-friendly grocery bags for supermarkets and retail outlets.',
        stock: true,
        features: ['Reusable material', 'Custom branding', 'Eco-friendly options', 'Functional design']
    },
    //sixty-five--
    {
        id: 65,
        name: 'Pharmaceutical Syringe Packaging',
        category: 'healthcare',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Sterile packaging for syringes used in hospitals and clinics.',
        stock: true,
        features: ['Sterile sealing', 'Tamper-proof design', 'Custom branding', 'Eco-friendly options']
    },
    //sixty-six--
    {
        id: 66,
        name: 'Hospitality Candle Packaging',
        category: 'amenities',
        price: 70.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Luxury packaging for scented candles used in hotel rooms and spas.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //sixty-seven--
    {
        id: 67,
        name: 'Retail Toy Packaging',
        category: 'retail',
        price: 60.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Durable and safe packaging for toys and children’s products in retail stores.',
        stock: true,
        features: ['Child-safe material', 'Custom branding', 'Eco-friendly options', 'Durable design']
    },
    //sixty-eight-- 
    {
        id: 68,
        name: 'Hospitality Coffee Pod Packaging',
        category: 'food-service',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Compact packaging for coffee pods used in hotel rooms and cafés.',
        stock: true,
        features: ['Moisture-proof', 'Custom branding', 'Eco-friendly film', 'Compact design']
    },
    //sixty-nine--
    {
        id: 69,
        name: 'Industrial Safety Helmet Packaging',
        category: 'manufacturing',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Protective packaging for safety helmets used in construction and manufacturing.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Durable design']
    },
    //seventy--
    {
        id: 70,
        name: 'Retail Sunglasses Packaging',
        category: 'retail',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Luxury cases and boxes for sunglasses in retail and hospitality gift shops.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //seventy-one--
    {
        id: 71,
        name: 'Hospitality Bath Salt Packaging',
        category: 'amenities',
        price: 50.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Eco-friendly sachets and jars for bath salts in hotel spas and guest rooms.',
        stock: true,
        features: ['Moisture-proof', 'Custom branding', 'Eco-friendly material', 'Compact design']
    },
    //seventy-two--
    {
        id: 72,
        name: 'Retail Wine Bag Packaging',
        category: 'retail',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Durable and stylish wine bags for retail stores and hospitality events.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Elegant finish']
    },
    //seventy-three--
    {
        id: 73,
        name: 'Hospitality Soap Dispenser Packaging',
        category: 'amenities',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Compact and branded packaging for refillable soap dispensers in hotels.',
        stock: true,
        features: ['Leak-proof design', 'Custom branding', 'Eco-friendly options', 'Luxury finish']
    },
    //seventy-four--
    {
        id: 74,
        name: 'Retail Chocolate Box Packaging',
        category: 'food-service',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Luxury boxes for chocolates and confectionery in retail and hospitality gifting.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //seventy-five--
    {
        id: 75,
        name: 'Hospitality Hand Sanitizer Packaging',
        category: 'amenities',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Compact bottles and sachets for hand sanitizers in hotels and restaurants.',
        stock: true,
        features: ['Leak-proof design', 'Custom branding', 'Eco-friendly options', 'Travel-size']
    },
    //seventy-six--
    {
        id: 76,
        name: 'Hospitality Mini Bar Bottle Packaging',
        category: 'hospitality',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Compact packaging for mini bar liquor bottles in hotels and resorts.',
        stock: true,
        features: ['Tamper-proof seal', 'Custom branding', 'Eco-friendly options', 'Portable size']
    },
    //seventy-seven--
    {
        id: 77,
        name: 'Retail Stationery Packaging',
        category: 'retail',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Branded packaging for pens, notebooks, and office supplies in retail stores.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //seventy-eight--
    {
        id: 78,
        name: 'Hospitality Bathrobe Gift Box',
        category: 'amenities',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Luxury gift box packaging for bathrobes in hotels and spas.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //seventy-nine--
    {
        id: 79,
        name: 'Agricultural Seed Bag Packaging',
        category: 'agriculture',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Durable and eco-friendly packaging for seeds in agriculture and farming.',
        stock: true,
        features: ['Moisture-proof', 'Custom branding', 'Eco-friendly material', 'Durable design']
    },
    //eighty--  
    {
        id: 80,
        name: 'Retail Cosmetic Pouch Packaging',
        category: 'retail',
        price: 50.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Compact pouches for cosmetics such as creams, powders, and skincare products.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Portable size']
    },
    //eighty-one--
    {
        id: 81,
        name: 'Hospitality Slipper Bag Packaging',
        category: 'amenities',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Protective bags for hotel slippers, ensuring hygiene and presentation.',
        stock: true,
        features: ['Eco-friendly wrap', 'Custom branding', 'Compact design', 'Hygienic sealing']
    },
    //eighty-two--
    {
        id: 82,
        name: 'Aviation In-Flight Amenity Kit Packaging',
        category: 'aviation',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Luxury packaging for in-flight amenity kits including eye masks, socks, and toiletries.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //eighty-three--    
    {
        id: 83,
        name: 'Retail Electronics Charger Packaging',
        category: 'retail',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Protective packaging for chargers and cables in retail electronics stores.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //eighty-four--
    {
        id: 84,
        name: 'Hospitality Spa Kit Packaging',
        category: 'amenities',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Luxury packaging for spa kits including oils, scrubs, and bath salts.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //eighty-five--
    {
        id: 85,
        name: 'Agricultural Fertilizer Sack Packaging',
        category: 'agriculture',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Heavy-duty sacks for fertilizers and soil enhancers in agriculture.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Moisture-proof']
    },
    //eighty-six--  
    {
        id: 86,
        name: 'Retail Gift Wrapping Paper',
        category: 'retail',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Custom-printed wrapping paper for gifts in retail and hospitality stores.',
        stock: true,
        features: ['Durable paper', 'Custom branding', 'Eco-friendly options', 'Elegant finish']
    },
    //eighty-seven--
    {
        id: 87,
        name: 'Hospitality Event Tote Bag Packaging',
        category: 'hospitality',
        price: 70.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Reusable tote bags for hotel events, conferences, and guest gifting.',
        stock: true,
        features: ['Durable fabric', 'Custom branding', 'Eco-friendly material', 'Reusable design']
    },
    //eighty-eight--
    {
        id: 88,
        name: 'Tech Gadget Packaging',
        category: 'technology',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Protective packaging for gadgets such as smartwatches, earbuds, and accessories.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //eighty-nine--
    {
        id: 89,
        name: 'Hospitality Wine Bottle Bag',
        category: 'hospitality',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Stylish wine bottle bags for hotel restaurants and events.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Elegant finish']
    },
    //ninety--
    {
        id: 90,
        name: 'Retail Watch Box Packaging',
        category: 'retail',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Luxury watch boxes for retail and hospitality gift shops.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //ninety-one--
    {
        id: 91,
        name: 'Hospitality Cutlery Roll Packaging',
        category: 'food-service',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Compact rolls for cutlery in hotel restaurants and banquets.',
        stock: true,
        features: ['Durable wrap', 'Custom branding', 'Eco-friendly options', 'Elegant finish']
    },
    //ninety-two--
    {
        id: 92,
        name: 'Education Exam Kit Packaging',
        category: 'education',
        price: 50.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Packaging for exam kits including pens, pencils, and stationery in schools.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //ninety-three--
    {
        id: 93,
        name: 'Hospitality Pool Towel Packaging',
        category: 'hospitality',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Protective and branded packaging for pool towels in hotels and resorts.',
        stock: true,
        features: ['Durable wrap', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //ninety-four--
    {
        id: 94,
        name: 'Retail Sportswear Packaging',
        category: 'retail',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Stylish packaging for sportswear and fitness apparel in retail stores.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Luxury finish']
    },
    //ninety-five--
    {
        id: 95,
        name: 'Hospitality Breakfast Tray Packaging',
        category: 'food-service',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Compact and branded trays for hotel breakfast service in guest rooms.',
        stock: true,
        features: ['Heat-resistant', 'Custom branding', 'Eco-friendly options', 'Stackable design']
    },
    //ninety-six--
    {
        id: 96,
        name: 'Agricultural Produce Crate Packaging',
        category: 'agriculture',
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1616627455560-2b2b2b2b2b2b?w=400&h=300&fit=crop',
        description: 'Durable crates for packaging fruits and vegetables in agriculture and retail.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Reusable design']
    },
    //ninety-seven--
    {
        id: 97,
        name: 'Aviation Duty-Free Packaging',
        category: 'aviation',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1604908177522-4c4c4c4c4c4c?w=400&h=300&fit=crop',
        description: 'Luxury packaging for duty-free items sold on flights and in airport shops.',
        stock: true,
        features: ['Premium finish', 'Custom branding', 'Eco-friendly options', 'Protective design']
    },
    //ninety-eight--
    {
        id: 98,
        name: 'Retail Footwear Bag Packaging',
        category: 'retail',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1588776814546-3c3c3c3c3c3c?w=400&h=300&fit=crop',
        description: 'Durable and branded bags for footwear in retail stores.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //ninety-nine--
    {
        id: 99,
        name: 'Education Stationery Kit Packaging',
        category: 'education',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1600180758895-3f3f3f3f3f?w=400&h=300&fit=crop',
        description: 'Packaging for stationery kits including pens, rulers, and erasers for schools.',
        stock: true,
        features: ['Durable material', 'Custom branding', 'Eco-friendly options', 'Compact design']
    },
    //one hundred--
    {
        id: 100,
        name: 'Tech Laptop Sleeve Packaging',
        category: 'technology',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1626228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Protective and branded packaging for laptop sleeves in tech retail and corporate gifting.',
        stock: true,
        features: ['Shock-resistant', 'Custom branding', 'Eco-friendly options', 'Luxury finish']
    }
];

export default products;


