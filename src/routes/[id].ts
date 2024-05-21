// src/routes/products/[id].js or .ts if you're using TypeScript

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch, params }) {
    // Assuming the ID of the product is part of the route parameter
    const response = await fetch(`https://cs4-test.shop.ciss.dev/api/ciss/u/v1/products/${params.id}`);
    if (!response.ok) {
        return { status: response.status, error: new Error("Failed to fetch product details") };
    }
    const product = await response.json();
    return { props: { product } };
}
