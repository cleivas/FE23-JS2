let variable: number|string;

variable = 23;
variable = 'hej';
variable = true;

let numVar = 34;
numVar = 'hej';

console.log(variable, numVar);

let hundreds: 100|200|300|400;
hundreds = 100;
hundreds = 4;

type Hundreds = 100|200|300|400;

let hundreds2: Hundreds;
hundreds2 = 200;
hundreds2 = 76;

// Scrumboard
type Status = 'to do'|'in progress'|'done';
type Category = 'ux' | 'web backend' | 'web frontend';
type Task = {
    task: string,
    category: Category,
    status: Status,
    assigned: string | undefined
}

const obj: Task = {
    task: 'fixa allt',
    status: 'done',
    category: 'ux',
    assigned: 'Clara'
}

interface Comment{
    title: string,
    body: string,
}