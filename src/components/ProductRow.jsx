export default function ProductRow({ item, myKey }) {

  const redForUnstocked = item.stocked ? {} : { color: "rgb(255 193 0)"};

  return (
    <tr key={myKey}>
      <td style={redForUnstocked}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}
