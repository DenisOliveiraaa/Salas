import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../Hook/useForm";
import { addSala, getSalaById, editSala } from "../Servidor/LocalStorage";
import { useEffect, useState } from "react";

export const SalasForm = () => {
  const Navigate = useNavigate();

  const { id } = useParams();

  const [showAlert, setShowAlert] = useState(false);

  const {inputValues, mudancadeEntrada, resetarForm, setForm} = useForm ({
    dia: '',
    professor: '',
    turma: '',
    sala: '',
  });

  useEffect(() => {
    if (id) {
      const sala = getSalaById(id);
      setForm(sala);
    }
  }, [id]);

  const enviar = (e) => {
    e.preventDefault();
    id ? editSala(id, inputValues) : addSala(inputValues);
    setShowAlert(true);
    resetarForm();
    setTimeout(() => {
      setShowAlert(false)
    }, 1500);
  }

  return (
    <div>
      
      {/* cabeçalho */}
      <div className='d-flex my-5 justify-content-between'>
        <button className="btn btn-outline-info" onClick={() => Navigate('/')}>Voltar</button>
        <h1>{id ? "Editar" : "Adicionar"} Sala</h1>
        <div />
      </div>

      {/* Formulario */}
      <div className="card border-light p-5 m-5">
        <form onSubmit={enviar}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="dia" >Data</label>
            <input
            id="dia"
            name="dia"  
            type="date" 
            value={inputValues.dia}
            onChange={mudancadeEntrada}
            className="form-control" 
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="professor" >Professor</label>
            <input 
            id="professor"
            name="professor"
            type="text" 
            value={inputValues.professor}
            onChange={mudancadeEntrada}
            className="form-control"  
            placeholder="Insira o nome do Professor"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="turma" >Turma</label>
            <input 
            id="turma" 
            name="turma"
            type="text" 
            value={inputValues.turma}
            onChange={mudancadeEntrada}
            className="form-control" 
            placeholder="Insira a Turma"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="sala">Selecione a Sala</label>
            <select 
            id="sala" 
            name="salax"
            type="text" 
            value={inputValues.salax}
            onChange={mudancadeEntrada}
            className="form-control"
            >
              <option>305</option>
              <option>250</option>
              <option>275</option>
              <option>402</option>
              <option>303</option>
              <option>145</option>
            </select>
          </div>

          <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-outline-info">Salvar</button>
          </div>
        </form>
      </div>

      {
        showAlert && (
          <div className="px-5">
            <div className="alert alert-dismissible alert-primary" role="alert">
              Salvo com Sucesso!!!
            </div>
          </div>
        )
      }

    </div>
  )
}
