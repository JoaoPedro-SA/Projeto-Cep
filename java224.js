async function pegaCEP(){
     let cep = document.querySelector(".inputCEP");
     return cep.value
}

function valor_nulo (valor) {
     if (valor == null || valor == "" || valor == undefined) {
          return `Sem registro`
     }
     return valor
}
     


async function ConsultaCEP(cep) {
     const url = `https://viacep.com.br/ws/${cep}/json/`;
     try{
          const response = await fetch(url);
          if (!response.ok){
               throw new Error(response.statusText);
         }
          const json = await response.json();
          console.log(json);
          let jsonObject = json;
          return jsonObject
}
     catch(error){
     console.log(error.message);
     return []
}

}

const button = document.querySelector(".button");
let cep = null;
let texto = document.querySelector(".receber2");
button.addEventListener('click', consulta1 = async () => { 
     cep = await pegaCEP();
     const resultado = await ConsultaCEP(cep);
     texto.innerHTML = `
     <div><b> CEP:</b>  ${valor_nulo (resultado.cep)}</div>
     <div><b> Logradouro:</b> ${valor_nulo (resultado.logradouro)}</div>
     <div><b> Bairro:</b> ${valor_nulo (resultado.bairro)}</div>
     <div><b> Cidade:</b> ${valor_nulo (resultado.localidade)}</div)>
     <div><b> Estado:</b> ${valor_nulo (resultado.uf)}</div>
     <div><b> unidade:</b> ${valor_nulo (resultado.unidade)}</div>
     <div><b> localidade:</b> ${valor_nulo (resultado.localidade)}</div>
     <div><b> regiao:</b> ${valor_nulo (resultado.regiao)}</div>
     <div><b> ibge:</b> ${valor_nulo (resultado.ibge)}</div>
     <div><b> gia:</b> ${valor_nulo (resultado.gia)}</div>
     <div><b> ddd:</b> ${valor_nulo (resultado.ddd)}</div>
     <div><b> siafi:</b> ${valor_nulo (resultado.siafi)}</div>
`;
})
let inputCEP = document.querySelector(".inputCEP");
inputCEP.addEventListener('keydown', async (e) => {
     if (e.key === 'Enter') {
          consulta1();
     }
})
