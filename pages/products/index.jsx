import Header from "../../components/Header";

function Products({ products }) {
  //   console.log(Header);
  return (
    <div>
      {/* <h1>List of products</h1> */}
      <Header text="List of products" />
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const respons = await fetch("http://localhost:4000/products");

  console.log("respons >>", respons);
  console.log("--------------------------------------------");
  const data = await respons.json();

  return {
    props: {
      products: data,
    },
  };
}
