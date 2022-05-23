var data = new Date();
var ano = data.getFullYear();
let genero = ''

function gerarIdade(){
    let feminino = document.getElementById('fem')
    let masculino = document.getElementById('masc')
    let img = document.createElement('img')
    img.setAttribute('id', 'fotoIdade')

    let print = document.getElementById('deteccao')
    let nasc = parseInt(document.getElementById('anoNasc').value);

    let idade = ano - nasc;

    if(nasc < 1900 || isNaN(nasc) || nasc > ano){
        alert("[ERRO] Coloque uma data de nascimento válida!")
    }
    else{
        if(feminino.checked){
            //feminino
            genero = 'mulher'
            if(idade <= 2){
                img.src = "img/bebe/mulher.jpg";
            }
            else if(3 <= idade && idade <= 11){
                img.src = "img/crianca/mulher.jpg";
            }
            else if(12 <= idade && idade <= 19){
                img.src = "img/adolescente/mulher.jpg";
            }
            else if(20 <= idade && idade <= 50){
                img.src = "img/adulto/mulher.jpg";
            }
            else if(51 <= idade){
                img.src = "img/idoso/mulher.jpg"
            }
            
        }
        else if(masculino.checked){
            //masculino
            genero = 'homem'
            if(idade <= 2){
                img.src="img/bebe/homem.jpg"
            }
            else if(3 <= idade && idade <= 11){
                img.src = "img/crianca/homem.jpg"
            }
            else if(12 <= idade && idade <= 19){
                img.src = "img/adolescente/homem.jpg"
            }
            else if(20 <= idade && idade <= 50){
                img.src = "img/adulto/homem.jpg"
            }
            else if(51 <= idade){
                img.src = "img/idoso/homem.jpg"
            }
            
        }
        else{
            //nada
            alert("[ERRO] Selecione o sexo!")
        }
    }
    print.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
    print.appendChild(img)
    }
