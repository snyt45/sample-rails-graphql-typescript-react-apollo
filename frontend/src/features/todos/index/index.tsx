import { Link, List, ListItem, ListItemText, Typography } from "@mui/material"
import MainContainer from "../../common/components/MainContainer"
import { useTodoList } from "./composables/useTodoList"

const TodoList = () => {
  const { todos } = useTodoList()

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">TODO一覧</Typography>
      <List>
        {todos.map((todo) => (
          <ListItem divider key={todo.id}>
            <Link href="#" underline="none">
              <ListItemText primary={`${todo.title} （${todo.status}）`} />
            </Link>
          </ListItem>
        ))}
      </List>
    </MainContainer>
  )
}

export default TodoList
