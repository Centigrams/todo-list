function Todo(description) {
  return {
    completed: false,
    description,
    id: Date.now().toString(),
    important: false,
    date: '',
  }
}

export { Todo };
