import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material"
import { useMatch } from "react-router-dom";
import MainContainer from "../../common/components/MainContainer"
import { useEffect, useMemo, useState } from "react";
import { TodoQueryVariables, useTodoQuery } from "./graphql/todo.generated"
import { Todo } from "../../../gen/types";
import { useUpdateTodo } from "./composable/useUpdateTodo";
import { UpdateTodoMutationVariables } from "./graphql/update_todo.generated";
import { useDeleteTodo } from "./composable/useDeleteTodo";
import { DeleteTodoMutationVariables } from "./graphql/delete_todo.generated";

export const TodoEdit = () => {
  const statuses = [
    { value: 'waiting', label: '未着手', },
    { value: 'completed', label: '完了', },
  ];

  type defaultTextInput = {
    id: string | undefined,
    title: string | undefined,
    status: string | undefined
  }

  const defaultTextInput: defaultTextInput = {
    id: '',
    title: '',
    status: '',
  }

  const match = useMatch("/todos/edit/:id")
  const variables: TodoQueryVariables = { id: match?.params?.id as string }
  const { data, loading } = useTodoQuery({ variables })
  const todo = useMemo(() => (data?.todo as Todo) || {}, [data])

  const [formState, updateFormState] = useState(defaultTextInput)

  type CustomChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >

  const handleChange = (event: CustomChangeEvent) => {
    updateFormState({ ...formState, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if(loading === false && todo){
      updateFormState({
        id: todo?.id || '',
        title: todo?.title || '',
        status: todo?.status || ''
      });
    }
  }, [todo])

  const { errors, onUpdateTodo } = useUpdateTodo()
  const mutateVariables: UpdateTodoMutationVariables = useMemo(
    () => ({
      input: {
        id: formState.id || '',
        title: formState.title || '',
        status: formState.status || '',
      }
    }),
    [
      formState.id,
      formState.title,
      formState.status,
    ]
  )
  
  const submit = () => onUpdateTodo(mutateVariables)

  const { errors: deleteErrors, onDeleteTodo } = useDeleteTodo()
  const deleteMutateVariables: DeleteTodoMutationVariables = { input: { id: match?.params?.id as string } }
  const onDelete = () => onDeleteTodo(deleteMutateVariables)

  return (
    <MainContainer>
      <Grid container justifyContent="space-between">
        <Typography component="h2" variant="h5">TODO編集</Typography>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={onDelete}
        >
          削除
        </Button>
      </Grid>
      <div>
        <ul>
          {errors.map((e) => (<li key={e.message}>{e.message}</li>))}
          {deleteErrors.map((e) => (<li key={e.message}>{e.message}</li>))}
        </ul> 
      </div>
      <Box component="form" noValidate autoComplete="off"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
      >
        <TextField
          name="title"
          required
          margin="normal"
          label="Title"
          value={formState.title}
          onChange={handleChange}
        />
        <TextField
          name="status"
          select
          required
          label="Status"
          value={formState.status}
          onChange={handleChange}
        >
          {statuses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Grid container justifyContent="flex-end">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={submit}
          >
            更新
          </Button>
        </Grid>
      </Box>
    </MainContainer>
  )
}

