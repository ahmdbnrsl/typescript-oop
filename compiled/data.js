import { Tools } from './main.js';
import data from './data.json' assert { type: 'json' };
const linearRegression = new Tools.LinearRegression(data, 10);
console.log(linearRegression.SimpleLinearRegression);
