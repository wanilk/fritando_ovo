import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    const url = 'http://localhost:3010/usuarios';

    useEffect(() => {
        axios.get(url).then(resposta => setUsuarios(resposta.data));
    }, []);

    return (
        <div>
            {usuarios.map(usuario => (
                <div
                    key={usuario.id} 
                    nome={usuario.nome}
                    />
            ))}
         </div>
    );

    }