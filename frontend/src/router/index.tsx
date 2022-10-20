import { Route, Routes, BrowserRouter } from 'react-router-dom'
import TodoList from '../features/todos/index/index'
import { TodoNew } from '../features/todos/new/new'
import { TodoEdit } from '../features/todos/edit/edit'

const SampleAppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="todos/new" element={<TodoNew />} />
      <Route path="todos/edit/:id" element={<TodoEdit />} />
    </Routes>
  </BrowserRouter>
)

export default SampleAppRoutes
