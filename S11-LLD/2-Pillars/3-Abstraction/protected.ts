class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected getDetails(): string {
    return `Name: ${this.name}`
  }
}


class Employee extends Person {
  private role: string;

  constructor(name: string, role: string) {
    super(name);
    this.role = role;
  }

  public displayInfo(): void {
    console.log(this.getDetails() + `, Role: ${this.role} Name: ${this.name}`);
  }
}

const emp: Employee = new Employee("John Doe", "Developer");
console.log(emp.name);

console.log(emp.displayInfo());






