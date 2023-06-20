import uuid from "react-uuid";

export const getListadeSalas = () => {
    if(!localStorage["@salas"]){
        localStorage["@salas"] = JSON.stringify([]);
    }

    let salas = JSON.parse(localStorage["@salas"])
    return salas;
}

export const getSalaById = (id) => {
    const salas = getListadeSalas();
    const sala = salas.find((sala) => sala.id === id);
    return sala;
}

export const addSala = (sala) => {
    const salas = getListadeSalas();
    salas.push({ id: uuid(), ...sala});
    localStorage['@salas'] = JSON.stringify(salas);
}

export const editSala = (id, novaSala) => {
    let salas = getListadeSalas();
    salas = salas.filter((sala) => sala.id !== id);
    salas.push(novaSala);
    localStorage["@salas"] = JSON.stringify(salas);
};

export const deleteSala = (id) => {
    let salas = getListadeSalas();
    salas = salas.filter((sala) => sala.id !== id);
    localStorage["@salas"] = JSON.stringify(salas);
};