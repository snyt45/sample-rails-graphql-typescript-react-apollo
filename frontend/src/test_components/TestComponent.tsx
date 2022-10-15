import { useEffect, useState } from 'react'
import { useTestFieldQuery } from './graphql/test.generated'

function TestComponent() {
    const { data } = useTestFieldQuery()
    const[value, setValue] = useState('')

    useEffect(() => {
      setValue(() => data?.testField as string)
    })

    return (
      <div>{value}</div>
    )
}
export default TestComponent
