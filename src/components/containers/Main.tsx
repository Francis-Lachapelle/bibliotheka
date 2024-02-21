import React from 'react'
import Title from './Title'
import BookMenu from './BookMenu'
import Container from '@mui/material/Container'
import BookContainer from './BookContainer'

const Main = () => {
  return (
    <Container style={{border:'2px solid gray ', minHeight:'95vh', borderRadius:'5px'}} maxWidth='lg'>
        <Title />
        <BookMenu />
        <BookContainer />
    </Container>
  )
}

export default Main