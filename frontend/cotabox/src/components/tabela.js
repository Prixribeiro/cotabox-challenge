import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';



function Tabela(props){
    const [data, setData] = useState ([]);
    
    //eslint-disable-next-line
    useEffect(async () => {
          const resposta = await fetch("http://localhost:5000/dados");
          const dados = await resposta.json();
          setData(dados);
      }, []);
    
    return (
        
        <Table  bordered hover size="md" className="text-center">
            
                    <thead>
                    <tr>
                        <th> </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Participation</th>
                    </tr>
                    </thead>
                    <>
                    {data.map((item) => (
                    <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{item.name}</td>
                        <td>{item.lastName}</td>
                        <td>{item.participation}</td>
                    </tr>
                    </tbody> 
                    ))}
                    </>
        </Table>
        
    );
                     
}

export default Tabela;