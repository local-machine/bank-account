function BankAccount(name, balance) {
  this.name = name,
  this.balance = balance
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

$(function () {
  $(".registerInput").submit(function(event) {
    event.preventDefault();

    var newName = $("#newName").val();
    var newDeposit = parseInt($("#newDeposit").val());

    var newAccount = new BankAccount(newName, newDeposit);

    console.log(newAccount.balance);
  })
})
