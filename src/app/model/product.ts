export class Product {
    id: number;
    catId: number;
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    active: boolean;
    action: boolean;

    constructor(properties?: Product) {
        if (properties) {
            this.id = properties.id || 0;
            this.catId = properties.catId || 0;
            this.title = properties.title || '';
            this.author = properties.author || '';
            this.description = properties.description || '';
            this.image = properties.image || '';
            this.price = properties.price || 0;
            this.stock = properties.stock || 0;
            this.featured = properties.featured || false;
            this.active = properties.active || false;
            this.action = properties.action || false;
        }
    }
}
