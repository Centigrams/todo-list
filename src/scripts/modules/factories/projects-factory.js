function Project(name) {
  return {
    name,
    id: Date.now().toString(),
    tasks: [],
  }
}

export { Project };