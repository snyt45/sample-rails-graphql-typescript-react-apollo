import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDeleteTodoMutation, DeleteTodoMutationVariables } from '../graphql/delete_todo.generated';

export type ValidationErrors = {
  message: string;
}[]

export const useDeleteTodo = () => {
  const [ errors, setErrors ] = useState<ValidationErrors>([])
  const navigate = useNavigate()

  const [deleteTodoMutation] = useDeleteTodoMutation(
    {
      onError: (error) => {
        setErrors(error.graphQLErrors.map((e) => ({ message: e.message })))
      },
      onCompleted: () => {
        navigate('/')
      }
    }
  )

  const onDeleteTodo = (
    variables: DeleteTodoMutationVariables
  ) => deleteTodoMutation({ variables })

  return {
    errors,
    onDeleteTodo,
  }
}
