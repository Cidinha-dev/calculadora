function calcular(tipo , valor){

    //ação
    if(tipo === 'acao'){

      //limpar
      if(valor === 'c'){
        document.getElementById('resultado').value = '';
      }

      //concatenar valor do visor
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor;
      }

      //envolver para o interpretador js
      if(valor === '='){
        let valor_campo = eval(document.getElementById('resultado').value);

        //atribuir o valor recuperado na variavel valor_campo
        document.getElementById('resultado').value = valor_campo;

      }
    }

    // valor
    else if(tipo === 'valor'){

      document.getElementById('resultado').value += valor;
    }
  }