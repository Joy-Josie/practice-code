let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
// ts全局中已经声明了 name 变量无法再次声明，也无法访问
let sname: string = 'John';
let list: number[] = [1,2,3,];
let list1: Array<number> = [2,3,4];
// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let x: [string, number];
x = ['hello', 10];
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
//console.log(Color);//{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
let notSure: any = 4.00;
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
  // console.log("This is my warning message");
}
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 另一个为as语法：
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;