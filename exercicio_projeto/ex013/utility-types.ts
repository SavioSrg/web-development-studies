import { Product } from "./produto";

// Exemplo com Partial
const productAllOptional: Partial<Product> = {
    unitValue: 20
};

// Exemplo com Required
const productAllRequired: Required<Product> = {
    name: "Notebook",
    amountInStock: 50,
    unitValue: 3000
};

// Exemplo com Omit
const productOnlyNameAndValue: Omit<Product, "amountInStock"> = {
    name: "Notebook",
    unitValue: 3000
};

// Exemplo com Readonly
const readonlyProduct: Readonly<Product> = {
    name: "Smartphone",
    amountInStock: 100,
    unitValue: 1500
};
// readonlyProduct.name = "Tablet"; // Erro: Não é possível atribuir a 'name' porque é somente leitura.

// Exemplo com Pick
const pickedProduct: Pick<Product, "name" | "unitValue"> = {
    name: "Mouse",
    unitValue: 100
};
