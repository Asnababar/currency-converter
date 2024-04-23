#! /usr/bin/env node

import inquirer from "inquirer";

const Currency: any = {
    USD: "1", // Base currency
    EUR: "0.91",
    GBP: "0.76",
    INR: "68.45",
    PKR: "280",
  };
  
  let user_answer = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      message: "Enter from Currency:",
      choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
      name: "to",
      type: "list",
      message: "Enter to Currency:",
      choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
      name: "amount",
      type: "number",
      message: "Enter Your Amount:",
    },
  ]);
  
  let fromAmount = Currency[user_answer.from]
  let toAmount = Currency[user_answer.to] 
  let amount = user_answer.amount
  let baseAmount = amount / fromAmount
  let converted = baseAmount * toAmount
  console.log(converted);
  
  