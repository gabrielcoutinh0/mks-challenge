export function currencyFormat(num: number) {
  return (
    "R$" +
    Number(num)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  );
}
