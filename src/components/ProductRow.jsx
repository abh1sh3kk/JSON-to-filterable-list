export default function ProductRow({ item, myKey}) {
	const tdStyle = item.stocked ? {} : {color: "#af0000"};
  return (
    <tr key={myKey}>
      <td style={tdStyle}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}