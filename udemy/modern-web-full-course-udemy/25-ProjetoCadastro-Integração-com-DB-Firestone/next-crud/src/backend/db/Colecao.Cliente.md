# Documentação ColecaoCliente.ts

## Visão Geral

O arquivo `ColecaoCliente.ts` é responsável por implementar a interface entre a aplicação e o banco de dados Firestore para a entidade Cliente. Ele fornece métodos para realizar operações CRUD (Create, Read, Update, Delete) na coleção de clientes.

## Estrutura da Classe

### Classe ColecaoCliente

```js
export default class ColecaoCliente {
    private conversor: FirestoreConverter
    private colecao: CollectionReference

    constructor() {
        this.conversor = {
            toFirestore(cliente: Cliente): DocumentData {
                return {
                    nome: cliente.nome,
                    idade: cliente.idade,
                    id: cliente.id
                }
            },
            fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
                const dados = snapshot.data(options)
                return new Cliente(dados.nome, dados.idade, snapshot.id)
            }
        }
        this.colecao = db.collection('clientes').withConverter(this.conversor)
    }
}
```

## Métodos Principais

### constructor()

- Inicializa a conexão com o Firestore
- Configura o conversor de dados
- Define a referência para a coleção 'clientes'

### async salvar(cliente: Cliente): Promise<Cliente>

```js
async salvar(cliente: Cliente): Promise<Cliente> {
    if(cliente?.id) {
        await this.colecao.doc(cliente.id).set(cliente)
        return cliente
    } else {
        const docRef = await this.colecao.add(cliente)
        const doc = await docRef.get()
        return doc.data()
    }
}
```

### async excluir(cliente: Cliente): Promise<void>

```js
async excluir(cliente: Cliente): Promise<void> {
    return this.colecao.doc(cliente.id).delete()
}
```

### async obterTodos(): Promise<Cliente[]>

```js
async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao.get()
    return query.docs.map(doc => doc.data()) ?? []
}
```

## Conversor de Dados

O conversor implementa a interface `FirestoreDataConverter` e é responsável por:

- Converter dados do Firestore para objetos Cliente
- Converter objetos Cliente para formato do Firestore

## Uso

```js
const colecao = new ColecaoCliente()

// Salvar cliente
await colecao.salvar(cliente)

// Obter todos
const clientes = await colecao.obterTodos()

// Excluir cliente
await colecao.excluir(cliente)
```
