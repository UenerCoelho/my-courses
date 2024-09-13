public class App {
    public static void main(String[] args) throws Exception {
        double nota = 6.9;
        String resultado = nota >= 7 ? "Aprovado!" : 
                           nota >= 5 && nota < 7 ? "Recuperação" : "Reprovado!";
        System.out.println(resultado);
    }
}
