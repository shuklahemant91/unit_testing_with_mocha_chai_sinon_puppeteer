import axios from 'axios';
class products {
	constructor(obj){
		this.products = obj;
	}
	renderProducts(){
		let html = '<table border="1">'

		for(var i=0;i< this.products.length; i++){
			html+= '<tr><td>' + this.products[i].id +'</td>' +'<td>'+ this.products[i].name  +'</td>' + '<td>'+ this.products[i].summary +'</td></tr>'
		}
		html+= '</table>';
		return html
	}
	saveProduct(product, callback){
			  axios.get('/saveProducts?name=' + product.name + '&summary='+ product.summary,callback)
	}
}
export default products;