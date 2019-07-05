import axios from 'axios';


export const getNotes = () => {
  return {
    type: 'GET_NOTES',
    payload: axios.get('http://192.168.100.51:3000/notes')
  }
}

export const getNotesPerPage = (page) => {
  return {
    type: 'GET_NOTES_PERPAGE',
    payload: axios.get('http://192.168.100.51:3000/notes?page='+page)
  }
}

export const searchNotes = (keyword) => {
  return {
    type: 'SEARCH_NOTES',
    payload: axios.get('http://192.168.100.51:3000/notes?search='+keyword),
  }
}

export const addNote = ({title, content, categoryId}) => {
  return {
    type: 'POST_NOTES',
    payload: axios.post('http://192.168.100.51:3000/notes', {
      title,
      content,
      categoryId
    })
  }
}

export const editNote = ({ title, content, categoryId, id }) => {
  return {
    type: 'PATCH_NOTES',
    payload: axios.patch('http://192.168.100.51:3000/notes/'+id, {
      title,
      content,
      categoryId
    })
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTES',
    payload: axios.delete('http://192.168.100.51:3000/notes/'+id)
  }
}

export const sortNote = (sort) => {
  return {
    type: 'SORT_NOTES',
    payload: axios.get('http://192.168.100.51:3000/notes?sort='+sort)
  }
}