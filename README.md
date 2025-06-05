# Task Manager App

A simple task management app built using plain HTML, CSS, and JavaScript. This app allows users to:

* View a list of tasks
* Mark tasks as complete/incomplete
* Delete tasks
* Add new tasks with validation
* Filter tasks (All, Completed, Pending)

---

## 💡 Features

* **Hardcoded Task Array** (no backend):

  ```javascript
  const tasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true }
  ];
  ```
* **Dynamic Rendering** based on status (completed vs pending).
* **Task Validation**: Title must not be empty.
* **Modern Design** with clean layout and professional styling.
* **Responsive Filters** to toggle between all, completed, and pending tasks.

---

## 🛠️ How to Use

1. Open the `index.html` file in your browser.
2. Add tasks using the input field and `Add Task` button.
3. Filter tasks using the buttons provided (All, Completed, Pending).
4. Click `Complete` to toggle completion status.
5. Click `Delete` to remove a task.

---

## 📁 File Structure

* `index.html` - Main HTML structure
* `styles.css` - Styling for the app
* `script.js` - JavaScript logic
* `README.md` - This file

---

## 📌 Note

This project is completely frontend-based and uses no backend/database. All data is hardcoded in JavaScript.

---

Happy task managing! 
