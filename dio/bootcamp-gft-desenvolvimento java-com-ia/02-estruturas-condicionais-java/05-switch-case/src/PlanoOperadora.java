public class PlanoOperadora {
  public static void main(String[] args) {
    String plano = "T";

    // Com IF e ELSE
    // if (plano == "B") {
    // System.out.println("Plano Básico com 100 minutos de ligação!");
    // } else if (plano == "M") {
    // System.out.println("Plano Mediano com 100 minutos de ligação!");
    // System.out.println("Com Whats e Instagram sem limites");
    // } else if (plano == "T") {
    // System.out.println("Plano Total Max com 100 minutos de ligação!");
    // System.out.println("Com Whats e Instagram sem limites");
    // System.out.println("Mais 5Gb de Youtube");
    // }

    switch (plano) {
      case "T": {
        System.out.println("5Gb de Youtube");
      }
      case "M": {
        System.out.println("Whats e Instagram ilimitados");
      }
      case "B": {
        System.out.println("Plano com 100 minutos de ligação");
      }
    }
  }
}