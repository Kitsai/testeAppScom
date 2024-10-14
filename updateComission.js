function updateRelatoria() {
  let cards = document.querySelectorAll('CardView-relatoria');
  let comissao = apex.item("P2_COMISSAO");

  cards.forEach((element) => {
    console.log(element.innerHTML);
  })
}
