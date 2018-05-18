import React from 'react'

import LinearProgress from '@material-ui/core/LinearProgress'

const withLoading = Component => ({ isLoading }) => (
  isLoading ? <LinearProgress /> : Component
)

export default withLoading