// Iteration
 //Example 01

 let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
  ];
  
  //let totalSales = salesData.reduce((acc, sale) => 0 + sale.price, 0); // wrong
  let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
   console.log(totalSales);
  



   //Piping, Chaining 
    //Example 02
    
  // Items less than 50

  let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
  ];
  
  let lowStockItems = inventory.filter((item) => {
    return item.stock < 50;
  });
  // console.log(lowStockItems);
  


  //Example 03

  let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 12 },
    { user: "Charlie", activityCount: 33 },
  ];
  // find most active user
  
  let mostActiveUser = userActivity.reduce((maxUser, user) =>
    user.activityCount > maxUser.activityCount ? user : maxUser
  );
  console.log(mostActiveUser);

