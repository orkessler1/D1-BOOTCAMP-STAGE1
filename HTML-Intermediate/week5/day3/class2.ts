interface Employee {
  readonly id: number;
  name: string;
  email?: string;

  getSalary(): number;
}

class BaseEmployee implements Employee {
  protected baseSalary: number;

  constructor(
    public readonly id: number,
    public name: string,
    protected position: string,
    salary: number
  ) {
    this.baseSalary = salary;
  }

  getSalary(): number {
    return this.baseSalary;
  }

  describe() {
    console.log(`${this.name} works as ${this.position}`);
  }
}

class Manager extends BaseEmployee {
  private bonus: number;

  constructor(
    id: number,
    name: string,
    salary: number,
    bonus: number
  ) {
    super(id, name, "Manager", salary);
    this.bonus = bonus;
  }

  getSalary(): number {
    return this.baseSalary + this.bonus; // override
  }
}

//
// 🔥 כאן שאתה שם את ה־Company !!!
//
class Company {
  static employees: BaseEmployee[] = [];

  static addEmployee(emp: BaseEmployee) {
    this.employees.push(emp);
  }

  static printAll() {
    console.log("Company Employees:");
    for (const emp of this.employees) {
      emp.describe();
    }
  }
}

//
// 🔥 כאן הקוד שרץ
//
const e1 = new BaseEmployee(1, "Dan", "Developer", 8000);
const e2 = new Manager(2, "Sara", 10000, 3000);

Company.addEmployee(e1);
Company.addEmployee(e2);

Company.printAll();

console.log(e2.getSalary()); // 13000
