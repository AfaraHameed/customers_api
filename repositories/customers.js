const Customer = require("../models/customers");
const getAllCustomer = async () => {
  try {
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    return error;
  }
};

const getCustomerById = async (id) => {
  try {
    const customer = await Customer.findById(id);
    if (!customer) throw new Error("Customer not found!");
    return customer;
  } catch (error) {
    return error;
  }
};

const createCustomer = async (customer) => {
  const newCustomer = new Customer({
    name: customer.name,
    place: customer.place,
  });
  try {
    const savedData = await newCustomer.save();
    return savedData;
  } catch (error) {
    console.log(error);
  }
};

const updateCustomer = async (id, data) => {
  try {
    const updated = await Customer.findByIdAndUpdate(id, data);
    const updated_data = await Customer.findById(id);
    return updated_data;
  } catch (error) {
    return error;
  }
};

const deleteCustomer = async (id) => {
  try {
    const deleted = await Customer.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
