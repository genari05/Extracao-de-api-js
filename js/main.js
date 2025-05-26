function testeGet(url){
    let request = new XMLHttpRequest()
    request.openn( url,false)
    request.send()
    return request.responseText
}

function criarLinha(usuario){

}

function main(){
    console.log(testeGet("http://127.0.0.1:5000/alunos"))

}
main()