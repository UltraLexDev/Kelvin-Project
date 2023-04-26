// Kelvin
const kelvin = 293;

// Conversion
var celsius = (kelvin - 273);

// Fahrenheit floor
var fahrenheit = Math.floor((celsius) * (9/5) + 32)

// Newton floor
var newton = Math.floor((celsius) * (33/100))

// Interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)
