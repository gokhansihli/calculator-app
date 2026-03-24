# Calculator App

A responsive calculator built with React that performs basic arithmetic operations.
This project was created as part of my post-bootcamp portfolio after completing the Northcoders software development course.

---

## Project Overview

A simple, responsive calculator built with React.
It performs basic arithmetic operations using a step-by-step execution model.

This project focuses on:

- React component structure
- State management
- Event handling
- Building reusable UI components

---

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear/reset functionality
- Responsive layout
- Interactive button inputs

---

## Tech Stack

- React
- Vite
- JavaScript
- HTML
- CSS

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/gokhansihli/calculator-app.git
```

### Navigate into the project

```bash
cd calculator-app
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## How It Works

The calculator uses a simple state-based approach:

- `currentValue` → current number on screen
- `prevValue` → stored number
- `operator` → selected operation

When a user:

1. Enters a number → updates `currentValue`
2. Selects an operator → stores `prevValue`
3. Presses `=` → calculates result

---
