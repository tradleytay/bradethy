// ===== Product Data =====
const products = [
    //--one--
    {
        id: 1,
        name: 'Luxury Soap Packaging',
        category: 'amenities',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
        description: 'Elegant packaging for premium soaps. Combines functionality with sophisticated design for retail and hospitality.',
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
        description: 'Travel-size bottles for toiletries with tamper-proof seals and branding options. Perfect for hospitality, retail, and corporate use.',
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
        description: 'Branded water bottles for hospitality, retail, and corporate events. Perfect for on-the-go use and brand promotion.',
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
        description: 'Single-serve sachets for sugar, salt, pepper, ketchup, and sauces. Ideal for restaurants, catering, hospitality, and food service.',
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
        description: 'Branded sachets for coffee, tea, and sugar. Perfect for hospitality, offices, and catering services.',
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
        description: 'Elegant takeaway boxes and trays for food service, restaurants, hospitality, and catering businesses.',
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
        description: 'Branded packaging for amenities, promotional items, and gift sets in hospitality, retail, and corporate sectors.',
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
        description: 'Packaging solutions for cutlery, napkins, and wine bottles at events. Ideal for catering, hospitality, and entertainment.',
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
        description: 'Biodegradable sachets for shampoo, lotion, and shower gel. Perfect for hospitality, retail, and personal care brands.',
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
        description: 'Stylish wraps for napkins and cutlery used in restaurants, hospitality, and catering operations.',
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
        description: 'Luxury packaging for oils, scrubs, and spa essentials. Perfect for spas, salons, wellness centers, and retail.',
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
        description: 'Branded packaging for supplies and service items. Suitable for hospitality, facilities, and corporate environments.',
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
        description: 'Compact packaging for snacks, chocolates, and treats. Perfect for retail, hospitality, and vending operations.',
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
        description: 'Elegant packaging for wine bottles and premium beverages for events and corporate gifting.',
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
        description: 'Branded packaging for event materials and stationery. Perfect for conferences, events, and corporate use.',
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
        description: 'Protective packaging for amenity slippers, ensuring hygiene and professional presentation.',
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
        description: 'Custom-designed box covers for various settings including hospitality, offices, and commercial spaces.',
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
        description: 'Compact packaging for dental kits including toothbrush, toothpaste, and floss. Ideal for travel and amenities.',
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
        description: 'Protective packaging for razors and shaving cream. Perfect for travel kits and amenity packages.',
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
        description: 'Custom-printed sleeves for key cards and access cards with branding and information.',
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
        description: 'Branded laundry bags for service operations in hotels, resorts, and corporate facilities.',
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
        description: 'Protective packaging for premium slippers and robes, ensuring hygiene and professional presentation.',
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
        description: 'Pre-packed cutlery sets for events, conferences, and catering services across all sectors.',
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
        description: 'Custom-printed coasters for bars, restaurants, corporate offices, and hospitality venues.',
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
        description: 'Branded folders for conferences and events, holding notepads, pens, and brochures.',
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
        description: 'Eco-friendly wrappers for soaps with custom branding and luxury finish across retail and hospitality.',
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
        description: 'Luxury gift bags for events, corporate gifting, and special occasions.',
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
        description: 'Compact boxes for toiletries, vanity kits, and amenity packages in various sectors.',
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
        description: 'Custom-printed coffee cups and lids for cafés, restaurants, and food service operations.',
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
        description: 'Protective covers for glasses, ensuring hygiene and professional presentation in hospitality and food service.',
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
        description: 'Branded packaging for shoe polish and brushes. Ideal for hospitality, retail, and travel kits.',
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
        description: 'Protective covers for buffet trays and dishes in restaurants and catering operations.',
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
        description: 'Luxury trays for organizing toiletries and amenities. Perfect for hospitality and personal care sectors.',
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
        description: 'Disposable liners for ice buckets, ensuring hygiene and convenience in hospitality and food service.',
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
        description: 'Protective and elegant packaging for premium bathrobes in hospitality and personal care sectors.',
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
        description: 'Custom-printed liners for service trays and event setups in hospitality and catering.',
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
        description: 'Luxury gift boxes for events, weddings, and corporate gifting across all sectors.',
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
        description: 'Durable and safe packaging for toys and childrens products in retail stores.',
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

// ===== Newsletter Configuration =====
function setupNewsletterSignup() {
    const forms = document.querySelectorAll('#newsletter-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Store email in localStorage
            let subscribers = JSON.parse(localStorage.getItem('newsletter-subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('newsletter-subscribers', JSON.stringify(subscribers));
            }
            
            // Reset form and show confirmation
            form.reset();
            alert('Thank you for subscribing! Check your email for updates.');
        });
    });
}

// ===== WhatsApp Configuration =====
const WHATSAPP_NUMBER = '260760678894'; // Replace with your WhatsApp Business number (country code + number, no + or spaces)
const WHATSAPP_API = 'https://api.whatsapp.com/send';

// ===== Loyalty Configuration =====
const POINTS_PER_DOLLAR = 0.05; // 1 point for every $20 spent
let loyaltyPoints = parseInt(localStorage.getItem('loyaltyPoints') || '0', 10);

function updateLoyaltyDisplay() {
    const loyaltyEl = document.getElementById('loyalty-points');
    if (loyaltyEl) {
        loyaltyEl.textContent = `(${loyaltyPoints})`;
    }
}

function addLoyaltyPoints(orderSubtotal) {
    const pointsEarned = Math.floor(orderSubtotal * POINTS_PER_DOLLAR);
    loyaltyPoints += pointsEarned;
    localStorage.setItem('loyaltyPoints', loyaltyPoints);
    updateLoyaltyDisplay();
    return pointsEarned;
}

// ===== Cart Management =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        el.textContent = `(${cartCount})`;
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    alert('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
}

// ===== Cart Page Functions =====
function displayCart() {
    const cartContainer = document.getElementById('cart-content');
    const emptyCart = document.getElementById('empty-cart');
    const cartItems = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (cart.length === 0) {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartContainer.style.display = 'grid';
    emptyCart.style.display = 'none';

    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${item.name}</strong>
                <br><small>${item.category}</small>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });

    const shipping = 0;
    const tax = (subtotal * 0.1);
    const total = subtotal + shipping + tax;

    subtotalEl.textContent = '$' + subtotal.toFixed(2);
    shippingEl.textContent = '$' + shipping.toFixed(2);
    taxEl.textContent = '$' + tax.toFixed(2);
    totalEl.textContent = '$' + total.toFixed(2);
}

// ===== Lazy Loading Images =====
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-lazy]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.lazy;
                    img.removeAttribute('data-lazy');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== Products Page Functions =====
function displayProducts(productsToShow = products, containerId = 'products-list') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (productsToShow.length === 0) {
        container.innerHTML = '<p style=\"grid-column: 1/-1; text-align: center; padding: 40px;\"> No products found matching your criteria.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class=\"product-image\"><img src=\"${product.image}\" data-lazy=\"${product.image}\" alt=\"${product.name} - Premium packaging solution\" loading=\"lazy\" onerror=\"this.onerror=null;this.src='https://picsum.photos/400/300?random=${product.id}'\" style=\"width: 100%; height: 100%; object-fit: cover;\"></div>
            <div class=\"product-info\">
                <div class=\"product-category\">${product.category.toUpperCase()}</div>
                <h3 class=\"product-name\">${product.name}</h3>
                <p class=\"product-description\">${product.description.substring(0, 60)}...</p>
                <div class=\"product-price\" itemProp=\"price\">$${product.price.toFixed(2)}</div>
                <div class=\"product-stock\">${product.stock ? '✓ In Stock' : '✗ Out of Stock'}</div>
                <div class=\"product-actions\">
                    <button class=\"btn-view\" onclick=\"showProductdetail(${product.id})\">View Details</button>
                    <button class=\"btn-add\" onclick=\"addToCart(${product.id})\">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });

    // Initialize lazy loading after DOM update
    initLazyLoading();

    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = `Showing ${productsToShow.length} products`;
    }
}

function displayFeaturedProducts() {
    const featured = products.slice(0, 4);
    const container = document.getElementById('featured-products') || document.querySelector('.featured-grid');
    if (!container) return;

    container.innerHTML = '';

    if (featured.length === 0) {
        container.innerHTML = '<p style="padding: 20px; text-align: center; color: #555;">No featured products found at the moment.</p>';
        return;
    }

    featured.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card featured-product';
        productCard.itemScope = 'itemscope';
        productCard.itemType = 'https://schema.org/Product';
        productCard.innerHTML = `
            <div class=\"featured-badge\">★ Featured</div>
            <div class=\"product-image\"><img src=\"${product.image}\" data-lazy=\"${product.image}\" alt=\"${product.name} - Featured premium packaging solution\" loading=\"lazy\" itemProp=\"image\" onerror=\"this.onerror=null;this.src='https://picsum.photos/400/300?random=${product.id}'\" style=\"width: 100%; height: 100%; object-fit: cover;\"></div>
            <div class=\"product-info\">
                <div class=\"product-category\">${product.category.toUpperCase()}</div>
                <h3 class=\"product-name\" itemProp=\"name\">${product.name}</h3>
                <p class=\"product-description\" itemProp=\"description\">${product.description.substring(0, 60)}...</p>
                <div class=\"product-price\" itemProp=\"price\">$${product.price.toFixed(2)}</div>
                <div itemProp=\"priceCurrency\" style=\"display:none;\">USD</div>
                <div class=\"product-stock\">${product.stock ? '✓ In Stock' : '✗ Out of Stock'}</div>
                <div class=\"product-actions\">
                    <button class=\"btn-view\" onclick=\"showProductdetail(${product.id})\">View Details</button>
                    <button class=\"btn-add\" onclick=\"addToCart(${product.id})\">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });

    // Initialize lazy loading after DOM update
    initLazyLoading();
}

// ===== Pagination =====
let currentPage = 1;
const productsPerPage = 8;
let currentFilteredProducts = [];

function calculateTotalPages() {
    return Math.ceil(currentFilteredProducts.length / productsPerPage);
}

function getProductsForPage(pageNumber) {
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return currentFilteredProducts.slice(startIndex, endIndex);
}

function renderPaginationButtons() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = '';
    const totalPages = calculateTotalPages();
    
    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';
    
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.onclick = () => {
            currentPage = i;
            renderProductsForCurrentPage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        paginationContainer.appendChild(button);
    }
}

function renderProductsForCurrentPage() {
    const productsForPage = getProductsForPage(currentPage);
    displayProducts(productsForPage, 'products-list');
}

function activateCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (!category) return;

    const categoryLinks = document.querySelectorAll('.category-filter a');
    if (!categoryLinks || categoryLinks.length === 0) return;

    categoryLinks.forEach(link => link.classList.remove('active'));
    const target = Array.from(categoryLinks).find(link => link.dataset.category === category);
    if (target) {
        target.classList.add('active');
    }
}

function setupHomeCategoryCards() {
    const industryCards = document.querySelectorAll('.industry-card[data-category]');
    industryCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const category = card.dataset.category || 'all';
            const href = category === 'all' ? 'products.html' : `products.html?category=${encodeURIComponent(category)}`;
            window.location.href = href;
        });
    });
}

// Call once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    currentFilteredProducts = [...products];
    currentPage = 1;
    renderProductsForCurrentPage();
    renderPaginationButtons();
    displayFeaturedProducts();   // show featured section
    setupHomeCategoryCards();
});

// ===== Filtering Functions =====
function filterProducts() {
    let filtered = [...products];

    // Category filter
    const activeLink = document.querySelector('.category-filter a.active');
    let activeCategory = activeLink ? activeLink.dataset.category : 'all';

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Price filter
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');

    if (priceRange) {
        const maxPrice = parseInt(priceRange.value);
        if (priceValue) priceValue.textContent = maxPrice;
        filtered = filtered.filter(p => p.price <= maxPrice);
    }

    // Sorting
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        const sortBy = sortSelect.value;
        if (sortBy === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        }
    }

    currentFilteredProducts = filtered;
    currentPage = 1;
    renderProductsForCurrentPage();
    renderPaginationButtons();
}

// Attach listeners once
document.addEventListener('DOMContentLoaded', () => {
    activateCategoryFromUrl();
    const categoryLinks = document.querySelectorAll('.category-filter a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            filterProducts();
        });
    });

    const priceRange = document.getElementById('price-range');
    if (priceRange) {
        priceRange.addEventListener('input', e => {
            document.getElementById('price-value').textContent = e.target.value;
            filterProducts();
        });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => filterProducts());
    }

    // Initial load
    filterProducts();
});

// ===== Checkout Page Functions =====
function displayCheckoutSummary() {
    const itemsContainer = document.getElementById('checkout-items');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const shippingEl = document.getElementById('checkout-shipping');
    const taxEl = document.getElementById('checkout-tax');
    const totalEl = document.getElementById('checkout-total');
    const paymentEl = document.getElementById('checkout-payment');
    const form = document.getElementById('checkout-form');

    if (!itemsContainer) return;

    itemsContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'checkout-item';
        itemDiv.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        itemsContainer.appendChild(itemDiv);
    });

    function updateCheckoutTotal() {
        const shippingRadios = document.querySelectorAll('input[name="shipping"]');
        let selectedShipping = 10;
        shippingRadios.forEach(radio => {
            if (radio.checked) {
                if (radio.value === 'standard') selectedShipping = 10;
                if (radio.value === 'express') selectedShipping = 25;
                if (radio.value === 'overnight') selectedShipping = 50;
            }
        });

        const paymentRadios = document.querySelectorAll('input[name="payment"]');
        let selectedPayment = 'Cash on Delivery';
        paymentRadios.forEach(radio => {
            if (radio.checked) {
                if (radio.value === 'cash_on_delivery') selectedPayment = 'Cash on Delivery';
                if (radio.value === 'mobile_money') selectedPayment = 'Mobile Money / Bank Transfer';
            }
        });

        const tax = (subtotal * 0.1);
        const total = subtotal + selectedShipping + tax;

        if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
        if (shippingEl) shippingEl.textContent = '$' + selectedShipping.toFixed(2);
        if (taxEl) taxEl.textContent = '$' + tax.toFixed(2);
        if (paymentEl) paymentEl.textContent = selectedPayment;
        if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
    }

    updateCheckoutTotal();

    // Payment method change handler
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const mobilePaymentDetails = document.getElementById('mobile-payment-details');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'mobile_money') {
                mobilePaymentDetails.style.display = 'block';
            } else {
                mobilePaymentDetails.style.display = 'none';
            }
            updateCheckoutTotal();
        });
    });

    // Shipping method change handler
    const shippingRadios = document.querySelectorAll('input[name="shipping"]');
    shippingRadios.forEach(radio => {
        radio.addEventListener('change', updateCheckoutTotal);
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const buyerName = document.getElementById('name').value;
            const buyerCompany = document.getElementById('company').value;
            const buyerEmail = document.getElementById('email').value;
            const buyerPhone = document.getElementById('phone').value;
            
            // Shipping method
            const shippingRadios = document.querySelectorAll('input[name="shipping"]');
            let selectedShipping = 'standard';
            let shippingCost = 10;
            shippingRadios.forEach(radio => {
                if (radio.checked) {
                    selectedShipping = radio.value;
                    if (radio.value === 'standard') shippingCost = 10;
                    if (radio.value === 'express') shippingCost = 25;
                    if (radio.value === 'overnight') shippingCost = 50;
                }
            });
            
            // Payment method
            const paymentRadios = document.querySelectorAll('input[name="payment"]');
            let selectedPayment = 'cash_on_delivery';
            paymentRadios.forEach(radio => {
                if (radio.checked) {
                    selectedPayment = radio.value;
                }
            });
            
            // Build WhatsApp message
            let message = '🛍️ *NEW ORDER FROM BRADETHY*\n\n';
            
            message += '👤 *BUYER INFORMATION*\n';
            message += `Name: ${buyerName}\n`;
            if (buyerCompany) {
                message += `Company: ${buyerCompany}\n`;
            }
            message += `Email: ${buyerEmail}\n`;
            message += `Phone: ${buyerPhone}\n`;
            
            const address = document.getElementById('address') ? document.getElementById('address').value.trim() : '';
            const city = document.getElementById('city') ? document.getElementById('city').value.trim() : '';
            const state = document.getElementById('state') ? document.getElementById('state').value.trim() : '';
            const zip = document.getElementById('zip') ? document.getElementById('zip').value.trim() : '';
            const country = document.getElementById('country') ? document.getElementById('country').value.trim() : '';

            if (address || city || state || zip || country) {
                message += '\n📍 *SHIPPING ADDRESS*\n';
                if (address) message += `${address}\n`;
                if (city || state || zip) message += `${city}${city && (state||zip)?', ': ''}${state}${(state && zip)?' ':''}${zip ? zip : ''}\n`;
                if (country) message += `${country}\n`;
            }

            message += `\n🚚 *SHIPPING METHOD*\n`;
            message += `${selectedShipping.charAt(0).toUpperCase() + selectedShipping.slice(1)} Shipping ($${shippingCost.toFixed(2)})\n`;
            
            message += `\n💳 *PAYMENT METHOD*\n`;
            if (selectedPayment === 'cash_on_delivery') {
                message += 'Cash on Delivery\n';
            } else {
                message += 'Mobile Money / Bank Transfer\n';
                const mobileNetwork = document.getElementById('mobile-network').value;
                const accountNumber = document.getElementById('account-number').value;
                const accountName = document.getElementById('account-name').value;
                if (mobileNetwork) message += `Network/Bank: ${mobileNetwork}\n`;
                if (accountNumber) message += `Account/Phone: ${accountNumber}\n`;
                if (accountName) message += `Account Name: ${accountName}\n`;
            }
            
            message += '\n📦 *ORDER ITEMS*\n';
            let subtotal = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                message += `${item.name} x${item.quantity} = $${itemTotal.toFixed(2)}\n`;
            });
            
            message += `\n💰 *ORDER SUMMARY*\n`;
            message += `Subtotal: $${subtotal.toFixed(2)}\n`;
            message += `Delivery: $${shippingCost.toFixed(2)}\n`;
            const tax = (subtotal * 0.1);
            message += `Tax (10%): $${tax.toFixed(2)}\n`;
            const total = subtotal + shippingCost + tax;
            message += `*TOTAL: $${total.toFixed(2)}*\n\n`;
            
            // Add loyalty points for this purchase
            const pointsEarned = addLoyaltyPoints(subtotal);
            message += `🎁 *LOYALTY POINTS*\n`;
            message += `You earned ${pointsEarned} points from this order!\n`;
            message += `Your total points: ${loyaltyPoints}\n\n`;
            
            message += '✅ Thank you for your order! We will contact you shortly to confirm the details and process payment.';

            // Send to WhatsApp
            sendToWhatsApp(message);
        });
    }
}

function sendToWhatsApp(message) {
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WHATSAPP_API}?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and redirect after delay
    setTimeout(() => {
        alert('Thank you for your order! Our team will contact you shortly via WhatsApp to confirm your order and process payment.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'index.html';
    }, 1000);
}

// ===== Contact Form =====
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        const subject = document.getElementById('contact-subject').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Show success message
        showMessage('Thank you for contacting us! We will get back to you soon.', 'success');
        form.reset();
    });

    function showMessage(msg, type) {
        const messageEl = document.getElementById('form-message');
        messageEl.textContent = msg;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }
}

// ===== Product Detail Modal =====
function showProductdetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="product-modal">
            <div class="product-modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-modal-details">
                <h2>${product.name}</h2>
                <div class="product-modal-category">${product.category.toUpperCase()}</div>
                <p class="product-modal-description">${product.description}</p>
                <div class="product-modal-price">$${product.price.toFixed(2)}</div>
                <div class="product-modal-stock">${product.stock ? '✓ In Stock' : '✗ Out of Stock'}</div>
                
                <div class="product-modal-features">
                    <h4>Features:</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="product-modal-quantity">
                    <label for="qty-input">Quantity:</label>
                    <input type="number" id="qty-input" min="1" value="1">
                </div>
                
                <button class="btn btn-primary" onclick="addToCart(${product.id}, parseInt(document.getElementById('qty-input').value))">Add to Cart</button>
            </div>
        </div>
    `;

    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

// ===== Modal Close Handler =====
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// ===== Initialize Page =====
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
}

function initPage() {
    updateYear();
    setupMobileNav();
    updateCartDisplay();
    updateLoyaltyDisplay();
    setupNewsletterSignup();

    // Home page
    if (document.getElementById('featured-products')) {
        displayFeaturedProducts();
    }

    // Products page
    if (document.getElementById('products-list')) {
        filterProducts();
    }

    // Cart page
    if (document.getElementById('cart-content')) {
        displayCart();
    }

    // Checkout page
    if (document.getElementById('checkout-items')) {
        displayCheckoutSummary();
    }

    // Contact page
    setupContactForm();

    // Modal
    setupModal();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initPage);
