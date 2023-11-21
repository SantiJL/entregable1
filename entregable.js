class ProductManager {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		const existingProduct = this.products.find(
			(p) => p.code === product.code
		);
		if (existingProduct) {
			console.error('El codigo ya existe por favor verifique');
			return;
		}

		if (!product.title || !product.code || !product.price || !product.thumbnail || !product.stock || !product.description) {
			console.error('Todos los campos son obligatorios');
			return;
		}

		const newProduct = { ...product, id: this.products.length + 1 };
		this.products.push(newProduct);
	}

	getProducts() {
		return this.products;
	}

	getProductById(id) {
		const product = this.products.find((p) => p.id === id);
		if (!product) {
			console.error('no existe el producto solicitado');
			return;
		}
		return product;
	}
}

let myFirstProducts = new ProductManager();

myFirstProducts.addProduct({
   title: "producto prueba",
   description: "Este es un producto de prueba",
   price: 200,
   thumbnail: "sin imagen",
   code: "abc123",
   stock: 25
});

console.log("desde getProducts", myFirstProducts.products)

module.exports = ProductManager;
