const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({
    path: '/docker_deploy',
    secret: 'myHashSecret'
})
const { spawn } = require('child_process')
function run_cmd(cmd, args, callback) {
    const child = spawn(cmd,args)
    let resp = ''
    child.stdout.on('data',function(buffer){
        resp += buffer.toString()
    })
    child.stdout.on('end',function(){
        callback(resp)
    })
}


http.createServer((req, res) => {
    handler(req, res, err => {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777, () => {
    console.log('Webhook listen at 7777')
})

handler.on('error', err => {
    console.error('Error', err.message)
})

handler.on('push', event => {
    if(event.payload.ref === 'refs/heads/init'){
        console.log('Receive push ')
        run_cmd('sh',['./deploy-dev.sh'],function(text){
            console.log(text)
        })
    }
})