import ProductRow from "./ProductRow";

export default function ProductCategory({ item, myKey, showStocked }) {
  const productRow = item.list.map((item, index) => {
    return <ProductRow item={item} key={index} showStocked={showStocked}/>;
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