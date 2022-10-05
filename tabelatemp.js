const tabela = new Tabela('tabela-lancamentos');
        tabela.addRow('th', ['a', 10])
        tabela.addRow('td', ['b', 20])
        tabela.addRow('td', ['c', 30])
        painel.appendChild(tabela.element)