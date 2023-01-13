import ProductCategory from "./ProductCategory";

export default function ProductTable({ products, showStocked, filterSearch }) {
  const refinedProducts = [];

  const productsToDisplay = products.filter((item) => 
    filteredList(item, filterSearch)
  );

  function filteredList(item, filterSearch) {
    const length = filterSearch.length;
    return item.name.slice(0, length).toLowerCase() === filterSearch.toLowerCase();
  }

  function findCategory(item, refinedProducts) {
    return refinedProducts.findIndex(
      (refinedObj) =>
        refinedObj.category.toLowerCase() === item.category.toLowerCase()
    );
  }

  productsToDisplay.forEach((item) => {
    const indexOfItem = findCategory(item, refinedProducts);
    if (indexOfItem === -1) {
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

      refinedProducts[indexOfItem].category = titleCase(
        refinedProducts[indexOfItem].category
      );
      refinedProducts[indexOfItem]["list"].push(refinedItemList);
    }
  });

  const groupedItems = refinedProducts.map((item, myKey) => {
    return (
      <ProductCategory item={item} key={myKey} showStocked={showStocked} />
    );
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
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
