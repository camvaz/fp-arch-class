const {List} = require("immutable-ext");
const _ = require("lodash")

const Product= x => {
  return {
    x,
    concat: other => 
    Product(x*other.x)
  }}
Product.empty = () => Product(1) 

const Sum = x => {
  return {
    x,
    concat: other => 
    Sum(x+other.x)
  }}
Sum.empty = () => Sum(1)

const Any = x => ({
  x,
  concat: other =>
    Any(x || other.x)
}) 
Any.empty = () => Any(false)

const All = x => ({
  x,
  concat: other =>
    All(x && other.x)
}) 
All.empty = () => All(true)

const Intersection = () => ({
  x,
  concat: other => Intersection(_.intersection(x,other.x))
})

Intersection([1,2,3,4]).concat(Intersection(1,2,3));

//const res = Product.empty().concat(Product(10));
const res = List([1,2,3,4,5]).foldMap(Sum, Sum.empty());

console.log(res);
