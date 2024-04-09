import React, { useState } from 'react';

function ConsultaCEP() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const consultarCEP = async () => {
    try {
      const response = await fetch(`http://localhost:8290/ws/${cep}/json/`);
      const data = await response.json();
      setEndereco(data);
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={consultarCEP}>Consultar</button>

      {endereco && (
        <div>
          <p>CEP: {endereco.cep}</p>
          <p>Cidade: {endereco.cidade}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.estado}</p>
        </div>
      )}
    </div>
  );
}

export default ConsultaCEP;
