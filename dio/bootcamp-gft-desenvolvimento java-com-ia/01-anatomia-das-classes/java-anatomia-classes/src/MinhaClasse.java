public class MinhaClasse {
  public static void main(String[] args) {

    // Declarando Variáveis
    final String BR = "Brasil";
    System.out.println("Minha Primeira Classe no " + BR);

    final double PI = 3.14;
    final int ESTADOS_BRASILEIROS = 27;
    final int ANO_2024 = 2024;

    System.out.println("Valor pi é: " + PI);
    System.out.println("Quantos Estados tem o Brasil? R.: " +
        ESTADOS_BRASILEIROS);
    System.out.println("Em que ano estamos? R.: " + ANO_2024);

    String meuNome = "Uener";
    int anoFabricado = 1984;
    boolean validação = true;
    // String resposta;
    // if (verdadeira = true) {
    // resposta = verdadeiro;
    // } else {
    // validação = falso;
    // }

    System.out.println("Meu nome é " + meuNome + " Nascido no ano de " +
        anoFabricado + " Isto é " + validação);

    String primeiroNome = "Uener";
    String segundoNome = "Coelho";

    String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);

    System.out.println(nomeCompleto);

  }

  // Declarando Metodos
  public static String nomeCompleto(String primeiroNome, String segundoNome) {
    return primeiroNome.concat(" ").concat(segundoNome);
  };
}
