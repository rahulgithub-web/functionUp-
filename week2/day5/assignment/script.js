// Q.) How to convert two arrays in a single object in javascript using:
// 1.) forEach method
// 2.) for-loop method
const carCompanies = ["Tata", "Maruti", "Hyundai", "Mahindra"];
const carModels = ["Nano", "Alto", "i10", "kuv"];
// --------------------------------------------------  

// 1.) using forEach method:
let result = {};
carCompanies.forEach((key, i) => (result[key] = carModels[i]));
console.log(result);
// output: { Tata: 'Nano', Maruti: 'Alto', Hyundai: 'i10', Mahindra: 'kuv' }

// 2.) using for-loop method:
let obj = {};
for (var i = 0; i < carCompanies.length; i++) {
  obj[carCompanies[i]] = carModels[i];
}
console.log(obj);
// output: { Tata: 'Nano', Maruti: 'Alto', Hyundai: 'i10', Mahindra: 'kuv' }
