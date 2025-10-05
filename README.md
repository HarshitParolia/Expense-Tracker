# 💰 Expense Tracker (PERN Stack)
A full-stack, responsive web application built to help users seamlessly track, categorize, and visualize their personal income and expenses. Developed using the high-performance PostgreSQL, Express, React, and Node.js (PERN) stack, and styled with utility-first Tailwind CSS.

## ✨ Features
- CRUD Operations: Create, Read, Update, and Delete transactions (income/expense).

- Transaction Categorization: Assign transactions to predefined categories (e.g., Groceries, Salary, Rent).

- Real-time Dashboard: A summary view of monthly spending, total income, and net balance.

- Filtering and Search: Easily search or filter transactions by date range, category, or amount.

- Data Visualization: (Future feature idea: Charts showing spending breakdown over time).

- Responsive Design: Optimized layout for desktop, tablet, and mobile devices using Tailwind CSS.

## 🚀 Tech Stack
This project leverages the PERN stack for robust data management and a modern frontend build system.

| Category | Technology | Description |
|----------|----------|----------|
| Database    | PostgreSQL     | Robust, open-source object-relational database.     |
| Backend    | Node.js / Express     | Fast, unopinionated, minimalist web framework for Node.js. | 
| Frontend    | React     | JavaScript library for building user interfaces.     |
| Bundler    | Vite     | Next-generation frontend tooling for a fast development experience.     |
|Styling| Tailwind CSS|Utility-first CSS framework for rapid UI development.|
|Language|JavaScript (ES6+)|Primary language for the entire application.|

## 🛠️ Installation and Setup
Follow these steps to get a local copy of the project up and running on your machine.

**1. Prerequisites**

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm or Yarn
- PostgreSQL
- Git

**2. Database Setup**
1. Connect to your local PostgreSQL instance (e.g., using psql or an admin tool like DBeaver/pgAdmin).
2. Create a new database for the application:


```
CREATE DATABASE expensetracker_db;
```

3. Execute the initial schema (you may need to create a database.sql file in the root if not provided, for simplicity we assume the schema will be handled by the backend's migration system, or is manually run).

**3. Backend Setup (Root Directory)**
1. Clone the repository:

```
git clone [https://github.com/your-username/expense-tracker.git](https://github.com/your-username/expense-tracker.git)
cd expense-tracker
```

2. Install backend dependencies:
```
npm install
# or yarn install
```

3. Create a .env file in the root directory and add your database configuration:
```
# .env file (Example)
PORT=5000
DB_USER=your_postgres_user
DB_HOST=localhost
DB_DATABASE=expensetracker_db
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

4. Start the backend server:
```
npm start
# or npm run dev (if using nodemon)
```
The API should now be running at `http://localhost:5000`.

**4. Frontend Setup (Client Directory)**
1. Navigate into the client directory:
```
cd client
```
2. Install frontend dependencies:
```
npm install
# or yarn install
```
3. Start the Vite development server:
```
npm run dev
```
The frontend application should open automatically in your browser, typically at `http://localhost:5173`.

## 📸 Usage
Track your first transaction and view your financial overview on the main dashboard.

## 🤝 Contributing
Contributions are welcome! If you have suggestions or want to improve the project, please follow these steps:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE.md` for more information.

###Project Link: https://expenso2025.netlify.app/
