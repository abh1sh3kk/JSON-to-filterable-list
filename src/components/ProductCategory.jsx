import ProductRow from "./ProductRow";

export default function ProductCategory({ item}) {
  const productRow = item.list.map((item, index) => {
    return <ProductRow item={item} key={index} />;
  });

  return (
    <tbody>
      <tr>
        <th colSpan="2">{item.category}</th>
      </tr>

      {productRow}
    </tbody>
  );
}
