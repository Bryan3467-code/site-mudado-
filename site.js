function calcular(){
            // JS é uma linguagem não tipada (sem tipo de dados)
            // Number() é uma função que converte texto em número
            // recupera o valor informado no elemento com id qtdeArroz
            let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
             // recupera o valor informado no elemento com id qtdeArroz
            let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
            let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
            let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
            // calcula o valor total de pontos dos items avulsos
            let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 2) + (qtdeOleo * 4)
            // vamos exibir o resultado para o usuário
            document.getElementById("resultado").innerText = "Pontuação total: " + pontos + "pontos"
            // valor total das metas 
            //recupera a cor da equipe
            let cor = document.getElementById("cor").value
            let metaprova1 //declara a meta de kit
             //declarq a meta de suplemento
            

            if (cor == "amarela"){
                metaprova1 = 54
                
            }
               else if(cor == "cinza"){
                metaprova1 = 51
             
            }
               else if(cor == "laranja"){
                metaprova1 = 21
               
            }
               else if(cor == "marrom"){
               
               
            }
              else if(cor == "preta"){
                metaprova1 = 60
                
            }
            let metasuplemento
            let metaleite = metaprova1
            if (metaprova1 % 2 == 0){
                metasuplemento = metaprova1/2
            }
            else{
              metasuplemento = (metaprova1 / 2) + 0.5
            }
              
             
            

            let kitalimentacao = Number(document.getElementById("kitalimentacao").value)
            if (kitalimentacao >= metaprova1){
                pontos = pontos + 5000 
                if (kitalimentacao > metaprova1){
                      pontos = pontos + (kitalimentacao - metaprova1)  * (5000/metaprova1)
                }
            }
               else if(kitalimentacao < metaprova1){
                
                 pontos = pontos + kitalimentacao * (5000 / metaprova1)
                 
            }
            let qtlatas = Number(document.getElementById("qtlatas").value)
            if (qtlatas >= metasuplemento){
                pontos = pontos + 5000
                 if(qtlatas > metasuplemento){
                    pontos = pontos + (qtlatas - metasuplemento) * (5000/metasuplemento)
                 }
            }
            else {
                pontos = pontos + (qtlatas * (5000/metasuplemento))
            }
            let leite = Number(document.getElementById("leite").value)
            if (leite >= metaleite){
                pontos = pontos + 5000
                 if(leite > metaleite){
                    pontos = pontos + (leite - metaleite) * (5000/metaleite)
                 }
            }
            else {
                pontos = pontos + (leite * (5000/metaleite))
            }
           document.getElementById("resultado").innerText = "pontuação total :" + pontos.toFixed(2) + "pontos"
        }
