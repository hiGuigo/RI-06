export default class Bhaskara {
    calcular(a: number, b: number, c: number) {
        const delta = b ** 2 - 4 * a * c

        if (delta < 0) return null

        return {
            delta,
            x1: (-b + Math.sqrt(delta)) / (2 * a),
            x2: (-b - Math.sqrt(delta)) / (2 * a)
        }
    }

}