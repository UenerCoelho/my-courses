public class Main {
  public Main(){
    new Privada();
  }

  // Classe privada, somente para main, não pode ser instanciada de fora, somente pode ser utilizada em Main
  class Privada {

  }
}

class Publica{
  // Está uma classe publica que pode ser instanciada de fora do Main
}