Here’s a clear **to-do list** breakdown of your requirements so you can track progress while building your Next.js 15 app:

---

## ✅ Core Todos


### **Landing Page (/**)

* [ ] Add **Footer**
* [ ] Ensure navigation works without login

---

### **Login Page (/login)**

* [ ] Create login page UI
* [ ] Add NextAuth login button (Google or Credentials)
* [ ] Redirect to `/products` after successful login

---

### **Product List Page (/products)**

* [ ] Create `/products/page.js`
* [ ] Fetch products from a mock backend or local JSON file
* [ ] Display list with: `name`, `description`, `price`, and **Details** button
* [ ] Link each product to `/products/[id]`

---

### **Product Details Page (/products/\[id])**

* [ ] Create dynamic route `/products/[id]/page.js`
* [ ] Fetch product details by ID
* [ ] Display all product details

---

### **Protected Add Product Page (/dashboard/add-product)**

* [ ] Create `/dashboard/add-product/page.js`
* [ ] Wrap page with **auth guard** → redirect unauthenticated users to `/login`
* [ ] Build **form** with fields: `name`, `description`, `price`
* [ ] Store new product in mock backend or DB (via `/api/products` POST handler)
* [ ] Redirect or show confirmation after adding product

---

## 🌟 Optional Enhancements

* [ ] Add **loading spinner** when submitting forms
* [ ] Add **toast notification** after product add success/failure
* [ ] Implement **light/dark theme toggle** (e.g., with Tailwind + next-themes)

---

Would you like me to also **order these tasks into a step-by-step build roadmap** (so you know exactly what to do first, second, etc.), or just keep it as a flat to-do list?
