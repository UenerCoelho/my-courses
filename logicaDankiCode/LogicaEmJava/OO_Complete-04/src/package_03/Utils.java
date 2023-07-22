package package_03;

public class Utils {

  
  public int age = 38;
  public double weight = 97.8;
  public float weight2 = 97.8f;
  public String name = "Uener";

  // Só pode ser utilizado dentro da própria classe ou da classe Herdada
  protected String name2 = "Nome 2";

  public Utils(double weight, String name) {
    this.name = name;
    this.weight = weight;
    // System.out.println(this.name);
    // System.out.println(name);
  }
  
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
