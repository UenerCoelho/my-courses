package package_01;

public class Utils {

  
  public int age = 38;
  public double weight = 97.8;
  public float weight2 = 97.8f;
  public String name = "Uener";

  // Class Public (Global Class)
  public void printHelloWorld() {
    this.privateClass();
  }

  public int getAge() {
    return age;
  }

  // Private Class (Local Class)
  private void privateClass() {
    System.out.println("Classe Privada");
  }
}
