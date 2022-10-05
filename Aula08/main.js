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

    console.log(janeiro)
    console.log(fevereiro)
    console.log(marco)
    console.log(abril)

    console.log(ano.meses);

    function addElement (parent, elementType, text) {
        const element = document.createElement(elementType);
        if (text !== "" && text !== undefined && text !== null && text !== 0) {
            element.innerText = text;
        }
        parent.appendChild(element);
    }

    class Tabela {
        constructor (className) {
            this.element = document.createElement('table');
            this.element.className = className;
        }

        addRow (type, values) {
            const tr = document.createElement('tr');
            for (const value of values) {
                const td = document.createElement(type);
                td.innerText = value;
                tr.appendChild(td);
            }
                this.element.appendChild(tr);
        }
    }

    function renderizar () {
        const app = document.getElementById("app");
        if (app.firstChild) {
            app.firstChild.remove();
        }
        const painel = document.createElement("div");
        const cores = ["red", "yellow", "green", "blue"];
        const grafico = document.createElement("div");
        grafico.className = "grafico";
        for (const mes of ano.meses) {
            const coluna = document.createElement("div");
            coluna.className = "grafico-coluna";
            const cor = document.createElement("div");
            cor.style.height = (mes.totalizador.saldo*100)/10000;
            cor.style.background = cores.pop();
            coluna.appendChild(cor);
            const nomeDoMes = document.createElement("div");
            nomeDoMes.className = "grafico-coluna-texto";
            nomeDoMes.innerText = mes.nome;
            coluna.appendChild(cor);
            coluna.appendChild(nomeDoMes);
            grafico.appendChild(coluna);
        }
        painel.appendChild(grafico);

        for (const mes of ano.meses) {
            addElement(painel, "h4", mes.nome);

            const tabelaLancamentos = new Tabela('tabela-lancamentos');
            tabelaLancamentos.addRow('th', ['Categoria', 'Valor']);
            for (const lancamento of mes.lancamentos) {
                tabelaLancamentos.addRow('td', [lancamento.categoria, formatarDinheiro(lancamento.getValorString())])
            }
            tabelaLancamentos.addRow('th', ['Juros', formatarDinheiro(mes.totalizador.juros)]);
            tabelaLancamentos.addRow('th', ['Rendimentos', formatarDinheiro(mes.totalizador.rendimentos)]);
            tabelaLancamentos.addRow('th', ['Total', formatarDinheiro(mes.totalizador.saldo)]);
            painel.appendChild(tabelaLancamentos.element);
        }
        app.appendChild(painel);
    }

    renderizar();

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

    const botao = document.getElementById("botao");
    botao.addEventListener("click", adicionarLancamento);

    const mesSelect = document.getElementById("mes");
    for (const mes of ano.meses) {
        const option = document.createElement("option");
        option.text = mes.nome;
        mesSelect.add(option)
    }