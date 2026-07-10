# 💸 Splitify – Smart Bill Splitting App

A live working version of this project is hosted at:
**[splitify-ashy.vercel.app](https://splitify-ashy.vercel.app)**

![License](https://img.shields.io/badge/License-MIT-blue.svg) 
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange)

---

## 📌 Project Overview
**Splitify** is a smart bill-splitting and expense management app that helps groups of friends, roommates, or colleagues manage shared expenses easily.  
It supports **Equal Split** (divide equally) and **Custom Split** (assign custom shares/percentages).  
Splitify automatically calculates balances and uses a **settlement algorithm** to minimize transactions, making group expense management quick, fair, and hassle-free.  

---

## ✨ Features
- 👥 **Group Management** – Create groups and add/remove members.  
- ➗ **Equal Split** – Divide expenses equally among all members.  
- 📊 **Custom Split** – Assign individual shares or percentages.  
- 💰 **Expense Tracking** – View contributions and balances in real time.  
- 🔄 **Settlement Calculation** – Minimize transactions with a smart algorithm.  
- 📜 **Expense History** – Track past expenses and settlements.  
- 🔒 **Secure & Scalable** – Designed to handle both small groups and large datasets.  

---

## 🛠️ Tech Stack
- **Frontend**: React / Flutter  
- **Backend**: Node.js / Django / Spring Boot  
- **Database**: MySQL / PostgreSQL / MongoDB  
- **Authentication**: JWT / OAuth2.0  
- **Hosting**: AWS / Firebase  

---

## 📊 Database Schema (Simplified)
- **Users** → `user_id, name, email`  
- **Groups** → `group_id, group_name, created_by`  
- **Members** → `group_id, user_id`  
- **Expenses** → `expense_id, group_id, amount, paid_by, description, date`  
- **Splits** → `expense_id, user_id, share_amount`  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/splitify.git
cd splitify
