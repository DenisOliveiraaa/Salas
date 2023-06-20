import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteSala, getListadeSalas } from '../Servidor/LocalStorage';

export const Item = ({sala, setSalas}) => {
    const { id, dia, professor, turma, salax} = sala;

    const Navigate = useNavigate();

    const removerSala = () => {
        deleteSala(id);
        setSalas(getListadeSalas());
    }

  return (
    <tr className="table-secondary">
        <th>{dia}</th>
        <th>{professor}</th>
        <th>{turma}</th>    
        <th>{salax}</th>
        <th>
            <div className='d-flex gap-3'>
                <span role='button' className="badge bg-info" onClick={() => Navigate(`/editar-sala/${id}`)}>
                    Editar
                </span>
                <span role='button' className="badge bg-danger" onClick={() => removerSala()}>
                    Deletar
                </span>
            </div>
        </th>
    </tr>
  )
}
