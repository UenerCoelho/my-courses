// MiddleWares Pattern (Chain of Responsibility)
const step1 = (ctx, next) => {
  ctx.value1 = 'midA'
  next()
}

const step2 = (ctx, next) => {
  ctx.value2 = 'midB'
  next()
}

const step3 = ctx => ctx.value3 = 'midC'

const exec = (ctx, ...middlewares) => {
  const execStep = indice => {
    middlewares && indice < middlewares.length && 
      middlewares[indice](ctx, () => execStep(indice +1))
  }
  execStep(0)
}

const ctx = {}
exec(ctx, step1, step2, step3)
console.log(ctx)

exec(ctx, step2, step1, step3)
console.log(ctx)

// Abaixo Chamará somente o passo 3, pois o mesmo não a função 'next'
exec(ctx, step3, step2, step1)
console.log(ctx)