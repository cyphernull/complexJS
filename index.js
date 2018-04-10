class Complex {
  constructor(real, imaginary) {
    this.real = real
    this.imag = imaginary
  }
  mathForm() {
    return this.real + ' + ' + this.imag + 'i'
  }
  plus(cpx) {
    const realPart = this.real + cpx.real
    const imagPart = this.imag + cpx.imag
    return new Complex(realPart, imagPart)
  }
  minus(cpx) {
    const realPart = this.real - cpx.real
    const imagPart = this.imag - cpx.imag
    return new Complex(realPart, imagPart)
  }
  times(cpx) {
    const realPart = this.real * cpx.real - this.imag * cpx.imag
    const imagPart = this.imag * cpx.real + this.real * cpx.imag
    return new Complex(realPart, imagPart)
  }
  divide(cpx) {
    const realPart = (this.real * cpx.real + this.imag * cpx.imag) / (Math.pow(cpx.real, 2) + Math.pow(cpx.imag, 2))
    const imagPart = (this.imag * cpx.real - this.real * cpx.imag) / (Math.pow(cpx.real, 2) + Math.pow(cpx.imag, 2))
    return new Complex(realPart, imagPart)
  }
  toConj() {
    return new Complex(this.real, -this.imag)
  }
  toAbs() {
    return Math.pow(Math.pow(this.real, 2) + Math.pow(this.imag, 2), 0.5)
  }
}
module.exports = Complex
