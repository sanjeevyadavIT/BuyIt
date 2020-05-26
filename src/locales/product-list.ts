// #region ProductList

export const totalAmount = (totalAmount: number): string =>
  `Total Amount: ${totalAmount}`;

export const totalQtd = (totalQtd: number): string => `Total Qtd: ${totalQtd}`;

// #endregion

// #region NewProduct

export const name = `Nome`;
export const amount = `Valor`;
export const qtd = `Quantidade`;
export const add = 'Adicionar'
export const qtdDefault = (value: number) => `Default: ${value}`;
export const whatWant = "O que deseja?"
export const whatWantDo = "O que deseja fazer?"
export const editItem = 'Editar';
export const deleteItem = 'Apagar';

// #endregion


export const errors = {
  insertValidName: 'Insira o nome válido',
  insertValidAmount: "Insira um valor válido"
}
