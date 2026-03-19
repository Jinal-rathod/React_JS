src/
│
├── assets/ # images, icons, fonts
│
├── components/ # reusable UI components
│ ├── common/ # buttons, cards, loaders
│ │ ├── ProductGridCard.jsx
│ │ ├── ProductSmallCard.jsx
│ │ └── NewsletterModal.jsx
│ │
│ ├── layout/ # layout components
│ │ ├── Navbar.jsx
│ │ ├── TopNavbar.jsx
│ │ └── Footer.jsx
│ │
│ └── home/ # homepage-only components
│ ├── Header.jsx
│ ├── BrandLogos.jsx
│ ├── FeaturedProducts.jsx
│ ├── ProductColumns.jsx
│ ├── Services.jsx
│ └── SidebarLeft.jsx
│
├── features/ # feature-based structure (VERY IMPORTANT ⭐)
│ ├── about/
│ │ ├── AboutHero.jsx
│ │ ├── HistorySection.jsx
│ │ └── About.jsx
│ │
│ ├── blog/
│ │ ├── Blogs.jsx
│ │ └── Blog.jsx
│ │
│ ├── cart/
│ │ ├── CartProduct.jsx
│ │ └── Cart.jsx
│ │
│ ├── checkout/
│ │ ├── CheckoutSteps.jsx
│ │ ├── ShippingForm.jsx
│ │ ├── OrderSummary.jsx
│ │ └── Checkout.jsx
│ │
│ ├── contact/
│ │ ├── ContactForm.jsx
│ │ ├── ContactMap.jsx
│ │ └── Contact.jsx
│ │
│ ├── auth/
│ │ ├── CustomerLogin.jsx
│ │ ├── Register.jsx
│ │ └── Login.jsx
│ │
│ ├── wishlist/
│ │ ├── Wishlist.jsx
│ │ └── WishlistContext.jsx
│
├── pages/ # route-level pages (optional if using features)
│ ├── Home.jsx
│ ├── Categories.jsx
│
├── context/ # global contexts
│ └── (move WishlistContext here if global)
│
├── data/ # static data
│ └── logos.jsx
│
├── hooks/ # custom hooks (future use)
│
├── utils/ # helper functions
│
├── App.jsx
└── main.jsx
