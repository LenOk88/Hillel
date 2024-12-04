
const company = {
    sales: [
        {name: 'Jhon', salary: 1000},
        {name: 'Alice', salary: 600},
        {name: 'Bob', salary: 1200}
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [ 
            { name: 'Jack', salary: 1300 } 
        ]
    }
}

function totalSales(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += totalSales(subdep);
      }
      return sum;
    }
  }

    const total = totalSales(company);
    console.log(total);