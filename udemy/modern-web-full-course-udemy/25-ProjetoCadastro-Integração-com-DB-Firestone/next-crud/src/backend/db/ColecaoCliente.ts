  import firebase from "../config";
  import Cliente from "../../core/Cliente";
  import ClienteRepositorio from "../../core/ClienteRepositorio";

  // Classe que implementa a interface ClienteRepositorio para gerenciar clientes no Firestore
  export default class ColecaoCliente implements ClienteRepositorio {

      // Conversor para transformar dados entre Cliente e Firestore
      #conversor = {
          // Converte um Cliente para formato do Firestore
          toFirestore(cliente: Cliente) {
              return {
                  nome: cliente.nome,
                  idade: cliente.idade,
              }
          },
          // Converte dados do Firestore para Cliente
          fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
              const dados = snapshot.data(options)
              return new Cliente(dados.nome, dados.idade, snapshot.id)
          }
      }

      // Salva ou atualiza um cliente
      async salvar(cliente: Cliente): Promise<Cliente> {
          if(cliente?.id) {
              // Se tem ID, atualiza cliente existente
              await this.colecao().doc(cliente.id).set(cliente)
              return cliente
          } else {
              // Se não tem ID, cria novo cliente
              const docRef = await this.colecao().add(cliente)
              const doc = await docRef.get()
              return doc.data()
          }
      }

      // Exclui um cliente
      async excluir(cliente: Cliente): Promise<void> {
          return this.colecao().doc(cliente.id).delete()
      }

      // Obtém todos os clientes
      async obterTodos(): Promise<Cliente[]> {
          const query = await this.colecao().get()
          return query.docs.map(doc => doc.data()) ?? []
      }

      // Método auxiliar para acessar a coleção no Firestore
      private colecao() {
          return firebase
              .firestore().collection('clientes')
              .withConverter(this.#conversor)
      }
  }
