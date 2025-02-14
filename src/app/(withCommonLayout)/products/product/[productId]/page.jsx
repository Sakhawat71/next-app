// 'use client'

const DynamicProductPage = async ({ params, searchParams }) => {

    const productId = await params?.productId;
    console.log(await searchParams);

    return (
        <div>
            <h3>This is Dynamic Page for {productId}</h3>
        </div>
    );
};

export default DynamicProductPage;