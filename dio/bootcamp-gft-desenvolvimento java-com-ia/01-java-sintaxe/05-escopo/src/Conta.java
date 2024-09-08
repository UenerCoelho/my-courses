public class Conta {
  // Variavel de escopo Classe conta
  double saldo = 10.0;

  public void sacar(Double valor) {
    // Variável local do método sacar
    double novoSaldo = saldo - valor;
  }

  public void imprimirSaldo() {
    // Disponpínel em toda a classe
    System.out.println(saldo);
    // somente o método sacar conhece esta variável
    System.out.println(novoSaldo);
  }

  public double calcularDividaExponencial() {
    // variável local de método
    double valorParcela = 50.0;
    double valorMontante = 0.0;
    for (int x = 1; x <= 5; x++) { // x é cariável de escopo bloco
      // Esta variável será reiniciada a cada execução
      double valorCalculado = valorParcela + x;
      valorMontante = valorMontante + valorCalculado;
    }
    // Escopo de fluxo
    // x e valorCalculado nunca estarão disponíveis
    return valorMontante;
  }
}
