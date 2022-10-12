const saldoInicial = 0;
    const janeiro = new Mes('janeiro');
    janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000 ));
    janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000 ));
    janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200 ));
    janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100 ));
    janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100 ));
    janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 500 ));
    
    const fevereiro = new Mes('fevereiro')
    fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000 ));
    fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200 ));
    fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 250 ));
    fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100 ));
    fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100 ));
    fevereiro.adicionarLancamento(new Lancamento("Escola", "despesa", 400 ));
    
    const marco = new Mes('março')
    marco.adicionarLancamento(new Lancamento("Salário", "receita", 4000 ));
    marco.adicionarLancamento (new Lancamento("Aluguel", "despesa", 1200 ));
    marco.adicionarLancamento (new Lancamento("Conta de Luz", "despesa", 200 ));
    marco.adicionarLancamento (new Lancamento("Conta de Água", "despesa", 100 ));
    marco.adicionarLancamento (new Lancamento("Internet", "despesa", 200 ));
    marco.adicionarLancamento(new Lancamento("Escola", "despesa", 400 ));
    
    const abril = new Mes("abril");
    abril. adicionarLancamento(new Lancamento("Salário", "receita", 4000));

    const ano = new Ano () ;
    ano.adicionarMes(janeiro);
    ano.adicionarMes(fevereiro);
    ano.adicionarMes(marco);
    ano.adicionarMes(abril);
    ano.calcularSaldo();

    class Select {
        constructor (id) {
            this.element = document.createElement('select');
            this.element.id = id;
        }

        addOption (text) {
            const option = document.createElement('option');
            option.text = text;
            this.element.appendChild(option);
        }
    }

    class Input {
        constructor (id, type, placeholder) {
            this.element = document.createElement('input');
            this.element.id = id;
            this.element.type = type;
            this.element.placeholder = placeholder;
        }
    }

    class Button {
        constructor (id, text) {
            this.element = document.createElement('button');
            this.element.id = id;
            this.element.innerText = text;
        }

        addListener (fn) {
            this.element.addEventListener('click', fn);
        }
    }

    function adicionarLancamento() {
        const mes = document.getElementById("mes");
        const categoria = document.getElementById("categoria");
        const tipo = document.getElementById("tipo");
        const valor = document.getElementById("valor");
        ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value)))
        ano.calcularSaldo();
        renderizar();
        mes.value = ano.meses[0].nome;
        categoria.value = "";
        tipo.value = "receita";
        valor.value = "";
    }

    function renderizar () {
        const app = document.getElementById("app");
        if (app.firstChild) {
            app.firstChild.remove();
        }
        const painel = new Div();
        const titulo = new h4('Finanças Pessoais');
        const form = new Div('form-lancamento');
        painel.adicionarElementoFilho(titulo.element);
        const mesSelect = new Select('mes');
        const tipoSelect = new Select('tipo');
        for (const mes of ano.meses) {
            mesSelect.addOption(mes.nome);
        }
        tipoSelect.addOption('receita');
        tipoSelect.addOption('despesa');
        const categoriaInputText = new Input('categoria', 'text', 'Categoria');
        const valorInputNumber = new Input('valor', 'number', 'Valor');
        const adicionarButton = new Button('botao', 'Adicionar');
        adicionarButton.addListener(() => {
            adicionarLancamento();
        });
        form.adicionarElementoFilho(mesSelect.element);
        form.adicionarElementoFilho(tipoSelect.element);
        form.adicionarElementoFilho(categoriaInputText.element);
        form.adicionarElementoFilho(valorInputNumber.element);
        form.adicionarElementoFilho(adicionarButton.element);
        painel.adicionarElementoFilho(form.element);


        const grafico = new Grafico();
        for (const mes of ano.meses) {
            grafico.adicionarColuna(mes.totalizador.saldo, mes.nome)
        }
        painel.adicionarElementoFilho(grafico.element);
        for (const mes of ano.meses) {
            const nomeDoMes = new h4(mes.nome);
            painel.adicionarElementoFilho(nomeDoMes.element)
            const tabelaLancamentos = new Tabela('tabela-lancamentos');
            tabelaLancamentos.addRow('th', ['Categoria', 'Valor']);
            for (const lancamento of mes.lancamentos) {
                tabelaLancamentos.addRow('td', [lancamento.categoria, formatarDinheiro(lancamento.getValorString())])
            }
            tabelaLancamentos.addRow('th', ['Juros', formatarDinheiro(mes.totalizador.juros)]);
            tabelaLancamentos.addRow('th', ['Rendimentos', formatarDinheiro(mes.totalizador.rendimentos)]);
            tabelaLancamentos.addRow('th', ['Total', formatarDinheiro(mes.totalizador.saldo)]);
            painel.adicionarElementoFilho(tabelaLancamentos.element);
        }
        app.appendChild(painel.element);
    }
    renderizar();