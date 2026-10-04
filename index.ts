// Divider in index.ts below Activity 1:
//===================================================================
// ACTIVITY 2 (wrapped in a block so names don't clash with Activity 1)
{
  // Part 1: Variables and Types
  // 1.
  const itemName: string = "Burger";
  const price: number = 150;
  const quantity: number = 2;

  // 2.
  const total = price * quantity;
  console.log(`Total: ₱${total}`);

  // 3. Rejected: "two" is a string, but quantity is typed as number.
  // let qty: number = 2;
  // qty = "two"; // Error: Type 'string' is not assignable to type 'number'

  // 4.
  const menu: string[] = ["Burger", "Fries", "Juice"];
  const item: { name: string; price: number } = { name: itemName, price };

  // 5.
  let discount: number | null = null;

  // Part 2: Conditionals
  const isStudent = true;

  // 1.
  if (isStudent) discount = total * 0.1;
  console.log("Discount:", discount);

  // 2.
  if (total < 100) console.log("Small order");
  else if (total < 300) console.log("Regular order");
  else console.log("Big order");

  // 3.
  discount = isStudent ? total * 0.1 : null;

  // Part 3: Loops
  const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 },
  ];

  // 1.
  for (const c of cart) console.log(`${c.name} - ₱${c.price}`);

  // 2.
  let subtotal = 0;
  for (const c of cart) subtotal += c.price * c.qty;
  console.log(`Subtotal: ₱${subtotal}`);

  // 3.
  let n = 5;
  while (n >= 1) {
    console.log(n);
    n--;
  }

  // Part 4: Functions
  type CartItem = { name: string; price: number; qty: number };

  // 1.
  function getLineTotal(price: number, qty: number): number {
    return price * qty;
  }

  // 2.
  function applyDiscount(total: number, isStudent: boolean): number {
    return isStudent ? total * 0.9 : total;
  }

  // 3.
  function getCartTotal(cart: CartItem[]): number {
    return cart.reduce((sum, c) => sum + getLineTotal(c.price, c.qty), 0);
  }

  // 4.
  function printReceipt(customer: string, cart: CartItem[], isStudent: boolean): void {
    console.log(`Receipt for ${customer}`);
    for (const c of cart) {
      console.log(`${c.name} x${c.qty} - ₱${getLineTotal(c.price, c.qty)}`);
    }
    const sub = getCartTotal(cart);
    const final = applyDiscount(sub, isStudent);
    console.log(`Subtotal: ₱${sub}`);
    console.log(`Discount: ₱${sub - final}`);
    console.log(`Final Total: ₱${final}`);
  }

  printReceipt("Angelo", cart, true);
}