import React, { useEffect, useState } from 'react'
import BookService from '../../services'
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    const fetchBooks = async() => {
        try {
            const { data } = await BookService.getAll();
            setBooks(data);
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            alert('error fetching books')
        }
    }

    useEffect(()=>{
        fetchBooks();
    }, [])

    const handleDelete = async(id) => {
        try {
            await BookService.delete(id);
            fetchBooks();
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            alert('error al borrar libro')
        }
    }

  return (
    <div>
        <h1>Libros</h1>
        <button onClick={()=>navigate('/fform')}>Nuevo libro</button>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.autor}</td>
                            <td>
                                <button onClick={() => navigate(`/form/${book.id}`)}>Editar</button>
                                <button onClick={() => handleDelete(book.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Overview