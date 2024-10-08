'use client' // Error components must be Client Components
 
import { Alert, Button } from '@mui/material'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      {/* <h2>An unexpected error has occurred.</h2> */}
      <Alert variant="outlined" severity="error">
        An unexpected error has occurred.
      </Alert>
      <Button variant="outlined" sx={{ mt: 5 }} onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}