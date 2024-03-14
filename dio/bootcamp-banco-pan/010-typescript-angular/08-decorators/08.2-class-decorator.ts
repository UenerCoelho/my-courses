function apiVersion(version: string){
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: 'Uener'})
  }
}

@apiVersion('1.10')
class Api{}

const api = new Api()
console.log('Api Version: '+api.__version)
console.log("Nome do ADM "+api.__name)