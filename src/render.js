import products from  './products';
var productsArr  = [{
		"id": 1,
		"name": "Product 1",
		"summary": "Product summary"
	},{
		"id": 2,
		"name": "Product 2",
		"summary": "Product summary"
	},{
		"id": 3,
		"name": "Product 3",
		"summary": "Product summary"
	},{
		"id": 4,
		"name": "Product 4",
		"summary": "Product summary"
	},{
		"id": 5,
		"name": "Product 5",
		"summary": "Product summary"
	}];
var x = new products(productsArr);
document.getElementById("container").innerHTML =  x.renderProducts();
