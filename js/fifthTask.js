const countTotalSalary = function(employees) {
    'use strict';
    let summ = 0;
    // Write code under this line
    for (let item in employees){
    summ += employees[item];
    }
    return summ
  };
  
  // Объекты и ожидаемый результат
  const developers = {
      mango: 300,
      poly: 250,
      alfred: 450,
  };
  console.log(countTotalSalary(developers));
  // 1000
  
  const supports = {
    kiwi: 200,
    lux: 150,
    chelsy: 150,
  }
  console.log(countTotalSalary(supports));
  // 500
  