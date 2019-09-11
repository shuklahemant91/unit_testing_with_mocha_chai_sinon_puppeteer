//const assert = require('chai').assert;
//const expect = require('chai').expect;
// const sayHello = require('../app');

import {assert} from 'chai';
import {expect} from 'chai';

import axios from 'axios';
import puppeteer from 'puppeteer';
import products from  '../src/products';
import Calculator from  '../src/calculator';
import sinon from 'sinon';

import  sahHello  from  '../app';




describe("App", function () {
	it('app should return hello', () => {
		assert.equal(sahHello(), "Hello")
	})
})


describe("Calculator", function () {
	const calc = new Calculator();


	it('app should return the addition', () => {
		assert.equal(calc.sum(3,5), 8)
	});

	it('app should the multiplication or exception', () => {
		//assert.equal(calc.sum(3,5), 8)
	  expect(function() {
        calc.multiplicationWithExceptionHandling(3,"ssaas")
      }).to.throw(TypeError, 'multiplication expects only numbers.')
	});


	it('app should the multiplication', () => {
		expect(calc.multiplicationWithExceptionHandling(3,10)).to.eql(30)
	});
	
})


describe("Making stub for ajax call", function(){
  it('should call callback after saving', function() {
  	
  	
    var post = sinon.stub(axios, 'get');
    var product = new products();
    post.yields();

    var callback = sinon.spy();

    product.saveProduct({ name: 'New Product', summary: 'New Product sumary' }, callback);

    post.restore();
    sinon.assert.calledOnce(callback);




// //Create a spy for the setName function
// var setNameSpy = sinon.spy(user, 'setName');

// //Now, any time we call the function, the spy logs information about it
// user.setName('Darth Vader');

// //Which we can see by looking at the spy object
// console.log(setNameSpy.callCount); //output: 1

// //Important final step - remove the spy
// setNameSpy.restore();



  });
})



// describe("Puppeteer", function () {




// 	it('app shoukd return same html', async  () => {
// 		  const browser = await puppeteer.launch({headless: true});
// 		  const page = await browser.newPage();
// 		  await page.goto("http://localhost/mochatest/");
// 		  const html = await page.content(); // serialized HTML of page DOM.
// 		  //console.log(html);
// 		  const container_SELECTOR = '#container';
// 	      let heading;
// 	      await page.waitFor(container_SELECTOR);
// 	      heading = await page.$eval(container_SELECTOR, heading => heading.innerHTML);
// 	      //console.log(heading)
// 	      expect(heading).to.eql('<table border="1"><tbody><tr><td>1</td><td>Product 1</td><td>Product summary</td></tr><tr><td>2</td><td>Product 2</td><td>Product summary</td></tr><tr><td>3</td><td>Product 3</td><td>Product summary</td></tr><tr><td>4</td><td>Product 4</td><td>Product summary</td></tr><tr><td>5</td><td>Product 5</td><td>Product summary</td></tr></tbody></table>');
// 		  await browser.close();
// 	})



// 	it('app shoukd return the number of products', async  () => {
// 		  const browser = await puppeteer.launch({headless: true});
// 		  const page = await browser.newPage();
// 		  await page.goto("http://localhost/mochatest/");
// 		  const html = await page.content(); // serialized HTML of page DOM.
// 		  //console.log(html);
// 		  const container_SELECTOR = '#refreshAnchor';
// 	      let heading;
// 	      await page.waitFor(container_SELECTOR);
// 	      heading = await page.$eval(container_SELECTOR, heading => heading.getAttribute('href'));
// 	      expect(heading).to.eql('refresh()');
// 		  await browser.close();
// 	})


// })









