import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { UpdateTodoMutationVariables, useUpdateTodoMutation } from '../graphql/update_todo.generated';

export type ValidationErrors = {
  message: string;
}[]

export const useUpdateTodo = () => {
  const [ errors, setErrors ] = useState<ValidationErrors>([])
  const navigate = useNavigate()

  const [updateTodoMutation] = useUpdateTodoMutation(
    {
      onError: (error) => {
        setErrors(error.graphQLErrors.map((e) => ({ message: e.message })))
      },
      onCompleted: () => {
        navigate('/')
      }
    }
  )

  const onUpdateTodo = (
    variables: UpdateTodoMutationVariables
  ) => updateTodoMutation({ variables })

  return {
    errors,
    onUpdateTodo,
  }
}
