import { Route, Routes, BrowserRouter } from 'react-router-dom'

import TestComponent from '../test_components/TestComponent'

const SampleAppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TestComponent />} />
    </Routes>
  </BrowserRouter>
)

export default SampleAppRoutes
