public class App {
    public static void main(String[] args) throws Exception {
        for (int numero = 1; numero <= 5; numero++) {
            if (numero == 3)
                // break;
                continue;

            System.out.println(numero);
        }
    }
}
