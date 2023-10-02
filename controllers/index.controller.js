const controller = {}
const connection = require ('../dbConnection/connection.js')
const ContactsModel = require ('../models/clientes.model.js')

controller.index = async (req, res)=>{
    try{
        const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE'
        await connection()
        const allContacts = await ContactsModel.find()
        console.log(allContacts);
        console.log('CONNECTION OK');
        res.render('index',{title})
    }catch(err){
    console.error(err)
    }
}
module.exports = controller