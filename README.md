# complexJS

complex computation in JS

## How To Use

### import

```
const Complex = require('cplxjs')
```

### create a complex

```
const cpx1 = new Complex(4, 3)
```

### mathform

```
console.log(cpx.mathForm()) // 4 + 3i
```

### complex plus

```
const cpx2 = new Complex(6, 8)
console.log(cpx1.plus(cpx2).mathForm()) // 10 + 11i
```

### complex minus

```
console.log(cpx1.minus(cpx2).mathForm()) // -2 + -5i
```

### complex mutiply

```
console.log(cpx1.times(cpx2).mathForm()) // 0 + 50i
```

### complex divide

```
console.log(cpx1.divide(cpx2).mathForm()) // 0.48 + -0.14i
```

### abs

```
console.log(cpx1.toAbs()) // 5
```

### conjugate

```
console.log(cpx1.toConj().mathForm()) // 4 + -3i
```
