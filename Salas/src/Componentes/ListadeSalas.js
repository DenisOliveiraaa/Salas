import { useEffect, useState } from 'react';
import { Item } from './Item';
import { getListadeSalas } from '../Servidor/LocalStorage';

export const ListadeSalas = () => {
    const [Salas, setSalas] = useState([]);

    useEffect(() => {
        setSalas(getListadeSalas());
    }, []);

    return (
        <div>
            <h1 className='my-5 text-center'>Gerenciar Salas</h1>

            {
                Salas.length > 0 ? (
                    <div>

                        <table className="table table-hover">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="row">Data</th>
                                    <th scope="row">Professor</th>
                                    <th scope="row">Turma</th>
                                    <th scope="row">Sala</th>
                                    <th scope="row">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Salas.map(sala => 
                                <Item  
                                key={sala.id}
                                sala={sala}
                                setSalas={setSalas} 
                                />)}
                            </tbody>

                        </table>

                    </div>
                ) : (
                    <h3 className='text-center'>Sem Salas</h3>
                )
            }


        </div>
    )
}
