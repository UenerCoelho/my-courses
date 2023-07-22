import package_03.Utils;

public class Heranca extends Utils{
  public Heranca(double weight, String name) {
    super(weight, name);
    System.out.println(name2);
    //TODO Auto-generated constructor stub
  }

  public static void main(String[] args){
    Heranca heranca = new Heranca(19.0, "Joao");
    heranca.printHelloWorld();
  }
}
