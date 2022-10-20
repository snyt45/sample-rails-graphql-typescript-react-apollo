import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import MainContainer from "../../common/components/MainContainer"
import { useMemo, useState } from "react";
import { useCreateTodo } from "./composable/useCreateTodo";
import { CreateTodoMutationVariables } from "./graphql/create_todo.generated";

export const TodoNew = () => {
  type defaultTextInput = {
    title: string | undefined,
  }

  const defaultTextInput: defaultTextInput = {
    title: '',
  }

  const [formState, updateFormState] = useState(defaultTextInput)

  type CustomChangeEvent = React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >

  const handleChange = (event: CustomChangeEvent) => {
    updateFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const { errors, onCreateTodo } = useCreateTodo()
  const mutateVariables: CreateTodoMutationVariables = useMemo(
    () => ({
      input: {
        title: formState.title || '',
      }
    }),
    [
      formState.title,
    ]
  )
  const submit = () => onCreateTodo(mutateVariables)

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">TODO作成</Typography>
      <div>
        <ul>
          {errors.map((e) => (<li key={e.message}>{e.message}</li>))}
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
        <Grid container justifyContent="flex-end">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={submit}
          >
            作成
          </Button>
        </Grid>
      </Box>
    </MainContainer>
  )
}

