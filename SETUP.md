# PackagePro Website - Setup Instructions

## QuickStart
Simply open `index.html` in your browser to run the website. No server setup required!

---

## WhatsApp Integration Setup

The website now sends all checkout orders directly to WhatsApp. Follow these steps to configure it:

### Step 1: Get Your WhatsApp Number
- Use your WhatsApp Business Number or personal WhatsApp number
- Format: Country Code + Phone Number (WITHOUT + or spaces)
  - Example: USA = `12125551234`
  - Example: UK = `441632960000`
  - Example: India = `919876543210`

### Step 2: Update WhatsApp Number in Code
Open `script.js` and find this line (near the top):
```javascript
const WHATSAPP_NUMBER = '1234567890'; // Replace with your WhatsApp Business number
```

Replace `1234567890` with your actual WhatsApp number.

### Step 3: Test the Integration
1. Go to the website
2. Add some products to cart
3. Click "Cart" and then "Proceed to Checkout"
4. Fill in your details
5. Click "Place Order"
6. A WhatsApp chat window will open with the order details pre-filled

---

## Features

✅ **Automatic Order Formatting** - Orders include:
- Buyer name and company (optional)
- Email and phone number
- Shipping address
- All order items with quantities and prices
- Order summary (subtotal, shipping, tax, total)
- Selected shipping method

✅ **Shopping Cart** - Fully functional with:
- Add/remove items
- Adjust quantities
- Persistent storage (survives page refresh)
- Tax calculation (10%)
- Multiple shipping options

✅ **Product Catalog** - 12 packaging products across categories:
- Boxes
- Bags & Pouches  
- Labels & Stickers
- Tape & Adhesives
- Protection Materials
- Supplies

✅ **Filtering & Sorting** - Products can be filtered by:
- Category
- Price range
- Sorted by name or price

---

## File Structure

```
📁 langalethu/
├── 📄 index.html          (Home page)
├── 📄 products.html       (Product catalog)
├── 📄 cart.html           (Shopping cart)
├── 📄 checkout.html       (Checkout with WhatsApp)
├── 📄 about.html          (About company)
├── 📄 contact.html        (Contact page)
├── 📄 styles.css          (All styling)
├── 📄 script.js           (All functionality)
└── 📄 SETUP.md            (This file)
```

---

## How Order Checkout Works

1. **Customer Submits Order** → Fills checkout form
2. **Message Generated** → Order details formatted automatically
3. **WhatsApp Opened** → Pre-filled message opens in WhatsApp Web/App
4. **Message Sent** → Customer sends message to your WhatsApp
5. **Confirmation** → You receive the order on WhatsApp
6. **Payment Handling** → Handle payment directly via WhatsApp

---

## Customization

### Add/Edit Products
Edit the `products` array in `script.js` (starting around line 6):
```javascript
{
    id: 1,
    name: 'Product Name',
    category: 'category-name',
    price: 29.99,
    image: '📦',
    description: 'Product description',
    stock: true,
    features: ['Feature 1', 'Feature 2']
}
```

### Change Company Information
Update these files with your company info:
- `index.html` - Hero section, footer
- `about.html` - Company details, contact info
- `contact.html` - Address, business hours, email
- `script.js` - WhatsApp number

### Customize Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    ...
}
```

---

## Browser Support

Works in all modern browsers:
- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Opera ✅
- Mobile browsers ✅

---

## Security Notes

- All data stays on the user's device (localStorage)
- No backend server required
- No sensitive data transmission except to WhatsApp
- HTTPS recommended for production deployment

---

## Tips for Success

1. **Test thoroughly** - Try placing test orders before going live
2. **Monitor WhatsApp** - Check your WhatsApp regularly for incoming orders
3. **Quick response** - Respond to customers quickly via WhatsApp for best results
4. **Clear pricing** - Make sure shipping costs are transparent
5. **Professional messages** - Customize the order message template as needed

---

## Troubleshooting

**WhatsApp doesn't open?**
- Check that your WhatsApp number is correct (without + sign)
- Ensure WhatsApp is installed on the device
- Try again in a different browser

**Cart not saving?**
- Check browser storage is enabled
- Try clearing browser cache
- Use a modern browser (not very old versions)

**Products not showing?**
- Refresh the page
- Check browser console for errors (F12)
- Make sure JavaScript is enabled

---

## Support

For issues or questions, add them to the contact form or reach out via your WhatsApp number.

---

Last Updated: March 2024
