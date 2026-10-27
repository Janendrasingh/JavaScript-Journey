# 🎨 Unlimited Colors

A simple JavaScript project that changes the background color of a webpage at regular intervals. This project helps practice **DOM manipulation, event handling, random color generation, and asynchronous JavaScript**.

## 📌 Project Overview

The Unlimited Colors project allows users to start and stop automatic background color changes using two buttons.

When the user clicks **START**, the background color changes every second. Clicking **STOP** stops the color-changing process.

## ✨ Features

* 🎨 Automatically changes the background color.
* ▶️ START button to begin changing colors.
* ⏹️ STOP button to stop changing colors.
* ⏱️ Uses `setInterval()` to execute code repeatedly.
* 🛑 Uses `clearInterval()` to stop the interval.
* 🖱️ Uses DOM manipulation and event listeners.
* 📱 Responsive and simple user interface.

## 🛠️ Technologies Used

* **HTML5** — Structures the webpage.
* **CSS3** — Styles the webpage and buttons.
* **JavaScript** — Handles random color generation and background color changes.

## 📂 Project Structure

```text
Unlimited-Colors/
│
├── index.html     # HTML structure
├── style.css      # CSS styling
├── script.js      # JavaScript functionality
└── README.md      # Project documentation
```

## ⚙️ How It Works

### 1. Start Button

When the user clicks START, JavaScript starts an interval that generates a random color and applies it to the webpage's background.

### 2. Random Color Generation

JavaScript generates random color values and converts them into a valid CSS color format, such as a hexadecimal color code.

Example:

```javascript
#FF5733
#3498DB
#A569BD
```

### 3. Automatic Color Changes

The `setInterval()` method executes the color-changing function repeatedly at a specified interval.

### 4. Stop Button

The `clearInterval()` method stops the running interval, preventing further automatic background color changes.

## 📚 JavaScript Concepts Practiced

| Concept              | Purpose                                       |
| -------------------- | --------------------------------------------- |
| DOM Manipulation     | Access and modify webpage elements and styles |
| `querySelector()`    | Select HTML elements                          |
| `addEventListener()` | Handle button click events                    |
| `Math.random()`      | Generate random numbers                       |
| `Math.floor()`       | Round numbers down to integers                |
| `setInterval()`      | Execute a function repeatedly                 |
| `clearInterval()`    | Stop a running interval                       |
| Functions            | Organize reusable code                        |
| Variables            | Store values and interval IDs                 |
| Event Handling       | Respond to user interactions                  |

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Ensure that `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in your browser, or use the Live Server extension in VS Code.
5. Click START to begin changing the background color.
6. Click STOP to stop the color changes.

## 🎯 Learning Objectives

The main goal of this project is to strengthen JavaScript fundamentals through practical implementation.

After completing this project, you should understand how to:

* Generate random colors dynamically.
* Manipulate CSS styles using JavaScript.
* Handle button click events.
* Work with asynchronous timing functions.
* Start and stop repeated operations using interval IDs.

## 🔮 Future Improvements

* Display the current hexadecimal color code.
* Add a button to copy the current color code.
* Allow users to select the color-changing interval.
* Add a manual color-changing button.
* Improve the interface with animations and transitions.

## 👨‍💻 Author

**Janendra Singh**

This project was created for JavaScript practice and learning as part of my web development journey.

---

⭐ If you find this project useful, consider giving the repository a star!
