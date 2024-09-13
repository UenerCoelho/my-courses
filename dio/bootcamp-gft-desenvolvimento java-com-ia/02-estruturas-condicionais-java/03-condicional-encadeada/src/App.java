public class App {
    public static void main(String[] args) throws Exception {
        double nota = 5.5;

        if (nota >= 7) 
            System.out.println("Aprovado!");
        else if (nota>=5 && nota < 7)
            System.out.println("Recuperação!");
        else
            System.out.println("Reprovado!");
    }
}
