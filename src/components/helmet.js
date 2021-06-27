import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'My Comic Page'

class helmet extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        ...
      </>
    )
  }
}