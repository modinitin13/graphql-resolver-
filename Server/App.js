const express=require('express')
const mongoose=require('mongoose')
const {graphqlHTTP}=require('express-graphql')
const schema=require('./Schema/Schema')
const app=express();


mongoose.connect('mongodb+srv://nitin:nitinmodi@clusterbookstore.eckac.mongodb.net/<ClusterBookStore>?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('Connected to database')
})


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(4000,()=>{
    console.log('Now listening for port 4000')
})