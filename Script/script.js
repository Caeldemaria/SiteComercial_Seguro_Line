const url= 'https://fragaebitelloconsorcios.com.br/api/json/contemplados'

function buscarDados() {
    fetch(url)
    .then(response=> response.json())
    .then(data =>{
        console.log(data);
        

        const dadosTbody=document.getElementById('dados-json')

        let content='';
        data.forEach(item => {
            content+=`
            <tr>
                        <td>${item.id}</td>
                        <td>${item.categoria}</td>
                        <td>R$ ${item.valor_credito}</td>
                        <td>R$ 0
                        
                        ${item.valor_credito_original}</td>
                        <td>R$ ${item.entrada}</td>
                        <td>R$ ${item.parcelas}</td>
                        <td>R$ ${item.valor_parcela}</td>
                        <td>${item.administradora}</td>
                        <td>R$ ${item.reserva}</td>
                        <td>R$ ${item.fundo}</td>
                    </tr>
            `;
            
        });
        dadosTbody.innerHTML=content
    }
    )
    .catch(error=> console.error('Erro na busca de dados',error))
}
document.addEventListener('DOMContentLoaded',buscarDados)
