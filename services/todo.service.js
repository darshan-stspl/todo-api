const db = require('../config/db');

exports.getAllTodos = (cb) => {
  db.query("SELECT * FROM todos", (err, results) => cb(err, results));
};

exports.createTodo = (todo, cb) => {
  const { title, description } = todo;
  db.query("INSERT INTO todos (title, description) VALUES (?, ?)", [title, description], (err, result) => cb(err, result));
};

exports.updateTodo = (id, todo, cb) => {
  const { title, description, is_done } = todo;
  db.query("UPDATE todos SET title=?, description=?, is_done=? WHERE id=?", [title, description, is_done, id], (err, result) => cb(err, result));
};

exports.deleteTodo = (id, cb) => {
  db.query("DELETE FROM todos WHERE id=?", [id], (err, result) => cb(err, result));
};
