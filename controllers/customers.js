const customerRepository = require("../repositories/customers");

const getCustomers = async (req, res) => {
  const customers = await customerRepository.getAllCustomer();
  res.status(200).json({ data: customers });
};

const getCustomer = async (req, res) => {
  const id = req.params.id;
  const customer = await customerRepository.getCustomerById(id);
  res.status(200).json({ data: customer });
};

const createCustomer = async (req, res) => {
  const body = req.body
  const customer = await customerRepository.createCustomer(body);
  res.status(201).json({ data: customer });
};

const updateCustomer = async (req,res)=>{
    const{id} = req.params;
    const body = req.body;
    const updated = await customerRepository.updateCustomer(id,body)
    res.status(200).json({succes:true,data:{message:"succesfully updated",updated}})
}
const deleteCustomer = async (req,res)=>{
    const{id}=req.params
    const deleted = await customerRepository.deleteCustomer(id)
    if(!deleted){
        return res.status(400).json({msg:'customer not found'})
    }
    res.status(200).json({msg:'customer has been deleted',deleted})
}
module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
