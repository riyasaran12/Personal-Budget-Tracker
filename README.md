# 💰 Personal Budget Tracker

A full-stack web application built with the MERN stack to help users efficiently manage their personal finances. Users can track incomes and expenses, visualize financial trends, and get a detailed overview of their monthly budget.

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Emoji Picker React** - Category emojis

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **XLSX** - Excel export

## ✨ Features

- 🔐 **User Authentication** - Secure login and signup with JWT
- 📊 **Visual Dashboard** - Financial overview with charts and graphs
- 💵 **Income Management** - Add, view, and delete income transactions
- 💸 **Expense Tracking** - Track and categorize expenses
- 📅 **Date-wise Tracking** - Filter transactions by date
- 📌 **Category Emojis** - Visual category representation
- 📥 **Excel Export** - Download transactions as Excel files
- 🖼️ **Image Uploads** - Upload profile pictures
- 📈 **Analytics** - Bar charts, pie charts, and line charts for financial insights
- 🎨 **Responsive Design** - Works on desktop and mobile devices

## 📂 Project Structure

```
budget-tracker/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Auth and upload middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── uploads/          # Uploaded images
│   ├── server.js         # Express server
│   └── package.json
│
├── frontend/
│   └── budget-tracker/
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── context/     # React context
│       │   ├── hooks/       # Custom hooks
│       │   ├── pages/       # Page components
│       │   └── utils/       # Utility functions
│       ├── public/
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_jwt_key
CLIENT_URL=http://localhost:5173
```

4. Run the server:
```bash
# Development
npm run dev

# Production
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend/budget-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, for local development):
```env
VITE_API_URL=http://localhost:5000
```

4. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🚢 Deployment

This project is configured for deployment on Railway.

### Railway Deployment

1. **Backend Service:**
   - Root Directory: `backend`
   - Environment Variables: `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`

2. **Frontend Service:**
   - Root Directory: `frontend/budget-tracker`
   - Environment Variable: `VITE_API_URL` (backend Railway URL)

3. **MongoDB:**
   - Add MongoDB database service in Railway
   - Use the provided `MONGO_URI` connection string

See `backend/railway.json` and `frontend/budget-tracker/railway.json` for Railway configuration.

## 📝 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/getUser` - Get user info (protected)

### Income
- `POST /api/v1/income/add` - Add income
- `GET /api/v1/income/get` - Get all income
- `DELETE /api/v1/income/:id` - Delete income
- `GET /api/v1/income/downloadexcel` - Export income to Excel

### Expense
- `POST /api/v1/expense/add` - Add expense
- `GET /api/v1/expense/get` - Get all expenses
- `DELETE /api/v1/expense/:id` - Delete expense
- `GET /api/v1/expense/downloadexcel` - Export expenses to Excel

### Dashboard
- `GET /api/v1/dashboard` - Get dashboard data

## 👥 Contributors

- Vaibhav Garg ([@vaibhavgarg230](https://github.com/vaibhavgarg230))
- Riya Saran ([@riyasaran12](https://github.com/riyasaran12))
- Ashika ([@A-shika](https://github.com/A-shika))

## 📄 License

ISC

## 🙏 Acknowledgments

Built as part of a semester project for DBMS Lab, MNIT Jaipur.

