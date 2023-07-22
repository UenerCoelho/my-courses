import package_02.Utils;

public class Heranca extends Utils{
  public Heranca(double weight, String name) {
    super(weight, name);
    //TODO Auto-generated constructor stub
  }

  public static void main(String[] args){
    Heranca heranca = new Heranca(19.0, "Joao");
    heranca.printHelloWorld();
  }
}
