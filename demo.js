const person = [
  {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  },
  {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  }
]
  
  Object.defineProperty(person,'Year',{value:[{value: '2003'},{value: '2003'}], enumerable:true, configurable:true, writable: true})

  console.log(Object.getOwnPropertyNames(person))
  console.log(Object.getOwnPropertyDescriptor(person, 'Year'))
  
  // console.log(Object.values(person))
  console.log(person)
  