package dio.primeiros_passos_spring_boot.aula_um;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyApp implements CommandLineRunner {
  @Autowired
  private Calculadora calculadora;

  @Override
  public void run(String... args) throws Exception {
    // TODO Auto-generated method stub
    System.out.println("O resultado é: " + calculadora.somar(2, 8));
  }

}
