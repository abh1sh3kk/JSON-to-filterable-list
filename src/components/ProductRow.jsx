export default function ProductRow({ item, myKey }) {
  
  const redForUnstocked = item.stocked ? {} : { color: "#af0000" };

  return (
    <tr key={myKey}>
      <td style={redForUnstocked}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}
