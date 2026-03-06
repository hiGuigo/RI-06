import * as readline from 'readline'
import Soma from './soma'
import Subtracao from './subtracao'
import Multiplicacao from './multiplicacao'
import Divisao from './divisao'
import Potenciaraiz from './potenciaraiz'
import Bhaskara from './baskara'

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question('Quais são seus números e a operação desejada?\n' +
        '[Somar] [Subtrair] [Multiplicar] [Dividir] [Potencia] [Bhaskara]\n',
        (valor) => {
            let instrucoes = valor.split(' ')

            let operacao = instrucoes[instrucoes.length - 1]

            let n1 = Number(instrucoes[0])
            let n2 = Number(instrucoes[1])
            let n3 = Number(instrucoes[2])

            console.log(`Estas foram suas instruções: ${instrucoes}\n`)


            switch (operacao){
                case "Somar":
                    let soma = new Soma()
                    console.log(`O resultado da operação é: ${soma.calcular(n1, n2)}\n`)
                    break
                case "Subtrair":
                    let subtracao = new Subtracao()
                    console.log(`O resultado da operação é: ${subtracao.calcular(n1, n2)}\n`)
                    break
                case "Multiplicar":
                    let multiplicacao = new Multiplicacao()
                    console.log(`O resultado da operação é: ${multiplicacao.calcular(n1, n2)}\n`)
                    break
                case "Dividir":
                    let divisao = new Divisao()
                    console.log(`O resultado da operação é: ${divisao.calcular(n1, n2)}\n`)
                    break
                case "Potência/Raiz":
                    let potenciaraiz = new Potenciaraiz()
                    console.log(`O resultado da operação é: ${potenciaraiz.calcular(n1, n2)}\n`)
                    break
                case "Bhaskara":
                    let bhaskara = new Bhaskara()
                    let resultado = bhaskara.calcular(n1, n2, n3)

                    if (resultado === null) {
                        console.log("A equação não possui raízes reais\n")
                    } else {
                        console.log(`Delta: ${resultado.delta}; x1: ${resultado.x1}; x2: ${resultado.x2}\n`)
                    }
                    break
            }

        leitor.close()
        iniciar()
    })
}

iniciar()
