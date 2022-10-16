import { useTodoListQuery } from "../graphql/todolist.generated"

export const useTodoList = () => {
  const { data } = useTodoListQuery()
  const todos = (data?.todos) || []
  return {
    todos
  }
}
