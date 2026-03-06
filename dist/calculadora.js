"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const divisao_1 = __importDefault(require("./divisao"));
const potenciaraiz_1 = __importDefault(require("./potenciaraiz"));
const baskara_1 = __importDefault(require("./baskara"));
let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question('Quais são seus números e a operação desejada?\n' +
        '[Somar] [Subtrair] [Multiplicar] [Dividir] [Potencia] [Bhaskara]\n', (valor) => {
        let instrucoes = valor.split(' ');
        let operacao = instrucoes[instrucoes.length - 1];
        let n1 = Number(instrucoes[0]);
        let n2 = Number(instrucoes[1]);
        let n3 = Number(instrucoes[2]);
        console.log(`Estas foram suas instruções: ${instrucoes}\n`);
        switch (operacao) {
            case "Somar":
                let soma = new soma_1.default();
                console.log(`O resultado da operação é: ${soma.calcular(n1, n2)}\n`);
                break;
            case "Subtrair":
                let subtracao = new subtracao_1.default();
                console.log(`O resultado da operação é: ${subtracao.calcular(n1, n2)}\n`);
                break;
            case "Multiplicar":
                let multiplicacao = new multiplicacao_1.default();
                console.log(`O resultado da operação é: ${multiplicacao.calcular(n1, n2)}\n`);
                break;
            case "Dividir":
                let divisao = new divisao_1.default();
                console.log(`O resultado da operação é: ${divisao.calcular(n1, n2)}\n`);
                break;
            case "Potência/Raiz":
                let potenciaraiz = new potenciaraiz_1.default();
                console.log(`O resultado da operação é: ${potenciaraiz.calcular(n1, n2)}\n`);
                break;
            case "Bhaskara":
                let bhaskara = new baskara_1.default();
                let resultado = bhaskara.calcular(n1, n2, n3);
                if (resultado === null) {
                    console.log("A equação não possui raízes reais\n");
                }
                else {
                    console.log(`Delta: ${resultado.delta}; x1: ${resultado.x1}; x2: ${resultado.x2}\n`);
                }
                break;
        }
        leitor.close();
        iniciar();
    });
};
iniciar();
