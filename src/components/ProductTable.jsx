import ProductCategory from "./ProductCategory";

export default function ProductTable({ products, showStocked, filterSearch }) {
  const refinedProducts = [];

  // Filters list according to serachbar
  const searchFilteredProducts = products.filter((item) =>
    filteredList(item, filterSearch)
  );

  // Filters list to show or hide stocked items
  let filteredProductList = [...searchFilteredProducts];
  if (!showStocked)
    filteredProductList = searchFilteredProducts.filter((item) => item.stocked);

  function findCategory(item, refinedProducts) {
    return refinedProducts.findIndex(
      (refinedObj) =>
        refinedObj.category.toLowerCase() === item.category.toLowerCase()
    );
  }

  function filteredList(item, filterSearch) {
    const length = filterSearch.length;
    return (
      item.name.slice(0, length).toLowerCase() === filterSearch.toLowerCase()
    );
  }

  filteredProductList.forEach((item) => {
    const indexInRefined = findCategory(item, refinedProducts);

    if (indexInRefined === -1) {
      const wholeCategory = {
        category: titleCase(item.category),
        list: [
          {
            name: item.name,
            price: item.price,
            stocked: item.stocked,
          },
        ],
      };

      refinedProducts.push(wholeCategory);
    } else {
	
      const refinedItemList = {
        price: item.price,
        name: item.name,
        stocked: item.stocked,
      };

      refinedProducts[indexInRefined].category = titleCase(
        refinedProducts[indexInRefined].category
      );
      refinedProducts[indexInRefined]["list"].push(refinedItemList);
    }
  });

  const groupedItems = refinedProducts.map((item, myKey) => {
    return <ProductCategory item={item} key={myKey} />;
  });

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {groupedItems}
    </table>
  );
}

function titleCase(str) {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}
