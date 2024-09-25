import java.util.Random;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Discando... ");
        do {
            // Executando repetidas vexes até alguém atender!
            System.out.println("Telefone tocando...");
        }while(tocando());

        System.out.println("Alô!!!");

    }

    private static boolean tocando(){
        boolean atendeu = new Random().nextInt(3)==1;
        System.out.println("Atendeu? "+atendeu);
        // Retornando a negação de atendeu
        return !atendeu;
    }
}
