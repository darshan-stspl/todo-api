const service = require("../services/todo.service");

exports.getTodos = (req, res) => {
  service.getAllTodos((err, todos) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json(todos);
  });
};

exports.createTodo = (req, res) => {
  service.createTodo(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.updateTodo = (req, res) => {
  service.updateTodo(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.sendStatus(204);
  });
};

exports.deleteTodo = (req, res) => {
  service.deleteTodo(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.sendStatus(204);
  });
};
