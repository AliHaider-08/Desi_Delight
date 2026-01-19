# Restaurant Menu Management System

A modern, full-featured restaurant management system built with React.js, featuring both admin and customer-facing interfaces.

## 🚀 Features

### Admin Dashboard
- **Dashboard Overview**: Real-time statistics and order management
- **Menu Management**: Add, edit, and manage menu items
- **Order Management**: Track and manage orders with status updates
- **User Management**: Manage customer accounts and permissions

### Customer Interface
- **Homepage**: Beautiful landing page with featured items
- **Menu**: Browse and filter menu items by category
- **Full Menu**: Complete menu with search and filtering
- **Shopping Cart**: Add items, manage quantities, and view totals
- **Checkout**: Secure checkout process with multiple payment options
- **Order Confirmation**: Order tracking and confirmation page
- **User Profile**: Manage account settings, addresses, and order history
- **Our Story**: About page showcasing restaurant history
- **Contact**: Contact form and location information
- **Blog**: Blog posts and recipes

### Authentication
- User login and registration
- Social login (Google, Facebook)
- Password reset functionality
- User profile management

## 🛠️ Tech Stack

- **React.js** 18.2.0 - UI framework
- **React Router** 6.20.0 - Client-side routing
- **Tailwind CSS** 3.3.6 - Utility-first CSS framework
- **Material Symbols** - Icon library
- **PostCSS** & **Autoprefixer** - CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "my pro"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
my pro/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   └── AdminSidebar.js
│   │   └── shared/
│   │       ├── Header.js
│   │       └── Footer.js
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── Dashboard.js
│   │   │   ├── MenuManagement.js
│   │   │   ├── OrderManagement.js
│   │   │   └── UserManagement.js
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   └── SignUp.js
│   │   └── customer/
│   │       ├── Homepage.js
│   │       ├── Menu.js
│   │       ├── FullMenu.js
│   │       ├── Cart.js
│   │       ├── Checkout.js
│   │       ├── OrderConfirmation.js
│   │       ├── UserProfile.js
│   │       ├── OurStory.js
│   │       ├── Contact.js
│   │       └── BlogPost.js
│   ├── App.js              # Main app component with routing
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Design Features

- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Custom Color Palette**: Restaurant-themed green color scheme
- **Material Design Icons**: Consistent iconography throughout

## 📱 Routes

### Admin Routes
- `/admin` - Admin Dashboard
- `/admin/menu` - Menu Management
- `/admin/orders` - Order Management
- `/admin/users` - User Management

### Customer Routes
- `/` - Homepage
- `/menu` - Menu Page
- `/menu/full` - Full Menu
- `/cart` - Shopping Cart
- `/checkout` - Checkout
- `/order-confirmation` - Order Confirmation
- `/our-story` - About Us
- `/contact` - Contact Page
- `/blog/:id` - Blog Post
- `/profile` - User Profile

### Auth Routes
- `/login` - Login Page
- `/signup` - Sign Up Page

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🌟 Key Features

- **Component-Based Architecture**: Reusable React components
- **State Management**: React hooks for state management
- **Form Handling**: Controlled components for form inputs
- **Routing**: Client-side routing with React Router
- **Styling**: Tailwind CSS for rapid UI development
- **Icons**: Material Symbols for consistent iconography

## 📝 Notes

- All pages are fully functional with React state management
- Forms are set up with controlled components
- Dark mode is implemented using Tailwind's dark mode feature
- All routes are configured and ready to use
- Images use placeholder URLs from Google's image CDN

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom colors and configuration. See `tailwind.config.js` for details.

### PostCSS
PostCSS is configured to process Tailwind CSS. See `postcss.config.js` for details.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development

Built with ❤️ using React.js and Tailwind CSS.

---

**Note**: This is a frontend-only application. Backend integration would be required for full functionality.
