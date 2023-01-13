export default function ProductRow({ item, myKey, showStocked}) {
	if (!showStocked && !item.stocked) return;
	const tdStyle = item.stocked ? {} : {color: "#af0000"};
  return (
    <tr key={myKey}>
      <td style={tdStyle}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}