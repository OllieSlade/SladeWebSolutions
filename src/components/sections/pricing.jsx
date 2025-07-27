import Product from '../blocks/Product';

export default function pricing() {
    return  (
            <section class="container mx-auto px-5 mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    <Product option={1} />
                    <Product option={2} />
                    <Product option={3} />
                </div>
            </section>
    )
}