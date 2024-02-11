import fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'

import cookie from "@fastify/cookie"
import { voteOnPoll } from './routes/vote-on-poll'


const app = fastify()

//ROUTES

app.register(cookie,{
    secret: "a98s8da8sd7a882qy2e93fij0fd9sd203h",
    hook: 'onRequest',
    
})

    //POLL
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)


//SERVER
app.listen({port: 3333}).then(() =>{
    console.log('HTTP server running')
})

