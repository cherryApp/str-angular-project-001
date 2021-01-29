export class Product {
    id: number = 0;
    catId: string = '';
    name: string = '';
    description: string = '';
    image: string = '';
    price: string = '';
    stock: number = 0;
    featured: boolean = false;
    active: boolean = true;

    constructor(properties?: Product) {
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || '';
            this.name = properties.name || '';
            this.description = properties.description || '';
            this.image = properties.image || '';
            this.price = properties.price || '';
            this.stock = properties.stock || 0;
            this.featured = properties.featured || false;
            this.active = properties.active || true;
        }
    }
}
