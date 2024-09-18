import java.util.concurrent.ThreadLocalRandom;

public class ExemploWhile {
  public static void main(String[] args) {
    double cadeirada = 50.0;

    while (cadeirada > 0) {
      Double valorDoce = valorAleatorio();
      if (valorDoce > cadeirada)
        valorDoce = cadeirada;

      System.out.println("Doce do valor: " + valorDoce + " Adicionado no carrinho.");
      cadeirada = cadeirada - valorDoce;
    }

    System.out.println("Cadeirada " + cadeirada);
    System.out.println("Marçal gastou toda cadeirada que levou do Datena em doces!");
  }

  private static double valorAleatorio() {
    return ThreadLocalRandom.current().nextDouble(2, 8);
  }
}
