const mongoos=require('mongoose')

const postschema=new mongoos.Schema({
title:String ,
image:String,
desc:String

})

export default mongoos.models.Post || mongoos.model('Post',postschema       )