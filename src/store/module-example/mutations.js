export function someMutation (state, data) {
  state.isLoggedIn = data
}
export function AlterarValorFoto (state, alterarValor) {
  state.userPhotoUrl = alterarValor
}
export function AlterarValorOpcaoSelecionada (state, alterarValorSelecionado) {
  state.opcaoSelecionada = alterarValorSelecionado
  console.log('passou no selecionado')
  console.log(AlterarValorOpcaoSelecionada)
}
export function AlterarValorOpcaoGravada (state, alterarValorGravado) {
  state.opcaoGravada = alterarValorGravado
  console.log('passou no gravado')
}
