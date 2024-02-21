import React from 'react'
import Stack from '@mui/material/Stack'
import { labels } from '../../typography/labels'
import { BookInterface } from '../../types/shared.types'
import BookCard from './BookCard'
import { Typography } from '@mui/material'
const BookContainer = () => {

  
  const books : Array<BookInterface> = [{
      _id:'14124', 
      name:'Livre 1', 
      year:'2024'
  }]
    return (
    <Stack spacing={2}>{books.length > 0 ? books.map(book => (
       <BookCard book={book} />
    )) : <Typography style={{marginTop:'1em'}}>{labels.noBookInDB}</Typography>}
    </Stack>
  )
}

export default BookContainer