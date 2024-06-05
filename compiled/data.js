import { Tools } from './main.js';
import data from './data.json' assert { type: 'json' };
const linearRegression = new Tools.LinearRegression(data, 7653);
console.log(linearRegression.SimpleLinearRegression);
