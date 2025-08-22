# Eleget - Next.js Product Management App

A simple **Next.js 15** application with public and protected pages. Users can view products, see product details, and logged-in users can add new products. Authentication is handled using **NextAuth.js** with Google login.

## Features
- Landing page with Navbar, Hero, Product Highlights, and Footer  
- Public product listing and product detail pages  
- Protected Add Product page (requires login)  
- Google OAuth login via NextAuth.js  
- Responsive design with Tailwind CSS  
- Loading spinners for form submission  

## Live Site
Check out the live app here: [Eleget Live Site](https://product-management-brown-eight.vercel.app)

## Route Summary

| Route | Method | Access | Description |
|-------|--------|--------|-------------|
| `/` | GET | Public | Landing page with Navbar, Hero, Product Highlights, and Footer |
| `/products` | GET | Public | List of all products with brief details |
| `/products/[id]` | GET | Public | Product detail page showing full information of a single product |
| `/login` | GET/POST | Public | Login page with Google OAuth (via NextAuth.js) |
| `/dashboard/add-product` | GET/POST | Protected | Form to add a new product. Only accessible to logged-in users. Redirects to `/login` if unauthenticated |
| `/api/products` | GET | Public | API route to fetch products (used internally) |
| `/api/products` | POST | Protected | API route to add a new product. Only accessible to authenticated users |
| `/api/auth/[...nextauth]` | GET/POST | Public | NextAuth.js authentication endpoints (Google login, session handling) |



## Github Repository Link
Check out the Repo here: [Eleget Github repo](https://github.com/rabiul3000/product-management.git)

## Installation & get started

1. **Clone the repository**
```bash
git clone https://github.com/rabiul3000/product-management.git
cd your-repo
npm install
npm run dev