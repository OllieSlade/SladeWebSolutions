import Product from '../blocks/product';

export default function pricing() {
    return  (
            <section className="container mx-auto px-5 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    <Product option={1} />
                    <Product option={2} />
                    <Product option={3} />
                </div>
            </section>
    )
}