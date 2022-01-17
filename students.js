class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.classes = ["setp-2021"]
    this.grade = 100
  }

  deductGrade(score) {
    this.grade -= score
  }

  addGrade(score) {
    this.grade += score
  }

  addCourse(course) {
    this.classes.push(course)
  }

  withdraw(course) {
    this.classes = this.classes.filter(e => e !== course)
  }
}

