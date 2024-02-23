 //POST
 function enviarDados(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpfCadastro').value;

    fetch('pessoas',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, idade: idade, cpf: cpf})
    })
    .then(response => response.json())
    .then(data => {
    
        // limpa os inputs do formulário
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('cpfCadastro').value = '';
    });
    
}

//GET-PUT   
function buscarDados() {
    const cpf = document.getElementById('cpfAtualizar').value;
    fetch(`pessoas`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf);
        
        console.log(data)
        if (pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome;
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade;
            document.getElementById('cpfAtualizar').value = pessoaEncontrada.cpf;
            document.getElementById('id').value = pessoaEncontrada.id;
        } else {
            alert('Pessoa não encontrada!');
        }
    })
}

  

//PUT
    function atualizarDados() {
        const id = document.getElementById('id').value;
        const nome = document.getElementById('nomeAtualizar').value;
        const idade = document.getElementById('idadeAtualizar').value;
        const cpf = document.getElementById('cpfAtualizar').value;

        fetch(`pessoas/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ nome: nome, idade: idade,cpf: cpf})
        })
        .then(response => response.json())
        .then(data => {
            // limpa os inputs do formulário
            document.getElementById('id').value = '';
            document.getElementById('nomeAtualizar').value = '';
            document.getElementById('idadeAtualizar').value = '';
            document.getElementById('cpfAtualizar').value = '';
        });
        
    }

    
//DELETE
function deletarDados() {
    const cpf = document.getElementById("cpf").value;
  
    fetch(`pessoas`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('cpf').value = '';
        data.forEach(obj => {
          if (obj.cpf === cpf) {
            fetch(`pessoas/${obj.id}`, {
              method: 'DELETE'
            });
          }
        });
      });
  }

  //GET
  fetch(`pessoas`)
.then(response => response.json())
.then(data => {
    const tabela = document.getElementById('tabela-corpo');
    
    data.forEach((objeto) => {
        
        const linha = `<tr>
            <td>${objeto.id}</td>
            <td>${objeto.nome}</td>
            <td>${objeto.idade}</td>
            <td>${objeto.cpf}</td>
        </tr>`;
        tabela.innerHTML += linha;
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
function fazerLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;


    fetch('http://localhost:3000/usuario')
    .then(response => response.json())
    .then(data =>{
        
        
        const pessoa = data.find(p => p.
            email === email && p.senha == senha);

            if(pessoa){
                window.location.href = "delete.html";
            }else{
                alert("Cadastro não encontrado!");
            }
    })
}






function enviarCadastro(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confsenha = document.getElementById("confsenha").value;


   
    if(senha==confsenha){

        
        fetch('http://localhost:3000/usuario',{
            method: 'POST' ,

            headers:{
                'Content-Type':
                'application/json'
            },
            body: JSON.stringify({
                email: email, senha: senha, 
            })
        })
        .then(response => response.json())

       
        

    }else{
        alert("As senhas inseridas não são iguais");
    }
   
}

function chamaBebe(){
window.location.href ="login.html"
}