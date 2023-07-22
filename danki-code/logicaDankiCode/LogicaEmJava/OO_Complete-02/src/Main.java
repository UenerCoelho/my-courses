import package_01.Utils;

  public class Main {
    public static void main(String[] args) {

      // Instanciamento (Representação) armazenando dentro de Objeto.
      Utils util = new Utils();
      util.printHelloWorld();

      // Instanciamento sem armazenar dentro de um Objeto.
      System.out.println(new Utils().getAge());
    }  
  }