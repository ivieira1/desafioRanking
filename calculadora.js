// Desafio da Calculadora //

//numA é o número de vitórias e numB é o número de derrotas//
let numA = 50
let numB = 20

function Ranquear(numA, numB) {
	let Calculo = numA - numB
    	if (Calculo < 10) {
            return("Ferro")
        }
        else if (Calculo >= 10 && Calculo <= 20){
        return("Bronze")
         }
        else if (Calculo > 21 && Calculo <= 50){
        return("Prata")
        }
        else if (Calculo > 51 && Calculo <= 80){
        return("Ouro")
        }
        else if (Calculo > 81 && Calculo <= 90){
        return("Diamante")
        }
        else if (Calculo > 91 && Calculo < 100){
        return("Lendário")
        }
        else if (Calculo >= 100)  {
        return("Imortal")
        }
    }

    //Mensagem de Saída//
    console.log("O herói tem o saldo de " + numA + " vitórias e está no nível de " + Ranquear(numA, numB))

