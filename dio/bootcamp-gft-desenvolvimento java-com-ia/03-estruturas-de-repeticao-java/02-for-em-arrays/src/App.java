public class App {
    public static void main(String[] args) throws Exception {
        String alunos[] = { "Felipe", "Jonas", "Julia", "Marcos" };

        for (int x = 0; x < alunos.length; x++) {
            System.out.println("O Aluno no indice X = " + x + " é " + alunos[x]);
        }

        for(String aluno : alunos){
            System.out.println("O Nomer do aluno é: " + aluno);
        }
    }
}
