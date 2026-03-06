"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo_1 = __importDefault(require("./calculo"));
class Divisao extends calculo_1.default {
    calcular(n1, n2) {
        return n1 / n2;
    }
}
exports.default = Divisao;
