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
            const {data} =BookService.getById(id);
            setFormData(data)
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
    <div>Index</div>
  )
}

export default BookForm