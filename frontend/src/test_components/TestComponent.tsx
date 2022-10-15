import { useEffect, useState } from 'react'
import { useTestFieldQuery } from './graphql/test.generated'
import { Link } from "react-router-dom";

function TestComponent() {
    const { data } = useTestFieldQuery()
    const[value, setValue] = useState('')

    useEffect(() => {
      setValue(() => data?.testField as string)
    })

    return (
      <>
        <div>{value}</div>
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </>
    )
}
export default TestComponent
