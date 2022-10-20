import { Button, Grid, Link, List, ListItem, ListItemText, Typography } from "@mui/material"
import MainContainer from "../../common/components/MainContainer"
import { useTodoList } from "./composables/useTodoList"

const TodoList = () => {
  const { todos } = useTodoList()

  return (
    <MainContainer>
      <Grid container justifyContent="space-between">
        <Typography component="h2" variant="h5">TODO一覧</Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
        >
          <Link href='todos/new' underline="none" sx={{ color: "white" }}>
            +TODO作成
          </Link>
        </Button>
      </Grid>
      <List>
        {todos.map((todo) => (
          <ListItem divider key={todo.id}>
            <Link href={`todos/edit/${todo.id}`} underline="none">
              <ListItemText primary={`${todo.title} （${todo.status}）`} />
            </Link>
          </ListItem>
        ))}
      </List>
    </MainContainer>
  )
}

export default TodoList
