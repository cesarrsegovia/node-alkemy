import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BookService from '../../services';

const BookForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        image: '',
    });

    useEffect(()=> {
        if(id){
            BookService.getById(id).then((response) => {
            setFormData(response.data)
            })
        }
    }, [id]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(id){
            await BookService.update(id, formData);
        } else {
            await BookService.create(formData);
        }
        navigate('/')
    }

  return (
    <div>
        <h1>{id ? 'Editar libro' : 'Nuevo libro'}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Título"/><br/>
            <input type="text" name='author' value={formData.author} onChange={handleChange} placeholder="Autor"/><br/>
            <input type="text" name='description' value={formData.description} onChange={handleChange} placeholder="Descripción"/><br/>
            <button type='submit'>Guardar</button>
            <button type='button' onClick={()=> navigate('/')}>Cancelar</button>
        </form>
    </div>
  )
}

export default BookForm