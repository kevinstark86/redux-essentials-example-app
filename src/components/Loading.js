import React from 'react'
import { Spinner } from './Spinner'

const Loading = (props) => {
  return (
    <section>
      <Spinner text={props.text} />
    </section>
  )
}

export default Loading
