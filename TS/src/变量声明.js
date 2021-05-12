var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// ts全局中已经声明了 name 变量无法再次声明，也无法访问
var sname = 'John';
var list = [1, 2, 3,];
var list1 = [2, 3, 4];
// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//console.log(Color);//{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
var notSure = 4.00;
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() {
    // console.log("This is my warning message");
}
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue = "this is a string";
var strLength = someValue.length;
// 另一个为as语法：
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;
